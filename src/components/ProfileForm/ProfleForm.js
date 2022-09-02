
import styles from './ProfileForm.module.css'
import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';



function ProfileForm(props) {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [error, setError] = useState('')

  const onChangeNameHandler = (e) => {
    setUserName(e.target.value)
  }
  const onChangeAgeHandler = (e) => {
    setUserAge(e.target.value)
  }
  const SubmitHandler = (e) => {
    e.preventDefault()
    setUserName('')
    setUserAge('')

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError(
        {
          title: 'Invalid Input',
          message: 'Please enter a vaild name and age(non-empty values)'
        }
      )
      return
    }

    if (+userAge < 1) {
      setError(
        {
          title: 'Invalid Age',
          message: 'Please enter a vaild age(>0)'
        }
      )
      return
    }
    props.onSaveData(userName, userAge)
  }
  const errorHandler = () => {
  setError(null)
}

  return (
    <React.Fragment>
      <form onSubmit={SubmitHandler}>
        <div className={styles.form_container}>
          <label>Username</label>
          <input
            type='text'
            value={userName}
            onChange={onChangeNameHandler} />
          <label>Age(Years)</label>
          <input
            type='number'
            value={userAge}
            onChange={onChangeAgeHandler} />
          <div>
            <button
              className={styles.button}
              type='submit'>
              Add User
            </button>
          </div>
        </div>
      </form>
      {error &&
        <ErrorMessage
        errorClose={errorHandler}
        title={error.title}
        message={error.message} />}
    </React.Fragment>
  )

}

export default ProfileForm;
