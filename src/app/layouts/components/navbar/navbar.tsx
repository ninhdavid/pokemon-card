import { useState } from 'react';

import styles from './navbar.module.scss';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const [isShowNav, setIsShowNav] = useState(false);

  const toggleShowNav = () => {
    setIsShowNav((isShowNav) => !isShowNav);
  };

  return (
    <div className={styles['container']}>
      <nav className="flex justify-between items-center h-20 px-4 static top-0 left-0 z-10 w-full text-white bg-transparent">
        <div
          id="home"
          // style={{ backgroundImage: `url(${bg})` }}
        >
          <h1>Pokemon</h1>
        </div>
        <ul className="hidden md:flex">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Product</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
        <div className="hidden md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        {!isShowNav && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 md:hidden"
            onClick={toggleShowNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            ></path>
          </svg>
        )}
        {isShowNav && (
          <div
            className="md:hidden absolute z-10 top-0 left-0 w-full bg-slate-100
          text-black px-4 py-6"
          >
            <div className="flex justify-between">
              <h1>Pokemon</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={toggleShowNav}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <ul className=" mb-4">
              <li className="border-b-2 border-b-gray-600">
                <a href="/#">Home</a>
              </li>
              <li className="border-b-2 border-b-gray-600">
                <a href="/#">Product</a>
              </li>
              <li className="border-b-2 border-b-gray-600">
                <a href="/#">Contact</a>
              </li>
              <li className="border-b-2 border-b-gray-600">
                <a href="/#">Login</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
