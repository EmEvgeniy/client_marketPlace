import Container from "@/components/UI/container/Container";
import classes from "./popularTour.module.css";
import TitlePopular from "./titlePopular/TitlePopular";
import SliderTours from "@/components/UI/sliderTours/SliderTours";

const PopularTour = () => {
	return (
		<div className={classes.PopularTour}>
			<Container>
				<div className={classes.inner}>
					<TitlePopular />
					<SliderTours />
				</div>
			</Container>
		</div>
	);
};

export default PopularTour;
