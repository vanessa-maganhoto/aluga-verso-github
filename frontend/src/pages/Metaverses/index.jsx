import { useEffect, useState } from "react";
import { ProductList } from "../../components/ProductList";
import { LandsAPI } from "../../services/lands";

import { ReactComponent as ChevronLeftSvg } from "../../assets/img/chevron-left.svg";
import { ReactComponent as LandSvg } from "../../assets/img/land.svg";
import { useParams, useNavigate } from "react-router-dom";

import "./styles.scss";
import { MetaversesAPI } from "../../services/metaverses";

export function Metaverses() {
  const [lands, setLands] = useState([]);
  const [metaverse, setMetaverse] = useState({});

  const { metaverseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (metaverseId) {
      LandsAPI.filterByMetaverse(metaverseId).then((response) =>
        setLands(response.data)
      );
      MetaversesAPI.getMetaverses().then((response) => {
        const selectedMetaverse = response.data.content.find(
          (metaverseItem) => metaverseItem.id === +metaverseId
        );
        setMetaverse(selectedMetaverse);
      });
    }
  }, [metaverseId]);

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
