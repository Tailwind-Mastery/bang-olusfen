import { Link } from "react-router-dom";
import experienceImg from '../../assets/home/experience.jpg'

export default function Experience() {
    return (
        <div className="flex flex-col md:flex-row bg-stone-200/50 lg:px-10 p-5">

            <img src={experienceImg} alt="B&O-expereince" className="h-80 w-full object-cover md:w-1/2 md:h-96 lg:w-3/5 xl:w-4/6 xl:h-[30rem] 2xl:h-[40rem]"/>

            <div className="flex flex-col gap-3 font-medium items-center text-center bg-white py-5 px-2 md:w-1/2 md:justify-center md:px-10 md:gap-5 lg:w-2/6">

                <h3 className="text-sm tracking-widest">
                    EXPERIENCE IN STORE
                </h3>
                <h2 className="text-2xl">
                    Up close and personal
                </h2>
                <p className="">
                    Come by one of our stores to hear, see and feel Bang And Olusfen yourself.
                </p>
                <Link to={'/'} className="px-5 py-2 border-2 border-black hover:bg-black hover:text-white rounded-full">
                    Find Store
                </Link>
            </div>

        </div>
    )
}