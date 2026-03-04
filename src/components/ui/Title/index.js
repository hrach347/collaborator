import styles from "./styles.module.css"

export default function Title({ children, ...props }) {
    return <h1 className={styles.base} {...props}>{children}</h1>
}