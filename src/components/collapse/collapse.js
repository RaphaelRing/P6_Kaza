import { useState, useRef, useEffect } from "react"; //import des hooks de base react
import Chevron from "../../assets/vectorBas.svg";
import './collapse.css'

export default function Deroulement (props) {
	const [toggle, setToggle] = useState(false); // je definis le state du toggle et le met a false par défaut
    const [heightEl, setHeightEl] = useState(); // je definis le state de la hauteur de l element deroulement
    const refHeight = useRef(); //récupère et conserve la valeur de la hauteur de l element déplié

    const toggleState = () => {
        //je définis la fonction toggleState qui modifie la valeur toggle au clic
        setToggle(!toggle);
    };

	useEffect(() => {
		if (toggle) {
			setHeightEl(`${refHeight.current.scrollHeight}px`);
		} else {
			setHeightEl("0px");
		}
	}, [toggle]);
	
	return (
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={`collapse__toggle ${toggle ? "toggle animated" : "toggle"}`}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}
