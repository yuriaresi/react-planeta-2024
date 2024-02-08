import { Container, Grid } from "@mui/material";
import { Header } from "./components/Header";
import { CardAtracao } from "./components/CardAtracao";
import { useAppSelector } from "./config/hooks";

export function Root() {
  const atracoes = useAppSelector((state) => state.atracoes);

  return (
    <>
      <Header />
      <Container>
        <h1>LineUp</h1>
        <Grid container>
          {atracoes.map((item) => (
            <Grid item xs={12} sm={4} md={3} xl={1}>
              <CardAtracao atracao={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
