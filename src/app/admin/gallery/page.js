'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/app/navbar/page';
import supabase from '../../../utils/supabaseClient'; // Adjust path as needed

export default function page() {
  // State: images list [{ id, name, url }]
  const [images, setImages] = useState([]);
  const [originalImages, setOriginalImages] = useState([]); // For canceling changes
  const [sortConfig, setSortConfig] = useState({ key: 'sno', direction: 'asc' });
  const [deletedIds, setDeletedIds] = useState(new Set()); // IDs marked for deletion
  const [loading, setLoading] = useState(false);

  // Fetch images from Supabase
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const { data: files, error } = await supabase.storage.from('projects').list('uploads', { limit: 100 });
      if (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
        return;
      }

      const imagesWithUrls = files.map((file) => {
        const { data: { publicUrl } } = supabase.storage.from('projects').getPublicUrl(`uploads/${file.name}`);
        return { id: file.id, name: file.name, url: publicUrl };
      });

      setImages(imagesWithUrls);
      setOriginalImages(imagesWithUrls);
      setLoading(false);
    };

    fetchImages();
  }, []);

  // Sort images based on config
  const sortedImages = React.useMemo(() => {
    let sortableItems = [...images].filter(img => !deletedIds.has(img.id));
    if (sortConfig.key === 'sno') {
      // Sort by current order (which is by S.No) - ascending or descending
      if (sortConfig.direction === 'asc') {
        return sortableItems;
      } else {
        return sortableItems.reverse();
      }
    } else if (sortConfig.key === 'name') {
      return sortableItems.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [images, sortConfig, deletedIds]);

  // Change sorting
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  // Mark image for deletion (toggle)
  const toggleDelete = (id) => {
    const newDeletedIds = new Set(deletedIds);
    if (newDeletedIds.has(id)) newDeletedIds.delete(id);
    else newDeletedIds.add(id);
    setDeletedIds(newDeletedIds);
  };

  // Save changes: actually delete images from Supabase storage
  const saveChanges = async () => {
    if (deletedIds.size === 0) return alert('No changes to save!');

    setLoading(true);

    try {
      for (const id of deletedIds) {
        const img = images.find((i) => i.id === id);
        if (!img) continue;
        const { error } = await supabase.storage.from('projects').remove([`uploads/${img.name}`]);
        if (error) {
          console.error(`Error deleting ${img.name}:`, error);
          alert(`Failed to delete ${img.name}. Check console.`);
          setLoading(false);
          return;
        }
      }
      alert('Deleted selected images successfully!');
      // Refresh the list
      const newImages = images.filter((img) => !deletedIds.has(img.id));
      setImages(newImages);
      setOriginalImages(newImages);
      setDeletedIds(new Set());
    } catch (error) {
      console.error('Error deleting images:', error);
      alert('Something went wrong.');
    }

    setLoading(false);
  };

  // Cancel changes: reset deleted IDs
  const cancelChanges = () => {
    setDeletedIds(new Set());
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-8">Gallery Admin Page</h1>

        {loading && (
          <p className="mb-4 text-blue-600 font-semibold">Processing...</p>
        )}

        <div className="overflow-x-auto w-full max-w-5xl bg-white rounded shadow">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <th
                  className="py-3 px-6 cursor-pointer select-none"
                  onClick={() => requestSort('sno')}
                >
                  S.No {sortConfig.key === 'sno' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                </th>
                <th className="py-3 px-6 text-left">Image</th>
                <th
                  className="py-3 px-6 cursor-pointer select-none"
                  onClick={() => requestSort('name')}
                >
                  Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                </th>
                <th className="py-3 px-6">Delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {sortedImages.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center p-6 text-gray-500">
                    No images to display.
                  </td>
                </tr>
              ) : (
                sortedImages.map((img, idx) => (
                  <tr
                    key={img.id}
                    className={`border-b border-gray-200 hover:bg-gray-100 ${
                      deletedIds.has(img.id) ? 'bg-red-100 opacity-70' : ''
                    }`}
                  >
                    <td className="py-3 px-6 whitespace-nowrap text-center">{idx + 1}</td>
                    <td className="py-3 px-6 whitespace-nowrap">
                      <img
                        src={img.url}
                        alt={img.name}
                        className="w-20 h-14 object-cover rounded"
                      />
                    </td>
                    <td className="py-3 px-6 whitespace-nowrap max-w-xs overflow-hidden truncate">
                      {img.name}
                    </td>
                    <td className="py-3 px-6 whitespace-nowrap text-center">
                      <input
                        type="checkbox"
                        checked={deletedIds.has(img.id)}
                        onChange={() => toggleDelete(img.id)}
                        className="cursor-pointer w-5 h-5"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex space-x-4">
          <button
            disabled={deletedIds.size === 0 || loading}
            onClick={saveChanges}
            className={`px-6 py-3 rounded-md font-semibold text-white ${
              deletedIds.size === 0 || loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700'
            } transition-colors duration-300`}
          >
            Save Changes
          </button>
          <button
            disabled={deletedIds.size === 0 || loading}
            onClick={cancelChanges}
            className={`px-6 py-3 rounded-md font-semibold border border-gray-400 ${
              deletedIds.size === 0 || loading
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:border-gray-600 hover:text-gray-900'
            } transition-colors duration-300`}
          >
            Cancel Changes
          </button>
        </div>
      </div>
    </>
  );
}
