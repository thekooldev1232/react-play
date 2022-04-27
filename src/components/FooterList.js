import { useContext } from "react";
import { GlobalContext } from "../App";
function FooterList() {
  const { storeCount } = useContext(GlobalContext);
  return <div>FooterList - {storeCount}</div>;
}

export default FooterList;
