import { useContext } from "react";
import { GlobalContext } from "../App";
import FooterList from "./FooterList";
function Footer() {
  const { storeCount, } = useContext(GlobalContext);
  return (
    <div>
      Footer - {storeCount}
      <FooterList number={storeCount}></FooterList>
    </div>
  );
}

export default Footer;
