import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setbgColor] = useState("rgb(153,27,27)")

  return (
    <>
      <div style={{background:bgColor}} className='bg-black w-full h-screen'>
        <footer className='fixed flex flex-wrap justify-center bottom-12 w-full bg-white text-white p-4 rounded-lg '>
          <button className='bg-blue-800 border rounded-lg p-2' onClick={()=> setbgColor("rgb(30,64,175)")}>
            blue
          </button>
          <button className='bg-red-800 border rounded-lg p-2' onClick={()=> setbgColor("rgb(153,27,27)")}>
            red
          </button>
          <button className='bg-green-800 border rounded-lg p-2' onClick={()=> setbgColor("rgb(22,101,52)")}>
            green
          </button>
          <button className='bg-orange-400 border rounded-lg p-2' onClick={()=> setbgColor("rgb(251,146,60)")}>
            orange
          </button>
          <button className='bg-indigo-900 border rounded-lg p-2' onClick={()=> setbgColor("rgb(49,46,129)")}>
            indigo
          </button>
        </footer>
      </div>
    </>
  )
}

export default App
