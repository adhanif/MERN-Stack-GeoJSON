import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

export default function PropertyDetail() {
  const [property, setProperty] = useState([]);
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
  }, []);

  return (
    <div>
      <Grid container spacing={2} justify="center">
        <Grid item xs={4} justifyContent="center" alignItems="center">
          <img
            src={`${property.image}?w=248&fit=crop&auto=format`}
            srcSet={`${property.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={property.title}
            loading="lazy"
          />
        </Grid>
      </Grid>
    </div>
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={4} justifyContent="center" alignItems="center">
    //       <Typography variant="h7">{property.title}</Typography>
    //       {/* <Typography variant="body2">{property.owner.name}</Typography> */}
    //     </Grid>
    //     <Grid item xs={1}>
    //       <img
    //         src={`${property.image}?w=248&fit=crop&auto=format`}
    //         srcSet={`${property.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //         alt={property.title}
    //         loading="lazy"
    //       />
    //       {/* <Typography variant="body1">xs=8</Typography> */}
    //     </Grid>
    //     <Grid item xs={4}>
    //       <Typography variant="body1">xs=4</Typography>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <Typography variant="body1">xs=8</Typography>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
}
