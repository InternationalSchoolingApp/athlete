import { FlipWords } from 'component/FlipText';
import VideoElement from 'component/VideoElement';
import ImagePath from 'constant/ImagePath';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: "School for Student Athletes - NCAA Approved Online School",
    description:
        "NCAA approved online school offering flexible education to help student athletes succeed academically and athletically. Start your journey today!",
    robots: "noindex,nofollow",
    referrer: "no-referrer-when-downgrade",
};

const Page = () => {
    const words = ["School", "Location", "Time"]
    return (
        <div className="min-h-screen relative max-w-screen overflow-x-hidden">
            <div className='w-full z-20 bg-white/50 backdrop-blur sticky top-0 right-0 left-0 shadow'>
                <header className='r-w  flex items-center justify-between py-2 '>
                    <Image src={ImagePath.LOGO} width={250} height={40} className=' w-[200px] md:w-[250px] h-auto' />
                    <Link href={"#form"} className='btn bg-blue-600 text-white hover:text-blue-600 duration-300'>Enroll Now</Link>
                </header>
            </div>
            <Image className='absolute opacity-50 -z-10 animate-spin right-0 md:left-0 w-[300px] h-[300px] md:w-[800px] md:h-[800px] top-0 ' src={"/globe.png"} width={400} height={400} />
            <div className='z-10 r-w lg:flex lg:items-center gap-5 py-6'>
                <div className='w-full mb-4 lg:mb-0 relative'>
                    <Image className='absolute w-4 md:w-[30px] h-auto contrast-20 saturate-20 grayscale brightness-50 -left-3 md:-left-10 top-[2px] md:-top-2' src={"/shout.png"} width={30} height={30} />
                    <h3 className='pl-2 md:pl-0 text-2xl font-semibold  md:text-3xl text-blue-900  '>Your<FlipWords duration={1000} words={words} /></h3>
                    <h2 className='mb-2 font-bold text-4xl md:text-5xl text-blue-600'>#Top Rated.</h2>
                    <h1 className='text-blue-700 text-xl md:text-3xl font-semibold'>American Online School</h1>
                    <h2 className='mb-2 font-semibold text-3xl md:text-5xl text-blue-600'>for Student Athletes</h2>
                    <h3 className='text-5xl font-black mb-4 bg-gradient-to-r from-[#001FCF] to-red-600 inline-block text-transparent bg-clip-text g-t'>Upto 20% Scholarship</h3>
                    <p className='mb-2 md:mb-6 text-justify'>International Schooling, accredited by Cognia, USA and approved by National Collegiate Athletic Association (NCAA) and College Board is the most recommended and trusted online school. We are serving over 3500 student athletes from 135+ countries, playing more than 50 sports.</p>
                    <Link href={"#form"} className='btn bg-blue-600 text-white hover:text-blue-600 duration-300'>Lets Connect</Link>
                </div>
                <div>
                    <div className='mb-4 grid grid-cols-2 md:mt-0 gap-3 md:text-xl font-bold'>
                        <div className='flex items-center gap-2 px-4 py-3 bg-white border rounded-lg shadow-lg border-b-4 border-b-red-400'>
                            <Image src={"/googlelogo.png"} width={100} height={200} className='h-auto' />
                            <p >4.8</p>
                        </div>
                        <div className='flex items-center gap-2 px-4 py-3 bg-white border rounded-lg shadow-lg border-b-4 border-b-green-400'>
                            <Image src={"/trustpilot_1.svg"} width={100} height={200} className='h-auto' />
                            <p >4.9</p>
                        </div>
                    </div>
                    <VideoElement image={ImagePath.ABOUT_IMG} url={"https://www.youtube.com/embed/EMvEtLBud8A?si=eoRDBiWxd4Err3wE&autoplay=1"} />
                </div>
            </div>
            <div className='my-4'>
                <h2></h2>
                <div className="r-w grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 lg:gap-10 py-2 px-2">
                    <Image
                        width={500}
                        height={500}
                        src={"/cognia.webp"}
                        priority
                        alt="cognia-logo"
                        className="w-[120px] md:w-[160px] mx-auto"
                    />
                    <Image
                        width={500}
                        height={500}
                        src={ImagePath.NCAA_LOGO}
                        priority
                        alt="ncaa-logo"
                        className="w-[160px] mx-auto"
                    />
                    <Image
                        width={500}
                        height={500}
                        src={"/advancED.webp"}
                        priority
                        alt="ncaa-logo"
                        className="w-[160px] mx-auto"
                    />
                    <Image
                        width={500}
                        height={500}
                        src={ImagePath.COLLEGEBOARD_LOGO}
                        priority
                        alt="college-logo"
                        className="w-[160px] mx-auto"
                    />
                </div>
            </div>

        </div>
    )
}

export default Page