import { useParams } from "react-router-dom";
import { data } from "../../../data/CollectionData";
import Navbar from "../../../head/navbar/Navbar";
import Footer from "../../../foot/Footer";
import { useRef, useState } from "react";
import axios from "axios";
import Toast, { showToast } from '../../contact/Toast';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import CardWinter from "./CardWinter";
import { useTranslation } from "react-i18next";

const WinterDetailPage = () => {
    const { t } = useTranslation();
    const [isOpenDescription, setIsOpenDescription] = useState(true);
    const [textValue, setTextValue] = useState("");
    const userNameRef = useRef();
    const userEmailRef = useRef();
    const params = useParams();
    const element = data?.find(item => item?.id === Number(params?.id));
    
    const handleChangeDescription = () => {
        setIsOpenDescription(!isOpenDescription);
    };
    
    const handleChangeReview = () => {
        setIsOpenDescription(!isOpenDescription);
    };

    const handleSubmitReview = async (event) => {
        event.preventDefault();
        const nameRef = userNameRef.current.value;
        const emailRef = userEmailRef.current.value;
        const token = "7477586136:AAHxHaMorknBZDCDqIhe-b7ODR9ktZ_jUGU";
        const chat_id = 1768611600;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const MessageFull = `${t('Name')}: ${nameRef} \n${t('Email')}: ${emailRef} \n${t('Message')}: ${textValue}`;

        try {
            await axios.post(url, {
                chat_id,
                text: MessageFull,
            });

            // Reset input fields
            userNameRef.current.value = "";
            userEmailRef.current.value = "";
            setTextValue(""); // Reset the textarea value
            showToast(t('Message sent successfully!'), 'success');
        } catch (error) {
            showToast(t('Message failed to send.'), error);
        }
    };

    return (
        <div>
            <Toast />
            <div className="p-4">
                <Navbar />
            </div>
            {element?.id < 31 ? (
                <div className="flex items-start justify-between gap-8 p-8
                tablet:flex-col 
                miniTablet:flex-col
                bigPhone:flex-col bigPhone:px-2
                phone:flex-col phone:px-2
                miniPhone:flex-col miniPhone:px-1
                ">
                    <div>
                        <img
                            className="rounded-2xl w-[45rem] h-[28rem] object-cover
                            miniDesktop:w-[32rem]
                            bigTablet:w-[25rem] bigTablet:h-[26rem]
                            bigPhone:h-[22rem]
                            phone:h-[20rem]
                            miniPhone:h-[18rem]
                            "
                            src={element?.image}
                            alt={t('Picture title')}
                        />
                    </div>

                    <div className="text-2xl
                    miniDesktop:text-xl
                    bigTablet:text-xl
                    tablet:w-full
                    miniTablet:w-full
                    bigPhone:w-full bigPhone:text-xl
                    phone:w-full phone:text-lg
                    miniPhone:w-full miniPhone:text-base
                    ">
                        {element?.id < 31 && (
                            <table className="table-fixed border-collapse border-2 border-gray-400 
                            tablet:m-auto
                            miniTablet:m-auto
                            bigPhone:m-auto
                            phone:m-auto
                            miniPhone:m-auto
                            ">
                                <caption className="text-left text-5xl font-bold pb-12
                                bigTablet:text-4xl
                                tablet:text-center
                                miniTablet:text-center
                                bigPhone:text-center bigPhone:text-4xl
                                phone:text-center phone:text-3xl
                                miniPhone:text-center miniPhone:text-2xl
                                ">
                                    {t(element?.title)}
                                </caption>
                                <tbody>
                                    <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t('Material')}:
                                        </td>
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t(element?.material)}
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-200 transition-colors">
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t('Pillowcase')}:
                                        </td>
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t(element?.pillowcase)}
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t('Bed Sheet')}:
                                        </td>
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t(element?.bed_sheet)}
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-200 transition-colors">
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t('Duvet Cover')}:
                                        </td>
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t(element?.duvet_cover)}
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t('Size')}:
                                        </td>
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t(element?.size)}
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-200 transition-colors">
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t('Manufacturer')}:
                                        </td>
                                        <td className="border-2 border-gray-400 px-6 py-3">
                                            {t(element?.manufacturer)}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            ) : (
                <div className="p-16">
                    <img
                        className="rounded-2xl object-cover w-full"
                        src={element?.image}
                        alt={t('Picture title')}
                    />
                </div>
            )}

            <div className="px-8 mt-20 
            tablet:px-2
            miniTablet:px-2
            bigPhone:px-2
            phone:px-2 
            miniPhone:px-2
            ">
                <hr className="border-gray-500" />
                <div className="text-center text-xl font-bold pt-6">
                    <button
                        onClick={handleChangeDescription}
                        className="relative text-lg text-black mr-14 before:content-[''] before:absolute before:w-full before:h-0 before:bg-red-500 before:top-[-26px] focus:before:h-[2px] focus:before:top-[-26px]"
                    >
                        {t('Description')}
                    </button>
                    <button
                        onClick={handleChangeReview}
                        className="relative text-lg text-black ml-14 before:content-[''] before:absolute before:w-full before:h-0 before:bg-red-500 before:top-[-26px] focus:before:h-[2px] focus:before:top-[-26px]"
                    >
                        {t('Reviews')}
                    </button>
                </div>

                {isOpenDescription ? (
                    <div className="mt-20 px-36 
                    tablet:px-10
                    miniTablet:px-8
                    bigPhone:px-8
                    phone:px-6
                    miniPhone:px-4
                    ">
                        <h3 className="text-4xl font-medium">{t('Description')}</h3>
                        <div className="mt-16">
                            <h1 className="text-4xl font-bold 
                            bigPhone:text-3xl
                            phone:text-3xl
                            miniPhone:text-2xl
                            ">{t(element?.title)} {t('bedding set')}</h1>
                            <p className="mt-14 font-serif text-xl text-gray-500">
                                {t(element?.description)}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="mt-20 px-36 
                    tablet:px-10
                    miniTablet:px-8
                    bigPhone:px-8
                    phone:px-6
                    miniPhone:px-4
                    ">
                        <h3 className="text-4xl font-medium">{t('Reviews')}</h3>
                        <p className="mt-10 text-gray-500">{t('There are no reviews yet.')}</p>
                        <h1 className="mt-10 text-4xl font-bold 
                        bigPhone:text-3xl
                        phone:text-3xl
                        miniPhone:text-2xl
                        ">
                            {t('Be the first to review')} `{t(element?.title)}`
                        </h1>
                        <p className="mt-4">{t('Your email address will not be published. Required fields are marked *')}</p>
                        <div className="mt-10">
                            <form onSubmit={handleSubmitReview} className="text-xl">
                                <input
                                    ref={userNameRef}
                                    type="text"
                                    placeholder={t('Name')}
                                    required
                                    className=" mt-4 py-3 px-4 pr-40 w-[28rem] border-2 border-gray-500 rounded-full outline-none bg-gray-100
                                    miniDesktop:w-[20rem]
                                    bigTablet:w-[17rem]
                                    tablet:w-[15rem]
                                    miniTablet:w-[14rem]
                                    bigPhone:w-[20rem] bigPhone:pr-4
                                    phone:w-[16rem] phone:pr-3
                                    miniPhone:w-[14rem] miniPhone:pr-2
                                    "
                                />
                                <input
                                    ref={userEmailRef}
                                    type="email"
                                    placeholder={t('Email')}
                                    required
                                    className="mt-4 py-3 px-4 pr-40 w-[28rem] ml-8 border-2 border-gray-500 rounded-full outline-none bg-gray-100 
                                    miniDesktop:w-[20rem]
                                    bigTablet:w-[17rem]
                                    tablet:w-[15rem]
                                    miniTablet:w-[14rem]
                                    bigPhone:w-[20rem] bigPhone:pr-4 bigPhone:ml-0
                                    phone:w-[10rem] phone:ml-0 phone:pr-3
                                    miniPhone:w-[10rem] miniPhone:ml-0 miniPhone:pr-2
                                    "
                                />
                                <textarea
                                    required
                                    value={textValue}
                                    onChange={(e) => setTextValue(e.target.value)}
                                    name="review"
                                    id="review"
                                    className="py-3 px-4 pr-40 w-[58rem] h-52 mt-10 border-2 border-gray-500 rounded-2xl outline-none bg-gray-100 
                                    miniDesktop:w-[42rem]
                                    bigTablet:w-[38rem]
                                    tablet:w-[33rem]
                                    miniTablet:w-[30rem]
                                    bigPhone:w-[20rem] bigPhone:h-[10rem]
                                    phone:w-[16rem]     phone:h-[8rem]
                                    miniPhone:w-[14rem] miniPhone:h-[7rem]
                                    "
                                    placeholder={t('Your review')}
                                ></textarea>
                                <button className="bg-red-500 text-white px-20 py-2 rounded-full hover:bg-black duration-500 transition-all text-right mt-6">
                                    {t('Send')}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-24">
                <h1 className="text-center text-5xl font-bold font-serif 
                bigPhone:text-4xl
                phone:text-4xl
                miniPhone:text-3xl
                ">
                    {t('Similar products')}
                </h1>
                {element?.id < 31 && (
                    <div className="m-auto text-left">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={4}
                            loop={true}
                            breakpoints={{
                                280: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                400: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 25,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                            }}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                reverseDirection: false,
                            }}
                            speed={5000}
                            className="pt-16"
                        >
                            {data?.map((item, index) => (
                                <SwiperSlide key={index} className="rounded mt-36">
                                    <CardWinter item={item} key={item.id} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default WinterDetailPage;
