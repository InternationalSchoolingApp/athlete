import Clock from '@components/Clock';
import CollegesMarquee from '@components/CollegesMarquee';
import { FlipWords } from 'component/FlipText';
import PPCForm from 'component/PPCForm';
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
    const content = [
        {
            svg: ImagePath.HONORS_ICON,
            alt: "honors",
            count: "14000+",
            name: "Students",
        },
        {
            svg: ImagePath.MAP_ICON,
            alt: "map",
            count: "135+",
            name: "Countries",
        },
        {
            svg: ImagePath.PROFILE_ICON,
            alt: "profile",
            count: "600+",
            name: "Teachers",
        },
        {
            svg: ImagePath.STUDENT_ATHLETE,
            alt: "athlete",
            count: "3500+",
            name: "Student Athletes",
        },
    ];
    return (
        <div className="relative max-w-screen overflow-x-hidden">
            <div className='w-full z-20 bg-white/50 backdrop-blur sticky top-0 right-0 left-0 shadow'>
                <header className='r-w  flex items-center justify-between py-2 '>
                    <Image priority alt='logo' src={ImagePath.LOGO} width={250} height={40} className=' w-[200px] md:w-[250px] h-auto' />
                    <Link href={"#form"} className='btn bg-blue-600 text-white hover:text-blue-600 duration-300 uppercase'>Talk to us</Link>
                </header>
            </div>
            <Image priority alt='globe' className='absolute md:opacity-80 -z-10 animate-spin right-0  w-[300px] h-[300px] md:w-[800px] md:h-[800px] top-0 ' src={"/globe.png"} width={400} height={400} />
            <div className='z-10 r-w lg:flex lg:items-center gap-5 py-4 md:py-12'>
                <div className='w-full mb-4 lg:mb-0 relative'>
                    <h2 className='mb-2 font-bold text-4xl md:text-5xl text-blue-600'>#Top Rated </h2>
                    <h1 className='text-blue-700 text-3xl md:text-4xl font-semibold'>American Online School</h1>
                    <h2 className=' font-semibold text-xl md:text-3xl text-blue-600'>for Student Athletes</h2>
                    <Image priority alt='shout' className='absolute w-4 md:w-[30px] h-auto contrast-20 saturate-20 grayscale brightness-50 -left-3 md:-left-10 top-[2px] md:-top-2' src={"/shout.png"} width={30} height={30} />
                    <h3 className='pl-2 md:pl-0 text-2xl font-semibold  md:text-3xl text-blue-900  '>Your<FlipWords duration={1000} words={words} /></h3>
                    <h3 className='text-5xl font-black mb-4 bg-gradient-to-r from-[#001FCF] to-red-600 inline-block text-transparent bg-clip-text g-t'>Upto 20% Discount</h3>
                    <p className='mb-2 md:mb-6 text-justify text-sm '>International Schooling, accredited by Cognia, USA and approved by National Collegiate Athletic Association (NCAA) and College Board is the most recommended and trusted online school. We are serving over 3500 student athletes from 135+ countries, playing more than 50 sports.</p>
                    <Link href={"#form"} className='btn bg-blue-600 text-white hover:text-blue-600 duration-300'>Lets Connect</Link>
                </div>
                <div>
                    <div className='mb-4 grid grid-cols-2  gap-3 md:text-xl font-bold'>
                        <div className='flex items-center gap-2 px-4 py-3 bg-white border rounded-lg shadow-lg border-b-4 border-b-red-400'>
                            <Image priority alt='google-logo' src={"/googlelogo.png"} width={100} height={200} className='h-auto' />
                            <p >4.8</p>
                        </div>
                        <div className='flex items-center gap-2 px-4 py-3 bg-white border rounded-lg shadow-lg border-b-4 border-b-green-400'>
                            <Image priority alt='trust-logo' src={"/trustpilot_1.svg"} width={100} height={200} className='h-auto' />
                            <p >4.9</p>
                        </div>
                    </div>
                    <VideoElement image={ImagePath.ABOUT_IMG} url={"https://www.youtube.com/embed/EMvEtLBud8A?si=eoRDBiWxd4Err3wE&autoplay=1"} />
                </div>
            </div>
            <div className='md:border-y md:backdrop-blur-sm md:mt-8 lg:mt-0'>
                <div className="r-w grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-4 lg:gap-10 py-2 px-2">
                    <div className='md:-rotate-6 md:origin-left mb-2 md:mb-0 font-bold text-blue-800 text-5xl md:text-2xl col-span-2 md:col-span-1 text-end md:text-start'>
                        <h2 >Approved</h2>
                        <h2 >Accredited</h2>
                        <h2 >Recognized</h2>
                    </div>
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
                        alt="advanced-logo"
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
            <div className='grid md:grid-cols-2 gap-4 r-w py-6 content-center'>
                <div className='w-full h-max self-center'>
                    <h2 className='text-4xl md:text-6xl bg-gradient-to-r from-[#001FCF] to-red-600 text-transparent bg-clip-text g-t text-center md:text-start font-black mb-3 md:mb-6'>Scholarships</h2>
                    <h2 className='text-2xl md:text-4xl font-black py-4 px-4 origin-left mb-2 md:mb-0 md:hover:rotate-0 md:duration-300 md:rotate-2  border border-blue-300 bg-blue-50 text-blue-800 rounded-xl'>10% Province Level</h2>
                    <h2 className='text-2xl md:text-4xl font-black py-4 px-4 origin-left mb-2 md:mb-0 border border-blue-300 bg-blue-200 text-blue-800 rounded-xl'>15% National Level</h2>
                    <h2 className='text-2xl mb-4 md:text-4xl font-black py-4 px-4 origin-left md:hover:rotate-0 md:duration-300 md:-rotate-3  border bg-blue-300 text-blue-900 rounded-xl'>20% International Level</h2>
                    <Link href={"#form"} className='shadow  w-full md:w-max text-center btn bg-blue-600 text-white hover:text-blue-600 duration-300 '>Connect with us</Link>
                </div>
                <Image priority alt='vector-logo' width={500} height={500} src={"/583_c.webp"} className='w-full h-auto mix-blend-multiply'></Image>

            </div>

            <div className='py-2 r-w grid md:grid-cols-3 gap-4 '>
                <div className='md:col-span-2 '>
                    <h2 className='mb-2 md:mb-6 font-bold text-4xl md:text-5xl bg-gradient-to-r from-[#001FCF] to-red-600 text-transparent bg-clip-text g-t inline-block'>Why Choose Us?</h2>
                    <div className='  flex flex-col md:flex-row items-center  md:gap-5 py-2 '>
                        <div className='w-[108px]  h-[108px] hidden md:flex items-center justify-center rounded-xl border shadow bg-gray-50 p-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className='w-[90px] h-auto' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /><path d="M6 8h2" /><path d="M6 12h2" /><path d="M16 8h2" /><path d="M16 12h2" /></svg>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-blue-600'>Customized Learning:</h3>
                            <p className='text-justify text-xs md:text-[16px] md:leading-[1.2em]'>We understand every student has different learning needs and varying schedules. Acknowledging the diverse learning requirements of every student, International Schooling tailors lesson plans and study hours to suit their individual needs.</p>
                        </div>
                    </div>
                    <div className='  flex flex-col md:flex-row items-center  md:gap-5 py-2 '>
                        <div className='w-[108px]  h-[108px] hidden md:flex items-center justify-center rounded-xl border shadow bg-gray-50 p-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className='w-[90px] h-auto' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-blue-600'>Trained and Certified Teachers:</h3>
                            <p className='text-justify text-xs md:text-[16px] md:leading-[1.2em]'>International Schooling has over 600+ teachers from over 50 counties, speaking 40+ languages who have extensive experience and expertise in their respective fields.</p>
                        </div>
                    </div>
                    <div className='  flex flex-col md:flex-row items-center  md:gap-5 py-2 '>
                        <div className='w-[108px]  h-[108px] hidden md:flex items-center justify-center rounded-xl border shadow bg-gray-50 p-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className='w-[90px] h-auto' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" /><path d="m16 12 2 2 4-4" /><path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" /></svg>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-blue-600'>American Curriculum:</h3>
                            <p className='text-justify text-xs md:text-[16px] md:leading-[1.2em]'>International Schooling offers American Curriculum from grades KG-12 and awards the prestigious American High School Diploma. Our academic programs are designed to prepare your child for success in college and beyond.</p>
                        </div>
                    </div>
                    <div className='mb-4  flex flex-col md:flex-row items-center  md:gap-5 py-2'>
                        <div className='w-[108px]  h-[108px] hidden md:flex items-center justify-center rounded-xl border shadow bg-gray-50 p-4'>
                            <Clock />
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-blue-600'>Time Flexibility:</h3>
                            <p className='text-justify text-xs md:text-[16px] md:leading-[1.2em]'>The flexibility offered by International Schooling caters to varied schedules, fosters personalized learning environments, adjusts to individual learning paces and, accommodates the diverse learning styles of its students.</p>
                        </div>
                    </div>
                </div>
                <div id='form'>
                    <h2 className='font-bold text-3xl text-blue-800 text-center'>Fill this form</h2>
                    <p className='mb-2 text-sm text-center'>To Talk to our expert Academic Counsellor</p>
                    <PPCForm />
                </div>
            </div>
            <div className=" r-w grid grid-cols-2   lg:grid-cols-4 lg:divide-x  lg:divide-blue-700 bg-blue-600 mt-10 p-4 md:p-10  justify-between items-center rounded-3xl gap-4 lg:gap-0">
                {content.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center w-full">
                        <Image priority
                            width={200}
                            height={200}
                            src={item.svg}
                            alt={item.alt}
                            className="w-10 mx-auto mb-2"
                        />
                        <p className="text-white font-extrabold text-3xl lg:text-4xl text-center">
                            {item.count}
                        </p>
                        <p className="text-white font-medium lg:text-xl text-center">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
            <div className='r-w grid md:grid-cols-3 mb-8 items-center gap-2 md:gap-12 py-6'>
                <div className='w-full md:col-span-2'>
                    <h2 className='text-blue-600 mb-3 font-bold text-xl md:text-2xl'>The Right School For <span className='text-5xl bg-gradient-to-r from-[#001FCF] to-red-600 text-transparent bg-clip-text g-t'><br />Future Champions :</span></h2>
                    <p className='text-justify mb-2 text-sm '>International Schooling, accredited by Cognia is a KG-12 American online School. With a diverse community of students from over 135 countries, International Schooling is helping thousands of students achieve their dreams without sacrificing their education.</p>
                    <ul className='list-disc font-mono space-y-2 mb-4 text-sm text-justify'>
                        <li>Over <span className='text-green-600'>3500 athletes from our student community playing</span> at International, National and Province levels.</li>
                        <li>We offer <span className='text-green-600'>free counselling on sports psychology and injury management</span> to our student athletes.</li>
                        <li>We help our student athletes balance their <span className='text-green-600'>academics and training perfectly.</span></li>
                        <li>We customize lesson plans and study hours to help our young sportspersons <span className='text-green-600'>excel in academics.</span></li>
                    </ul>
                    <Link href={"#form"} className='shadow  w-full md:w-max text-center btn bg-blue-600 text-white hover:text-blue-600 duration-300 '>Connect with us</Link>
                </div>
                <div>
                    <Image priority width={400} height={400} src={ImagePath.HERO_IMG} alt='hero-image' className='h-auto w-full'></Image>
                    <div className='-mt-7 text-center bg-gradient-to-r from-[#001FCF] to-red-600 py-2 px-4 rounded-xl text-white origin-left  -rotate-6'>
                        <h2 className='text-2xl font-black '>Ours Champions</h2>
                        <p>Winning <b>GOLD Medals</b> &  doing perfect in academics</p>
                    </div>
                </div>
            </div>
            <div className='r-w py-6'>
                <h2 className='mb-4 font-bold md:text-2xl text-center bg-gradient-to-r from-[#001FCF] to-red-600 text-transparent bg-clip-text g-t'>OUR STUDENTS HAVE JOINED TOP COLLEGES & UNIVERSITIES ACROSS THE GLOBE</h2>
                <CollegesMarquee />
            </div>
            {/* <div className='w-full py-6 md:pt-24 md:pb-12 mb-4 bg-gradient-to-r from-blue-600 to-blue-800'>
                <div className='r-w text-center relative flex items-center justify-center flex-col'>
                    <h2 className='mb-4 font-black text-white text-xl md:text-2xl'>MAKE THE RIGHT CHOICE FOR YOUR CHILD & FULFILL THEIR DREAMS</h2>
                    <h2 className='-top-12 opacity-5 font-black text-nowrap overflow-hidden  hidden md:block text-white scale-[2] text-2xl absolute'>MAKE THE RIGHT CHOICE FOR YOUR CHILD & FULFILL THEIR DREAMS</h2>
                    <h2 className='-top-8 opacity-10 font-black text-nowrap overflow-hidden  hidden md:block text-white scale-150 text-2xl absolute'>MAKE THE RIGHT CHOICE FOR YOUR CHILD & FULFILL THEIR DREAMS</h2>
                    <h2 className='-top-4 opacity-15 font-black text-nowrap overflow-hidden  hidden md:block text-white scale-125 text-2xl absolute'>MAKE THE RIGHT CHOICE FOR YOUR CHILD & FULFILL THEIR DREAMS</h2>
                    <Link className='btn' href={"#form"} >Contact Now</Link>
                </div>
            </div> */}
            <div className='r-w py-6'>
                <h2 className='mb-4 font-bold md:text-3xl text-center bg-gradient-to-r from-[#001FCF] to-red-600 text-transparent bg-clip-text g-t'>HEAR FROM OUR HAPPY PARENTS</h2>
                <div className='grid  md:grid-cols-3 gap-3'>
                    <div className='w-full p-4 hover:shadow-xl duration-300 flex flex-col  border rounded-xl bg-gray-100'>
                        <p className='text-sm mb-2 text-justify flex-1'>This is the first experience with International Schooling, and me and my 2 kids are happy with it. Both kids are 12 and 9 years old and have already experienced the online school model while the covid time. Both are very happy with the curriculum, teachers and the One-To-One teaching method. Thank you International Schooling.</p>
                        <h3 className='font-semibold'>-Riyad Bahloul</h3>
                    </div>
                    <div className='w-full p-4 hover:shadow-xl duration-300 flex flex-col  border rounded-xl bg-gray-100'>
                        <p className='text-sm text-justify flex-1'>As an expat in UAE for the last 5 years, I wanted a ‘real’ American School for my son and International Schooling is providing me exactly that… in fact much more than I expected. Parent to parent, I would recommend International Schooling without a doubt.</p>
                        <h3 className='font-semibold'>-Daniel Henderson</h3>
                    </div>
                    <div className='w-full p-4 hover:shadow-xl duration-300 flex flex-col  border rounded-xl bg-gray-100'>
                        <p className='text-sm text-justify flex-1'>My daughter is in Grade 10 at International Schooling. She wants to join a US university after completing Grade 12 and aspires to become an architect. After joining International Schooling, she is getting better academic scores and is more confident about fulfilling her dream. Many many thanks to International Schooling</p>
                        <h3 className='font-semibold'>-Salwa Bassam</h3>
                    </div>
                </div>
            </div>

            <div className="e-card border playing r-w px-2 md:px-4 flex flex-col !mb-4 justify-center items-center bg-blue-800 ">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <h2 className="text-center text-sm mb-2 md:text-2xl font-bold z-50 text-white">
                    MAKE THE RIGHT CHOICE FOR YOUR CHILD & FULFILL THEIR DREAMS
                </h2>
                <Link href={"#form"} className="btn z-50">
                    Talk to us
                </Link>
            </div>
            <div className='bg-gray-100 py-4'>
                <div className='r-w text-xs md:text-sm text-center font-mono'>
                    <p>Copyright © {new Date().getFullYear()} - International Schooling </p>
                </div>
            </div>
        </div>
    )
}

export default Page