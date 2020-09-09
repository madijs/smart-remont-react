import React from "react";
import styles from "./RepairsList.module.scss"
import styles2 from "../Select/SelectType.module.scss"

const RepairsList = ({currentRepairs,setSelectedRepair,isSearch}) =>{

    const selectedRepair = (el) => {
        console.log(el)
        setSelectedRepair(el)
    };

    const optionSelected = (id) => {
        if(id != "0"){
            const element = currentRepairs.find((el) => el.id == id)
            setSelectedRepair(element)
        }
    }

    return(
        <div>
            <div className={styles.repair_list}>
                {isSearch && (
                    <span className={styles.content_block1_repairs_container_text}> Найдено {currentRepairs.length} объекта: </span>
                )}
                {currentRepairs.map(el=>(
                    <div onClick={()=>selectedRepair(el)} className={styles.repair} key={el.id}>{el.title}</div>
                ))}
            </div>
            <div className={styles2.customSelect2}>
                <select onChange={(e)=>optionSelected(e.target.value)}>
                    <option value="0">Сделанные ремонты</option>
                    {currentRepairs.map((el)=>(
                        <option key={el.id} value={el.id}>{el.title}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default RepairsList