import type { Equipments } from "../../types/equipments.types"
import "./index.css"


interface EquipmentCardProps{
    equipment:Equipments
}

function EquipmentCard({equipment}:EquipmentCardProps){
    return (
        <div className={`equipment-card ${equipment.status ? "available" : "unavailable"}`}>
            <h3>{equipment.name}</h3>
            <p>{equipment.status ? "Disponível": "Indisponível"}</p>
        </div>
    )
}

export default EquipmentCard