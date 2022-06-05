import Header from "./Header"

function Content() {
  return (
    <div>
      <section className="bg-[#F5F8FF]">
        <div className="pt-5 px-10 xl:px-20 xl:flex xl:justify-between">
          <div className='space-y-7 mt-5'>
            <h1 className='max-w-lg text-3xl sm:text-5xl font-serif'>Look good without leaving your house.</h1>
            <h2 className="max-w-sm text-sm sm:text-xl font-semibold text-gray-500">Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</h2>
            <button className="hover:scale-105 text-sm font-bold tracking-widest uppercase border-4 border-[#EF8094] rounded-3xl px-8 py-2">sign up</button>
          </div>

          <img src="/images/BOX.png" className="h-80 lg:h-full mx-5 lg:mx-10 my-5 object-cover" />
        </div>
      </section>

      <section className="flex justify-center mt-10 mb-5">
        <div className="grid grid-cols-1 justify-items-center gap-1 pb-7">
          <h1 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-serif">Pick your plan</h1>
          <img src="/images/UNDERLINE.svg" />
        </div>
      </section>

      <section className="pb-10 px-10 lg:px-20 gap-10 lg:gap-20 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[url('/images/CURL-BG.svg')] bg-cover grid grid-cols-1 justify-items-center gap-5 px-5 sm:px-10 py-10 sm:py-20 border-8 rounded-xl border-gray-200">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wider">Monthly</h1>
          <h1 className="text-4xl lg:text-5xl">$18/mo</h1>
          <button className="mt-2 hover:scale-105 text-xs sm:text-sm font-bold tracking-widest rounded-3xl px-8 py-3 uppercase bg-[#EF8094] text-white">find your box</button>
        </div>

        <div className="bg-[url('/images/CURL-BG2.svg')] bg-cover grid grid-cols-1 justify-items-center gap-5 px-5 sm:px-10 py-10 sm:py-20 border-8 rounded-xl border-gray-200">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wider">Yearly</h1>
          <h1 className="text-4xl lg:text-5xl">$15/mo</h1>
          <button className="mt-2 hover:scale-105 text-xs sm:text-sm font-bold tracking-widest rounded-3xl px-8 py-3 uppercase bg-[#EF8094] text-white">find your box</button>
        </div>
      </section>

      <p className="px-7 md:text-center text-sm sm:text-xl mb-10 font-semibold text-gray-500">Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</p>

      <section className="flex justify-center mt-10 mb-5">
        <div className="grid grid-cols-1 justify-items-center gap-1 pb-7">
          <h1 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-serif">How it works?</h1>
          <img src="/images/UNDERLINE.svg" />
        </div>
      </section>

      <section className="sm:flex justify-center space-x-10 pb-16">
        <div>
          <img src="/images/PERSON.png" />
        </div>
        <div className='space-y-5 py-10 pr-7'>
          <h1 className='max-w-lg text-3xl sm:text-4xl font-serif'>Setup your profile & preferences</h1>
          <h2 className="max-w-sm text-sm sm:text-lg font-semibold text-gray-500">Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</h2>
        </div>
      </section>

      <section className="sm:flex justify-center space-x-10 pb-16">
        <div>
          <img src="/images/BOX2.jpg" />
        </div>
        <div className='space-y-5 py-10 pr-7'>
          <h1 className='max-w-lg text-3xl sm:text-4xl font-serif'>Review your custom box</h1>
          <h2 className="max-w-sm text-sm sm:text-lg font-semibold text-gray-500">Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.</h2>
        </div>
      </section>

      <section className="sm:flex justify-center space-x-10 pb-10">
        <div>
          <img src="/images/PERSON2.png" />
        </div>
        <div className='space-y-5 py-10 pr-7'>
          <h1 className='max-w-lg text-3xl sm:text-4xl font-serif'>Try it on at home</h1>
          <h2 className="max-w-sm text-sm sm:text-lg font-semibold text-gray-500">Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.</h2>
        </div>
      </section>

      <section className="grid justify-center mb-20">
        <button className="hover:scale-105 text-xs sm:text-sm font-bold tracking-widest border-4 border-[#EF8094] rounded-3xl px-8 py-3 uppercase">try it for yourself</button>
      </section>

      <section className="bg-[#F5F8FF] py-16">
        <h1 className="text-center text-4xl sm:text-5xl font-serif sm:font-normal mb-10">Social Posts</h1>

        <div className="px-10 sm:px-24 grid justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="grid justify-items-start gap-1 pb-3">
            <img src="/images/img1.svg" />
            <p className="text-sm sm:text-lg font-semibold text-gray-500">How to rock the lip look that turns heads</p>
          </div>
          <div className="grid justify-items-start gap-1 pb-3">
            <img src="/images/img2.svg" />
            <p className="text-sm sm:text-lg font-semibold text-gray-500">Find the perfect shade for the season</p>
          </div>
          <div className="grid justify-items-start gap-1 pb-3">
            <img src="/images/img3.svg" />
            <p className="text-sm sm:text-lg font-semibold text-gray-500">The 5 eye shadow secrets you never knew</p>
          </div>
          <div className="grid justify-items-start gap-1 pb-3">
            <img src="/images/img4.svg" />
            <p className="text-sm sm:text-lg font-semibold text-gray-500">The pro-tips for at home hair dying</p>
          </div>
        </div>

        <div className="grid justify-center mt-14 sm:mt-20">
          <button className="hover:scale-105 text-xs sm:text-sm font-bold tracking-widest text-white bg-[#EF8094] rounded-3xl px-8 py-3 uppercase">follow us on instagram</button>
        </div>
      </section>

    </div>
  )
}

export default Content