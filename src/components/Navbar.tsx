import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentUrl = window.location.pathname;
  const open =
    "md:hidden overflow-hidden bg-black fixed right-0 h-full top-0 bottom-0 w-4/5 transition-all duration-900 ease-in-out z-50";
  const close =
    "md:hidden overflow-hidden bg-black fixed right-0 h-full top-0 bottom-0 w-0 transition-all duration-900 ease-in-out z-50";
  const currentPage = "font-semibold text-white";
  const link = "text-white hover:scale-105";
  return (
    <header className="w-full h-28 font-roboto">
      <nav
        className="fixed w-full bg-black z-40 mx-auto px-4 py-2 sm:flex sm:items-center sm:justify-between"
        aria-label="navbar"
      >
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold" href="#">
            <img src="/logo.png" alt="Logo" className="h-24" />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="p-1 inline-flex justify-center items-center rounded-lg border border-gray-200 text-white shadow-sm hover:bg-gray-50"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block px-10">
          <div className="text-lg flex flex-col gap-5 mt-5 sm:flex-row sm:items-center justify-center sm:mt-0 sm:ps-5">
            <a
              className={currentUrl == "/" ? currentPage : link}
              href="/"
              aria-current="page"
            >
              Home
            </a>
            <a
              className={currentUrl == "/about" ? currentPage : link}
              href="/about"
            >
              About
            </a>
            <a className={currentUrl == "galery" ? currentPage : link} href="#">
              Galery
            </a>
          </div>
        </div>
      </nav>
      <div className={isOpen ? open : close}>
        <div className="text-right p-5">
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-white mt-5"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>
        <div className="text-white text-2xl font-semibold flex flex-col gap-6 pt-5 pl-10">
          <a className="" href="/">
            Home
          </a>
          <a className="" href="/about">
            About
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
