import './Button.css'

export default function Buttons(props){

    return(
<>
<button className="btn" style={{backgroundColor:props.color}} onClick={()=> {props.lion()}}>
    {props.name}
</button>

</>

    )

}

export function PropButton({name}){
    return(
        <>
        <button className={'btn'}>{name}</button>
        </>
    )
}