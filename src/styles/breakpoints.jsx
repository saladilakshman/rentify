import { useTheme, useMediaQuery } from "@mui/material";
export default function Mobile() {
    const theme = useTheme();
    const ismobile = useMediaQuery(theme.breakpoints.only("xs"));
    return ismobile
}
