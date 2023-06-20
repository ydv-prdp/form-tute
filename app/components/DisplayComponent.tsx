import { FormEvent, useState } from "react"


const DisplayComponent = () => {
    const [val, setVal] = useState<string>('')
    const [data, setData] = useState<string[]>([]);
    let kil = [];
    const handleAdd  = () =>{
        if(val!=='')
        setData(prev=>[...prev, val])
        console.log(data);
        setVal('');
    }

    const handleDel = (index:number) =>{
       console.log("hello", index)
       kil = data.filter((d,i)=>index!==i)
       setData(kil);

    }
  
  return (
    <div>
    
            <input type="text" value={val} onChange={e=>setVal(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>

            <h1>
                You added following values
            </h1>
            <ul>
                {data.map((d, index)=>(
                    <li key={index}>
                        {d}  <button onClick={()=>handleDel(index)} className="bg-black rounded-md text-red-500 p-2 ml-2 mt-2"> Del</button>
                    </li>
                ))}
            </ul>

    </div>
  )
}

export default DisplayComponent