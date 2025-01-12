import "./style.css";
import { FC, ReactNode, useState } from "react";

interface props {
	componentOne: ReactNode;
	componentTwo: ReactNode;
}

export const Layout: FC<props> = ({ componentOne, componentTwo }) => {
	return (
		<div id="container">
			<section id="panelOne">{componentOne}</section>
			<section id="panelTwo">{componentTwo}</section>
		</div>
	);
};
