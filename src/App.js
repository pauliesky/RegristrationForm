

import NewProfile from './components/ProfileForm/NewProfile';
import ProfileForm from './components/ProfileForm/ProfleForm'
import { useState } from 'react';


function App() {
  const [usersList, setUserList] = useState([])

  const onSaveDataHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString()  }]
    })
  }
  return (
    <>
      <ProfileForm onSaveData={onSaveDataHandler} />
      <NewProfile users={usersList} />
    </>
  )
}

export default App;
