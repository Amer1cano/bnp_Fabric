import quality3Sofa from '../../../public/bed-images/quality3-sofa.png';
import { useTranslation } from 'react-i18next';

const Quality3 = () => {
  const { t } = useTranslation();

  return (
    <div className="p-12 mt-40
    miniDesktop:py-6
    bigTablet:py-4
    tablet:py-4
    miniTablet:py-3
    bigPhone:py-3 bigPhone:px-4 bigPhone:mt-52
    phone:py-3 phone:px-2 phone:mt-48
    miniPhone:py-3 miniPhone:px-2 miniPhone:mt-48
    ">
      <div className="rounded-xl flex items-center justify-around hover:shadow-red-3xl transition-all duration-300 bg-gradient-to-b from-[rgb(48,126,122)] via-[rgb(67,163,158)] to-[rgb(48,126,122)] py-16
      miniDesktop:py-2
      bigTablet:py-1
      tablet:py-1
      miniTablet:py-1
      bigPhone:py-1 bigPhone:flex-col
      phone:py-1 phone:flex-col
      miniPhone:py-1 miniPhone:flex-col
      ">
        <div className='flex   
        bigPhone:flex-col-reverse
        phone:flex-col-reverse
        miniPhone:flex-col-reverse
        '>
          <div className="text-center text-white">
            <h1 className="text-9xl font-bold
            miniDesktop:text-8xl
            bigTablet:text-7xl
            tablet:text-6xl
            miniTablet:text-5xl
            bigPhone:text-4xl bigPhone:w-full bigPhone:text-center bigPhone:mt-2
            phone:text-4xl phone:w-full phone:text-center phone:mt-2
            miniPhone:text-4xl miniPhone:w-full miniPhone:text-center miniPhone:mt-2
            ">100%</h1>
            <p className="text-2xl">{t('Material quality')}</p>
          </div>
          <img className='ml-[-12rem] mt-[-20rem] mb-[-12rem]
          miniDesktop:ml-[-8rem] miniDesktop:mt-[-16rem]
          bigTablet:ml-[-6rem] bigTablet:mt-[-14rem]
          tablet:ml-[-6rem] tablet:mt-[-10rem] tablet:mb-[-8rem] 
          miniTablet:ml-[-5rem] miniTablet:mt-[-8rem] miniTablet:mb-[-6rem]
          bigPhone:ml-[0rem] bigPhone:mt-[-11rem] bigPhone:mb-[0.5rem] 
          phone:ml-[0rem] phone:mt-[-10rem] phone:mb-[0.5rem] 
          miniPhone:ml-[0rem] miniPhone:mt-[-11rem] miniPhone:mb-[0.5rem] 
          
          ' src={quality3Sofa} alt={t('Sofa image')} />
        </div>

        <div className="text-white  
        bigPhone:w-full bigPhone:text-center bigPhone:mt-6 bigPhone:px-4 bigPhone:pb-2
        phone:w-full phone:text-center phone:mt-6 phone:px-3 phone:pb-2
        miniPhone:w-full miniPhone:text-center miniPhone:mt-6 miniPhone:px-3 miniPhone:pb-2
        ">
          <h1 className="text-4xl font-bold 
          tablet:text-2xl
          miniTablet:text-xl
          bigPhone:text-xl
          phone:text-xl
          miniPhone:text-base
          ">
            {t('Bukhara Natural Product')}
          </h1>
          <p className="text-xl mt-8  
          tablet:text-lg tablet:mt-4
          miniTablet:text-sm miniTablet:mt-3
          bigPhone:text-base bigPhone:mt-3
          phone:text-lg phone:mt-3
          miniPhone:text-sm miniPhone:mt-3
          ">
            {t('has been a company that produces cotton fabrics for use all over the world for many years')}
          </p>
          <button className="py-2 px-4 mt-8 bg-white text-black text-xl hover:bg-black hover:text-white duration-500 transition-all font-medium rounded-full 
          tablet:mt-4 tablet:py-1
          miniTablet:mt-3  miniTablet:py-0.5 miniTablet:px-3 miniTablet:text-lg
          bigPhone:mt-3 bigPhone:py-1 bigPhone:px-3
          phone:mt-3 phone:py-1 phone:px-3
          miniPhone:mt-3 miniPhone:py-1 miniPhone:px-2
          ">
            {t('Collection')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quality3;
