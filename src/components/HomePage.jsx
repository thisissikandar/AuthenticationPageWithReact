
import * as React from 'react';
import { Route, RouterProvider } from 'react-router-dom';
import Signup from './Signup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link  from '@mui/material/Link';

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-teal-500 flex flex-col justify-center items-center ">
      <h1 className="font-bold text-4xl  mt-20 ">Welcome To The Site !</h1>
      {/* <Stack>
      <Button color="primary">SigIn</Button> 
      </Stack> */}
      <Link href="/login" variant="body2">
       { 
       <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>}
      </Link>
    </div>
  )
}

export default HomePage