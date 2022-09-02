import React from 'react'
import styles from './NewProfile.module.css'

const NewProfile = (props) => {
  return (
    <div className={styles.form_container}>
      <ul>
        {props.users.map(user => <li key={user.id}>{user.name} ({user.age} Years Old)</li>)}
      </ul>
    </div>
  )
}
export default NewProfile