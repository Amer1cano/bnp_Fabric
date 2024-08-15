import Navbar from "../../head/navbar/Navbar";
import manifacture from '../../../public/about-images/manufactureIn.jpg';
import machine from '../../../public/about-images/machine.jpg';
import machine2 from '../../../public/about-images/machine2.webp';
import product from '../../../public/about-images/product.webp';
import tools from '../../../public/about-images/tools.jpg';
import tool3 from '../../../public/about-images/tool3.webp';
import store from '../../../public/about-images/store.webp';
import people from '../../../public/about-images/people.png';
import Footer from "../../foot/Footer";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="mt-16 text-center">
        <h1 className="text-6xl font-bold
        tablet:text-5xl
        miniTablet:text-5xl
        bigPhone:text-4xl
        phone:text-3xl
        miniPhone:text-3xl
        ">
          {t('Bukhara Natural Product')}
        </h1>
        <img
          className="m-auto mt-20 rounded-xl object-fill hover:shadow-gray-3xl scale-75 hover:scale-100 duration-1000 transition-all"
          src={manifacture}
          alt={t('Picture of manufacture')}
        />
        <p className="text-lg mt-16 px-28
        tablet:px-20
        miniTablet:px-14
        bigPhone:px-8
        phone:px-8
        miniPhone:px-6
        ">
          {t('Bukhara Natural Product description')}
        </p>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-20 place-items-center px-24
      tablet:px-20
      miniTablet:px-12 miniTablet:gap-16
      bigPhone:px-8 bigPhone:gap-14 bigPhone:grid-cols-1
      phone:px-4 phone:gap-14 phone:grid-cols-1
      miniPhone:px-4 miniPhone:gap-12 miniPhone:grid-cols-1
      ">
        <img
          data-aos="fade-right"
          data-aos-delay="200"
          className="w-96 h-56 rounded-xl hover:shadow-gray-3xl"
          src={machine}
          alt={t('picture of manufacture tools')}
        />
        <img
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-96 h-56 rounded-xl hover:shadow-gray-3xl"
          src={store}
          alt={t('picture of manufacture tools')}
        />
        <img
          data-aos="fade-down"
          data-aos-delay="400"
          className="w-96 h-56 rounded-xl hover:shadow-gray-3xl"
          src={store}
          alt={t('picture of manufacture tools')}
        />
        <img
          data-aos="fade-left"
          data-aos-delay="400"
          className="w-96 h-56 rounded-xl hover:shadow-gray-3xl"
          src={tool3}
          alt={t('picture of manufacture tools')}
        />
        <img
          data-aos="fade-right"
          data-aos-delay="600"
          className="w-96 h-56 rounded-xl hover:shadow-gray-3xl"
          src={product}
          alt={t('picture of manufacture tools')}
        />
        <img
          data-aos="fade-left"
          data-aos-delay="600"
          className="w-96 h-56 rounded-xl hover:shadow-gray-3xl"
          src={tools}
          alt={t('picture of manufacture tools')}
        />
        <img
          data-aos="fade-up"
          data-aos-delay="800"
          className="w-96 h-56 rounded-xl hover:shadow-gray-3xl"
          src={tool3}
          alt={t('picture of manufacture tools')}
        />
        <img
          data-aos="fade-down"
          data-aos-delay="800"
          className="w-96 h-56 rounded-xl hover:shadow-gray-3xl"
          src={machine2}
          alt={t('picture of manufacture tools')}
        />
      </div>
      <div className="mt-24">
        <p className="text-center text-xl px-32
        tablet:px-16
        miniTablet:px-12
        bigPhone:px-6
        phone:px-6
        miniPhone:px-4
        ">
          {t('Company structure and principles')}
        </p>
        <img
          className="m-auto rounded-xl mt-20 opacity-60 duration-500 transition-all hover:opacity-100
          miniDesktop:h-[30rem]
          bigTablet:h-[30rem]
          tablet:h-[26rem]
          miniTablet:h-[24rem]
          bigPhone:h-[21rem] bigPhone:w-[22rem]
          phone:h-[17rem] phone:w-[19rem]
          miniPhone:h-[15rem] miniPhone:w-[17rem]
          "
          src={people}
          alt={t('Picture of people')}
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
