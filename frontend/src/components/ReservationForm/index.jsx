import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FaClock, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDateRange } from "../../context/DateRangeProvider";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useAuth } from "../../providers/AuthProvider";
import { reservations } from "../../services/reservations";
import { UsersAPI } from "../../services/users";
import { DatePicker } from "../DatePicker";
import "./styles.scss";

export function ReservationForm({
  land = {
    id: 0,
    name: "",
    category: { name: "" },
    localizationX: "",
    localizationY: "",
    metaverse: { name: "" },
    images: [{ url: "" }],
    reservation: [{ dateInitial: "", dateFinal: "" }],
  },
}) {
  const { startDate, endDate, setStartDate, setEndDate } = useDateRange();
  const [windowWidth] = useWindowSize();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [user, setUser] = useState({
    id: 0,
    name: "",
    lastName: "",
    email: "",
  });
  const [cpf, setCpf] = useState("");

  let excludeDateIntervals;

  if (land.reservation.length > 0 && land.reservation[0].dateInitial) {
    excludeDateIntervals = land.reservation.map((reservation) => {
      return { start: new Date(reservation.dateInitial), end: new Date(reservation.dateFinal) };
    });
  }

  console.log(excludeDateIntervals)

  useEffect(() => {
    UsersAPI.fetchMe(token).then((res) => setUser(res.data));
  }, [token]);

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (land.id === 0 || user.id === 0) return;
    if (!cpf) return alert("O campo de CPF é obrigatório.");

    const data = {
      dateInitial: dayjs(startDate).format("YYYY-MM-DDTHH:MM:ss"),
      dateFinal: dayjs(endDate).format("YYYY-MM-DDTHH:MM:ss"),
      user: {
        id: user.id,
      },
      land: {
        id: land.id,
      },
    };

    reservations
      .makeReservation(token, data)
      .then(() => {
        navigate("/success");
      })
      .catch(() => {
        alert("Houve um erro durante o processamento da reserva.");
      });
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <section className="reservation-personal-data">
        <h3>Complete seus dados</h3>
        <div className="reservation-personal-data__inputs">
          <div className="reservation-personal-data__inputs__input-wrapper">
            <label htmlFor="name">Nome</label>
            <input type="text" disabled name="name" value={user.name} />
          </div>
          <div className="reservation-personal-data__inputs__input-wrapper">
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" disabled name="lastName" value={user.lastName} />
          </div>
          <div className="reservation-personal-data__inputs__input-wrapper">
            <label htmlFor="email">E-mail</label>
            <input type="email" disabled name="email" value={user.email} />
          </div>
          <div className="reservation-personal-data__inputs__input-wrapper">
            <label htmlFor="name">CPF</label>
            <input type="text" name="cpf" onChange={handleCpfChange} />
          </div>
        </div>
      </section>
      <section className="reservation-date-range">
        <h3>Confirme sua data de reserva</h3>
        <DatePicker
          inline={true}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          monthsShown={windowWidth >= 768 ? 2 : 1}
          excludeDateIntervals={excludeDateIntervals}
        />
      </section>
      <section className="reservation-hour">
        <h3>Sobre o período de uso:</h3>
        <p>
          Seu terreno estará disponível para você das{" "}
          <span className="black">00:00</span> do dia de início de reserva até
          às <span className="black">23:59</span> da data de término.
        </p>
      </section>
      <section className="reservation-details">
        <h3>Detalhes da reserva</h3>
        <img src={land.images[0].url} alt="Imagem principal do terreno" />
        <p className="reservation-details__category">{land.category.name}</p>
        <p className="reservation-details__title">
          Land ({land.localizationX}, {land.localizationY})
        </p>
        <p className="reservation-details__metaverse">
          <FaMapMarkerAlt style={{ marginRight: "8px", fontSize: "18px" }} />
          {land.metaverse.name}
        </p>
        <div className="divider"></div>
        <div className="reservation-details__date">
          <p className="reservation-details__date__label">
            <FaClock style={{ marginRight: "8px", fontSize: "18px" }} />
            Check in
          </p>
          <p className="reservation-details__date__value">
            {startDate && dayjs(startDate).format("DD/MM/YYYY")}
          </p>
        </div>
        <div className="divider"></div>
        <div className="reservation-details__date">
          <p className="reservation-details__date__label">
            <FaRegClock style={{ marginRight: "8px", fontSize: "18px" }} />
            Check out
          </p>
          <p className="reservation-details__date__value">
            {endDate && dayjs(endDate).format("DD/MM/YYYY")}
          </p>
        </div>
        <div className="divider"></div>
        <button type="submit">Confirmar reserva</button>
      </section>
    </form>
  );
}
