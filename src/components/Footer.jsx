import React from 'react';

const Footer = () => {
    return (
<footer className=" bg-gradient-to-r from-green-50 to-green-100  p-10 border-t border-green-200">
<div className='flex flex-col md:flex-row justify-center gap-6 items-center'>
      <div>
    <h1 className='text-3xl font-bold text-green-700'> <span className="text-green-600">🍃 Green</span>Plate</h1>
    <p className="text-sm text-gray-600 mt-2">Savor Sustainability. Share Goodness.</p>
  </div>

  <div className="flex gap-6 ">
    <a className="link link-hover hover:text-green-700 ">About Us</a>
    <a className="link link-hover hover:text-green-700 ">Contact</a>
    <a className="link link-hover hover:text-green-700 ">Foods</a>
    <a className="link link-hover hover:text-green-700 ">Donates</a>
  </div>

  <div className="flex gap-6 mt-4">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        className="fill-current text-green-600 hover:text-green-700 transition-colors">
        <path d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
      </svg>
    </a>

    {/* X (Twitter new logo) */}
    <a
      href="https://twitter.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24"
        className="fill-current text-green-600 hover:text-green-700 transition-colors">
        <path d="M18.244 2H21l-7.384 8.457L21.5 22h-5.5l-4.265-5.892L6.794 22H3l7.832-8.96L2.75 2h5.5l3.895 5.347L18.244 2zM7.705 3.5H5.891l9.28 13h1.793l-9.26-13z"/>
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/@yourchannel"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        className="fill-current text-green-600 hover:text-green-700 transition-colors">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16.5v-9l7 4.5-7 4.5z"/>
      </svg>
    </a>
  </div>

  <div className="mt-4">
    <p className="text-gray-500 text-sm">
      2025 — All rights reserved by <span className="text-green-600 font-semibold">Israt Jaman</span>
    </p>
  </div>
</div>
</footer>

    );
};

export default Footer;