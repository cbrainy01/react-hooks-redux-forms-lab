import React from "react";
import { useSelector } from "react-redux";
import BandInput from "./BandInput";


function BandsContainer() {
  
  const bands = useSelector( (state) => state.bands.entities )
  const renderBands = bands.map( (band) => <li>{band}</li>)
  return <div>
    <BandInput/>
    <ul>
      {renderBands}
    </ul>
    </div>;
}

export default BandsContainer;
