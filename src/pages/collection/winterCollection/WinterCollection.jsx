import { useEffect, useState } from "react";
import CardWinter from "./CardWinter";
import { data } from "../../../data/CollectionData";
import { useTranslation } from "react-i18next";

const WinterCollection = () => {
    const { t } = useTranslation();
    const [winterData, setWinterData] = useState();

    useEffect(() => {
        setWinterData(data?.filter(item => item?.id < 11));
    }, []);

    return (
        <div className="p-4">
            <div className="mt-10">
                <h1 className="text-6xl font-bold text-center 
                bigPhone:text-4xl
                phone:text-4xl
                miniPhone:text-3xl
                ">
                    {t('Winter collection')}
                </h1>
                <p className="text-xl text-center mt-4 text-gray-500">
                    {t('Bukhara Natural Product')}
                </p>
                <div className="
                    grid grid-cols-5 place-items-center gap-8 mt-16
                    miniDesktop:grid-cols-4
                    bigTablet:grid-cols-4
                    tablet:grid-cols-3
                    miniTablet:grid-cols-3
                    bigPhone:grid-cols-2
                    phone:grid-cols-1
                    miniPhone:grid-cols-1

                ">
                    {
                        winterData?.map((item, index) => (
                            <CardWinter key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default WinterCollection;
