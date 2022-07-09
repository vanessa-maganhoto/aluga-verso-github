import "./styles.scss";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ChevronLeftSvg } from "../../assets/img/chevron-left.svg";
import landSvg from "../../assets/img/land.svg";
import { ReservationForm } from "../../components/ReservationForm";
import { MdCategory } from "react-icons/md";




export function Reservation() {
  const [land, setLand] = useState();
  const { landId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`lands/${landId}`)
      .then((response) => {
        setLand(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [landId]);

  return (
    <div>
      <div className="reservation__header">
        <div className="reservation__container">
          <div className="container_item">
          <MdCategory className="landIcons__land" />
            <b>{land?.category.name}</b>
          </div>
          <div className="container_item">
            <img src={landSvg} alt="pilha de terrenos" />&nbsp;&nbsp;&nbsp;
            <b>Land&nbsp;({land?.localizationX},{land?.localizationY})</b>
          </div>
        </div>
        <div className="button-content">
          <button className="button" onClick={() => navigate(-1)}>
            <ChevronLeftSvg /> Voltar{" "}
          </button>
        </div>
      </div>

      <ReservationForm land={land} />

       <hr color="gray" />  
       
        <div className="title">
          <h1>Infomações adicionais: </h1>
        </div>
        <div className="product_details_container__reservation">      
          <div className="product_details__info">
            <h1>Regras do Aluguel:</h1>
            <p>Sabemos como é ser restringido por regras. Então, finalmente decidimos acabar com eles.
                Não há limites. Convidados ilimitados, opções ilimitadas.
                Crie o seu espaço da forma que imaginar, sem quaisquer restrições!
            </p>
          </div>
          <div className="product_details__info">
            <h1>Política de cancelamento:</h1>
            <p>
              Selecione as datas desejadas do aluguel para obter detalhes do
              cancelamento.
            </p>
          </div>
          <div className="product_details__info">
            <h1>Segurança:</h1>
            <p>
              Seus dados sempre estarão seguros e criptografados dentro das normas
              da LGPD.
            </p>

            <p>
              Proteção contra qualquer programa malicioso.</p>
        </div>   
      </div>
    </div>
  );
}
