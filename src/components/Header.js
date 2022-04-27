import { useContext } from "react";
import { GlobalContext } from "../App";
function Header() {
  const { storeCount } = useContext(GlobalContext);
  return <div>{storeCount}</div>;
}

export default Header;
