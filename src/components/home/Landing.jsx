import { Link } from "react-router-dom";
import landingImg from '../../assets/home/landing.JPG'

export default function Landing() {
    return (
        <div className="flex flex-col lg:px-10 px-5 lg:gap-10 gap-5 relative">

            <img src={landingImg} alt="B&O-landing" className="w-full object-cover h-[35rem] lg:h-[45rem] xl:h-[50rem] rounded brightness-75"/>
            
            <div className="w-full h-full top-0 left-0 flex items-end justify-center absolute md:justify-start">
                <div className="flex flex-col px-10 gap-3 text-center items-center  md:items-start pb-16 md:w-2/4 md:px-16 md:text-left md:gap-5 lg:px-24">
                    <h2 className="text-4xl text-white md:text-5xl font-medium ">
                        Beosound Explore
                    </h2>
                    <p className="text-white/75">
                        Lightweight, portable and tough. Beosound Explore is ready to go with you - wherever.
                    </p>
                    <Link to={'/'} className="px-5 py-2 font-medium bg-yellow-600 w-fit rounded text-sm hover:bg-yellow-500">
                        Shop Now
                    </Link>
                </div>
            </div>
            
        </div>
    )
}