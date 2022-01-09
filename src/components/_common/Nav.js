import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <nav className="header-gradient h-16 flex justify-between md:justify-start px-4 text-white">
        <div className="flex items-center">
          <a
            href="/"
            className="flex items-center px-2 -ml-2 rounded hover:bg-gray-200 hover:text-gray-800"
          >
            <img src="/bread.png" className="w-10 mr-2" alt="BitwiseBread Logo" />
            <span>BitwiseBread</span>
          </a>
        </div>

        <div className="flex items-center justify-center md:ml-20">
          <Link
            href="/python"
            className="px-2 md:px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Python
          </Link>
          <Link
            href="/javascript"
            className="px-2 md:px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-800"
          >
            JavaScript
          </Link>
        </div>
      </nav>
      {/*<style jsx>*/}
      {/*  {`*/}
      {/*    .header-gradient {*/}
      {/*      background: #f42 linear-gradient(to bottom right, #c09, #f42 85%);*/}
      {/*    }*/}
      {/*  `}*/}
      {/*</style>*/}
    </>
  );
}
