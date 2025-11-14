import { useTranslation } from 'react-i18next'
import { FadeInSection } from "../UI/FramerAnimation";

export default function Services() {
    const { t } = useTranslation();
    
    return (
        <section id="services" className=" flex dark:bg-dark-bg dark:text-text-dark mb-20   justify-center pt-30 ">
            <FadeInSection>

                <div className=" px-4 max-w-7xl flex flex-col  ">
                    <h2 className="text-5xl text-center">{t('services.title')}</h2>
                    <ul className="flex flex-wrap h-full  gap-8 ul_steps mt-10  ">
                        <li className="flex flex-1   min-w-[300px] flex-col p-6 pb-20  bg-[#F5F5F5] dark:bg-card space-y-4 relative">
                            <p className="text-black/50 dark:text-text-dark/50 text-xs">{t('services.service1.number')}</p>
                            <h3 className="text-2xl">{t('services.service1.title')}</h3>
                            <p className="text-sm text-black/50 dark:text-text-dark/50 flex-1  leading-6">{t('services.service1.description')}</p>
                        </li>
                        <li className="flex flex-1 min-w-[300px] flex-col p-6 bg-[#F5F5F5] dark:bg-card space-y-4 relative">
                            <p className="text-black/50 dark:text-text-dark/50 text-xs">{t('services.service2.number')}</p>
                            <h3 className="text-2xl">{t('services.service2.title')}</h3>
                            <p className="text-sm text-black/50 dark:text-text-dark/50 flex-1 leading-6 ">{t('services.service2.description')}</p>

                        </li>
                        <li className="flex flex-1 min-w-[300px] flex-col p-6 bg-[#F5F5F5] dark:bg-card dark::before:bg-card space-y-4 relative">
                            <p className="text-black/50 dark:text-text-dark/50 text-xs">{t('services.service3.number')}</p>
                            <h3 className="text-2xl">{t('services.service3.title')}</h3>
                            <p className="text-sm text-black/50 dark:text-text-dark/50 flex-1 leading-6">{t('services.service3.description')}</p>

                        </li>
                    </ul>
                </div>
            </FadeInSection>

        </section >
    )
}
