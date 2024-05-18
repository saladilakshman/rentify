import { SwipeableDrawer, Box } from "@mui/material";
import { Sidedetails } from "./sidedetails";
// eslint-disable-next-line react/prop-types
export const DrawerItem = ({ move, open, drawerclose }) => {
  return (
    <>
      <SwipeableDrawer
        open={open}
        anchor="bottom"
        onClose={drawerclose}
        swipeAreaWidth={30}
        hideBackdrop={true}
        variant="temporary"
        ModalProps={{
          keepMounted: false,
        }}
        PaperProps={{
          sx: {
            zIndex: 1300,
            borderRadius: 2,
            "&:-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
      >
        <Box sx={{ height: 420, overflow: "auto" }}>
          <Sidedetails move={move} />
        </Box>
      </SwipeableDrawer>
    </>
  );
};
