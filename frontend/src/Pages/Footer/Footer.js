import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-black font-ubantu hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="www.google.com" className="hover:text-gray-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Feature 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Feature 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Feature 3
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;