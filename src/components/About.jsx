import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full px-20 pt-20 text-white bg-gradient-to-b from-gray-800 to-black lg:px-0"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-5">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About Me
          </p>
          
        </div>
        <p className="text-xl">
         I am Abhinav Giri, a Software Engineer with nearly 3 years of experience working in dynamic and collaborative environments. I specialize in React.js, JavaScript, TypeScript, HTML, and CSS, with strong knowledge of the MERN stack, MySQL, Git, and Docker. My dedication to continuous learning drives my passion for advancing my career in software development.
        </p>
        
{/*         <p className="text-xl">
          My experience spans both front-end and back-end development, including building scalable web applications, optimizing user interfaces, and ensuring security and performance. You may please consider this if I get fit into any role.
        </p> */}
      </div>
    </div>
  );
};

export default About;
