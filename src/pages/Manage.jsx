import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Open } from "../components/State";
import { State } from "../components/State";

export function Manage() {
  const params = useParams();

  return (
    <div>
      <Header />
      <State sewerId={params.id} />
    </div>
  );
}
