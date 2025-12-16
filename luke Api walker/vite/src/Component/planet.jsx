import React from "react";

const Planet = (props) =>{
    const { list } = props;

    const last = list[list.length - 1];

    if (!last) return <p>No data yet</p>;

  return (
    <>
      <h1>{last.name}</h1>
      <p>rotation_period: {last.rotation_period}</p>
      <p>orbital_period: {last.orbital_period}</p>
      <p>climate: {last.climate}</p>
      <p>gravity: {last.gravity}</p>
    </>
  );

}
export default Planet