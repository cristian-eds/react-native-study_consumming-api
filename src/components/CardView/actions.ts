import { fetchGetCarData } from "../../api/getCars"
import { CarModel } from "./props"

export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    const response = await fetchGetCarData(id);
    try {
        if(response) {
            setCarData(response);
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}


export const handlePreviousItem = async () => {

}

export const handleNextItem = async () => {

}
