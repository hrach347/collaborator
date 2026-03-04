import NextImage from 'next/image';
import styles from "./styles.module.css"

export default function Image(props) {
  return <NextImage
    width="100"
    height="100"
    alt={props.alt | ""}
    className={styles.base} {...props} />;
}