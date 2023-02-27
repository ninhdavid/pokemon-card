import Hero from '../hero/hero';
import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <Hero />
    </div>
  );
}

export default Header;
