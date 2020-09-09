import React from "react";
import styles from "./Header.module.scss"

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.header_block1}>
                <h1 className={styles.header_text}>Галерея <br/> проектов</h1>
                <p className={styles.header_sub_text}>Сумма экономии рассчитана в сравнении с суммой цен этого же перечня товаров по отдельности</p>
                <div className={styles.header_btn}>
                    Выбрать дизайн
                </div>
            </div>
            <div className={styles.header_block2}>
                <div className={styles.header_block2_content}>
                    <div className={styles.dots_container}>
                        <span className={styles.dots}>....................</span><br/>
                        <span className={styles.dots}>....................</span><br/>
                    </div>
                    <div className={styles.header_block2_sub_block}>
                        <div className={styles.dots_container2}>
                            <div><span className={styles.dots}>...</span></div>
                            <div><span className={styles.dots}>...</span></div>
                            <div><span className={styles.dots}>...</span></div>
                        </div>
                        <div className={styles.header_block2_sub_text}>
                            <p style={{marginTop:'5px'}}>Мы успешно завершили <br/>уже <span className={styles.header_block2_sub_text_span}>более 450</span> ремонтов</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header