import * as React from "react";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Typography,
  Container,
} from "@mui/material";

export default function PropertyCard({ properties }) {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Custom Homes Portfolio
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          mb={5}
          mt={5}
        >
          Specializing exclusively in building custom homes and luxury estates
          in the Newport Beach area, Patterson Custom Homes is not your typical
          general contractor.
        </Typography>

        <Grid container justifyContent="center" spacing={2}>
          {properties &&
            properties.map((property) => (
              <Grid item key={property._id} xs={12} sm={6} md={4}>
                <Link
                  to={`/properties/${property._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      // sx={{ height: 150 }}
                      image={property.image}
                      title="green iguana"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h7" component="div">
                        {property.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {property.availability}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}
