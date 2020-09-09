import React from "react";
import styles from "./MainContainer.module.scss";

class MainContainer extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                {this.props.children}
            </div>
        )
    }
}

export default MainContainer
