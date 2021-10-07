import { styled } from "@mui/styles";

export const MainContainer = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  background: theme.palette.secondary.background,
  padding: theme.spacing(2),
}));

export const OutPutFrame = styled("iframe")(({ theme }) => ({
  minHeight: 300,
  height: "100%",
  width: "100%",
  background: "#fff",
}));
