import { rentdata } from "../utils/data";
import {
  Stack,
  Box,
  Button,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styles } from "../styles/style";
import Mobile from "../styles/breakpoints";
import { useLocation, useNavigate } from "react-router-dom";
import ConstructionIcon from "@mui/icons-material/Construction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
export default function Rentdetails() {
  const issmalldevice = Mobile();
  const {
    state: {
      mls: { brokerName },
      builder: { name },
      address: { streetAddress, city, state },
    },
  } = useLocation();
  const navigate = useNavigate();
  const {
    photoUrlsHighRes,
    description,
    resoFacts: { lotSize, yearBuilt },
    homeInsights: [
      {
        insights: [facts],
      },
    ],
  } = rentdata;
  const housePhotos = [];
  photoUrlsHighRes.map((photo) => housePhotos.push(photo.url));
  const [photoindex, setPhotoindex] = useState(0);
  const [currentphoto, setCurrentphoto] = useState(housePhotos[photoindex]);
  const forwardPhoto = () => {
    let newIndex = photoindex + 1;
    setPhotoindex(newIndex);
    document.startViewTransition(() => {
      setCurrentphoto(housePhotos[newIndex]);
    });
  };
  const backwardPhoto = () => {
    let newIndex = photoindex - 1;
    setPhotoindex(() => (photoindex === 1 ? 0 : newIndex));
    document.startViewTransition(() => {
      setCurrentphoto(housePhotos[newIndex]);
    });
  };
  const contactdetails = [
    {
      icon: (
        <LocationOnIcon
          sx={{
            bgcolor: "#f06292",
            ...styles.rentalpage.contactIcons,
          }}
        />
      ),
      info: `${streetAddress},
      ${city},
      ${state}`,
    },
    {
      icon: (
        <ConstructionIcon
          sx={{ bgcolor: "#e57373", ...styles.rentalpage.contactIcons }}
        />
      ),
      info: yearBuilt,
    },
    {
      icon: (
        <SquareFootIcon
          sx={{ bgcolor: "#ba68c8", ...styles.rentalpage.contactIcons }}
        />
      ),
      info: lotSize,
    },
  ];
  return (
    <Container sx={{ marginBlockStart: 2, marginBlockEnd: 4 }}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Box>
          <Box
            component="img"
            alt=""
            src={currentphoto}
            sx={styles.rentalpage.image}
          />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1.2}
            sx={{ paddingBlock: 2 }}
          >
            <IconButton
              variant="contained"
              size="medium"
              disabled={photoindex < 1 ? true : false}
              onClick={backwardPhoto}
              sx={styles.rentalpage.iconButton}
            >
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="body1">
              {photoindex + 1}/ {housePhotos.length}
            </Typography>
            <IconButton
              variant="contained"
              size="medium"
              disabled={photoindex === housePhotos.length - 1 ? true : false}
              onClick={forwardPhoto}
              sx={styles.rentalpage.iconButton}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        </Box>
        <Box sx={{ paddingBlockStart: 2 }}>
          <Typography
            variant={issmalldevice ? "h5" : "h4"}
            sx={{ paddingBottom: 1 }}
          >
            Overview
          </Typography>
          <Typography
            variant={issmalldevice ? "body1" : "h6"}
            textAlign="justify"
            sx={{ fontWeight: 400 }}
          >
            {description}
          </Typography>
          <Box sx={{ paddingBlockStart: 2 }}>
            <Typography
              variant={issmalldevice ? "h5" : "h4"}
              sx={{ paddingBottom: 1 }}
            >
              House details
            </Typography>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
              sx={{ paddingBlockStart: { lg: 2, xs: 1 } }}
              spacing={issmalldevice ? 3 : ""}
            >
              {Array.from(contactdetails, ({ icon, info }, index) => {
                return (
                  <Stack
                    direction="row"
                    key={index}
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>{icon}</Box>
                    <Typography variant={issmalldevice ? "body2" : "body1"}>
                      {info}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Box>
          <Box sx={styles.rentalpage.amenities}>
            <Typography variant={issmalldevice ? "h5" : "h4"}>
              Amenities
            </Typography>
            <Box component="ul" sx={styles.rentalpage.amenities_list}>
              {facts.phrases.map((features, index) => {
                return (
                  <Box component="li" key={index}>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: issmalldevice ? 16 : 20 }}
                    >
                      {features}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={styles.rentalpage.Brokerage}>
            <Typography variant={issmalldevice ? "h5" : "h4"}>
              Brokerage details
            </Typography>
            <Box component="ul" sx={styles.rentalpage.amenities_list}>
              <Typography
                variant="body1"
                component={"li"}
                sx={{ fontSize: issmalldevice ? 16 : 20 }}
              >
                Broker-name : {brokerName}
              </Typography>
              <Typography
                variant="body1"
                component={"li"}
                sx={{ fontSize: issmalldevice ? 16 : 20 }}
              >
                Builder : {name}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            size={issmalldevice ? "small" : "medium"}
            onClick={() => document.startViewTransition(() => navigate("/"))}
            sx={{ marginBlockStart: 2 }}
          >
            Back to home
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
