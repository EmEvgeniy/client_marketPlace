"use client";
import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import classes from "./sliderCard.module.css";
import icon from "../../../public/Vector.svg";
import user from "../../../public/userIcon.svg";
import stars from "../../../public/stars.svg";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface CardData {
	img: StaticImageData;
	title: string;
	price: string;
	days: string;
	stars: string;
	countries: string;
	seats: string;
}

interface SliderCardCompProps {
	data: CardData;
}

const SliderCard: FC<SliderCardCompProps> = ({ data }) => {
	const [active, setActive] = useState<boolean>(false);
	return (
		<div
			className={classes.SliderCard}
			onMouseOver={() => setActive(true)}
			onMouseLeave={() => setActive(false)}>
			<Image
				src={data.img}
				alt={data.title}
				width={0}
				height={0}
				style={{ width: "100%", height: "100%" }}
				className={classes.img_b}
			/>
			<div className={classes.top}>
				<span className={classes.gurantee}>Tour guaranteed</span>
				<span className={classes.heart}>
					<Image src={icon} alt='heart' width={20} height={20} />
				</span>
			</div>
			<div className={classes.bottom}>
				<div className={classes.bottom_top}>
					<Image src={user} alt='user' width={60} height={60} />
					<span>Sightseeing</span>
				</div>
				<p className={classes.title}>{data.title}</p>
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={
						active ? { opacity: 1, height: 100 } : { opacity: 0, height: 0 }
					}
					exit={{ opacity: 0, height: 0 }}
					transition={{ duration: 0.4 }}
					className={classes.details}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={active ? { opacity: 1 } : { opacity: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.1 }}
						className={classes.details_top}>
						<div className={classes.details_top_item}>
							<BsFillCalendar2DateFill />
							<span>{data.days}</span>
						</div>
						<div className={classes.details_top_item}>
							<MdLocationOn />
							<span>{data.seats}</span>
						</div>
						<div className={classes.details_top_item}>
							<FaGlobeAmericas />
							<span>{data.countries}</span>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={active ? { opacity: 1 } : { opacity: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.1 }}
						className={classes.details_bottom}>
						<div className={classes.details_bottom_item}>
							<Image src={stars} alt='start' width={100} height={0} />
							<span className={classes.stars}>{data.stars}</span>
						</div>
						<div className={classes.details_bottom_item}>
							<span>{data.price}</span>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default SliderCard;
