"use client";
import React, { FC, useState, KeyboardEvent, MouseEvent } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SortIcon from "@mui/icons-material/Sort";
import Link from "next/link";
import Lang from "../lang/Lang";
import { useLand } from "@/store/store";
import Currency from "../currency/Currency";
import Auth from "../auth/Auth";

interface MenuItem {
	title: string;
	link: string;
}

const AdaptiveMenu: FC = () => {
	const [state, setState] = useState<{ left: boolean }>({
		left: false,
	});
	const lang = useLand((state) => state.lang);
	const list1: MenuItem[] = [
		{ title: "Туры", link: "/trips" },
		{ title: "Организаторам", link: "/tour_organizers" },
		{ title: "Помощь", link: "help" },
	];
	const list2: MenuItem[] = [
		{ title: "Trips", link: "/trips" },
		{ title: "Tour organizers", link: "/tour_organizers" },
		{ title: "Help", link: "help" },
	];
	const toggleDrawer =
		(anchor: string, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as KeyboardEvent).key === "Tab" ||
					(event as KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const list = (anchor: string) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
			}}
			role='presentation'>
			<List>
				{lang === "RU"
					? list1.map((value: MenuItem, index: number) => (
							<ListItem
								key={index}
								disablePadding
								onClick={toggleDrawer(anchor, false)}
								onKeyDown={toggleDrawer(anchor, false)}>
								<Link href={value.link}>
									<ListItemButton>
										<ListItemText primary={value.title} />
									</ListItemButton>
								</Link>
							</ListItem>
					  ))
					: list2.map((value: MenuItem, index: number) => (
							<ListItem
								key={index}
								disablePadding
								onClick={toggleDrawer(anchor, false)}
								onKeyDown={toggleDrawer(anchor, false)}>
								<Link href={value.link}>
									<ListItemButton>
										<ListItemText primary={value.title} />
									</ListItemButton>
								</Link>
							</ListItem>
					  ))}
			</List>
			<List>
				<ListItem>
					<Auth/>
				</ListItem>
				<ListItem
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Lang />
					<Currency/>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<div>
			{(["left"] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<SortIcon
							fontSize='large'
							onClick={toggleDrawer(anchor, true)}
							sx={{ transform: "rotateX(180deg)", cursor: "pointer" }}
						/>
					</Box>
					<Drawer
						anchor={anchor as "left"}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default AdaptiveMenu;
