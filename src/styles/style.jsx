import * as Colors from "@mui/material/colors";

export const styles = {
  homepage: {
    display: "grid",
    gridTemplateColumns: { lg: "65% 35%", xs: "100%" },
    placeItems: "center",
    position: "relative",
  },
  box: {
    position: "absolute",
    bottom: 80,
    right: 10,
    display: { xs: "block", lg: "none" },
  },
  sidepagestyles: {
    div: {
      boxShadow: 4,
      height: "100vh",
      minWidth: "100%",
      overflowY: "scroll",
    },
    textInput: {
      width: {
        xs: "90%",
        lg: "100%",
      },
      display: "block",
      margin: { xs: "auto", lg: "" },
      marginBlockStart: { xs: 2, lg: 2 },
    },
    textField: {
      padding: 1,
      paddingLeft: 2,
      width: "100%",
    },
    textSize: {
      fontSize: { xs: 16, sm: 16, lg: 22 },
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 2,
      paddingBlockStart: 2,
      paddingInline: 1,
    },
  },
  rentalpage: {
    iconButton: {
      bgcolor: Colors.blue[300],
      color: "white",
      "&:hover": {
        bgcolor: Colors.blue[300],
      },
    },
    image: {
      width: "100%",
      height: { xs: "100%", lg: "100%" },
      aspectRatio: { xs: "", lg: 16 / 8 },
    },
    amenities: {
      paddingBlockStart: { xs: 3, lg: 5 },
      alignItems: "baseline",
    },
    amenities_list: {
      paddingInlineStart: 2,
      padding: 1,
    },
    Brokerage: {
      //paddingBlockStart: 3,
      padding: 1,
      paddingInline: 0,
      paddingBlock: 2,
    },
    contactIcons: {
      borderRadius: "50%",
      color: "white",
      fontSize: { lg: 25, xs: 18 },
      padding: 0.5,
    },
  },
};
