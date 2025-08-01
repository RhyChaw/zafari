import React, { useState } from 'react';
import supabase from '../../utils/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

function AdminPairUpload() {
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleBeforeChange = (e) => {
    if (e.target.files[0]) setBeforeImage(e.target.files[0]);
  };

  const handleAfterChange = (e) => {
    if (e.target.files[0]) setAfterImage(e.target.files[0]);
  };

  const uploadPair = async () => {
    if (!beforeImage || !afterImage) {
      setMessage('Please select both Before and After images.');
      return;
    }

    setUploading(true);
    setMessage('');

    try {
      const pairId = uuidv4();

      // Generate unique file names for each upload
      const beforeFilename = `before-after/${pairId}_before_${beforeImage.name}`;
      const afterFilename = `before-after/${pairId}_after_${afterImage.name}`;

      // Upload Before image
      let { data: beforeData, error: beforeError } = await supabase.storage
        .from('projects')
        .upload(beforeFilename, beforeImage, { cacheControl: '3600', upsert: false });

      if (beforeError) throw beforeError;

      // Upload After image
      let { data: afterData, error: afterError } = await supabase.storage
        .from('projects')
        .upload(afterFilename, afterImage, { cacheControl: '3600', upsert: false });

      if (afterError) throw afterError;

      // Get public URLs
      const beforeUrl = supabase.storage.from('projects').getPublicUrl(beforeFilename).publicURL;
      const afterUrl = supabase.storage.from('projects').getPublicUrl(afterFilename).publicURL;

      // Insert into table
      const { error: insertError } = await supabase
        .from('before_after_pairs')
        .insert({
          id: pairId,
          before_image_url: beforeUrl,
          after_image_url: afterUrl,
          created_at: new Date()
        });

      if (insertError) throw insertError;

      setMessage('Pair uploaded successfully!');
      setBeforeImage(null);
      setAfterImage(null);
      // Reset file inputs visually by clearing the value
      document.getElementById('beforeInput').value = '';
      document.getElementById('afterInput').value = '';
    } catch (error) {
      setMessage('Error uploading pair: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8">Before and After Pair Pics Upload</h1>

      <div className="mb-4 w-full max-w-md">
        <label className="block mb-1 font-semibold">Before Image</label>
        <input
          id="beforeInput"
          type="file"
          accept="image/*"
          onChange={handleBeforeChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-6 w-full max-w-md">
        <label className="block mb-1 font-semibold">After Image</label>
        <input
          id="afterInput"
          type="file"
          accept="image/*"
          onChange={handleAfterChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        disabled={uploading}
        onClick={uploadPair}
        className={`px-6 py-3 rounded text-white font-semibold ${
          uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {uploading ? 'Uploading...' : 'Upload Pair'}
      </button>

      {message && (
        <p className={`mt-6 max-w-md text-center ${message.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default AdminPairUpload;
