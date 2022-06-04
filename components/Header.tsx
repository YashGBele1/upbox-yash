import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Header() {
    return (
        <header className="bg-white border-b sticky top-0 z-[1000]">
           <img src="/images/TOPBAR.svg" className="w-full h-2 object-cover" />
            <nav className="px-10 lg:px-20 py-5 flex items-center justify-between">
                <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-5">
                        <img src="/images/UB-LOGO.svg" className="w-14 sm:w-16 object-cover" />
                        <h1 className="tracking-widest text-justify text-3xl sm:text-5xl font-bold">UPBOX</h1>
                    </span>
                </div>

                <ul className='hidden lg:flex lg:items-center space-x-6'>
                    <Link href='/#this-month' className="">
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
                <div className="lg:hidden hover:cursor-pointer hover:scale-110">
                    <AiOutlineMenu size={30} />
                </div>
            </nav>
        </header>
    )
}

export default Header