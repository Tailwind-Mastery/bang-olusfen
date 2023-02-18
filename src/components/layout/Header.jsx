import { Link, useHref, useNavigate} from "react-router-dom";
import logo from '../../assets/layout/logo.JPG'

export default function Header() {

    const href = useHref();
    const navigate = useNavigate();

    const changeUri = () => {
        if(href == '#/') {
            return navigate('/menu/')
        } else {
            return navigate('/')
        }
    }
    
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="flex justify-between lg:px-10 px-5 py-4 items-center">

                {/* menu */}
                <button className="lg:hidden" onClick={changeUri}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <div className="flex items-center gap-8 text-stone-500 font-medium text-sm tracking-wider">
                    <Link to={'/'}>
                        <img src={logo} alt="nike-logo" className="w-10"/>
                    </Link>
                    <Link to={'/'} className="lg:block hidden">
                        SPEAKERS
                    </Link>
                    <Link to={'/'} className="lg:block hidden">
                        HEADPHONES
                    </Link>
                    <Link to={'/'} className="lg:block hidden">
                        TELEVISIONS
                    </Link>
                    <Link to={'/'} className="lg:block hidden">
                        SOUNDBARS
                    </Link>
                    <Link to={'/'} className="lg:block hidden">
                        EXPLORE
                    </Link>
                    <Link to={'/'} className="lg:block hidden">
                        SUPPORT
                    </Link>
                </div>

                <div className="flex gap-5 items-center">

                    {/* user */}
                    <Link to={'/'} className="lg:block hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </Link>

                    {/* location */}
                    <Link to={'/'} className="lg:block hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </Link>

                    {/* cart */}
                    <Link to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </Link>
                    
                </div>
                
            </div>
        </div> 
    )
}