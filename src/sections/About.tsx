import { useTranslation } from 'react-i18next'
import { FadeInSection, FadeLeftSection, FadeRightSection } from "../UI/FramerAnimation"

export default function About() {
    const { t } = useTranslation();
    
    const skills = [
        'Html', 'CSS', 'JS', 'React', 'TypeScript', 'Vite', 'React Router', 'Zustand', 'Responsive Development', 'SCSS', 'Tailwind'
    ]
    
    return (
        <section id='about' className='min-h-screen   flex justify-center  pt-30 pb-10 bg-[#F5F5F5] dark:bg-second-dark-bg dark:text-text-dark'>
            <FadeInSection>

                <div className=" mx-auto px-4 max-w-7xl flex   flex-col lg:flex-row">
                    <div className="space-y-8 max-w-3xl">
                        <h2 className='text-5xl'>{t('about.title')}</h2>
                        <div className="flex flex-col space-y-6">
                            <p>{t('about.paragraph1')}</p>
                            <p>{t('about.paragraph2')}</p>
                            <p>{t('about.paragraph3')}</p>
                        </div>
                        <div className="">
                            <h3 className='text-2xl  mb-2'>{t('about.skillsTitle')}</h3>
                            <FadeRightSection >

                                <ul className='flex flex-wrap gap-3'>

                                    {skills.map((skill, index) => (
                                        <li key={index} className='bg-white dark:bg-card px-5 py-2 text-sm'>{skill}</li>
                                    ))}

                                </ul>
                            </FadeRightSection>

                        </div>
                    </div>
                    <div className="w-full lg:max-w-[400px] p-10 border-l-6 mt-5 border-[#D4C4A8] dark:border-border-dark h-fit bg-white dark:bg-card space-y-4 flex flex-col ">
                        <blockquote className='text-2xl italic'>{t('about.quote')}</blockquote>
                        <div className="text-right text-black/50 dark:text-text-dark/50 text-sm">{t('about.quoteAuthor')}</div>
                    </div>
                </div>
            </FadeInSection>

        </section >
    )
}
