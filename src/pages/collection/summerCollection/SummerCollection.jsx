import { useEffect, useState } from "react";
import { data } from "../../../data/CollectionData";
import CardSummer from "./CardSummer";
import { useTranslation } from 'react-i18next';

const SummerCollection = () => {
    const { t } = useTranslation();
    const [summerData, setSummerData] = useState();

    useEffect(() => {
        setSummerData(data?.filter(item => item?.id < 31 && item?.id > 20));
    }, []);

    return (
        <div className="p-4">
            <div className="mt-10">
                <h1 className="text-6xl font-bold text-center 
                bigPhone:text-4xl
                phone:text-4xl
                miniPhone:text-3xl
                ">
                    {t('Summer collection')}
                </h1>
                <p className="text-xl text-center mt-4 text-gray-500">
                    {t('Bukhara Natural Product')}
                </p>
                <div className="
                    grid grid-cols-5 place-items-center gap-8 mt-16
                    miniDesktop:grid-cols-4
                    bigTablet:grid-cols-4 
                    tablet:grid-cols-3
                    miniTablet:grid-cols-2
                    bigPhone:grid-cols-1
                    phone:grid-cols-1
                    miniPhone:grid-cols-1
                ">
                    {
                        summerData?.map((item, index) => (
                            <CardSummer key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SummerCollection;
