import Navbar from "../../head/navbar/Navbar";
import Footer from "../../foot/Footer";
import { useRef, useState } from "react";
import axios from "axios";
import Toast, { showToast } from './Toast';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    const embedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12270.639200017595!2d64.4594065!3d39.7472921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5005f5da092a35%3A0x38ddf0b8d382281b!2z0J7QntCeIEJ1a2hhcmEgTmF0dXJhbCBQcm9kdWN0!5e0!3m2!1sru!2s!4v1723485161826!5m2!1sru!2s";
    const [textValue, setTextValue] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const userPhoneRef = useRef();
    const userEmailRef = useRef();

    const phoneNumberPattern = /^(?:\+?7|8)?(?:\d{10}|\(\d{3}\)\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\+1\d{10}|\+44\d{10}|\+998\d{9})$/;

    const handleSubmitMessages = async (event) => {
        event.preventDefault();

        const phoneRef = userPhoneRef.current.value;
        const emailRef = userEmailRef.current.value;

        // Validate phone number
        if (!phoneNumberPattern.test(phoneRef)) {
            setPhoneError(t('Invalid phone number.'));
            return;
        } else {
            setPhoneError(""); // Clear the error if the phone number is valid
        }

        const token = "7477586136:AAHxHaMorknBZDCDqIhe-b7ODR9ktZ_jUGU";
        const chat_id = 1768611600;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const MessageFull = `${t('Phone number')}: ${phoneRef} \n${t('Email')}: ${emailRef} \n${t('Message')}: ${textValue}`;

        try {
            await axios.post(url, {
                chat_id,
                text: MessageFull,
            });

            // Reset input fields
            userPhoneRef.current.value = "";
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
            <div>
                <Navbar />
                <div className="p-4 flex items-start justify-around mt-16 
                miniTablet:flex-col m-auto text-center
                bigPhone:flex-col
                phone:flex-col phone:mt-8
                miniPhone:flex-col miniPhone:mt-7
                ">
                    <div className="m-auto">
                        <h1 className="text-5xl font-bold 
                        
                        ">{t('Contact')}</h1>
                        <form id="myForm" onSubmit={handleSubmitMessages} className="flex flex-col gap-4 mt-12">
                            <input
                                data-aos="fade-right"
                                data-aos-delay="200"
                                ref={userEmailRef}
                                required
                                className="py-3 px-8 pr-32 text-xl text-black outline-none border-2 border-gray-400 rounded-full 
                                miniDesktop:pr-20
                                tablet:w-[18rem]
                                miniTablet:w-full
                                bigPhone:w-full
                                phone:w-full
                                miniPhone:w-full
                                "
                                type="email"
                                placeholder={t('Your Email')}
                            />
                            <input
                                data-aos="fade-right"
                                data-aos-delay="400"
                                ref={userPhoneRef}
                                required
                                className="py-3 px-8 pr-32 text-xl text-black outline-none border-2 border-gray-400 rounded-full 
                                miniDesktop:pr-20
                                tablet:w-[18rem]
                                miniTablet:w-full
                                bigPhone:w-full
                                phone:w-full
                                miniPhone:w-full
                                "
                                type="tel"
                                placeholder={t('Phone number')}
                            />
                            {phoneError && <p className="text-red-500">{phoneError}</p>}
                            <textarea
                                data-aos="fade-right"
                                data-aos-delay="600"
                                value={textValue}
                                onChange={(e) => setTextValue(e.target.value)}
                                required
                                className="py-3 h-32 px-8 pr-32 text-xl text-black outline-none border-2 border-gray-400 rounded-xl 
                                miniDesktop:pr-20
                                tablet:w-[18rem]
                                miniTablet:w-full
                                bigPhone:w-full
                                phone:w-full
                                miniPhone:w-full
                                "
                                placeholder={t('Your Message Here')}
                            ></textarea>
                            <button
                                className="py-3 px-8 bg-red-400 text-white rounded-full 
                                tablet:w-[18rem]
                                miniTablet:w-full
                                bigPhone:w-full
                                phone:w-full
                                miniPhone:w-full
                                "
                            >
                                {t('Submit')}
                            </button>
                        </form>
                    </div>
                    <div className="w-[48rem] h-[30rem]
                    miniDesktop:w-[35rem] miniDesktop:h-[28rem]
                    bigTablet:w-[32rem] bigTablet:h-[27rem]
                    tablet:w-[26rem] tablet:h-[27rem]
                    miniTablet:w-full miniTablet:h-[25rem] miniTablet:mt-16
                    bigPhone:w-full bigPhone:h-[24rem] bigPhone:mt-14
                    phone:w-full phone:mt-8 phone:h-[22rem]
                    miniPhone:w-full miniPhone:mt-8 miniPhone:h-[20rem]
                    ">
                        <iframe
                            src={embedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: "10px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={t('Google Map')}
                        ></iframe>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
