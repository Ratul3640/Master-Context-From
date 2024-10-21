
import './App.css'
import Grandpa from './Components/SimpleFrom/Grandapha/Grandpa'
// import ReusablelFrom from './Components/SimpleFrom/Reusablel/ReusablelFrom'
// import HookForm from './Components/SimpleFrom/HookForm/HookForm'
// // import RefForm from './Components/SimpleFrom/RefForm/RefForm'
// import SimpleFrom from './Components/SimpleFrom/SimpleFrom'
// import StatefullForm from './Components/SimpleFrom/StatefullForm/StatefullForm'

function App() {
  // const handleSignUpSubmit = data => {
  //   console.log('sign up data', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('update profile', data);
  // }
  return (
    <>

      <h1 className='text-7xl'>Form Master</h1> <br />
      <Grandpa></Grandpa>
      {/* <SimpleFrom></SimpleFrom>
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusablelFrom formTitle={'sign up'} handleSubmit={handleSignUpSubmit}>

        <div>
          <h2>sign up</h2>
          <p>please sign up right now</p>
</div>
      </ReusablelFrom>
      <ReusablelFrom formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusablelFrom> */}
    </>
  )
}

export default App
