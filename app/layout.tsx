import TheHeader from "@/components/TheHeader/TheHeader";
import 'normalize.css'
import "./globals.css";
import type { Metadata } from "next";
import TheFooter from "@/components/TheFooter/TheFooter";

export const metadata: Metadata = {
	title: "minzifa.com",
	description: "tour marketplace",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<TheHeader />
				<main>{children}</main>
				<TheFooter />
			</body>
		</html>
	);
}
