import { create } from "zustand";

interface LandState {
	lang: string;
	loading: boolean;
	error: null | string;
	langs: string[];
	changeLang: (lang: string) => void;
}
interface CurrencyState {
	currency: string;
	loading: boolean;
	error: null | string;
	currencyMenu: string[];
	changeCurrency: (lang: string) => void;
}

export const useLand = create<LandState>((set) => ({
	lang: "EN",
	loading: false,
	error: null,
	langs: ["EN", "RU"],
	changeLang: (lang) =>
		set((state) => ({
			...state,
			lang: lang,
		})),
}));
export const useCurrency = create<CurrencyState>((set) => ({
	currency: "USD",
	loading: false,
	error: null,
	currencyMenu: ["USD", "RUB"],
	changeCurrency: (currency) =>
		set((state) => ({
			...state,
			currency: currency,
		})),
}))
