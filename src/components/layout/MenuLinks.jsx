import { Link } from "react-router-dom";

export default function MenuLinks() {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="flex flex-col gap-10 lg:px-10 px-5 py-4 border-t">
                
                <div className="flex flex-col gap-5 text-lg font-medium">

                    <Link to={'/menu/'} className="">
                        Speakers
                    </Link>

                    <Link to={'/menu/'} className="">
                        Headphones
                    </Link>

                    <Link to={'/menu/'} className="">
                        Televisions
                    </Link>

                    <Link to={'/menu/'} className="">
                        Soundbars
                    </Link>

                    <Link to={'/menu/'} className="">
                        Explore
                    </Link>

                    <Link to={'/menu/'} className="">
                        Support
                    </Link>

                </div>

                <div className="flex flex-col gap-5">

                    {/* Store */}
                    <Link to={'/'} className="flex items-center gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <h3 className="text-lg font-medium">
                            Find A Store
                        </h3>
                    </Link>

                    {/* Town */}
                    <Link to={'/'} className="flex items-center gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                        <h3 className="text-lg font-medium">
                            Login / Sign Up
                        </h3>
                    </Link>

                </div>

            </div>
        </div> 
    )
}