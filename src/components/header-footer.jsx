/* eslint-disable react/no-unknown-property */

const HeaderFooter = () => {
  return (
    <div>
      <header className="sticky top-0">
        {/* 
    navigation  */}
        <nav
          className="px-10 py-10 sm:py-5 sm:flex sm:items-center sm:justify-between"
          id="nav-bar"
        >
          {/* home-icon */}
          <div className="flex justify-between">
            <div className="flex gap-5 sm:gap-10 items-center">
              <a href="#" className="pb-2 sm:pb-0">
                {/* How to import img, place img folder to: public/asset/img */}
                <img
                  className="w-10 h-10 inline border rounded-full border-1 hover:border-2"
                  src="public/assets/img/home-icon.png"
                  alt="Fauzan-JM"
                />
              </a>
              <div
                className="text-grayLight sm:pt-1 pb-1 sm:pb-0"
                id="real-time"
              ></div>
            </div>
            {/* hamburger button */}
            <div
              className="sm:hidden inline-block text-grayLight hover:text-slate-50"
              id="burger-button"
            >
              <div id="burger-svg">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M7.95 11.95h32m-32 12h32m-32 12h32"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden" id="close-svg">
                <button className="w-full h-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* right navbar */}
          <ul
            className="text-grayLight sm:pt-2 sm:flex sm:items-center my-2 sm:my-0 sm:gap-10 z-10 sm:z-auto sm:static absolute bg-slate-800 sm:bg-transparent w-full sm:w-auto left-0 top-20 text-center opacity-0 sm:opacity-100"
            id="nav-options"
          >
            <li className="my-10 sm:my-0">
              <a
                href="#quiz-1"
                className="text-xl hover:text-slate-50 hover:font-bold"
              >
                Quiz 1<br />
                <span className="sm:hidden">(Easy)</span>
              </a>
            </li>
            <li className="mb-10 sm:my-0">
              <a
                href="#quiz-2"
                className="text-xl hover:text-slate-50 hover:font-bold"
              >
                Quiz 2<br />
                <span className="sm:hidden">(Hard? nah, Easy)</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderFooter;

export const Footer = () => {
  return (
    <footer className="w-screen">
      <div className="flex bg-blackSoft justify-between">
        <div className="flex px-10 py-5 items-center text-grayLight">
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
        <div className="flex pr-10 gap-3 sm:gap-10 items-center py-5">
          <a href="https://www.instagram.com/fauzanjumdinhar/">
            <img
              className="w-8 h-8 md:w-10 md:h-10"
              src="public/assets/img/instagram.png"
              alt="instagram-zan"
            />
          </a>
          <a href="https://www.linkedin.com/in/fauzan-jumdinhar-marsha/">
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              src="public/assets/img/linkedin.png"
              alt="linkedin-zan"
            />
          </a>
          <a href="https://github.com/Zan-14">
            <img
              className="w-8 h-8 md:w-10 md:h-10"
              src="public/assets/img/github.png"
              alt="github-zan"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
