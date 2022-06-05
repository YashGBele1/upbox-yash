import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

function Header() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <header className="bg-white shadow-lg sticky top-0 z-[100]">
            <img src="/images/TOPBAR.svg" className="w-full h-2 object-cover" />
            <nav className="px-10 lg:px-20 py-5 flex items-center justify-between">
                <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-5">
                        <img src="/images/UB-LOGO.svg" className="w-14 sm:w-16" />
                        <h1 className="tracking-widest text-justify text-3xl sm:text-5xl font-bold">UPBOX</h1>
                    </span>
                </div>

                <div>
                    <ul className='hidden lg:flex lg:items-center space-x-6'>
                        <Link href='/#this-month'>
                            <li className='cursor-pointer hover:scale-105 text-sm font-bold tracking-widest uppercase'>this month</li>
                        </Link>
                        <Link href='/#skin'>
                            <li className='cursor-pointer hover:scale-105 text-sm font-bold tracking-widest uppercase'>skin</li>
                        </Link>
                        <Link href='/#hair'>
                            <li className='cursor-pointer hover:scale-105 text-sm font-bold tracking-widest uppercase'>hair</li>
                        </Link>
                        <Link href='/#bath'>
                            <li className='cursor-pointer hover:scale-105 text-sm font-bold tracking-widest uppercase'>bath</li>
                        </Link>
                        <Link href='/#sale'>
                            <li className='cursor-pointer hover:scale-105 text-sm font-bold tracking-widest uppercase'>sale</li>
                        </Link>
                        <button className="hover:scale-105 text-sm font-bold tracking-widest uppercase border-2 border-black rounded-3xl px-8 py-2 mx-4">
                            log in
                        </button>
                    </ul>
                    <div onClick={handleNav} className="lg:hidden hover:cursor-pointer">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </nav>

            <section className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""}>
                <div className={nav
                    ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }>
                    <div>
                        <div className="flex items-center justify-between">
                            <img src="/images/UB-LOGO.svg" className="w-12" />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose size={20} />
                            </div>
                        </div>
                        <div className="py-3 mb-5 border-b border-gray-400" />
                    </div>
                    <div>
                        <ul>
                            <Link href='/this-month'>
                                <li className="py-4 text-sm font-bold tracking-widest uppercase text-gray-500">this month</li>
                            </Link>
                            <Link href='/skin'>
                                <li className="py-4 text-sm font-bold tracking-widest uppercase text-gray-500">skin</li>
                            </Link>
                            <Link href='/hair'>
                                <li className="py-4 text-sm font-bold tracking-widest uppercase text-gray-500">hair</li>
                            </Link>
                            <Link href='/bath'>
                                <li className="py-4 text-sm font-bold tracking-widest uppercase text-gray-500">bath</li>
                            </Link>
                            <Link href='/sale'>
                                <li className="py-4 mb-5 text-sm font-bold tracking-widest uppercase text-gray-500">sale</li>
                            </Link>
                            <button className="hover:scale-105 text-sm font-bold tracking-widest uppercase border-2 border-gray-500 text-gray-500 rounded-3xl px-8 py-2 mx-4">
                                log in
                            </button>
                        </ul>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header