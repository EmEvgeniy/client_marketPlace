import MainHero from "@/components/main/mainHero/MainHero";
import styles from "./page.module.css";
import Insperation from "@/components/main/insperation/Insperation";
import PopularTour from "@/components/main/popularTour/PopularTour";
import PointsComp from "@/components/main/pointComp/PointsComp";
import CountryComp from "@/components/main/countryComp/CountryComp";
import SalesTour from "@/components/main/salesTour/SalesTour";

export default function Home() {
	return (
		<main className={styles.main}>
			<MainHero />
			<Insperation />
			<PopularTour />
			<PointsComp />
			<CountryComp />
			<SalesTour/>
		</main>
	);
}
