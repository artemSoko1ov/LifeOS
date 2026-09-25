import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={`${styles.button} ${className ?? ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
