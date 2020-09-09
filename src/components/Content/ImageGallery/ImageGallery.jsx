import React, {useEffect, useState} from "react";
import styles from "./ImageGallery.module.scss"
const ImageGallery = ({selectedRepair}) =>{

    const[images,setImages] = useState(['https://admin.bi.group/uploads/5d9d839f35590.jpg','https://admin.bi.group/uploads/5d9d8397a7060.jpg','https://smartremont.kz/design/img/finish.png'])
    const[currentImage,setCurrentImage] = useState('https://admin.bi.group/uploads/5d9d839f35590.jpg')
    const[imgIteration,setImgIteration] = useState(0)
    const[isPlayed,setPlayed] = useState(false)

    useEffect(()=>{
        console.log("worked")
        if(Object.keys(selectedRepair).length>0){
            setImages(selectedRepair.images)
            setCurrentImage(selectedRepair.images[imgIteration])
        }
    },[selectedRepair,isPlayed])


    const prevImageClicked =()=>{
        console.log(imgIteration)
        if(imgIteration-1 < 0){
            setCurrentImage(images[images.length-1])
            setImgIteration(images.length-1)
        }else{
            setCurrentImage(images[imgIteration-1])
            setImgIteration(imgIteration-1)
        }
    };

    const nextImageClicked =()=>{
        if(imgIteration > images.length-1){
            setCurrentImage(images[0])
            setImgIteration(0)
            setPlayed(false)
        }else{
            setCurrentImage(images[imgIteration+1])
            setImgIteration(imgIteration+1)
        }
    };

    let playing;
    const onPlay = () => {
        playing = setInterval(()=>nextImageClicked(),2000)
    }


    return(
        <div className={styles.image_gallery_container}>
            <div className={styles.image_gallery_block}>
                <div>
                    <img className={styles.gallery_img} src={currentImage}/>
                    <div className={styles.prev_next_btns}>
                        <div onClick={prevImageClicked}>&#8249;</div>
                        <div onClick={nextImageClicked}>&#8250;</div>
                    </div>
                    {!isPlayed && (
                        <div onClick={()=>{
                            onPlay()
                            setPlayed(true)
                        }} className={styles.play_btn}>
                            <i className="fa fa-play" style={{fontSize:'24px',color:'white'}}></i>
                        </div>
                    )}

                </div>
            </div>
            {Object.keys(selectedRepair).length>0 && (
                <div className={styles.description_block}>
                    <div>
                    <span style={{display:'flex'}}>
                        <ul>
                            <li style={{color:'red',fontSize:'1.5rem',fontWeight:'bold'}}>
                                <span style={{color:'#1C2746',fontSize:'1rem'}}>{selectedRepair.title}-<span style={{color:'grey'}}>{selectedRepair.location}</span></span>
                            </li>
                        </ul>
                    </span>
                    </div>
                    <div style={{color:'#1C2746',letterSpacing:'0.1rem'}}>{selectedRepair.description}</div>
                </div>
            )}
        </div>
    )
}
export default ImageGallery