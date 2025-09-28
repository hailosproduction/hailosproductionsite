import React from 'react';
import '../index.css';

export default function Contact() {
  return (
    <div className="page-bg">
      <div className="content-container fade-in">
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <form className="flex flex-col gap-4 max-w-md">
          <input type="text" placeholder="Your Name" className="p-2 rounded-md" />
          <input type="email" placeholder="Your Email" className="p-2 rounded-md" />
          <textarea placeholder="Your Message" className="p-2 rounded-md"></textarea>
          <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded-md hover:glow">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}