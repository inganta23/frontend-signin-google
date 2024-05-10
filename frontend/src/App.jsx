import { useState } from 'react'
import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  const google = () => {
    window.open(import.meta.env.VITE_API_URL, "_self");
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={google}>Sign in with google</Button>
    </Stack>
  )
}

export default App
