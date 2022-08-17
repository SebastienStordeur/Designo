import React from "react";
import data from "../../data/data.json";
import Location from "./Location";

const Locations = () => {
  return (
    <section>
      {data.locations.map((location) => {
        return <Location key={location.id} data={location} />;
      })}
    </section>
  );
};

export default Locations;
