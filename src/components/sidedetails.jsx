import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
  Typography,
  CardMedia,
  CardActionArea,
  Chip,
} from "@mui/material";
import { rentals } from "../utils/jobs";
import * as Colors from "@mui/material/colors";
import { Bed, ShowerHead, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/style";

//eslint-disable-next-line react/prop-types
export const Sidedetails = ({ move }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box component="div" sx={styles.sidepagestyles.div}>
        <Box sx={styles.sidepagestyles.grid}>
          {rentals.map((rental, index) => {
            const {
              media: {
                propertyPhotoLinks: { highResolutionLink },
              },
              address,
              price: { value },
              listing: { listingStatus },
              bathrooms,
              location: { latitude, longitude },
              bedrooms,
              propertyType,
              propertyDisplayRules: { mls, builder },
            } = rental;
            const IndiaPrice = new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumSignificantDigits: value.toString().length,
            }).format(value);
            const listingtype =
              listingStatus === "forSale"
                ? { message: "For Sale", Color: Colors.blue[400] }
                : listingStatus === "forRent"
                ? { message: "For Rent", Color: Colors.green[400] }
                : listingStatus === "Sold"
                ? { message: "sold out", Color: Colors.red[400] }
                : null;
            const Roomdetails = [
              {
                icon: <Bed style={{ color: Colors.grey[700] }} />,
                name: `bedrooms - ${bedrooms}`,
              },
              {
                icon: <ShowerHead style={{ color: Colors.grey[700] }} />,
                name: `bathrooms - ${bathrooms}`,
              },
              {
                icon: <Users style={{ color: Colors.grey[700] }} />,
                name: propertyType,
              },
            ];
            return (
              <CardActionArea
                key={index}
                onClick={() => move(latitude, longitude)}
              >
                <Card sx={{ width: { xs: "fit-content", lg: "auto" } }}>
                  <CardMedia
                    component="img"
                    alt=""
                    src={highResolutionLink}
                    height="145"
                    loading="lazy"
                  />
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        variant="h6"
                        sx={styles.sidepagestyles.textSize}
                      >
                        {IndiaPrice}
                      </Typography>
                      <Chip
                        label={listingtype.message}
                        sx={{
                          bgcolor: listingtype.Color,
                          color: "white",
                          width: { xs: "fit-content", lg: "auto" },
                        }}
                      />
                    </Stack>
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="baseline"
                      sx={{
                        paddingBlockStart: 2,
                      }}
                      spacing={1.2}
                    >
                      {Array.from(Roomdetails, (Roomdetail, index) => {
                        const { icon, name } = Roomdetail;
                        return (
                          <Stack
                            direction="row"
                            key={index}
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                          >
                            <Box>{icon}</Box>
                            <Typography variant="body1">{name}</Typography>
                          </Stack>
                        );
                      })}
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={(e) => {
                        e.stopPropagation();
                        document.startViewTransition(() => {
                          navigate("/details", {
                            state: { mls, builder, address },
                          });
                        });
                      }}
                    >
                      View details
                    </Button>
                  </CardActions>
                </Card>
              </CardActionArea>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
