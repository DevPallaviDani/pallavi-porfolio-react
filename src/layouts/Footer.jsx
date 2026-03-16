import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="py-6 text-center bg-gray-100 dark:bg-gray-900"
      >
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Pallavi Bhalerao | Designed & Built
          with React & Tailwind CSS
        </p>
      </footer>
    </>
  );
};

export default Footer;
