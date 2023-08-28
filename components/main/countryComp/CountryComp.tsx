import Container from "@/components/UI/container/Container";
import classes from "./countryComp.module.css";
import CountryTitle from "@/components/UI/countryTitle/CountryTitle";
import { Grid } from "@mui/material";
import img from "../../../public/Rectangle 427.png";
import img2 from "../../../public/Rectangle 428.png";
import img3 from "../../../public/Rectangle 433.png";
import img4 from "../../../public/Rectangle 434.png";
import img5 from "../../../public/Rectangle 435.png";
import Image from "next/image";

const CountryComp = () => {
	return (
		<div className={classes.CountryComp}>
			<Container>
				<div className={classes.inner}>
					<CountryTitle />
					<div className={classes.content}>
						<div className={classes.top}>
							<div className={classes.top_item}>
								<Image
									src={img}
									alt='bg'
									width={0}
									height={300}
									style={{ width: "100%", height: "100%" }}
								/>
								<p>Uzbekistan</p>
							</div>
							<div className={classes.top_item}>
								<Image
									src={img2}
									alt='bg'
									width={0}
									height={300}
									style={{ width: "100%", height: "100%" }}
								/>
								<p>Georgia</p>
							</div>
						</div>
						<div className={classes.bottom}>
							<div className={classes.bottom_item}>
								<Image
									src={img3}
									alt='bg'
									width={0}
									height={300}
									style={{ width: "100%", height: "100%" }}
								/>
								<p>Turkmenistan</p>
							</div>
							<div className={classes.bottom_item}>
								<Image
									src={img4}
									alt='bg'
									width={0}
									height={300}
									style={{ width: "100%", height: "100%" }}
								/>
								<p>USA</p>
							</div>
							<div className={classes.bottom_item}>
								<Image
									src={img5}
									alt='bg'
									width={0}
									height={300}
									style={{ width: "100%", height: "100%" }}
								/>
								<p>Maldives</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CountryComp;
