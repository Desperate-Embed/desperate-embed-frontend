import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";

export function Location() {
  const [sewerList, setSewerList] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/sewer/sewerList");
      setSewerList(data);
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}
