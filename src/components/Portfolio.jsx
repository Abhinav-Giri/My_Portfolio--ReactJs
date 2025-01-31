import React from "react";
import whitelist_dapp from "../assets/portfolio/whitelist_dapp.png";
import contact from "../assets/portfolio/contact-manager.png";
import portfolio from "../assets/portfolio/portfolio.png";
import hospital_management from "../assets/portfolio/hospital_management.jpg";
import songs_playlist from "../assets/portfolio/songs_playlist.png";
import admin from "../assets/portfolio/admin-dashboard.png";
import search from "../assets/portfolio/Search_Movie.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      desc:"1. Portfolio Project",
      src: portfolio,
      website: "https://portfolio-abhinav-giri.vercel.app/",
      github: "https://github.com/Abhinav-Giri/portfolio"
    },
    {
      id:2,
      desc:"2. Search_Movie",
      src: search,
      website: "",
      github: "https://github.com/Abhinav-Giri/Search_Movie_Project"
    },
    
     {
      id: 3,
        desc:"3. Contact Manager --backend",
      src: contact,
      website: "",
      github: "https://github.com/Abhinav-Giri/Contact-Manager--backend"
     
    },
    {
      id: 4,
      desc:"4. Admin Dashboard",
      src: admin,
      website: "",
      github: "https://github.com/Abhinav-Giri/Admin-Dashboard"
    },
    {
      id: 5,
      desc:"5. Hospital Booking Management",
      src: hospital_management,
      website: "",
      github: "https://github.com/Abhinav-Giri/Hospital_Management--MERN"
    },
    {
      id: 6,
      desc:"5. Songs Playlist",
      src: songs_playlist,
      website: "https://whitelist-dapp-abhinav-giri.vercel.app/",
      github: "https://github.com/Abhinav-Giri/Whitelist-DApp"
    }
    {
      id: 7,
      desc:"5. Solidity Project",
      src: whitelist_dapp,
      website: "https://whitelist-dapp-abhinav-giri.vercel.app/",
      github: "https://github.com/Abhinav-Giri/Whitelist-DApp"
    }
  ];

  return (
    <div
      name="portfolio"
      className="w-full px-20 pt-20 text-white bg-gradient-to-b from-black to-gray-800 lg:px-0"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Some Self Projects
          </p>
          <p className="pt-5 pb-5">Explore my projects:</p>
        </div>

        <div className="grid gap-8 px-12 lg:grid-cols-2 sm:px-0">
          {portfolios.map(({ id, src, desc, website, github }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <div>
                <p className="font-bold text-center">{desc}</p>
              </div>
              <img
                src={src}
                alt=""
                className="duration-200 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {website &&   <a href={website} type="button" target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105">Demo</a>}
                <a href={github} type="button" target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
