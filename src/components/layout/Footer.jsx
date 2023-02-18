import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-black">
            <div className="2xl:container 2xl:mx-auto flex flex-col gap-10 p-10 text-white/75 text-sm">
                
                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Links */}
                    <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
                        <div className="flex flex-col gap-5">
                            <h2 className="font-bold text-white">
                                CUSTOMER CARE
                            </h2>
                            <Link to={'/'}>
                                Login
                            </Link>
                            <Link to={'/'}>
                                Be A User
                            </Link>
                            <Link to={'/'}>
                                Exclusive Online Services
                            </Link>
                            <Link to={'/'}>
                                FAQ
                            </Link>
                            <Link to={'/'}>
                                Servuce And Support
                            </Link>
                            <Link to={'/'}>
                                Contact Us
                            </Link>
                            <Link to={'/'}>
                                Find Store
                            </Link>
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <h2 className="font-bold text-white">
                                OUR POLICIES
                            </h2>
                            <Link to={'/'}>
                                Accessibility
                            </Link>
                            <Link to={'/'}>
                                Counterfeit
                            </Link>
                            <Link to={'/'}>
                                Cookie Policy
                            </Link>
                            <Link to={'/'}>
                                Privacy Policy
                            </Link>
                            <Link to={'/'}>
                                Policies And Terms
                            </Link>
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <h2 className="font-bold text-white">
                                OUR COMPANY
                            </h2>
                            <Link to={'/'}>
                                Corporate
                            </Link>
                            <Link to={'/'}>
                                Press
                            </Link>
                            <Link to={'/'}>
                                Sustainability
                            </Link>
                            <Link to={'/'}>
                                Investors
                            </Link>
                            <Link to={'/'}>
                                Become A Partner
                            </Link>
                            <Link to={'/'}>
                                Industry Professionals
                            </Link>
                            <Link to={'/'}>
                                Partners And B2B
                            </Link>
                            <Link to={'/'}>
                                Careers
                            </Link>
                            <Link to={'/'}>
                                Feedback
                            </Link>
                        </div>
                    </div>
                    
                    {/* socials */}
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-white">
                            CONNECT WITH US
                        </h2>
                    
                        <div className="flex flex-col gap-3 font-medium text-white">
                            <Link to={'/'}>
                                Bang And Olusfen Apps
                            </Link>
                            <Link to={'/'}>
                                House Of Bang And Olusfen
                            </Link>
                            <Link to={'/'}>
                                Bang And Olusfen Collections
                            </Link>
                        </div>
                    
                        <div className="flex gap-5">
                            <Link to={'/'} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-full p-1 stroke-black bg-white/75 hover:bg-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </Link>
                            <Link to={'/'} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-full p-1 stroke-black bg-white/75 hover:bg-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </Link>
                            <Link to={'/'} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-full p-1 stroke-black bg-white/75 hover:bg-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between text-gray-400 gap-5 md:items-end">

                    {/* country */}
                    <div className="flex flex-col gap-3 ">
                        <h2 className="font-bold text-white">
                            CHOOSE COUNTRY
                        </h2>
                        <Link to={'/'} className="flex gap-2 items-center hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                            </svg>
                            <p>Pakistan</p>
                        </Link>
                        
                    </div>

                    <p className="">
                        &copy; Bang And Olusfen, 2023
                    </p>
                </div>
            </div>
        </div>
    )
}