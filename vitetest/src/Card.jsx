import './Button.css'

export function Card({title='Title here',content='Content here',button='red',}){
    return(
        <>
<div className={'tty'}>
<div className={'crd'}>
<h3 className={'titl'}>{title}</h3>
<p>{content}</p>
<button className={'delete'} style={{backgroundColor:button}}>delete</button>
</div>
</div>


        </>

    )
}