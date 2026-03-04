import Link from "next/link"
import styles from "./styles.module.css"

export default function Menu() {
    return (
        <div className={styles.base}>
            <Link href="/"><span>/</span>Home</Link>
            <Link href="/sign-in"><span>/</span>Sign In</Link>
            <Link href="/dashboard"><span>/</span>Dashboard</Link>
        </div>
    )
}