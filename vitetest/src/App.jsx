import Buttons,{PropButton} from './Button.jsx';
import {Card} from './Card.jsx'
import { useEffect,useState } from 'react';


function App() {


  const[data,setData]=useState(0);
  console.log(data)

  useEffect(()=>{
    console.log("run method")
    console.log(data);
  },[data])

  const add=()=>{
    setData(data+1)
  }

  const dataArray = [

{
  title:'Sample Title 1',
  content:'New content here',
  button:'green',
},

{
  title:'Sample Title 2',
  content:'New content here',
  button:'blue',
},

  ];


  return (

    <>

    <button onClick={()=>{add()}}>ADD</button>

     <h1 className={'header'}>MANOJ</h1>

      <Buttons name={'Add Button'} color={'#151B54'} lion={()=>console.log("blue color")}/>
      <Buttons name={'Delete Button'} color={'#00A36C'} lion={()=>console.log("jade color")}/>
      <Buttons name={'Update button'} color={'#493D26'} lion={()=>console.log("choclate color")}/>
      <Buttons name={'Send button'} color={'#E55451'} lion={()=>console.log("valentine red")}/>

        <PropButton name={"YoYo"}/>

        {/* <Card title={"Title here"} content={' Sample Content here'} button={'yellow'}/> */}

        {/* <Card title={"Title here"} content={'Sample Content here'} button={'yellow'}/> */}

        <div className='card-area'>

          {dataArray.map((value,index)=>(
            <Card
            key={index}
            title={value.title}
            content={value.content}
            button={value.button}/>
          ))}
        </div>

    </>

  )
}

export default App
