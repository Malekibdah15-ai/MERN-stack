import React from "react";

const People = (props) => {
  const { list } = props;

  const last = list[list.length - 1];

  if (!last) return <p>No data yet</p>;

  return (
    <>
      <h1>{last.name}</h1>
      <p>Height: {last.height}</p>
      <p>Mass: {last.mass}</p>
      <p>Hair Color: {last.hair_color}</p>
      <p>Skin Color: {last.skin_color}</p>
    </>
  );
};

export default People;