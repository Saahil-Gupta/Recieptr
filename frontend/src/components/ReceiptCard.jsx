import React from 'react';

export default function ReceiptCard({ receipt }) {
  const { store, amount, date, returnWindow, status } = receipt;
  const isExpired = status === 'Expired';

  return (
    <div className="bg-white rounded-lg p-5 shadow hover:shadow-md transition">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{store}</h2>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${isExpired ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}> 
          {isExpired ? 'Expired' : 'Valid'}
        </span>
      </div>
      <p className="text-gray-600 mb-1"><span className="font-medium">Amount:</span> {amount}</p>
      <p className="text-gray-600 mb-1"><span className="font-medium">Date:</span> {date}</p>
      <p className="text-gray-600"><span className="font-medium">Return by:</span> {returnWindow}</p>
    </div>
    );
}