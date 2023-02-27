import styles from './menu.module.scss';

/* eslint-disable-next-line */
export interface MenuProps {}

export function Menu(props: MenuProps) {
  return <div className={styles['container']}></div>;
}

export default Menu;
