import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Landing from "../components/home/Landing";
import Categories from "../components/home/Categories";
import Senses from "../components/home/Senses";
import Sound from "../components/home/Sound";

export default function Home(){
    return (
        <div className="">
            <Header />
            <div className="flex flex-col gap-10 mb-10">
                <Landing />
                <Categories />
                <Senses />
                <Sound />
            </div>
            <Footer />
        </div>
    )
}