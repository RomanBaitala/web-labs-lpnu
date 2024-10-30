import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CarItem from "../Components/Car/CarInfo";
import { useLocation } from "react-router-dom";
import { carsData } from "../data/data";

const ItemPage = () => {
    const location = useLocation()
    const carId = location.pathname.replace('/car/', '')
    let car
    for (let i = 0; i < carsData.length; i++) {
        if (carsData[i].id == carId){
            car = carsData[i]
        }        
    }

    console.log(location)
    return (
        <>
            <Header/>
            <CarItem car={car}/>
            <Footer/>
        </>
    )
}

export default ItemPage