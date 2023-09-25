import { Link } from "react-router-dom";

/* eslint-disable react/no-unknown-property */

const Header = () => {
  return (
    <header className="sticky top-0 bg-slate-600 bg-opacity-80">
      {/* navigation  */}
      <nav className="px-10 sm:py-5">
        {/* home-icon */}
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <a href="#home" className="pb-2 sm:pb-0">
              {/* How to import img, place img folder to: /asset/img */}
              <img
                className="w-10 h-10 inline border rounded-full border-1 hover:border-2"
                src="/assets/img/home-icon.png"
                alt="Fauzan-JM"
              />
            </a>
            <Link to={"/login"}>
              <button className="py-1 px-2 text-sm rounded-lg bg-slate-800 hover:bg-blue-600 text-white font-semibold">
                Logout
              </button>
            </Link>
            {/* right navbar */}
          </div>
          <div className="text-grayLight pt-2 items-center my-0 left-0 top-20 text-center">
            <p className="my-10 sm:my-0">
              <a
                href="#quiz"
                className="text-2xl hover:text-slate-50 hover:font-bold"
              >
                Quiz
              </a>
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

export const Footer = () => {
  return (
    <footer>
      <div className="bg-blackSoft">
        <div className="max-w-[1920px] flex justify-between mx-auto px-10">
          <div className="flex py-5 items-center text-grayLight">
            <svg
              className="inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23c.23.01.44.05.63.13c.2.09.38.21.52.36s.25.33.34.53s.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01s-.66-.5-1.08-.66s-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92s-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35s.72.69 1.2.91c.48.22 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63s.56-.58.74-.94s.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46s-.32.23-.52.3c-.19.07-.39.09-.6.1c-.36-.01-.66-.08-.89-.23c-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88s-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
              />
            </svg>
            <span className="text-xl md:text-4xl ">ontact me</span>
          </div>
          <div className="flex gap-3 sm:gap-10 items-center py-5">
            <a href="https://www.instagram.com/fauzanjumdinhar/">
              <img
                className="w-8 h-8 md:w-10 md:h-10"
                src="/assets/img/instagram.png"
                alt="instagram-zan"
              />
            </a>
            <a href="https://www.linkedin.com/in/fauzan-jumdinhar-marsha/">
              <img
                className="w-6 h-6 md:w-8 md:h-8"
                src="/assets/img/linkedin.png"
                alt="linkedin-zan"
              />
            </a>
            <a href="https://github.com/Zan-14">
              <img
                className="w-8 h-8 md:w-10 md:h-10"
                src="/assets/img/github.png"
                alt="github-zan"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
