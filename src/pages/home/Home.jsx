import Quality1 from "../../components/quality1/Quality1"
import Quality2 from "../../components/quality2/Quality2"
import Quality3 from "../../components/quality3/Quality3"
import Footer from "../../foot/Footer"
import Header from "../../head/head-section/Header"
import Navbar from "../../head/navbar/Navbar"
import AutumnCollection from "../collection/autumnCollection/AutumnCollection"
import SummerCollection from "../collection/summerCollection/SummerCollection"
import WinterCollection from "../collection/winterCollection/WinterCollection"
import News from "../news/News"
import Section1 from "../section1/Section1"


const Home = () => {
  return (
    <div>
        <Navbar/>
      <Header/>
      <Section1/>
      <Quality1/>
      <WinterCollection/>
      <Quality2/>
      <AutumnCollection/>
      <Quality3/>
      <SummerCollection/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Home