import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {bandAdded} from "./bandsSlice"


function BandInput() {
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    // dispatch action to add band
    dispatch( bandAdded(name) )  
    setName("")
  }


return <div>
      <form onSubmit={handleSubmit}>
        <label>enter band name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <button>add band</button>
      </form>
    </div>;
}

export default BandInput;
