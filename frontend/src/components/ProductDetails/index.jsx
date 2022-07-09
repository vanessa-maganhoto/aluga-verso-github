import "./styles.scss";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { AvailableDatesBlock } from "../AvailableDatesBlock";
import { ReactComponent as ChevronLeftSvg } from "../../assets/img/chevron-left.svg";
import { MdCategory } from "react-icons/md";
import landSvg from "../../assets/img/land.svg";
import vectorSvg from "../../assets/img/vector.svg";
import segurancaSvg from "../../assets/img/seguranca.svg";
import localizadorSvg from "../../assets/img/localizador.svg";

export function ProductDetails() {
  const [land, setLand] = useState();
  const [images, setImages] = useState([]);
  const { landId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`lands/${landId}`)
      .then((response) => {
        setLand(response.data);
        setImages(response.data.images);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [landId]);

  return (
    <div>
      <div className="product_details">
        <div className="product_details__container">
          <div className="container_item">
            <img
              className="landIcons__land"
              src={landSvg}
              alt="logo de pilha"
            />{" "}
            <b>
              Land&nbsp;({land?.localizationX},{land?.localizationY})
            </b>
          </div>
          <div className="container_item">
            <MdCategory className="landIcons__land" />
            <b>{land?.category.name}</b>
          </div>
          <div className="container_item">
            <img
              className="landIcons__localizador"
              src={localizadorSvg}
              alt="logo de pilha"
            />
            <b>{land?.metaverse.name}</b>
          </div>
        </div>
        <div className="button__view">
          <button className="button" onClick={() => navigate(-1)}>
            <ChevronLeftSvg /> Voltar
          </button>
        </div>
      </div>

      <div className="product_details__images">
        
        { images?.map((image, i) => {
          if (i > 4) return '';
          else return (
            <div className={"item item" + (i + 1)}>
            <img
              src={image.url}
              className="product_details__img"
              alt=""
            />
          </div>
          );
        }) }
      </div>

      {/*<div className="button__view">
        <button className="view">
          <b>Ver Mais</b>
        </button>
      </div>*/}

      <div className="product_details__description">
        <h2>Descrição do Terreno:</h2>
        <p>{land?.description}</p>
      </div>
      <hr color="gray" />
      <div className="product_details__caracteristicas">
        <h2>Características:</h2>
        {land?.attributes.map((attribute) => (
          <div key={attribute.id} className="product-details__attribute">
            <img
              className="product-details__attribute__icon"
              src={attribute.icon}
              alt="icon"
            />
            <span className="product-details__attribute__name">
              {attribute.name}
            </span>
          </div>
        ))}
      </div>

      <hr color="gray" />

      <div className="product_details__date">
        <AvailableDatesBlock
          landId={land?.id}
          landPrice={land?.price}
          reservations={land?.reservation}
        />
      </div>

      <hr color="gray" />

      <div className="product_details__container">
        <div className="layOut">
          <div className="product_details__regra">
            <h1>Regras do Aluguel:</h1>
            <p>
              Sabemos como é ser restringido por regras. Então, finalmente
              decidimos acabar com elas. Não há limites. Convidados ilimitados,
              opções ilimitadas. Crie o seu espaço da forma que imaginar, sem
              quaisquer restrições!
            </p>
          </div>

          <div className="product_details__politica">
            <h1>Política de cancelamento:</h1>
            <p>
              Selecione as datas desejadas do aluguel para obter detalhes do
              cancelamento.
            </p>
          </div>
        </div>

        <div className="product_details__segurança">
          <h1>Segurança:</h1>
          <p>
            <img
              className="landIcons__land__seguranca"
              src={segurancaSvg}
              alt="logo de spyware"
            />
            Seus dados sempre estarão seguros e criptografados dentro das normas
            da LGPD.
          </p>

          <p>
            <img
              className="landIcons__land__seguranca"
              src={vectorSvg}
              alt="logo de escudo"
            />
            Proteção contra qualquer programa malicioso.
          </p>
        </div>
      </div>
      <hr color="gray" />

      <div className="product_details__busca">
        <p>Não encontrou o terreno que gostaria?</p>
        <br />
        <br />
        <button className="btn_down">Continuar pesquisando</button>
      </div>
    </div>
  );
}
