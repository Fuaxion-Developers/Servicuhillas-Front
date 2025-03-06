'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Products() {
  return (
    <Box sx={{ padding: '100px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Item>
              <Box>Cuchillas para la industria del plastico</Box>
              <Box>
                <Image src="" alt="" width={100} height={100}></Image>
              </Box>
            </Item>
          </Grid>
          <Grid size={4}>
            <Item>Cuchillas para la industria del papel</Item>
          </Grid>
          <Grid size={4}>
            <Item>Cuchillas para la industria de la madera</Item>
          </Grid>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=8</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
