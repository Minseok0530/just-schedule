"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();
    // path 정리 예정
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    {/* {path === "/" ? ">>" : ""} */}
                    <Link href="/">Home</Link>
                </li>
                <li>
                    {/* {path === "/calender" ? ">>" : ""} */}
                    <Link href="/calender">Calender</Link>
                </li>
                <li>
                    {/* {path === "/groups" ? ">>" : ""} */}
                    <Link href="/groups">Groups</Link>
                </li>
                <li>
                    {/* {path === "/notice" ? ">>" : ""} */}
                    <Link href="/notice">Notice</Link>
                </li>
            </ul>
        </nav>
    )
}