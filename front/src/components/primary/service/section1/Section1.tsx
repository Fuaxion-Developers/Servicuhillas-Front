import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Section1 = () => {
  return (
    <Box sx={{padding:'100px', display:'flex'}}>
      <Box>
        <Typography variant="h3">TITULO</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          minus explicabo doloribus nesciunt, architecto debitis expedita
          repellat harum, voluptas consequatur reiciendis consectetur sunt
          dolorum aspernatur! Aliquam pariatur minus et rerum.
        </Typography>
      </Box>
      <Box>
        <Image
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1727178391/samples/imagecon-group.jpg"
          alt="Imagen"
          width={100}
          height={100}
        ></Image>
      </Box>
    </Box>
  );
};

export default Section1;
