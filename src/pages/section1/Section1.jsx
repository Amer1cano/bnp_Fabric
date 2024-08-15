import lorry from '../../../public/section1-images/lorry.svg';
import tick from '../../../public/section1-images/tick.svg';
import headphone from '../../../public/section1-images/headphone.svg';
import payment from '../../../public/section1-images/payment.svg';
import { useTranslation } from 'react-i18next';

const Section1 = () => {
        const { t } = useTranslation();
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-1 mt-10 
      bigTablet:grid-cols-2 bigTablet:px-28 bigTablet:gap-8
      tablet:grid-cols-2 tablet:px-8 tablet:gap-4
      miniTablet:grid-cols-2 miniTablet:px-1 miniTablet:gap-2
      bigPhone:grid-cols-1 bigPhone:px-6 bigPhone:gap-4 
      phone:grid-cols-1 phone:px-2 phone:gap-4
      miniPhone:grid-cols-1 miniPhone:px-1 miniPhone:gap-3
      ">
        <div
          data-aos="fade-right"
          data-aos-delay="800"
          className="flex gap-4 items-center pt-6 border-white border-t-2 duration-200 hover:border-t-2 hover:border-red-500"
        >
          <img className="w-20 h-14
          miniDesktop:w-14
          " src={lorry} alt={t('Truck image')} />
          <span className="text-lg">
            <h1 className="font-bold">{t('Free shopping')}</h1>
            <p>{t('Free shopping on all orders')}</p>
          </span>
        </div>

        <div
          data-aos="fade-right"
          className="flex gap-4 items-center pt-6 border-t-2 border-white duration-200 hover:border-t-2 hover:border-red-500"
        >
          <img className="w-16
          miniDesktop:w-11
          h-14" src={tick} alt={t('Tick image')} />
          <span className="text-lg">
            <h1 className="font-bold">{t('Return Guarantee')}</h1>
            <p>{t('30 day money back')}</p>
          </span>
        </div>

        <div
          data-aos="fade-left"
          className="flex gap-4 items-center pt-6 border-white border-t-2 duration-200 hover:border-t-2 hover:border-red-500"
        >
          <img className="w-14
          miniDesktop:w-11

          h-14" src={headphone} alt={t('Headphone image')} />
          <span className="text-lg">
            <h1 className="font-bold">{t('Online support 24/7')}</h1>
            <p>{t('Technical support 24/7')}</p>
          </span>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="800"
          className="flex gap-4 items-center pt-6 border-white border-t-2 duration-200 hover:border-t-2 hover:border-red-500"
        >
          <img className="w-14
          miniDesktop:w-9
          h-14" src={payment} alt={t('Payment image')} />
          <span className="text-lg">
            <h1 className="font-bold">{t('Secure payment')}</h1>
            <p>{t('All payment methods accepted')}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section1;
