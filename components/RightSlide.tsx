
import Marquee from 'react-fast-marquee';
import './slide.css'
import img2 from '../public/UADE.png'
import img3 from '../public/UBA.png';
import img4 from '../public/UP.png';
import img5 from '../public/UTN.png';
import img6 from '../public/DITELLA.png';
import img7 from '../public/SANANDRES.png';
import img8 from '../public/UB.png';
import img9 from '../public/ITBA.png';
import Image from 'next/image';

export function RightSlide () {
  return (
    <div className="max-w-5xl mx-auto px-10 mt-10">
    <Marquee direction="right" speed={50} delay={0}>
      <div className="w-80 px-10 custom-shadow">
        <Image src={img2} alt="" />
      </div>
      <div className="w-80 px-10">
        <Image src={img3} alt="" />
      </div>
      <div className="w-80 px-10">
        <Image src={img4} alt="" />
      </div>
      <div className="w-80 px-10">
        <Image src={img5} alt="" />
      </div>
      <div className="w-80 px-10">
        <Image src={img6} alt="" />
      </div>
      <div className="w-80 px-10 custom-shadow">
        <Image src={img7} alt="" />
      </div>
      <div className="w-80 px-10">
        <Image src={img8} alt="" />
      </div>
      <div className="w-80 px-10 custom-shadow">
        <Image src={img9} alt="" />
      </div>
      
    </Marquee>
  </div>
  );
}
