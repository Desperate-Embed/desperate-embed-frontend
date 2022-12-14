import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import "../css/Main.css";
import { motion } from "framer-motion";

export function Main() {
  return (
    <>
      <div className="Mainbody">
        <Header />
        <div className="Boxcenter">
          <span className="Box관리자용">관리자용</span>
          <div className="Boxspace">
            {/* <Link to="/Manage" style={{ textDecoration: "none" }}>
              <motion.div
                className="Box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="세로">
                  <img className="boximg" src="/image/하수구관리.png"></img>
                  <span className="boxtext">하수구 관리</span>
                </div>
              </motion.div>
            </Link> */}
            <Link to="/Location" style={{ textDecoration: "none" }}>
              <motion.div
                className="Box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="세로">
                  <img className="boximg" src="/image/위치확인.png"></img>
                  <span className="boxtext">위치 확인</span>
                </div>
              </motion.div>
            </Link>
            {/* <Link to="/Check" style={{ textDecoration: "none" }}>
              <motion.div
                className="Box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="세로">
                  <img className="boximg" src="/image/쓰레기확인.png"></img>
                  <span className="boxtext">쓰레기 확인</span>
                </div>
              </motion.div>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
