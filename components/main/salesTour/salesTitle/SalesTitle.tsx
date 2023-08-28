"use client";

import { useLand } from "@/store/store";

const SalesTitle = () => {
	const lang = useLand((state) => state.lang);
	const title = "TOURS WITH DISCOUNT";
	const title2 = "ТУРЫ СО СКИДКОЙ";
	return <h3>{lang == "EN" ? `${title}` : `${title2}`}</h3>;
};

export default SalesTitle;
