import React ,{useState}from 'react'

function App() {
  const [todo, settodo]=useState([])
  const [inputval,setinputval]=useState("")

const changeit=(e)=>{
setinputval(e.target.value)
}

const clickHere =(e)=>{
  e.preventDefault()
settodo([...todo,inputval])
}
//  const delhere=(e)=>{
//   e.preventDefault()
//   settodo([])
//  } 

const deleteHere=(key)=>{
  
  const newlisttodo=[...todo]
  newlisttodo.splice(key,1)
  settodo([...newlisttodo])
}

  return (
 <>
 <form>
<input type="text" value={inputval} onChange={changeit}/>
<button onClick={clickHere}>Add Item</button>
{/* <button onClick={delhere}>Delete Item</button> */}

<ul>
 {
  todo.map((val)=>{
return(
  <li>{val} <button onClick={deleteHere}>Delete</button></li>
)
  })
 }

</ul>

 </form>
 </>
  )
}

export default App