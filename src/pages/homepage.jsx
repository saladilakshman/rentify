import { Box, Fab, Stack, Typography } from "@mui/material";
import { MapBox } from "../components/map";
import { Sidedetails } from "../components/sidedetails";
import { styles } from "../styles/style";
import { useState } from "react";
import { DrawerItem } from "../components/drawer";
import ListIcon from "@mui/icons-material/List";
import Mobile from "../styles/breakpoints";
export const Homepage = () => {
  const [location, setLocation] = useState(null);
  const [opendrawer, setOpendrawer] = useState(false);
  const drawer_open = () => {
    setOpendrawer(true);
  };
  const drawer_close = () => {
    setOpendrawer(false);
  };
  const smartphone = Mobile();
  const move = (lat, lng) => {
    setLocation([lat, lng]);
  };

  return (
    <Box sx={styles.homepage}>
      <Box sx={styles.box}>
        <Fab
          variant="extended"
          sx={{ color: "#448aff", backgroundColor: "#fff" }}
          size="medium"
          onClick={drawer_open}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems={"center"}
            spacing={0.2}
          >
            <ListIcon />
            <Typography
              variant="body2"
              sx={{ fontFamily: "roboto", textTransform: "capitalize" }}
            >
              View list
            </Typography>
          </Stack>
        </Fab>
      </Box>
      <MapBox location={location} />
      {smartphone && (
        <DrawerItem open={opendrawer} drawerclose={drawer_close} move={move} />
      )}
      {!smartphone && <Sidedetails move={move} smartphone={smartphone} />}
    </Box>
  );
};
