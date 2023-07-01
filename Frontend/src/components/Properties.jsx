import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
export default function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/properties")
      .then((res) => {
        // console.log(res.data);
        setProperties(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //
  return (
    <div>
      <PropertyCard properties={properties} />
    </div>
  );
}
