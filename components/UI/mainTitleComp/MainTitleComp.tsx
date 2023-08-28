"use client";
import { motion } from "framer-motion";

const MainTitleComp = () => {
	return (
		<motion.h1
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.2 }}>
			Author`s tours - new approach to <br /> unexplored travel routes
		</motion.h1>
	);
};

export default MainTitleComp;
