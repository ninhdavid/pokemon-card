import styles from './default-layout.module.scss';

/* eslint-disable-next-line */
export interface DefaultLayoutProps {}

export function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultLayout!</h1>
    </div>
  );
}

export default DefaultLayout;
