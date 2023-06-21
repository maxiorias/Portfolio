import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header () {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <Typography variant="h6">Inicio</Typography>
        <Typography variant="h6">Sobre mi</Typography>
        <Typography variant="h6">Skills</Typography>
        <Typography variant="h6">Proyectos</Typography>
        <Typography variant="h6">Contacto</Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;