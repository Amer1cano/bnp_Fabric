/* eslint-disable no-unused-vars */
import logoBrend from '/public/other-images/logoBrend.png';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { SlMenu } from "react-icons/sl";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {
  const language = localStorage.getItem('i18nextLng');
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false)

  const handleLanguageChangeSelect = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    console.log(event);  
  };


  useEffect(()=>{
    const handleResize = ()=>{
      if(window.innerWidth > 280){
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', handleResize);
    return()=>window.removeEventListener('resize', handleResize)
  },[])

  useEffect(() => {
    const handleScroll = () => {
     if (window.scrollY > 20) {
         
         setIsMobile(false)
     } 
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
 }, [])
 

  return (
    <div className="p-4 mt-[-3rem]">
      <div className='
      miniTablet:flex miniTablet:items-center miniTablet:justify-between 
      bigPhone:flex
      phone:flex
      miniPhone:flex
      '>
      <a href="/">
            <img className="w-52 invisible 
            miniTablet:visible 
            bigPhone:visible bigPhone:w-52
            phone:visible phone:w-52
            miniPhone:visible miniPhone:w-48
            " src={logoBrend} alt={t('BrendLogo picture')} />
      </a>
        <ul className="flex items-center justify-start gap-8 text-xl 
        miniTablet:hidden
        bigPhone:hidden
        phone:hidden
        miniPhone:hidden
        ">
          <a href="/">
            <img className="w-52" src={logoBrend} alt={t('BrendLogo picture')} />
          </a>
          <li className="hover:underline underline-offset-8">
            <a href="/">{t('Home')}</a>
          </li>
          <li className="hover:underline underline-offset-8">
            <a href="/collection">{t('Collection')}</a>
          </li>
          <li className="hover:underline underline-offset-8">
            <a href="/about">{t('About Us')}</a>
          </li>
          <li className="hover:underline underline-offset-8">
            <a href="/contacts">{t('Contacts')}</a>
          </li>
        </ul>
        <button  className={`invisible text-right text-4xl ml-60
                        miniTablet:visible 
                        bigPhone:visible bigPhone:ml-40
                        phone:visible 
                        miniPhone:visible
                        phone:text-2xl phone:pb-2 phone:ml-36
                        miniPhone:text-2xl miniPhone:pb-2 miniPhone:ml-28
         `}
        onClick={() =>{
            setIsMobile(!isMobile)
        }}>
            {isMobile ? (<FaXmark />) : (
            <SlMenu/>
            )}
        </button>
        {
          isMobile &&
        <div>
          <ul className={`${isMobile? "flex flex-col w-screen absolute z-10 top-24 left-0 text-center text-white   items-center gap-2 py-6  bg-black" : "miniTablet:hidden"}`}>
          <li className="  text-xl   hover:underline underline-offset-8  miniTablet:text-3xl">
          <a  href="/">{t('Home')}</a>
            </li>
            <li className=" text-xl hover:underline underline-offset-8  miniTablet:text-3xl">
            <a href="/collection">{t('Collection')}</a>
            </li>
            <li className=" text-xl hover:underline underline-offset-8  miniTablet:text-3xl">
            <a href="/about">{t('About Us')}</a>
            </li>
            <li className=" text-xl hover:underline underline-offset-8  miniTablet:text-3xl">
            <a href="/contacts">{t('Contacts')}</a> 
            </li>
          </ul>
        </div>
        }
      </div>
      <div className="text-right fixed top-0 right-32 text-black z-30 
      bigPhone:right-20
      phone:right-16
      miniPhone:right-10
      ">
        <select
          className="px-8 py-1 text-xl outline-none bg-white border-2 border-gray-400 rounded-xl 
          bigPhone:px-4 
          phone:px-3 phone:text-lg
          miniPhone:px-2 miniPhone:text-base
          "
          value={language}
          name="Lng"
          id="lng"
          onChange={handleLanguageChangeSelect}
        >
          <option value="en">{t('English')}</option>
          <option value="uz">{t('Uzbek')}</option>
          <option value="ru">{t('Russian')}</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
