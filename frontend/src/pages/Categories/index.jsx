import { useEffect, useState } from "react";
import { ProductList } from "../../components/ProductList";
import { LandsAPI } from "../../services/lands";

import { ReactComponent as ChevronLeftSvg } from "../../assets/img/chevron-left.svg";
import { ReactComponent as LandSvg } from "../../assets/img/land.svg";
import { useParams, useNavigate } from "react-router-dom";

import "./styles.scss";
import { CategoriesAPI } from "../../services/categories";

export function Categories() {
  const [lands, setLands] = useState([]);
  const [category, setCategory] = useState({});

  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryId) {
      LandsAPI.filterByCategory(categoryId).then((response) =>
        setLands(response.data)
      );
      CategoriesAPI.getCategories().then((response) => {
        const selectedCategory = response.data.content.find(
          (categoryItem) => categoryItem.id === +categoryId
        );
        setCategory(selectedCategory);
      });
    }
  }, [categoryId]);

  return (
    <div className="home-container">
      <div
        className="metaverses-container__banner"
        style={{ backgroundImage: `url(${category?.imagemUrl})` }}
      ></div>

      <div className="metaverses-container__button-content">
        <button
          className="metaverses-container__button"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftSvg /> Voltar
        </button>
      </div>

      <h3 className="metaverses-container__title">
        {category?.name} <LandSvg />{" "}
      </h3>
      <div className="home-container__product-list-wrapper">
        <ProductList items={lands} />
      </div>
    </div>
  );
}
