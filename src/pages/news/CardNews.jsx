/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const CardNews = ({ item }) => {
    const { t } = useTranslation();

    return (
        <NavLink to={`/${item?.id}`}>
            <div>
                <img
                    className="rounded-2xl hover:shadow-gray-3xl transition-all duration-300"
                    src={item?.image}
                    alt={t('picture of gadgets')}
                />
                <h1 className="text-2xl font-bold mt-6 miniPhone:text-xl">
                    {t(item?.title)}
                </h1>
                <p className="text-xl text-gray-600 mt-6 miniPhone:text-lg">
                    {t(item?.descriptionInCard)}
                </p>
            </div>
        </NavLink>
    );
};

export default CardNews;
