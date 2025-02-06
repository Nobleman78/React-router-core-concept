import './App.css'
import Reusable from './components/Reuseable/Reusable'
// import UseRef from './components/UseRef/UseRef'
// import StateFull from './components/StateFull/StateFull'
// import SimpleForm from './components/SimpleForm/SimpleForm'
function App() {
  const handleSingUpSubmit = data => {
    console.log('Sign Up ', data)


  }
  const handleUpdateProfile = data => {
    console.log('Update ', data)

  }

  return (
    <div>
      <h2>Vite + React</h2>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFull></StateFull> */}
      {/* <UseRef></UseRef> */}
      {/* <HookForm></HookForm> */}
      <Reusable
        formTitle={'Sign Up'}
        handleSubmit={handleSingUpSubmit}
        >
        {/* <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div> */}
      </Reusable>

      <Reusable
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
        {/* <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div> */}
      </Reusable>
    
   
    
    
     

    </div>
  )
}

export default App
