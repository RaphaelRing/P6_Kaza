import AboutBanner from "../../components/about_banner/about_banner";
import about_data from "../../data/about_data.json"; // j'ai créé un fichier JSON avec les données des collapses
import Deroulement from "../../components/collapse/collapse";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function About() {
	return (
		<>
		<Header />
			<AboutBanner />
			{about_data.map((rule, id) => (
				<Deroulement
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
			<Footer />
		</>
	);
}