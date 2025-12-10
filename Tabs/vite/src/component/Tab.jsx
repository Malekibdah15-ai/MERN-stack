import React,{useState} from "react";

const Tab = (props)=>{
    const {tab} = props
    const [active, setActive] = useState(0);

    const handleClick = (e, index)=>{
        e.preventDefault();
        setActive(index)
    }

    return(
        <>
        {tab.map((item , i)=>{
            return <button key={i} onClick={(e)=> handleClick(e, i)}>{item.label}</button>
        })}
        {tab[active].content}
        
        </>
    )
}
export default Tab;