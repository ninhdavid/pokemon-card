import styles from './popper.module.scss';

/* eslint-disable-next-line */
export interface PopperProps {
  children: React.ReactNode[];
  className: string;
}

export function Popper({ children, className, ...props }: PopperProps) {
  return (
    // <div className={`${styles['container']} ${styles[className]}`}>
    <div className={`${styles['container']} ${className}}`}>{children}</div>
  );
}

export default Popper;
