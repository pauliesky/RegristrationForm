import React from 'react'
import styles from './ErrorMessage.module.css'


const ErrorMessage = (props) => {

 

  return (
    <div className={styles.backdrop} onClick={props.errorClose}>
      <div className={styles.message_container}>

        <div className={styles.message_head} >
          <h2>{props.title}</h2>
        </div>

        <div className={styles.message_body}>
          <p>{props.message}</p>
        </div>

        <div className={styles.message_button}>
          <button onClick={props.errorClose}  >Okay</button>
        </div>

      </div>
    </div>
  )
}

export default ErrorMessage