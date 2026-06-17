import type { Equipments } from "../../types/equipments.types"
import EquipmentCard from "../EquipmentCard"
import "./index.css"
interface EquipmentListProps{
    equipments:Equipments[]
}

export function EquipmentList({equipments}: EquipmentListProps){
    return(
        <div>
            <h2>Equipment List</h2>
            <ul>
                {equipments.map((equipment) => (
                    <li key={equipment.id}>
                        <EquipmentCard key={equipment.id} equipment={equipment}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}