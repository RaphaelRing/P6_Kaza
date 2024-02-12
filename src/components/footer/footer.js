import logo from "../../assets/footer-logo.png";
import './footer.css'

export default function Footer() {
	return (
		<footer className="foot-container">
			<img src={logo} alt="logo de kasa" />
			<p className="foot-text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}