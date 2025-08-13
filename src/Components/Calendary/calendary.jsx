import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "./calendary.css";

const Calendary = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <div className="schedule-calendar">
      <h2>Consultar Programaciones</h2>
      <p>
        Ingresa una fecha para conocer qué día es la recolección de los residuos
        orgánicos, inorgánicos y peligrosos más cercana a tu lugar
      </p>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Selecciona día"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendary;
