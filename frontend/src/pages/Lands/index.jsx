import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { ProductList } from "../../components/ProductList";
import { LandsAPI } from "../../services/lands";
import { MetaversesAPI } from "../../services/metaverses";

import { ReactComponent as ChevronLeftSvg } from "../../assets/img/chevron-left.svg";
import { ReactComponent as LandSvg } from "../../assets/img/land.svg";

import "./styles.scss";

export function Lands() {
  const [lands, setLands] = useState([]);
  const [metaverse, setMetaverse] = useState({});
  const [searchParams] = useSearchParams();
  const [metaverseName, setMetaverseName] = useState("Decentraland");
  const [initialDate, setInitialDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setMetaverseName(searchParams.get("metaverseName"));
    setInitialDate(searchParams.get("initialDate"));
    setEndDate(searchParams.get("endDate"));
  }, [searchParams]);

  useEffect(() => {
    if (metaverseName && initialDate && endDate) {
      LandsAPI.filterByDatesAndMetaverse(metaverseName, initialDate, endDate).then(
        (response) => setLands(response.data)
      );

      MetaversesAPI.getMetaverses().then((response) => {
        const selectedMetaverse = response.data.content.find(
          (metaverseItem) => metaverseItem.name === metaverseName
        );
        setMetaverse(selectedMetaverse);
      });
    }
  }, [metaverseName, initialDate, endDate]);

  return (
    <div className="home-container">
      <div className="metaverses-container__banner">
        <img src={metaverse?.imagemUrl} alt={metaverse?.name} />
      </div>

      <div className="metaverses-container__button-content">
        <button
          className="metaverses-container__button"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftSvg /> Voltar
        </button>
      </div>

      <h3 className="metaverses-container__title">
        Terrenos disponíveis <LandSvg />{" "}
      </h3>
      <div className="home-container__product-list-wrapper">
        <ProductList items={lands} />
      </div>
    </div>
  );
}
