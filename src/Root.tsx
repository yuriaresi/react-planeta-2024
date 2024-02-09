import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { CardAtracao } from "./components/CardAtracao";
import { useAppSelector } from "./config/hooks";
import { darkTheme } from "./config/theme/dark.theme";
import { defaultTheme } from "./config/theme/default.theme";

export function Root() {
  const atracoes = useAppSelector((state) => state.atracoes);
  const isDeafaultTheme = useAppSelector((state) => state.theme);

  const theme = isDeafaultTheme ? defaultTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <h1>LineUp</h1>
          <Grid container spacing={3}>
            {atracoes.map((item) => (
              <Grid item xs={12} sm={4} md={3} xl={1} key={item.id}>
                <CardAtracao atracao={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}
