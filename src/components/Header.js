import { Box } from '@mui/material'
import React from 'react'

import logoPokemon from './../../src/static/images/logo.png'

const Header = () => {
  return (
    <Box
      component="img"
      sx={{
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
        margin: 5
      }}
      alt="Logo Pokemon."
      src={logoPokemon}
    />
  )
}

export default Header;