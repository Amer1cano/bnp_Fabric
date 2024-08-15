import { useEffect, useState } from "react";
import { data } from "../../data/CollectionData";
import CardNews from "./CardNews";
import { useTranslation } from 'react-i18next';

const News = () => {
    const { t } = useTranslation();
    const [newsData, setNewsData] = useState(data);

    useEffect(() => {
        setNewsData(data?.filter(item => item?.id > 30 && item?.id < 34));
    }, []);

    return (
        <div className="p-4">
            <div className="mt-10 px-6 phone:px-3 miniPhone:px-1">
                <h1 className="text-6xl font-bold text-center phone:text-5xl miniPhone:text-4xl">
                    {t('News')}
                </h1>
                <p className="text-xl text-center mt-4 text-gray-500">
                    {t('Bukhara Natural Product')}
                </p>
                <div className="grid grid-cols-3 place-items-center gap-8 mt-16
                tablet:grid-cols-2
                miniTablet:grid-cols-1
                bigPhone:grid-cols-1
                phone:grid-cols-1
                miniPhone:grid-cols-1
                ">
                    {
                        newsData.map((item, index) => (
                            <CardNews key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default News;
