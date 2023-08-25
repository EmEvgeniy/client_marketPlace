"use client";
import classes from "./auth.module.css";
import { useLand } from "@/store/store";
import Link from "next/link";

const Auth = () => {
	const lang = useLand((state) => state.lang);
	return (
		<div className={classes.auth}>
			<Link href={"/login"}>{lang === "EN" ? "Sign in" : "Вход"}</Link>
			<span />
			<Link href={"/registration"}>
				{lang === "EN" ? "Join in" : "Регистрация"}
			</Link>
		</div>
	);
};

export default Auth;
