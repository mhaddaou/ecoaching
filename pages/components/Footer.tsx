/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import {PiCopyright} from 'react-icons/pi'
import {TbGps} from 'react-icons/tb'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiSolidTimeFive} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () =>{
    return (
        <section id="footer">
            <div className="bg-white text-slate-700 relative">
                <div>
                    <div className=" py-10 px-20 ">
                    <div className="grid gap-10 md:gap-20 md:grid-cols-2 xl:grid-cols-3 pb-10 ">
                        
                        <div className="space-y-6">
                            {/* <h4 className="font-bold text-lg capitalize">about app</h4> */}
                            <img className=' w-52 h-52 sm:w-32 sm:h-32 md:w-20 md:h-20' src="/images/logo.png" alt="" />
                            <p className='text-eco  font-extrabold text-xl tracking-wider leading-relaxed'>ECOACHING.MA</p>
                          <p className=' tracking-wide text-lg font-semibold leading-relaxed'>Coaching - Accompaniment - Advice</p>
                            <div className=" flex gap-4 items-center">
                                
                                <div className="flex gap-4 items-center">
                                <Link href="">
                                    <FaFacebookF className="h-6 w-7 text-eco hover:opacity-50 transition-all duration-500" />
                                </Link>
                                <Link href="#" target="_blank">
                                <AiFillInstagram className="h-8 w-8 text-eco hover:opacity-50 transition-all duration-500 " />
                                </Link>
                                <Link href="#" target="_blank">
                                <AiOutlineTwitter className="h-8 w-8 text-eco hover:opacity-50 transition-all duration-500 " />
                                </Link>
                                <Link href="#" target="_blank">
                                <BsWhatsapp className="h-7 w-7 text-eco hover:opacity-50 transition-all duration-500 " />
                                </Link>
                                <Link href="#" target="_blank">
                                <BsLinkedin className="h-7 w-7 text-eco hover:opacity-50 transition-all duration-500 " />
                                </Link>
                               
                                
                                

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="flex pt-3 gap-10">
                        <div className="w-1/2 space-y-6 ">
                                <div >
                                    <p className="font-bold text-xl ">Services</p>
                                </div>
                                <div className=" flex flex-col gap-2">
                                    <Link className="font-semibold underline hover:opacity-50  hover:no-underline transition-all duration-500 ease-in-out" href="#">Business Coaching</Link>
                                    <Link className="font-semibold underline hover:opacity-50  hover:no-underline transition-all duration-500 ease-in-out" href="#">Individual Coaching</Link>
                                    <Link className="font-semibold underline hover:opacity-50  hover:no-underline transition-all duration-500 ease-in-out" href="#">Workshops</Link>
                                </div>
                            </div>
                            <div className="space-y-6 w-1/2">
                                <div >
                                    <h4 className="font-bold text-xl capitalize">quick links</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link className="font-semibold opacity-50   " href="#">Welcome</Link>
                                    <Link className="font-semibold underline hover:opacity-50  hover:no-underline transition-all duration-500 ease-in-out " href="#">About</Link>
                                    <Link className="font-semibold underline hover:opacity-50  hover:no-underline transition-all duration-500 ease-in-out " href="#">WorkShops</Link>
                                    <Link className="font-semibold underline hover:opacity-50  hover:no-underline transition-all duration-500 ease-in-out " href="#">Our Packages</Link>
                                    <Link className="font-semibold underline hover:opacity-50  hover:no-underline transition-all duration-500 ease-in-out " href="#">Items</Link>
                                    <Link className="font-semibold underline hover:opacity-50  hover:no-underline transition-all duration-500 ease-in-out " href="#">Contact</Link>

                                </div>
                            </div>
                            
                        </div>
                        <div className="space-y-6 pt-3 mx-auto ">
                            <div >
                                <p className="font-bold text-xl">Contact Us</p>
                            </div>
                            <div className="space-y-5">
                               
                                <p>  <TbGps className="w-10 h-10 inline-block text-eco"/>  <span className="leading-relaxed capitalize text-lg pl-2">Technopark, Ave Mohammed V, Tangier 90000, Morocco</span></p>
                                <p>  <MdEmail className="w-10 h-10 inline-block text-eco"/>  <span className="leading-relaxed capitalize text-lg pl-2">contact@ecoaching.ma</span></p>
                                <p>  <BsFillTelephoneFill className=" w-9 h-9 inline-block text-eco"/>  <span className="leading-relaxed capitalize text-lg pl-2">+212 775 648 584</span></p>
                                    <p>  <BiSolidTimeFive className="w-10 h-10 inline-block text-eco"/>  <span className="leading-relaxed capitalize text-lg pl-2">Sat-Thu 9 a.m. - 6 p.m.</span></p>
                                {/* <div className="w-[80%] h-12 bg-white rounded-md flex">
                                    <div className="h-full w-[85%]">
                                        <input className="h-full w-full bg-white rounded-l-md text-slate-800 font-semibold px-2 focus:outline-none" 
                                        type="text" placeholder="Enter Your Email"
                                         />
                                    </div>
                                    <div className=" h-full w-[15%] bg-color-secondary cursor-pointer flex justify-center rounded-r-md items-center">
                                        <button><FaGreaterThan className="bg-color-secondary h-full"/></button>
                                    </div>
                                    <div></div>
                                </div> */}
                            </div>
                           
                        </div>

                    </div>

                </div>
                </div>
                
                {/* <div className=" md:w-1/2  m-auto text-center pb-10 bg-">
                    <p className=" font-semibold">2023 <PiCopyright className=" inline text-lg"/> Mhaddaou, All Righte Reserved</p>
                </div> */}

            </div>
        </section>
    );
}

export default Footer;