import { FC } from "react";
import classes from "./mainHero.module.css";
import Container from "@/components/UI/container/Container";
import SliderBackground from "@/components/UI/sliderBackgroud/SliderBackground";
import SearchComp from "@/components/UI/searchComp/SearchComp";
import BenefitsComp from "@/components/UI/benefitsComp/BenefitsComp";
import MainTitleComp from "@/components/UI/mainTitleComp/MainTitleComp";

const MainHero: FC = () => {
	return (
		<div className={classes.MainHer}>
			<SliderBackground />
			<Container>
				<div className={classes.inner}>
					<MainTitleComp />
					<SearchComp />
					<BenefitsComp />
				</div>
			</Container>
		</div>
	);
};

export default MainHero;
