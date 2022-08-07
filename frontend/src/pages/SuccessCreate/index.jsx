import Confirm from "../../assets/img/confirm-logo.svg";
import Helmet from 'react-helmet';

import "./styles.scss";

export function SuccessCreate() {
  return (
    <div className="successCreate-container">
      <Helmet>
        <title>Sucesso | Alugaverso</title>
      </Helmet>
      <div className="successCreate-container__content">
        <img
          src={Confirm}
          alt="Checado"
          className="successCreate-container__content__checked"
        />
        <h1 className="successCreate-container__content__title">
        Terreno cadastrado com sucesso!
        </h1>
        <a href="/">
          <button className="successCreate-container__content__button">
            Página Inicial 
          </button>
        </a>
      </div>
    </div>
  );
}
