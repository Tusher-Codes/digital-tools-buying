import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d1527] text-white font-sans pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">

          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <h2 className="text-3xl font-bold mb-4 tracking-wide text-white">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-400 mb-6">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>

            <h3 className="text-base font-semibold mb-3 text-white">Social Links</h3>
            <div className="flex items-center gap-3">

              <a href="#" className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-[#0d1527] border border-transparent hover:bg-[#0d1527] hover:text-white hover:border-white transition-all duration-200">
                <FaInstagram className="text-base" />
              </a>

              <a href="#" className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-[#0d1527] border border-transparent hover:bg-[#0d1527] hover:text-white hover:border-white transition-all duration-200">
                <FaFacebookF className="text-sm" />
              </a>

              <a href="#" className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-[#0d1527] border border-transparent hover:bg-[#0d1527] hover:text-white hover:border-white transition-all duration-200">
                <FaXTwitter className="text-sm" />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 w-full my-4" />
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4 text-xs md:text-sm text-gray-500">
          <p> &copy; 2026 Digitools. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;