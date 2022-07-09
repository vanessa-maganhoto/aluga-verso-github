import Confirm from "../../assets/img/confirm-logo.svg";
import { ReactComponent as Confirmed } from "../../assets/img/confirm-button.svg";

import "./styles.scss";

export function Success() {
  return (
    <div className="success-container">
      <div className="success-container__content">
        <img
          src={Confirm}
          alt="Checado"
          className="success-container__content__checked"
        />
        <h1 className="success-container__content__title">
          Agradecemos a sua preferência!
        </h1>
        <p className="success-container__content__text">
          Sua reserva foi concluída com sucesso
        </p>
        <a href="/">
          <button className="success-container__content__button">
            Ok <Confirmed />
          </button>
        </a>
      </div>
    </div>
  );
}
