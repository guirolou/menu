import {AppBar, Typography } from "@material-ui/core";

function Header() {
    return(
        <AppBar position="static">
          <Typography variant="h3" align="center">
            Selva Fotografia
          </Typography>
      </AppBar>
    );
}

export default Header;
