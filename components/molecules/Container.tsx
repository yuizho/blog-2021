import React, { FC } from 'react';
import styles from './Container.module.css';

type Props = {
  children: React.ReactNode;
};

const Container: FC<Props> = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
