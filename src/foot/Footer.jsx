import { useNavigate } from 'react-router-dom';
import brendLogo from '../../public/other-images/logoBrend.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const myPhoneNumber = '+998 97 837 39 79';
    const myPhoneNumber2 = '+998 93 383 75 85';
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/contacts");
    }

    return (
        <div>
            <div className='p-4 mt-32 
            tablet:mt-20
            miniTablet:mt-16
            '>
                <div className='grid grid-cols-4 place-items-center items-start pr-20
                tablet:grid-cols-2 tablet:gap-10 tablet:pr-2
                miniTablet:grid-cols-2 miniTablet:gap-4 miniTablet:pr-2
                bigPhone:grid-cols-1 bigPhone:pr-0  bigPhone:place-items-start
                phone:grid-cols-1 phone:pr-0 phone:place-items-start
                miniPhone:grid-cols-1 miniPhone:pr-0 miniPhone:place-items-start
                
                '>
                    <div>
                        <a href={'/'}>
                            <img className='w-80' src={brendLogo} alt={t('brendLogo picture')} />
                        </a>
                        <p className='mt-16 text-lg'>
                            {t('Bukhara Natural Product has been a company that produces cotton fabrics for many years for use all over the world.')}
                        </p>
                    </div>

                    <div className='ml-[-5rem] 
                    tablet:ml-[0rem]
                    miniTablet:ml-[0rem]
                    bigPhone:ml-[0rem]
                    phone:ml-[0rem]
                    miniPhone:ml-[0rem]

                    '>
                        <h1 className='text-xl font-bold 
                        bigPhone:mt-8
                        phone:mt-8
                        miniPhone:mt-7
                        '>{t('Menu')}</h1>
                        <ul className='flex flex-col items-start justify-start gap-2 text-xl mt-16 
                        bigPhone:mt-4
                        phone:mt-4
                        miniPhone:mt-4
                        '>
                            <li className='hover:underline underline-offset-2 hover:text-red-500'>
                                <a href={"/"}>{t('Home')}</a>
                            </li>
                            <li className='hover:underline underline-offset-2 hover:text-red-500'>
                                <a href={"collection"}>{t('Collection')}</a>
                            </li>
                            <li className='hover:underline underline-offset-2 hover:text-red-500'>
                                <a href={"about"}>{t('About Us')}</a>
                            </li>
                            <li className='hover:underline underline-offset-2 hover:text-red-500'>
                                <a href={"contacts"}>{t('Contacts')}</a>
                            </li>
                        </ul>
                    </div>

                    <div className='ml-[-10rem]
                    miniTablet:ml-[-5rem]
                    bigPhone:ml-[0rem]
                    phone:ml-[0rem]
                    miniPhone:ml-[0rem]
                    '>
                        <h1 className='text-xl font-bold 
                        bigPhone:mt-8
                        phone:mt-8
                        miniPhone:mt-7
                        '>{t('Contacts')}</h1>
                        <div className='flex flex-col items-start justify-start gap-2 mt-16 
                        bigPhone:mt-4
                        phone:mt-4
                        miniPhone:mt-4
                        '>
                            <p>{t('Bukhara, st. Alpomysh 80.')}</p>
                            <p>{t('Bnpuz@bk.ru')}</p>
                            <p>{t('info@bnpfabric.com')}</p>
                            <a href={`tel:${myPhoneNumber}`}>
                                +998 97 837 39 79
                            </a>
                            <a href={`tel:${myPhoneNumber2}`}>
                                +998 93 383 75 85
                            </a>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-xl font-bold 
                        bigPhone:mt-8
                        phone:mt-8
                        miniPhone:mt-7
                        '>{t('Subscribe to our email')}</h1>
                        <form onSubmit={handleSubmit} className='mt-16 
                        bigPhone:mt-4
                        phone:mt-4
                        miniPhone:mt-4
                        '>
                            <input
                                className='py-4 px-8 pr-40 text-xl bg-gray-200 outline-none rounded-full
                                miniDesktop:pr-28
                                bigTablet:pr-28 bigPhone:px-6
                                tablet:pr-20 tablet:px-4
                                miniTablet:pr-10 miniTablet:px-3 miniTablet:py-3
                                bigPhone:pr-16
                                phone:pr-8 phone:py-2
                                miniPhone:pr-4 miniPhone:py-2
                                '
                                type="email"
                                required
                                placeholder={t('Enter Your Email')}
                            />
                            <button
                                className='text-white bg-red-600 hover:text-white relative z-10 top-[-3rem] left-72 hover:bg-black duration-500 transition-all py-2 px-6 rounded-full
                                miniDesktop:left-60
                                bigTablet:left-56
                                tablet:left-48
                                miniTablet:left-40 miniTablet:px-4 miniTablet:py-1 miniTablet:top-[-42px]
                                bigPhone:left-48 bigPhone:text-sm 
                                phone:left-0 phone:text-base phone:top-[1rem]
                                miniPhone:left-0 miniPhone:text-base miniPhone:top-[1rem]
                                '
                            >
                                {t('Subscribe')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='mt-16 bg-black text-gray-600 px-10 py-6 
            bigPhone:mt-2
            phone:mt-2 phone:px-4 phone:py-4
            miniPhone:mt-1 miniPhone:px-3 miniPhone:py-3
            '>
                <h1>
                    {t('© 2024 LLC BUKHARA NATURAL PRODUCT. All rights reserved.')}
                </h1>
            </div>
        </div>
    );
}

export default Footer;
