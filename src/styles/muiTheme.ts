
import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-date-pickers/themeAugmentation";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#2563EB",
      light: "#3B82F6",
      dark: "#1E40AF",
    },
    secondary: {
      main: "#64748B",
      light: "#94A3B8",
      dark: "#475569",
    },
    error: { main: "#EF4444" },
    warning: { main: "#F59E0B" },
    success: { main: "#10B981" },
    info: { main: "#0EA5E9" },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1E293B",
      secondary: "#475569",
    },
  },

  components: {
    MuiDatePicker: {
      defaultProps: {
        displayWeekNumber: true,
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
});

export default muiTheme;
