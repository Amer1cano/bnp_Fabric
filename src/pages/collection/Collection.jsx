import { useState, useEffect } from "react";
import Navbar from "../../head/navbar/Navbar";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { data } from "../../data/CollectionData";
import CardWinter from "./winterCollection/CardWinter";
import ReactPaginate from 'react-paginate';
import Footer from "../../foot/Footer";
import { useTranslation } from 'react-i18next';

const ITEMS_PER_PAGE = 12;

const Collection = () => {
    const { t } = useTranslation();
    const [isArrowOpen, setIsArrowOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState(data);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedSort, setSelectedSort] = useState(""); 
    const allCategories = ["All", ...new Set(data.map((item) => item.category))];

    useEffect(() => {
        let filtered = data;
    
        if (selectedCategory !== 'All') {
            filtered = filtered.filter((item) => item?.category === selectedCategory);
        }
    
        if (searchTerm) {
            filtered = filtered.filter((item) =>
                item?.title && item?.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    
        if (selectedSort === "rating") {
            filtered = filtered.sort((a, b) => {
                const ratingA = a.rating?.rate ;
                const ratingB = b.rating?.rate ;
                return ratingB - ratingA;  // High to low
            });
          
        } else if (selectedSort === "popularity") {
            filtered = filtered.sort((a, b) => b.popularity - a.popularity);
        } else if (selectedSort === "priceAsc") {
            filtered = filtered.sort((a, b) => {
                const priceA = a.price ;
                const priceB = b.price ;
                return priceA - priceB;  // Low to high
            });
        } else if (selectedSort === "priceDesc") {
            filtered = filtered.sort((a, b) => {
                const priceA = a.price ;
                const priceB = b.price ;
                return priceB - priceA;  // High to low
            });
        }
    
        setFilteredItems(filtered);
        setCurrentPage(0);
    }, [searchTerm, selectedCategory, selectedSort]);
    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (ctg) => {
        setSelectedCategory(ctg);
    };

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
    };

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentItems = filteredItems.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const startItem = offset + 1;
    const endItem = Math.min(offset + ITEMS_PER_PAGE, filteredItems.length);

    return (
        <div>
            <div className="p-4">
                <Navbar />
                <div className="px-4 grid grid-cols-2 
                tablet:grid-cols-1
                miniTablet:grid-cols-1
                bigPhone:grid-cols-1
                phone:grid-cols-1 phone:px-0
                miniPhone:grid-cols-1 miniPhone:px-0
                ">
                    <div className="
                    tablet:px-4
                    miniTablet:px-4
                    bigPhone:px-3
                    phone:px-1
                    miniPhone:px-1
                    ">
                        <form className='mt-16 text-center' onSubmit={(e) => e.preventDefault()}>
                            <input
                                className='py-4 px-8 pr-3 text-xl bg-gray-200 outline-none rounded-full mr-[20rem]
                                miniDesktop:px-3 miniDesktop:pr-1 miniDesktop:py-3
                                bigTablet:px-2 bigTablet:pr-1 bigTablet:py-3
                                tablet:px-20 tablet:w-full tablet:py-3
                                miniTablet:px-16 miniTablet:w-full miniTablet:py-3
                                bigPhone:px-16 bigPhone:w-full bigPhone:py-3
                                phone:px-4 phone:w-full phone:py-3 phone:pr-1 phone:text-left
                                miniPhone:px-4 miniPhone:w-full miniPhone:py-3 miniPhone:pr-2 miniPhone:text-left
                                '
                                type="search"
                                value={searchTerm}
                                onChange={handleSearchChange}           
                                placeholder={t('Search here')}
                            />
                            <button
                                className='text-white text-3xl bg-red-500 hover:text-white relative  top-2 left-[-24rem] hover:bg-red-900 duration-500 transition-all py-2 px-2 rounded-full shadow-red-3xl
                                desktop:left-[-4rem] desktop:top-[-3.3rem]
                                miniDesktop:left-[-4rem] miniDesktop:top-[-3.1rem]
                                bigTablet:left-[-3rem] bigTablet:top-[-3rem]
                                tablet:left-[18rem] tablet:top-[-3rem]
                                miniTablet:left-[12rem] miniTablet:top-[-3rem]
                                bigPhone:left-[8rem] bigPhone:top-[-3rem]
                                phone:left-[8rem] phone:top-[-3rem]
                                miniPhone:left-[5rem] miniPhone:top-[-3rem]
                                '
                                type="button"
                                onClick={() => setSearchTerm(searchTerm)}
                            >
                                <IoIosSearch />
                            </button>
                        </form>
                        <div className="flex mt-14 text-2xl font-bold w-72
                        tablet:mt-4
                        miniTablet:mt-8
                        bigPhone:mt-6
                        phone:mt-6
                        miniPhone:mt-6
                        " onClick={() => setIsArrowOpen(!isArrowOpen)}>
                            <h1 className="cursor-pointer">
                                {t('Collection')}
                            </h1>
                            <button className="ml-36
                            miniDesktop:ml-16
                            bigTablet:ml-10
                            tablet:ml-6 
                             miniTablet:ml-6
                            bigPhone:ml-6
                            phone:ml-6
                            miniPhone:ml-6
                            ">
                                {isArrowOpen ? <IoIosArrowForward /> : <IoIosArrowDown />}
                            </button>
                        </div>
                        {isArrowOpen &&
                            <div className="flex flex-col items-start justify-start text-lg mt-10 ml-10 w-60
                            tablet:flex-row tablet:w-full tablet:items-center tablet:justify-between 
                            miniTablet:flex-row miniTablet:w-full miniTablet:items-center miniTablet:justify-between miniTablet:ml-0
                            bigPhone:ml-0
                            phone:w-full  phone:text-base phone:ml-0
                            miniPhone:w-full  miniPhone:text-base miniPhone:ml-0

                              

                            ">
                                {allCategories.map((item, index) => (
                                    <button
                                        onClick={() => handleCategoryChange(item)}
                                        key={index}
                                        className="hover:text-red-500"
                                    >
                                        {t(item)}
                                    </button>
                                ))}
                            </div>
                        }
                    </div>

                    <div className="w-[55rem] ml-[-18rem] h-auto mt-16
                    miniDesktop:w-[48rem] miniDesktop:ml-[-14rem] miniDesktop:px-8
                    bigTablet:w-[45rem] bigTablet:ml-[-13rem] bigTablet:px-8
                    tablet:w-full tablet:ml-0 tablet:px-4 
                    miniTablet:w-full miniTablet:ml-0 miniTablet:px-4
                    bigPhone:w-full bigPhone:ml-0 bigPhone:px-2
                    phone:w-full phone:ml-0 phone:px-0
                    miniPhone:w-full miniPhone:ml-0 miniPhone:px-0
                    ">
                        <div>
                            <div className="flex items-center justify-between
                            
                            ">
                                <h1 className="text-4xl font-bold
                                bigPhone:text-2xl
                                phone:text-2xl
                                miniPhone:text-xl
                                ">
                                    {selectedCategory === "All" ? `${t('All')} ${t('Collection')}` : t(selectedCategory)}
                                </h1>
                                <select value={selectedSort} onChange={handleSortChange} className="px-4 py-3 bg-black text-white text-xl rounded-full
                                miniDesktop:px-2 miniDesktop:mr-[2rem]
                                bigTablet:px-2 bigTablet:mr-[3rem]
                                miniTablet:px-1 miniTablet:py-2
                                bigPhone:px-1 bigPhone:py-1 bigPhone:text-base
                                phone:px-1 phone:py-2 phone:text-base
                                miniPhone:hidden

                                ">
                                    <option value="">{t('Initial sort')}</option>
                                    <option value="rating">{t('By rating')}</option>
                                    <option value="popularity">{t('By popularity')}</option>
                                    <option value="priceAsc">{t('Prices: ascending')}</option>
                                    <option value="priceDesc">{t('Prices: descending')}</option>
                                </select>
                            </div>
                            <div className="bg-black"></div>
                            <p className="text-lg 
                            
                            ">
                                {t('Showing')} {startItem}-{endItem} {t('of')} {filteredItems.length}
                            </p>
                        </div>

                        <div className="grid grid-cols-4 gap-20 mt-16
                        miniDesktop:grid-cols-3 miniDesktop:gap-8
                        bigTablet:grid-cols-3 bigTablet:gap-8  
                        tablet:grid-cols-3 
                        miniTablet:grid-cols-2
                        bigPhone:grid-cols-1 bigPhone:place-items-center
                        phone:grid-cols-1 phone:gap-12 phone:place-items-center
                        miniPhone:grid-cols-1 miniPhone:gap-8 miniPhone:place-items-center
                        ">
                            {currentItems.map((item, index) => (
                                <CardWinter item={item} key={index} />
                            ))}
                        </div>

                        <div className="mt-4">
                            <ReactPaginate
                                previousLabel={t('Previous')}
                                nextLabel={t('Next')}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={'pagination'}
                                pageClassName="inline-block px-2 py-1 mx-1 border rounded bg-white"
                                previousClassName="inline-block px-2 py-1 mx-1 border rounded bg-white"
                                nextClassName="inline-block px-2 py-1 mx-1 border rounded bg-white"
                                disabledClassName="text-gray-500"
                                activeClassName="bg-blue-500 text-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Collection;
