import Link from "next/link";
import classes from "./logo.module.css";
import { motion } from "framer-motion";

export default function Logo() {
	return (
		<div className={classes.logo}>
			<Link href={"/"}>Logo</Link>
		</div>
	);
}
