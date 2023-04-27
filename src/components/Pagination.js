import { Box, PaginationItem, TablePagination, Typography } from '@mui/material'
import { Pagination } from '@mui/material';
import { useState } from 'react';

const PaginationComponent = () => {
  const [page, setPage] = useState(1)
  const handleChange = (e, page) => {
    console.log(page)
    setPage(page)
  }

  return (
    <Box margin={2}>
      <Box>Current page is {page}</Box>
      <Pagination count={10} color="primary" onChange={handleChange}></Pagination>
    </Box>
  )
}

export default PaginationComponent