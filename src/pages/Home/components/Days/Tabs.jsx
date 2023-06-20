import React from "react";
import s from "./Days.module.scss";

function Tabs() {
  const tabs = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div key={tab.value} className={s.tab + ' ' + s.active}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
}

export default Tabs;