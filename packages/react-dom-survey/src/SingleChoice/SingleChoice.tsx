import * as React from "react";
import styles from "./styles.css";

export type Props = { text: string };

const SingleChoice: React.FC<Props> = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export default SingleChoice;
