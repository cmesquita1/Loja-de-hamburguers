import BurgerLogo from "../../assets/img/logo.svg";
import { useState } from "react";
import { HeaderDiv } from "./style";

export default function Header({ setFilter }) {
  const [value, setValue] = useState("");
  return (
    <HeaderDiv>
      <img src={BurgerLogo} alt="logo" />
      <div className="searchBox">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setFilter(value.toLowerCase())}>Search</button>
      </div>
    </HeaderDiv>
  );
}
