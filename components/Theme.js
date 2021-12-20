import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material";
import {useSelector} from "react-redux";

const Theme = ({children}) => {
  const {isDark} = useSelector(state => state.toggle)
  const darkTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default Theme;
