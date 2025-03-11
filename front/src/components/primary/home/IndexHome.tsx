import { Box } from '@mui/material';
import AccordionUsage from './acordion/Acordion';
import Hero from './hero/Hero';
import ImgInfo from './imgInfo/ImgInfo';
import Info from './info/Info';
import Numbers from './numbers/Numbers';

const IndexHome = () => {
  return (
    <Box sx={{ paddingX: '6.2rem', paddingTop: '13rem' }}>
      <Hero></Hero>
      <Info></Info>
      <ImgInfo></ImgInfo>
      <Numbers></Numbers>
      <AccordionUsage></AccordionUsage>
    </Box>
  );
};

export default IndexHome;
