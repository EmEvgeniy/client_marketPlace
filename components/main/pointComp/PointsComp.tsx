import Container from "@/components/UI/container/Container";
import classes from "./pointsComp.module.css";
import PointsTitle from "@/components/UI/pointsTitle/PointsTitle";
import icon from "../../../public/iconbg1.svg";
import icon2 from "../../../public/iconbg2.svg";
import icon3 from "../../../public/iconbg3.svg";
import icon4 from "../../../public/iconbg4.svg";
import Image from "next/image";

const list = [
	{ text: "Use the search and filters to find your ideal trip", icon: icon },
	{
		text: "Choose the best travel expert in the direction of travel",
		icon: icon2,
	},
	{
		text: "Check the details of the tour you like with a travel expert",
		icon: icon3,
	},
	{ text: "Book a tour through a secure system payment", icon: icon4 },
];

const PointsComp = () => {
	return (
		<div className={classes.PointsComp}>
			<Container>
				<div className={classes.inner}>
					<PointsTitle />
					<div className={classes.content}>
						{list.map((el, index) => (
							<div className={classes.content_item} key={index}>
								<Image src={el.icon} alt='icon' width={50} height={50} />
								<p>{el.text}</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default PointsComp;
