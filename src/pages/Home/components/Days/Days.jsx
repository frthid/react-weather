import React from "react";
import s from "./Days.module.scss";
import Card from "./Card";
import Tabs from "./Tabs";

function Days() {
  const days = [
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Завтра",
      day_info: "29 авг",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь и солнце",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
  ];

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day) => (
          <Card card_day={day} />
        ))}
      </div>
    </>
  );
}

export default Days;
