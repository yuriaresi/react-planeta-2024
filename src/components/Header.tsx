import { AppBar, Avatar, Switch, Toolbar, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { mudarThema } from "../config/modules/theme.slicer";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: "Protest Riot";
  }
`;

export const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);
  const mudar = () => {
    dispatch(mudarThema());
  };

  return (
    <AppBar position="static">
      <ToolbarStyled>
        <Avatar src="https://res.cloudinary.com/netpdv/image/upload/c_fit,q_80/rw29rc5qicvxeova0dyr" />

        <div>
          <h2>PLANETA ATLÂNTIDA 2024</h2>
        </div>

        <div>
          <Switch onChange={mudar} /> {theme ? "light" : "dark"}
        </div>
      </ToolbarStyled>
    </AppBar>
  );
};
