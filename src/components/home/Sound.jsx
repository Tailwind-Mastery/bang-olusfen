import { Link } from "react-router-dom";
import earphones from '../../assets/home/earphones.jpg'
import homeAudio from '../../assets/home/home-audio.jpg'
import portable from '../../assets/home/portable.jpg'
import smartHome from '../../assets/home/smart-home.jpg'

export default function Sound() {
    return (
        <div className="flex flex-col">

            <div className="flex flex-col gap-5 md:gap-10 bg-stone-200/50 lg:px-10 px-5 py-10">

                <div className="flex relative justify-between items-center">
                    <h2 className="text-2xl font-medium w-5/6">
                        Sound Vision, It's Your Pick.
                    </h2>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>

                </div>

                <div className="overflow-auto">

                    <div className="flex gap-5 min-w-max">
                        
                        <Link to={'/'} className="flex flex-col items-center relative">
                            <img src={earphones} alt="B&O-earphones" className="object-cover h-52 w-52 lg:w-96 xl:w-[40rem] md:h-full rounded"/>
                            <p className="font-medium text-white absolute bottom-5 md:bottom-2 text-xl bg-black/40 px-4 py-2 rounded">
                                Earphones
                            </p>
                        </Link>

                        <Link to={'/'} className="flex flex-col items-center relative">
                            <img src={homeAudio} alt="B&O-home-audio" className="object-cover h-52 w-52 lg:w-96 xl:w-[40rem] md:h-full rounded"/>
                            <p className="font-medium text-white absolute bottom-5 md:bottom-2 text-xl bg-black/40 px-4 py-2 rounded">
                                Home Audio
                            </p>
                        </Link>

                        <Link to={'/'} className="flex flex-col items-center relative">
                            <img src={portable} alt="B&O-portable" className="object-cover h-52 w-52 lg:w-96 xl:w-[40rem] md:h-full rounded"/>
                            <p className="font-medium text-white absolute bottom-5 md:bottom-2 text-xl bg-black/40 px-4 py-2 rounded">
                                Portable Speakers
                            </p>
                        </Link>

                        <Link to={'/'} className="flex flex-col items-center relative">
                            <img src={smartHome} alt="B&O-smart-home" className="object-cover h-52 w-52 lg:w-96 xl:w-[40rem] md:h-full rounded"/>
                            <p className="font-medium text-white absolute bottom-5 md:bottom-2 text-xl bg-black/40 px-4 py-2 rounded">
                                Smart Home
                            </p>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}