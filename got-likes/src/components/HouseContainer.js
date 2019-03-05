import React, {Component} from "react";
import House from "./House"

const HouseContainer = (props) => {
  console.log(props.houses)
  return (
    <div id='house-container'>
      {props.houses.map(house => {
        return <House key={house.url} {...house} clickHandler={props.clickHandler}/>
      })}
    </div>
  )
}

export default HouseContainer;
