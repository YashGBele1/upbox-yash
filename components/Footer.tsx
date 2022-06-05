import { AiOutlineInstagram, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'
import { FaSnapchatSquare } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <section className="m-3 sm:m-5 p-7 sm:p-14 bg-[#EEEEEE] border-2 rounded-lg border-[#C4C4C4]">
                <div className='flex items-center justify-between'>
                    <div className="flex items-center space-x-5">
                        <img src="/images/UB-LOGO.svg" className="w-10 sm:w-12" />
                        <h1 className="tracking-widest text-justify text-2xl sm:text-3xl font-bold">UPBOX</h1>
                    </div>

                    <div className='opacity-0 sm:opacity-100 flex space-x-3'>
                        <AiOutlineInstagram size={40} /> <AiFillFacebook size={40} /> <AiFillTwitterSquare size={40} /> <FaSnapchatSquare size={40} />
                    </div>
                </div>

                <div className="mt-12 border-b border-[#C4C4C4]" />

                <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div>
                        <h3 className='py-1 sm:py-2 text-lg sm:text-xl font-semibold'>UPBOX</h3>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Upbox Bag</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Upbox Box Platinum</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Upbox Box VIP</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Deals</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Seasonal Items</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Upbox Promise</p>
                    </div>
                    <div>
                        <h3 className='py-1 sm:py-2 text-lg sm:text-xl font-semibold'>Find Us On</h3>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Instagram</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Facebook</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>TikTok</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>SnapChat</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Twiter</p>
                    </div>
                    <div>
                        <h3 className='py-1 sm:py-2 text-lg sm:text-xl font-semibold'>Product</h3>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Get the App</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Loyalty Program</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Affiliates</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Press</p>
                    </div>
                    <div>
                        <h3 className='py-1 sm:py-2 text-lg sm:text-xl font-semibold'>Help</h3>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Returns</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>FAQ</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Contact</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Community</p>
                        <p className='py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-600'>Videos</p>
                    </div>
                </div>

                <div className="mt-12 border-b border-[#C4C4C4]" />

                <div className='pt-10 flex-col space-y-2'>
                    <div className='flex space-x-10'>
                        <p className='py-1 text-sm sm:text-base font-semibold text-gray-500'>Terms</p>
                        <p className='py-1 text-sm sm:text-base font-semibold text-gray-500'>Privacy Policy</p>
                    </div>
                    <p className='py-1 text-sm sm:text-base font-semibold text-gray-500'>© 2020 Quest AI. Upbox is a Sample Project and open source design project free for personal and commercial use.</p>
                </div>
            </section>
        </div>
    )
}

export default Footer