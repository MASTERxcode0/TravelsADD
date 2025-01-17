import React from "react";
import Search from "../Home/component/Sorch/sorch";
import Divcard from "./component/Divcard/Divcard";
import style from "../Searchs/Searchs.module.css";
function Searchs() {
  return (
    <div className={style.container}>
      <h1>Explore Destinations</h1>
      <Search></Search>
      <Divcard></Divcard>
    </div>
  );
}

export default Searchs;
