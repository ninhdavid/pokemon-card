import { useRef, useState } from 'react';
import LiveSearch from '../search/live-search/live-search';
import styles from './hero.module.scss';

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  const [searchValue, setSearchValue] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={styles['container']}>
      <header className="w-screen h-screen relative px-4 py-4">
        <h1>Chào mừng đến với cửa hàng thẻ Pokémon!</h1>
        <p className="py-4">
          Cùng chúng tôi tìm ra những Pokémon bạn yêu thích và sẵn sàng cho
          những cuộc chiến đấu với đối thủ mạnh!
        </p>
        {/* <form
          action=""
          className="flex border p-1 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[80%] mx-auto lg:mx-0"
        >
          <input
            type="text"
            ref={inputRef}
            placeholder="Nhập để tìm kiếm"
            className="grow bg-transparent outline-none"
          />
          <button title="submit" className="w-11 btn--form">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form> */}
        <LiveSearch />
      </header>
    </div>
  );
}

export default Hero;
