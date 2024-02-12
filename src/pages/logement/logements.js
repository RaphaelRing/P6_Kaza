import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/carousselle/carousselle";
import Collapse from "../../components/collapse/collapse";
import Host from "../../components/users/users";
import Rate from "../../components/note/note";
import Tag from "../../components/tag/tag";
import axios from "axios";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './logement.css'

export default function FicheLogement() {
  const params = useParams();
  const navigate = useNavigate();

  const [pickedAppart, setPickedAppart] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/logements.json");
      const picked = res.data.find(({ id }) => id === params.id);
      setPickedAppart(picked);

      if (!picked) {
        navigate("/404", { state: { message: "Can't get data" } });
      }
    };
    getData();
    // eslint-disable-next-line
  }, [params.id, navigate]);

  if (!pickedAppart) {
    return null;
  }

  const slidePics = pickedAppart.pictures;
  const tags = pickedAppart.tags;
  const equipments = pickedAppart.equipments;
  const equip = equipments.map((item, index) => (
    <li key={index} className="equipList">
      {item}
    </li>
  ));

  return (
    <>
      <Header />
      <div className="fiche-container" key={params.id}>
        <Carrousel slides={slidePics} />
        <section className="hostInfo-container">
          <div className="title-tags-container">
            <div className="title-container redFont">
              <h1>{pickedAppart.title}</h1>
              <h3>{pickedAppart.location}</h3>
            </div>
            <div className="tags-container">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host
                hostName={pickedAppart.host.name}
                hostPic={pickedAppart.host.picture}
              />
            </div>
            <div className="rate-container">
              <Rate score={pickedAppart.rating} />
            </div>
          </div>
        </section>
        <div className="collapse-fiche-container">
          <Collapse
            aboutTitle="Description"
            aboutText={pickedAppart.description}
          />
          <Collapse aboutTitle="Équipements" aboutText={equip} />
        </div>
       
      </div>
	  <Footer />
    </>
  );
}
