import axios from "axios";
import { useEffect, useState } from "react";
import "../css/State.css";

export function State({ sewerId }) {
  const [sewerData, setSewerData] = useState();

  useEffect(() => {
    console.log(sewerId);
    console.log("dd");
    axios.get("/api/sewer/sewerDetail/" + sewerId).then(({ data }) => {
      console.log(data);
      setSewerData(data);
    });
  }, []);

  return (
    <div className="Open">
      <div className="오픈세로">
        <span className="하수구관리">하수구 관리</span>
        <img className="멘홀" src="/image/멘홀.png"></img>
        <span className="하수구열림">하수구 열림</span>
        {/* <div className="Openspace">
          <div className="Openleft">열기</div>
          <div className="OpenRight">닫기</div>
        </div> */}
      </div>
    </div>
  );
}
