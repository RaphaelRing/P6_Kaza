import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Card from "../../components/card/card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";



export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("/logements.json").then((res) => setData(res.data)); //requète AXIOS ici également pour prochaine utilisation API
	}, []);
	return (
        <div className="App">
			<Header />
            <Banner label="Chez vous,partout et ailleurs" bannerClass="banner-container" />
			<main>
			<div className="cards-container">
			
				{data.map((appart, index) => (
					<div className="card_logement" key={index}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
			
			</main>
            <Footer />
		</div>
	);
}