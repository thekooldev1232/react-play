//import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../App";

const Content = () => {
  const { storeCount, setStoreCount } = useContext(GlobalContext);
  const increaseCount = () => {
    setStoreCount(storeCount++);
  };
  return (
    <div>
      <button onClick={increaseCount}>{`button count ${storeCount}`}</button>
    </div>
  );
};

export default Content;
