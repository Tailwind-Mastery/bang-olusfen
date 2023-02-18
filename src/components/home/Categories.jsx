import { Link } from "react-router-dom";
import speaker from '../../assets/home/speaker.jpg'
import headphones from '../../assets/home/headphones.jpg'
import tv from '../../assets/home/tv.jpg'
import soundbars from '../../assets/home/soundbars.jpg'

export default function Categories() {
    return (
        <div className="flex flex-col md:flex-row lg:px-10 px-5 gap-5">

            <Link to={'/'} className="flex flex-col items-center relative">
                <img src={speaker} alt="B&O-speaker" className="w-full object-cover h-60 md:h-full rounded"/>
                <p className="font-medium text-white absolute bottom-5 md:bottom-2 text-xl bg-black/40 px-4 py-2 rounded">
                    Speakers
                </p>
            </Link>

            <Link to={'/'} className="flex flex-col items-center relative">
                <img src={headphones} alt="B&O-headphones" className="w-full object-cover h-60 md:h-full rounded"/>
                <p className="font-medium text-white absolute bottom-5 md:bottom-2 text-xl bg-black/40 px-4 py-2 rounded">
                    Headphones
                </p>
            </Link>

            <Link to={'/'} className="flex flex-col items-center relative">
                <img src={tv} alt="B&O-tv" className="w-full object-cover h-60 md:h-full rounded"/>
                <p className="font-medium text-white absolute bottom-5 md:bottom-2 text-xl bg-black/40 px-4 py-2 rounded">
                    Televisions
                </p>
            </Link>

            <Link to={'/'} className="flex flex-col items-center relative">
                <img src={soundbars} alt="B&O-soundbars" className="w-full object-cover h-60 md:h-full rounded"/>
                <p className="font-medium text-white absolute bottom-5 md:bottom-2 text-xl bg-black/40 px-4 py-2 rounded">
                    Soundbars
                </p>
            </Link>

        </div>
    )
}