import {useNavigate} from 'react-router-dom'
import logo from '../../public/hero-img.png'
import Navbar from '../components/Navbar'

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/auth/login')
    }
  return (
    <>
    <Navbar/>
    <div className="container-xl bg-[#37517E] h-screen">
        <div className="flex h-full">
            <div className="w-full pt-[130px] ml-12 pr-5">
                <h1 className="text-white font-extrabold text-3xl pr-10">
                Better Solutions For Your Business
                </h1>
                <h5 className="text-slate-300 mt-4 pr-10">
                We are a team of talented designers making websites with Tailwind CSS
                </h5>
                <div className="mt-5">
                    <a
                        href=''
                        onClick={handleClick}
                        className="bg-blue-400 hover:text-blue-500 hover:bg-white text-white font-normal text-sm py-2 px-4 rounded-full mr-4"
                    >
                        Get Started
                    </a>
                </div>
            </div>
            <div className="w-full pt-10 pr-6">
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
  </>
  )
}

export default LandingPage