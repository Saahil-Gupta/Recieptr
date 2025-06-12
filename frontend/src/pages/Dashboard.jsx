import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import UploadForm from '../components/UploadForm.jsx';
import ReceiptCard from '../components/ReceiptCard.jsx';

const dummyReceipts = [
  { id: 1, store: 'Amazon', amount: '$49.99', date: '2025-06-09', returnWindow: '2025-07-09', status: 'Valid' },
  { id: 2, store: 'Flipkart', amount: '₹999', date: '2025-05-20', returnWindow: '2025-06-20', status: 'Expired' },
];

export default function Dashboard() {
  const [receipts, setReceipts] = useState(dummyReceipts);
  const handleAdd = (newReceipt) => setReceipts([newReceipt, ...receipts]);

  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <UploadForm onAdd={handleAdd} />
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {receipts.map((r) => <ReceiptCard key={r.id} receipt={r} />)}
        </section>
      </main>
    </>
  );
}