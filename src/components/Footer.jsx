// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900  ">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">

        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-2">🌐 DisasterAlert</h2>
          <p className="text-gray-600">
            Real-Time Disaster Alert System providing timely information to keep you informed and safe during emergencies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2 text-blue-600">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Live Map</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Emergency Resources</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2 text-blue-600">Contact Us</h3>
          <ul className="space-y-1 text-gray-600">
            <li>📧 support@disasteralert.com</li>
            <li>📞 +1 (800) 123-4567</li>
            <li>📍 123 Safety Lane, Secure City</li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-100">
        © 2025 DisasterAlert System. All rights reserved .
      </div>
    </footer>
  );
}

export default Footer;
