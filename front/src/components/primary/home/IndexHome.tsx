import AccordionUsage from './acordion/Acordion';
import Hero from './hero/Hero';
import ImgInfo from './imgInfo/ImgInfo';
import Info from './info/Info';
import Numbers from './numbers/Numbers';

const IndexHome = () => {
  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <ImgInfo></ImgInfo>
      <Numbers></Numbers>
      <AccordionUsage></AccordionUsage>
    </div>
  );
};

export default IndexHome;
