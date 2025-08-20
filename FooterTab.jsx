import React from 'react';
import footerLogo from '../assets/MGM-footer-img.png';

export default function Footer() {
  return (
    <footer className="relative bg-[#f9f6f6] text-[#333] py-6 text-[14px]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 relative">

        {/* Left: Logo and Contact Info */}
        <div className="flex flex-col items-start space-y-3">
          <img
            src={footerLogo}
            alt="MGM College logo"
            className="w-[260px] h-auto"
          />
          <p>📍 Kunjibettu, Udupi, Karnataka - 576106</p>
          <p>
            ✉️ <a href="mailto:principal_mgm@yahoo.com" className="text-[#0066cc] hover:underline">principal_mgm@yahoo.com</a>
          </p>
          <p>📞 0820-2520359, 0820-253041</p>

          {/* Social Icons */}
          <div className="flex text-[20px] text-[#0066cc] space-x-4 mt-2">
            <a href="https://www.instagram.com/mgm_journalism_" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/school/mgm-college-udupi/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://www.youtube.com/@MGM.Journalism" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" />
            </a>
          </div>
        </div>

        {/* Right: Centered and Slightly Upward */}
        <div className="w-full flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-14 text-center">
          <div className="space-y-2">
            <p>©2025 Mahatma Gandhi Memorial College, Udupi</p>
            <div className="flex flex-wrap justify-center gap-2 text-[13px]">
              <a href="#" className="hover:text-[#004080]">Terms and Conditions</a>
              <span className="text-[#999]">|</span>
              <a href="#" className="hover:text-[#004080]">Privacy Policy</a>
              <span className="text-[#999]">|</span>
              <a href="#" className="hover:text-[#004080]">Disclaimer</a>
            </div>
            <p>Developed By MSc Students <span className="text-red-500">❤️</span></p>
          </div>
        </div>

      </div>
    </footer>
  );
}
