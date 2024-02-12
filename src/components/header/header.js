import logo from "../../assets/logo.svg";
import Nav from "../navigation/navigation";
import './header.css'


export default function Header() {
	return (
		<header className="headerWrap">
			
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			
			<Nav className="nav-header" />
		</header>
	);
}