import { useEffect, useState } from "react";
import { CategoryList } from "../../components/CategoryList";
import { ProductList } from "../../components/ProductList";
import { SearchBlock } from "../../components/SearchBlock";
import { LandsAPI } from "../../services/lands";

import "./styles.scss";

export function Home() {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    LandsAPI.getLands().then((response) => setLands(response.data.content));
  }, []);

  return (
    <div className="home-container">
      <SearchBlock />
      <CategoryList title="Buscar por tipo de acomodação" />
      <div className="home-container__product-list-wrapper">
        <ProductList
          title="Recomendações"
          description="Descubra os terrenos mais desejados pelos usuários"
          items={lands}
        />
      </div>
    </div>
  );
}
