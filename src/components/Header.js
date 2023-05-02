import { Box } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box
      component="img"
      sx={{
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
        margin: 1
      }}
      alt="Logo Pokemon."
      src={'/images/logo.png'}

    />
  )
}

export default Header;