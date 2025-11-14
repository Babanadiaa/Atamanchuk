import React from 'react'
import { useTranslation } from 'react-i18next'
import Navigate from '../UI/Navigate'

import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import resume from '../assets/resume.pdf'

import { FadeInSection } from '../UI/FramerAnimation'




export default function Footer() {
    const { t } = useTranslation();

    const arrowTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }
    
    return (

        <footer id='footer' className='dark:bg-second-dark-bg   pt-20 pb-10 bg-[#F5F5F5] dark:text-text-dark'>
            <FadeInSection>

                <div className="flex flex-col items-center">
                    <div className=" max-w-6xl w-full justify-between items-center md:items-start gap-6 text-center md:text-left flex flex-col md:flex-row  px-4 border-b pb-10 ">
                        <div className="max-w-sm w-full flex   flex-col gap-6  ">
                            <h2 className='font-bold text-2xl '>{t('footer.name')}</h2>
                            <p className='text-sm text-black/50 dark:text-text-dark/50'>{t('footer.description')}</p>
                        </div>
                        <div className=" flex flex-col   gap-6">
                            <h3 className='uppercase font-bold'>{t('footer.navigate')}</h3>
                            <ul className="flex md:flex-col justify-between gap-3 text-black/50 dark:text-text-dark/50 text-sm">
                                <li><a href="#home">{t('nav.home')}</a></li>
                                <li><a href="#about">{t('nav.about')}</a></li>
                                <li><a href="#services">{t('nav.services')}</a></li>
                                <li><a href="#project">{t('nav.projects')}</a></li>
                                <li><a href="#contact">{t('nav.contact')}</a></li>
                            </ul>
                        </div>
                        <div className=" flex flex-col gap-6 ">
                            <h3 className='font-bold uppercase'>{t('footer.connect')}</h3>
                            <ul className='flex gap-4 justify-center'>
                                <li className=''><a href="https://www.linkedin.com/in/maksym-atamanchuk-435a8b352/" className='p-2 flex border border-[#D4C4A8] dark:border-border-dark hover:bg-[#D4C4A8] hover:translate-y-1 transition duration-300 ' aria-label='LinkedIn profile'><SlSocialLinkedin /></a></li>
                                <li className=''><a href="https://github.com/Babanadiaa" className='p-2 flex border border-[#D4C4A8] dark:border-border-dark hover:bg-[#D4C4A8] hover:translate-y-1 transition duration-300 ' aria-label='GitHub profile'><FiGithub /></a></li>
                                <li className=''><a href={resume} className='p-2 flex border border-[#D4C4A8] dark:border-border-dark hover:bg-[#D4C4A8] hover:translate-y-1 transition duration-300 ' aria-label='Resume' target="_blank"
                                    rel="noopener noreferrer"><FaRegFileAlt /></a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center  max-w-6xl w-full px-4 gap-4  mt-12">
                        <p className='text-sm text-black/50 dark:text-text-dark/50 '>{t('footer.rights')}</p>
                        <button className='border max-w-[300px] w-full py-1 px-5 text-sm flex cursor-pointer items-center justify-center hover:bg-[#D4C4A8] hover:translate-y-1 transition duration-300'
                            onClick={arrowTop}>{t('footer.backToTop')} <IoIosArrowRoundUp className='text-xl' /> </button>
                    </div>
                </div>
            </FadeInSection>

        </footer >

    )
}
