import {EquipmentList} from "./components/EquipmentList"
import { equipments } from "./data/equipments"


function App() {
 
    return(
        <>
            <EquipmentList equipments={equipments}/>
        </>
    )
}

export default App
