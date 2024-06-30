import { FcAdvance } from 'react-icons/fc';

const ButtonAll = ({children}:any) => {
    return <button className="btn rounded-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:via-purple-300 hover:from-indigo-300  mt-3 ">{children} <FcAdvance className='text-2xl'/></button>
};

export default ButtonAll;