import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerater = useCallback(() => {
    let pass= ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str+= "!@#$%^&*()_+={}[]~`"
    for (let i = 1; i <= length; i++){
      let Char = Math.floor(Math.random() * str.length)
      pass += str[Char]//str.charAt(Char) 
    }    
  setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword]);
  useEffect(()=>{
    passwordGenerater()
  },[length,numberAllowed,charAllowed,passwordGenerater])

  const passwordRef = useRef(null)
  const CopyToClipBoard = useCallback(()=> {
    //optimization work
    passwordRef.current?.select();
    password.current?.setSelectionRange(0,{length});
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <h1 className='text-4xl text-center text-white'> 
      Password Generater
      </h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4
       my-8 text-orange-600 bg-slate-900'> 
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
       <input type="text"
       value={password} 
       className='outline-none w-full py-1 px-3' 
       placeholder="password" 
       readOnly 
       ref={passwordRef} />
      <button onClick = {CopyToClipBoard}
      className='bg-blue-600 hover:bg-blue-700 text-white py-0.5 px-3 shrink-0'>
      copy
      </button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
      </div>
    </>
  )
}

export default App
