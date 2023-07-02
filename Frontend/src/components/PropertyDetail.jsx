import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Container } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

export default function PropertyDetail() {
  const [property, setProperty] = useState(null);
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/properties/${id}`)
      .then((res) => {
        console.log(res.data);
        setProperty(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4} className="centered-grid-item">
          <Typography variant="h4" className="centered-title">
            {property.title}
            <br />
            <span className="owner-name">owner: {property.owner.name}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <img src={property.image} alt={property.title} className="img" />
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        align="center"
        color="textSecondary"
        mb={5}
        mt={5}
      >
        {property.description}. {property.description}
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <img src={property.images[0]} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <img src={property.images[1]} alt="" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={property.images[2]} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center">
        {/* <Grid item xs={12} sm={3}>
          <img src={property.images[1]} alt="" style={{ width: "100%" }} />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body2"
            // align="center"
            color="textSecondary"
            mt={5}
            mb={2}
            textTransform={"uppercase"}
          >
            Property Highlights
          </Typography>
          <Typography fontSize={10}>
            Area: {property.area} square meter
          </Typography>
          <Typography fontSize={10}>
            Total Bedrooms: {property.bedrooms}
          </Typography>
          <Typography fontSize={10}>
            Total Price: {property.price} <EuroIcon fontSize="smal" />
          </Typography>
          <Typography fontSize={10} fontWeight={1000}>
            Availability: {property.availability}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body2"
            // align="center"
            color="textSecondary"
            mt={5}
            mb={2}
            textTransform={"uppercase"}
          >
            Owner Details:
          </Typography>
          <Typography fontSize={10}>Name: {property.owner.name}</Typography>
          <Typography fontSize={10}>Email:{property.owner.email}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
