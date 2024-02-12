import './banner.css'


export default function Banner(props) {
	/*
	Un composant banner est suffisant
	L'image peut être transmise dans les props.
	Le texte egalement.
	Pour afficher le texte, il suffit seulemtn de tester si la prop existe
	*/
	return (
		//<div className="banner-container">
		<div className={props.bannerClass}>
			<div className="banner-text-container">
				<div className="banner-text">{props.label ? props.label : ''}</div>
			</div>
		</div>
	);
}