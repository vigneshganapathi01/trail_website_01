
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-bold text-2xl bg-gradient-to-r from-violet-DEFAULT to-darkblue-DEFAULT text-transparent bg-clip-text">
                InfoGraphix
              </span>
            </Link>
            <p className="text-gray-600 max-w-xs">
              Create beautiful infographic presentations that capture your audience's attention.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-violet-DEFAULT">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-DEFAULT">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-DEFAULT">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-DEFAULT">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/templates" className="text-gray-600 hover:text-violet-DEFAULT">Templates</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-violet-DEFAULT">Pricing</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-violet-DEFAULT">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-violet-DEFAULT">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/pitch-decks" className="text-gray-600 hover:text-violet-DEFAULT">Pitch Decks</Link>
              </li>
              <li>
                <Link to="/category/marketing" className="text-gray-600 hover:text-violet-DEFAULT">Marketing</Link>
              </li>
              <li>
                <Link to="/category/business" className="text-gray-600 hover:text-violet-DEFAULT">Business</Link>
              </li>
              <li>
                <Link to="/category/education" className="text-gray-600 hover:text-violet-DEFAULT">Education</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2" /> 
                <a href="mailto:info@infographix.com" className="hover:text-violet-DEFAULT">info@storient.global.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} storient. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
