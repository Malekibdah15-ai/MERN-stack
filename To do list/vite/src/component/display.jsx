import React,{useState} from "react";

const Display = (props) => {
    const [checked, setChecked]= useState(false) 

    const { list, setLists } = props

    const remove = (index) => {
        setLists(list.filter((_,i)=> i !== index));
    }

    return (
        <>

            { list.map((item, index) => {
                return(<div>
                    <p>{item}</p>
                    <form onSubmit={(e)=> e.preventDefault()}>
                        <input type="checkbox" checked={checked} onChange={()=> setChecked(!checked)}/>
                        <button onClick={()=>remove(index)}>delete</button>
                    </form>
                </div>)
            }
            )}
        </>
    )

}
export default Display;

