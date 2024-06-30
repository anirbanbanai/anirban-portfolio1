
import Tilt from 'react-parallax-tilt';

// import img from '../assets/IMG_20230312_193407.jpg'
import img from '@/assets/IMG_20230312_193407.jpg'
import Image from 'next/image';

const Default = () => (
  <Tilt>
    <Image className='rounded-full max-w-[90%]' src={img} alt='img' width={500} height={350}/>
  </Tilt>
);

export default Default;