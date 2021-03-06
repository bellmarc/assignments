import React from "react";
import { withChar } from "../context/CharacterProvider.js";
import Navbar from "./Navbar.js";
import HouseCard from "./HouseCard.js";

const HouseList = props => {
  // console.log(props.history)
  const mappedCards = props.houses.map((house, index) => {
    return (
      <HouseCard
        key={index}
        name={house.name}
        region={house.region}
        swornMembers={house.swornMembers}
      />
    );
  });

  let newClassName;
  if (props.history.location.pathname === "/houses/1" || props.history.location.pathname === "/houses/") {
    newClassName = "hidden";
  }else if (props.history.location.pathname === "/houses/45" ){
    newClassName = "next-page";
  } else {
    newClassName = "prev-page";
  }

  console.log(props);
  return (
    <>
      <Navbar history={props.history} pathname={`/houses/`} />
      {/* {Navbar({
                  history: props.history,
                  pathname: "/houses/"
             })} */}

      <div className="house-container">
        {/* can rcv mappedProps */}
        <h1 className="house-banner">All Houses </h1>
        <div style={{ margin: 40 }}>{mappedCards}</div>
        <div className="page-btns">
          <button
            className={newClassName}
            onClick={() => {
              const obj = {
                history: props.history,
                id: props.match.params._id ? props.match.params._id : 1
              };

              props.getPrevHousePage(obj);
            }}
          >
            &laquo; Previous page{" "}
          </button>

          <button
            className="next-page"
            onClick={() => {
              const obj = {
                history: props.history,
                id: props.match.params._id
              };
              props.getNextHousePage(obj);
            }}
          >
        
            Next page &raquo;{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default withChar(HouseList);
