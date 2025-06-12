import React, { useState } from 'react';

export default function UploadForm({ onAdd }) {
    const [file, setFile] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newReceipt = {
        id: Date.now(),
        store: 'New Store',
        amount: '$0.00',
        date: new Date().toISOString().split('T')[0],
        returnWindow: 'TBD',
        status: 'Valid',
        };
        onAdd(newReceipt);
        setFile(null);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white border border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
        <label className="flex-1 cursor-pointer">
            <input type="file" accept=".pdf,.png,.jpg" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
            <span className="text-gray-500">{file ? file.name : 'Click to select a receipt file (PDF/JPG/PNG)'}</span>
        </label>
        <button type="submit" disabled={!file} className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 disabled:opacity-50 transition">
            Upload
        </button>
        </form>
    );
}