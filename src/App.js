import { useState } from "react";
import Form from "./components/form/Form";
import Inputs from "./components/input/Inputs";
import html2canvas from "html2canvas";
import { MainContext } from "./context/MainContext";
import LogIn from "./components/login/LogIn";
import { useEffect } from "react";
import jsPDF from "jspdf";

function App() {
  const [information, setInformation] = useState({
    username: "",
    border: "",
    identety: "",
    first: " ",
    second: " ",
    third: " ",
    iran: " ",
    forth: " ",
    first1: "",
    second1: "",
    third1: "",
    iran1: " ",
    forth1: "",
    bak1: "",
    bak2: "",
    bak3: "",
    bak4: "",
    total: "",
    arze: "",
    pelakCheck: "",
    etelaat: "",
  });

  const [date, setDate] = useState("");
  var options = {
    min: 12,
    max: 12,
    capsWithNumbers: true,
  };

  useEffect(() => {
    const generate = require("meaningful-string");
    let pas = generate.random(options);
    setInformation({
      identety: pas,
    });
  }, []);

  const [up, setUp] = useState({
    u: "vahid",
    p: "4701339",
  });

  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") || "");
  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  const downloadImage = () => {
    const table = document.getElementById("table-container");

    html2canvas(table, { scale: 1.86 }).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: [415, 198],
        floatPrecision: 16,
      });
      pdf.addImage(imgData, "PNG", 0, 0);

      pdf.autoPrint({ variant: "non-conform" });
      pdf.save("download.pdf");
    });
  };
  const handelBtn = () => {
    downloadImage();
  };

  return (
    <MainContext.Provider
      value={{ setInformation, information, up, setIsLogin, date, setDate }}
    >
      {isLogin ? (
        <div className="main-container">
          <div className="main-input-container">
            <Inputs />
          </div>

          <div className="print-container">
            <Form />
          </div>

          <button className="submit-btn" onClick={handelBtn}>
            دانلود PDF
          </button>
        </div>
      ) : (
        <div className="main-login">
          <LogIn />
        </div>
      )}
    </MainContext.Provider>
  );
}

export default App;
