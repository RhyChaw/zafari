"use client";
import React, { useState, useEffect } from "react";
import supabase from "@/utils/supabaseClient";

export default function AdminPairUpload() {
  const [pairs, setPairs] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchPairs();
  }, []);

  const fetchPairs = async () => {
    const { data, error } = await supabase
      .from("before_after_pairs")
      .select("*")
      .order("idx", { ascending: true });

    if (error) console.error("Fetch error:", error);
    else setPairs(data);
  };

  const handleUpload = async (file, type, idx) => {
    const ext = file.name.split(".").pop();
    const filePath = `${type}_${idx}_${Date.now()}.${ext}`;

    const { error } = await supabase.storage
      .from("bapics")
      .upload(filePath, file, { upsert: true }); // allows overwriting


    if (error) {
      console.error(`Upload ${type} error:`, error?.message || JSON.stringify(error) || error);
      return null;
    }

    const { data: urlData } = supabase.storage
      .from("bapics")
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  };

  const handleNewRow = async () => {
    const newIdx = pairs.length > 0 ? pairs[pairs.length - 1].idx + 1 : 1;

    const { error } = await supabase
      .from("before_after_pairs")
      .insert([{ idx: newIdx, before_url: null, after_url: null }]);

    if (error) {
      console.error("Insert error:", error.message || error);
      alert("Insert failed: " + (error.message || "Check RLS or table config"));
    } else {
      fetchPairs(); // Refresh list
    }
  };

  const handleFileChange = async (e, idx, type) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const publicUrl = await handleUpload(file, type, idx);
    if (!publicUrl) return;

    const update =
      type === "before" ? { before_url: publicUrl } : { after_url: publicUrl };

    const { error } = await supabase
      .from("before_after_pairs")
      .update(update)
      .eq("idx", idx);

    if (error) console.error("Update error:", error);
    else fetchPairs();

    setUploading(false);
  };

  const handleDelete = async (row) => {
    const pathsToDelete = [];

    if (row.before_url) {
      const beforePath = row.before_url.split("/bapics/")[1];
      if (beforePath) pathsToDelete.push(beforePath);
    }

    if (row.after_url) {
      const afterPath = row.after_url.split("/bapics/")[1];
      if (afterPath) pathsToDelete.push(afterPath);
    }

    if (pathsToDelete.length > 0) {
      const { error: deleteError } = await supabase.storage
        .from("bapics")
        .remove(pathsToDelete);

      if (deleteError) console.error("Storage delete error:", deleteError);
    }

    const { error } = await supabase
      .from("before_after_pairs")
      .delete()
      .eq("idx", row.idx);

    if (error) console.error("Delete row error:", error);
    else fetchPairs();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">🛠 Admin: Before & After Pairs</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        onClick={handleNewRow}
        disabled={uploading}
      >
        ➕ Add New Row
      </button>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Idx</th>
              <th className="p-2 border">Before</th>
              <th className="p-2 border">After</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pairs.map((row) => (
              <tr key={row.idx} className="border-t hover:bg-gray-50">
                <td className="p-2">{row.idx}</td>
                <td className="p-2 space-y-2">
                  {row.before_url && (
                    <img
                      src={row.before_url}
                      alt="Before"
                      className="w-24 mx-auto rounded"
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, row.idx, "before")}
                    disabled={uploading}
                    className="text-sm"
                  />
                </td>
                <td className="p-2 space-y-2">
                  {row.after_url && (
                    <img
                      src={row.after_url}
                      alt="After"
                      className="w-24 mx-auto rounded"
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, row.idx, "after")}
                    disabled={uploading}
                    className="text-sm"
                  />
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(row)}
                    disabled={uploading}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    ❌ Delete
                  </button>
                </td>
              </tr>
            ))}
            {pairs.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-gray-500">
                  No pairs uploaded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
