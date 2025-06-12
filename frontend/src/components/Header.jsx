import React from 'react';

    export default function Header() {
    return (
        <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <h1 className="text-xl font-bold text-indigo-600">Receiptr</h1>
            <nav>
            <ul className="flex space-x-4 text-gray-600">
                <li className="hover:text-indigo-600 cursor-pointer">Home</li>
                <li className="hover:text-indigo-600 cursor-pointer">Settings</li>
            </ul>
            </nav>
        </div>
        </header>
    );
}