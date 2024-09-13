import React from "react";
import "./Form.css";
import emza from "../../assets/image/emza.png";
import etelaat from "../../assets/image/etrlaat.png";
import naft1 from "../../assets/image/naft1.png";
import { MainContext } from "../../context/MainContext";
import { useContext } from "react";
import Info from "./Info";
import Pelak from "./Pelak";
import Bak from "./Bak";

function Form() {
  const { information, date } = useContext(MainContext);
  const {
    username,
    border,
    identety,
    bak1,
    bak2,
    bak3,
    bak4,
    arze,
    teran,

    total,
  } = information;

  return (
    <div className="main-form-container">
      <div id="table-container" className="form-container">
        <div className="border-container">
          <div className="image-container">
            <div className="img">
              <img src={naft1} alt="" />
            </div>
          </div>

          <div className="company-name">شرکت ملی پخش فرآورده های نفتی</div>
          <div class="date-container">
            <div className="date">
              <div className="tarikhh">
                <p style={{ wordSpacing: "7px" }}>تاریخ :</p>
                {date && date.toString().split(" ", 1)}
              </div>
            </div>
            <div className="time">
              <div className="time1">
                <p style={{ wordSpacing: "7px" }}>ساعت :</p>
                {date && date.toString().split(" ").slice(1)}
              </div>
            </div>
          </div>
          <div className="info-container">
            <Info
              className={"info"}
              placeholder={"نام کاربر : "}
              value={username}
            />
            <Info
              className={"info"}
              placeholder={"نقطه مرزی : "}
              value={border ? border : "پرویزخان"}
            />

            <div className="info1">
              <div className="info1-bot">
                <p className="shenase" style={{ wordSpacing: "10px" }}>
                  شناسه :
                </p>
                <div className="info1-info">
                  <p className="khareji">{identety}</p>
                  <p className="tranship">{teran}</p>
                </div>
              </div>
            </div>
            <Pelak className={"info"} placeholder={"پلاک :"} />
          </div>
          <div className="gas-container">
            <div className="baks">
              <Bak name={"باک 1 :"} value={bak1} />
              <Bak name={"باک 2 :"} value={bak2} />
            </div>
            <div className="baks">
              <Bak name={"باک 3 :"} value={bak3} />
              <Bak name={"باک 4 :"} value={bak4} />
            </div>
            <div className="baks">
              <Bak name={"عرضه :"} value={arze} />
              <Bak
                name={"حجم کل :"}
                value={
                  total ? (
                    <p className="lit-style">
                      {` ${total}`} <span className="litr-span">Lit</span>
                    </p>
                  ) : (
                    "0"
                  )
                }
              />
            </div>
          </div>
          <div className="warning-container">
            <div className="etelaat" style={{ wordSpacing: "7px" }}>
              {information.etelaat
                ? "اطلاعات ارسال شد"
                : "خطا : اطلاعات ارسال نشد"}
            </div>
          </div>
          <div className="signatuare-container">
            <div className="sign-area">
              <div className="emza">مهر و امضا</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
