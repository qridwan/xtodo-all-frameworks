import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="credits">
          <p>&copy;2024 Qridwan. All rights reserved.</p>
          <p>
            Designed and Developed by{" "}
            <a target="_blank" href="https://qridwan.com" rel="noreferrer">
              Ridwan
            </a>
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/qridwan"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/qridwan"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://discord.com/users/qridwan"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
