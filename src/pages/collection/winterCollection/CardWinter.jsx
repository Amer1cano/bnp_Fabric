/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CardWinter = ({ item }) => {
  const { t } = useTranslation();

  return (
    <NavLink to={`/${item?.id}`}>
      <div
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500"
        data-aos-delay="500"
        className="hover:text-red-600"
      >
        <img
          className="h-36 w-48 rounded-xl object-cover"
          src={item?.image}
          alt={t('picture from winter collection')}
        />
        <h1 className="font-medium mt-2 text-xl">{t(item?.title)}</h1>
      </div>
    </NavLink>
  );
};

export default CardWinter;
