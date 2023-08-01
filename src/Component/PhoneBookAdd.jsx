//추가하는 UI
import { useState } from "react";

export default function PhoneBookAdd({onAddUser})
{

    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [mail,setMail] = useState('');
    return(
    <>
       이름: <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input> <br /> <br />
       전화번호: <input placeholder="PhoneNumber" value={number} onChange={(e) => setNumber(e.target.value)}></input> <br /> <br />
       이  메일: <input placeholder="E-Mail" value={mail} onChange={(e) => setMail(e.target.value)}></input>
       <button onClick={() =>{
        if (name ===''|| number==='' || mail ==='')
        {
            alert("빈칸이 있습니다.")
        }
        else
        {
            setName('');
            setNumber('');
            setMail('');
            onAddUser(name,number,mail)
         }
        }}> ADD</button> <br /> <br />
  
    </>
    );
}