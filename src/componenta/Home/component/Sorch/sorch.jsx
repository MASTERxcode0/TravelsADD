import React, { useEffect } from "react";
import styles from "./SearchBar.module.css"; // CSS fayl uchun yo‘lni to‘g‘ri belgilang
import { Search } from "lucide-react";
import { MapPin } from "lucide-react";

import "aos/dist/aos.css"; // CSS styles for AOS

const SearchBar = () => {


  return (
    <div className={styles.searchContainer} data-aos="flip-right">
      <div className={styles.inputWrapper}>
        <Search></Search>
        <input
          type="text"
          placeholder="Ex.: Tashkent, Samarkand"
        />
      </div>
      <button className={styles.mapButton}>
        <MapPin></MapPin>
      </button>
    </div>
  );
};

export default SearchBar;
