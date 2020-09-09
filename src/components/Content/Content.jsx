import React from "react";
import SelectType from "./Select/SelectType";
import styles from "./Content.module.scss"
import RepairsList from "./RepairsList/RepairsList";
import ImageGallery from "./ImageGallery/ImageGallery";

const Content = ({repairData,setCurrentRepair,repairTypes,currentRepairs,isSearch,selectedRepair,setSelectedRepair}) => {
    return(
        <div className={styles.content}>
            <div className={styles.content_block1}>
                <div>
                    <SelectType
                        repairTypes={repairTypes}
                        setCurrentRepair={setCurrentRepair}
                        repairData={repairData}/>
                </div>
                <div className={styles.content_block1_repairs_container}>

                    <RepairsList
                        isSearch={isSearch}
                        setSelectedRepair={setSelectedRepair}
                        currentRepairs={currentRepairs}
                    />
                </div>
            </div>
            <div className={styles.content_block2}>
                    <ImageGallery selectedRepair={selectedRepair}/>
            </div>
        </div>
    )
}
export default Content