import {
  FaCalendarDay,
  FaChevronCircleRight,
  FaChevronCircleLeft,
} from "react-icons/fa";
import ReactDatePicker from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";
import { registerLocale } from "react-datepicker";

registerLocale("pt-BR", ptBR);

export function DatePicker({
  inline = false,
  monthsShown = 2,
  startDate,
  endDate,
  setStartDate = () => {},
  setEndDate = () => {},
  excludeDateIntervals = []
}) {

  const today = new Date();
  const tomorrow = new Date().setDate(today.getDate() + 1);

  const commomConfig = {
    className: "date-picker__inputs__input",
    monthsShown,
    showPopperArrow: false,
    showDisabledMonthNavigation: true,
    locale: "pt-BR",
    dateFormat: "dd/MM/yyyy",
    formatWeekDay: (nameOfDay) => nameOfDay.substring(0, 1).toUpperCase(),
    startDate: startDate,
    endDate: endDate,
    nextMonthButtonLabel: <FaChevronCircleRight />,
    previousMonthButtonLabel: <FaChevronCircleLeft />,
    excludeDateIntervals
  };

  if (inline) {
    return (
      <ReactDatePicker
        {...commomConfig}
        inline
        calendarClassName="inline"
        minDate={today}
        onChange={(dates) => {
          setStartDate(dates[0]);
          setEndDate(dates[1]);
        }}
        selectsRange
      />
    );
  }

  return (
    <div className="date-picker">
      <FaCalendarDay className="date-picker__icon" />
      <span className="date-picker__inputs">
        <ReactDatePicker
          {...commomConfig}
          placeholderText="Check-in"
          minDate={today}
          onChange={(date) => setStartDate(date)}
          selected={startDate}
          selectsStart
        />
        <span className="date-picker__inputs__divider">{">"}</span>
        <ReactDatePicker
          {...commomConfig}
          placeholderText="Check-out"
          minDate={startDate || tomorrow}
          onChange={(date) => setEndDate(date)}
          selected={endDate}
          selectsEnd
        />
      </span>
    </div>
  );
}
