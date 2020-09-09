import React from "react";
import styles from "./SelectType.module.scss"

const SelectType = ({repairData,setCurrentRepair,repairTypes}) => {

    const selectHandleChanged =(e)=>{
        setCurrentRepair(e.target.value)
    }

    return(
        <div className={styles.customSelect}>
            <div style={{color:'#1C2746',letterSpacing:'0.1rem',fontWeight:'bold',fontSize:'1.2rem',marginBottom:'2%'}}>Тип ремонта</div>
            <select onChange={(e)=>selectHandleChanged(e)}>
                <option value="0">Выберите тип ремонта</option>
                {repairTypes.map((el,index)=>(
                    <option key={index} value={el}>{el}</option>
                ))}
            </select>
        </div>
    )
}
export default SelectType