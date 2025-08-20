import React from "react";
import { Link } from "react-router-dom";

function HeaderSection() {
  return (
    <>
      {/* Header (scrolls away) */}
      <header className="bg-gradient-to-r from-[#0052a5] to-[#1a75ff] px-6 py-4 flex items-center justify-between shadow-lg">
        {/* Left Emblem */}
        <div className="flex-shrink-0">
          <img src="/img/MGMLOGO.jpg" alt="College Emblem" className="h-[88px] w-auto drop-shadow-xl" />
        </div>

        {/* Center Text */}
        <div className="flex-1 text-center px-4">
          <h1 className="text-[#f3f3eb] font-bold text-[48px] font-[Georgia] drop-shadow-[1px_1px_3px_#00050a]">
            Mahatma Gandhi Memorial College Udupi
          </h1>
          <p className="text-[#e0e0e0] text-[18px] font-normal mt-[5px] drop-shadow-[1px_1px_2px_#000307] font-sans">
            (Accredited by NAAC with an ‘A+’ Grade (CGPA 3.36) in the IV Cycle of Accreditation)
          </p>
        </div>

        {/* Right Emblem */}
        <div className="flex-shrink-0">
          <img src="/img/75Am.jpg" alt="75 Years Emblem" className="h-[88px] w-auto drop-shadow-xl" />
        </div>
      </header>

      {/* Sticky Navigation (outside header) */}
      <nav className="sticky top-0 z-50 bg-[#003366] border-t-2 border-b-2 border-white w-full">
        <div className="flex items-center px-6">
          <div className="flex-1 pl-12">
            <ul className="flex justify-center list-none flex-wrap gap-2">
              <li>
                <Link to="/" className="block px-4 py-3 font-bold text-white hover:bg-white hover:text-[#004080] transition">
                  Home
                </Link>
              </li>

              {/* Dropdown Sections */}
              {[
                {
                  title: "About",
                  links: [
                    ["Vision & Mission", "/vision_mission"],
                    ["Principal", "/principal"],
                    ["Management", "/management"],
                    ["History", "/history"],
                    ["Image Gallery", "/gallery"],
                    ["Contact us", "/contact"],
                  ],
                },
                {
                  title: "Academics",
                  links: [
                    ["Courses", "#"],
                    ["Admissions", "#"],
                    ["Calendar and Magazine", "#"],
                    ["NAAC", "#"],
                    ["IQAC", "#"],
                    ["Scholarships", "#"],
                    ["Rules And Regulations", "#"],
                    ["Programme/Course", "#"],
                  ],
                },
                {
                  title: "Faculty and Campus",
                  links: [
                    ["Department", "#"],
                    ["Library", "#"],
                    ["Museum", "#"],
                    ["Garden", "#"],
                    ["Campus Facilities", "#"],
                    ["Campus Blocks", "#"],
                    ["Campus Cells", "#"],
                  ],
                },
                {
                  title: "Cultural Centres",
                  links: [
                    ["RGPai Research Centre", "#"],
                    ["Yakshagana Kendra", "#"],
                    ["Regional Research Centre", "#"],
                  ],
                },
                {
                  title: "Activities",
                  links: [
                    ["Alumni", "#"],
                    ["NCC and NSS", "#"],
                    ["Clubs @ MGM", "#"],
                    ["Sports", "#"],
                    ["Events Calendar", "#"],
                    ["MGM: What is new?", "#"],
                  ],
                },
              ].map(({ title, links }) => (
                <li key={title} className="relative group">
                  <Link to="#" className="block px-4 py-3 font-bold text-white hover:bg-white hover:text-[#004080] transition">
                    {title}
                  </Link>
                  <ul className="absolute top-full left-0 bg-[#004080] min-w-[180px] shadow-md z-10 hidden group-hover:block">
                    {links.map(([label, link]) => (
                      <li key={label} className="border-b border-[#0059b3] last:border-b-0">
                        <Link
                          to={link}
                          className="block px-4 py-2 text-white font-normal text-left whitespace-nowrap hover:bg-white hover:text-[#003366] transition"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Now Button */}
          <Link
            to="/apply"
            className="font-semibold px-[16px] py-[6px] rounded-full shadow-md transition-all text-[14px] flex-shrink-0 z-20"
            style={{
              backgroundColor: '#FFD700',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#003366',
            }}
          >
            Apply Now
          </Link>
        </div>
      </nav>
    </>
  );
}

export default HeaderSection;