import React from 'react';
import SearchAppBar from './components/SearchAppBar';
import HomePage from './components/HomePage';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SearchAppBar />
        <HomePage />
        <Stack spacing={2}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Pagination count={5} />
          </Box>
        </Stack>
        </ThemeProvider>
    </div>
  );
}

export default App;
