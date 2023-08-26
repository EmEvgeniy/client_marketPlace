import MainHero from "@/components/main/mainHero/MainHero";
import styles from "./page.module.css";
import Insperation from "@/components/main/insperation/Insperation";


export default function Home() {
	return (
		<main className={styles.main}>
			<MainHero />
      <Insperation/>
		</main>
	);
}
