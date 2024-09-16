import React, { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import "./Input.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import TimePicker from "react-multi-date-picker/plugins/analog_time_picker";

import { InputContext } from "../../context/InputContext";
import persian_en from "react-date-object/locales/persian_en";

import Input from "./Input";

function Inputs() {
  const { information, setInformation, date, setDate } =
    useContext(MainContext);

  const handelInput = (e) => {
    const value = e.target.value;

    setInformation({
      ...information,
      [e.target.name]: value,
    });
  };

  const [w, setW] = useState();
  window.addEventListener("resize", handleResize);
  function handleResize() {
    setW(window.innerWidth);
  }

  const handelEtelaatChange = (e) => {
    if (e.target.checked) {
      setInformation({
        ...information,
        [e.target.name]: 1,
      });
    } else {
      setInformation({
        ...information,
        [e.target.name]: 0,
      });
    }
  };
  const handelPelakCheckChange = (e) => {
    if (e.target.checked) {
      setInformation({
        ...information,
        [e.target.name]: 1,
      });
    } else {
      setInformation({
        ...information,
        [e.target.name]: 0,
      });
    }
  };
  // useEffect(() => {
  //   function handleResize() {
  //     setW(window.innerWidth);
  //   }

  //   window.addEventListener("resize", handleResize);
  // }, [w]);
  const style =
    w < 680
      ? {
          height: "30px",
          width: "270px",
        }
      : {
          width: "20vw",
          height: "25px",
        };

  return (
    <InputContext.Provider value={{ handelInput, information }}>
      <div className="input-container">
        <div className="info-input">
          <form className="form-group" action="">
            <Input
              name={"username"}
              placeholder={"نام کاربری:"}
              type={"text"}
              className={"inpute"}
            />
            <Input
              name={"border"}
              placeholder={" نقطه مرزی"}
              type={"text"}
              className={"inpute"}
            />
            <Input
              name={"identety"}
              placeholder={"شناسه"}
              type={"text"}
              className={"inpute"}
            />

            <div className="pelake">
              <Input
                name={"forth"}
                placeholder={"پلاک 1"}
                className={"pelak"}
              />
              <Input
                name={"iran"}
                placeholder={"ایران"}
                type={"text"}
                className={"pelak"}
              />
              <Input
                name={"third"}
                placeholder={"777"}
                type={"number"}
                className={"pelak"}
              />
              <Input
                name={"second"}
                placeholder={"ب"}
                type={"text"}
                className={"pelak"}
              />
              <Input
                name={"first"}
                placeholder={"11"}
                type={"number"}
                className={"pelak"}
              />
            </div>

            <div className="pelake">
              <Input
                name={"forth1"}
                placeholder={"پلاک 2"}
                className={"pelak"}
                value={information.forth1}
              />
              <Input
                name={"iran1"}
                placeholder={"ایران"}
                type={"text"}
                className={"pelak"}
                value={information.iran1}
              />
              <Input
                name={"third1"}
                placeholder={"777"}
                type={"number"}
                className={"pelak"}
                value={information.third1}
              />
              <Input
                name={"second1"}
                placeholder={"ب"}
                type={"text"}
                className={"pelak"}
                value={information.second1}
              />
              <Input
                name={"first1"}
                placeholder={"11"}
                type={"number"}
                className={"pelak"}
                value={information.first1}
              />
            </div>
            <Input
              name={"bak1"}
              placeholder={" باک 1"}
              type={"number"}
              className={"inpute"}
              value={information.bak1}
            />

            <Input
              name={"bak2"}
              placeholder={" باک 2"}
              type={"text"}
              className={"inpute"}
              value={information.bak2}
            />
            <Input
              name={"bak3"}
              placeholder={" باک 3"}
              type={"text"}
              className={"inpute"}
              value={information.bak3}
            />
            <Input
              name={"bak4"}
              placeholder={" باک 4"}
              type={"text"}
              className={"inpute"}
              value={information.bak4}
            />
            <Input
              name={"arze"}
              placeholder={" عرضه:"}
              type={"text"}
              className={"inpute"}
              value={information.arze}
            />
            <Input
              name={"total"}
              placeholder={" حجم کل:"}
              type={"text"}
              className={"inpute"}
              value={information.total}
            />

            <DatePicker
              placeholder={"تاریخ و ساعت"}
              style={style}
              value={date}
              format="YYYY/MM/DD HH:mm"
              plugins={[<TimePicker hideSeconds position="top" />]}
              onChange={setDate}
              calendar={persian}
              locale={persian_en}
              calendarPosition="bottom-righ"
            />
            <div className="checkbox-container">
              <span>اطلاعات</span>
              <input
                name="etelaat"
                value={information.etelaat}
                type="checkbox"
                onChange={handelEtelaatChange}
              />
              <span>پلاک</span>
              <input
                name="pelakCheck"
                value={information.pelakCheck}
                type="checkbox"
                onChange={handelPelakCheckChange}
              />
            </div>
          </form>
        </div>
      </div>
    </InputContext.Provider>
  );
}

export default Inputs;
