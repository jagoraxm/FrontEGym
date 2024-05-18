import './App.css'
import Login from './Login'
import Register from './Register'
import RegisterConfirm from './RegisterConfirm'

function App() {
  return (
    <>
      <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{backgroundColor: "#00253D"}}>
        <Login />
      </div>
    </>
  )
}

export default App