/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CardAutumn = ({ item }) => {
    const { t } = useTranslation();

    return (
        <NavLink to={`/${item?.id}`}>
            <div
                data-aos="flip-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
                data-aos-delay="700"
                className="hover:text-red-600"
            >
                <img
                    className="h-36 w-48 rounded-xl object-cover 
                    bigPhone:h-48 bigPhone:w-60
                    "
                    src={item?.image}
                    alt={t('picture from winter collection')}
                />
                <h1 className="font-medium mt-2 text-xl">{t(item?.title)}</h1>
            </div>
        </NavLink>
    );
};

export default CardAutumn;
