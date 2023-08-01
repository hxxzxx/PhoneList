import {useState} from "react";
import Modal from "./Modal";

export default function PhoneBookList({users,onDeleteUser})
{

    return (
    <>
    <input placeholder="이름을 검색하세요"></input> <button>검색</button> 
    <ul>
        {
            users.map((user) => 
            <li key={user.id}>
                <Number user={user} onDelete={onDeleteUser}/>
            </li>)
        }
    </ul>
    </>
    );  
}

function Number({user,onDelete})
{
    const [detail, setDetail] = useState(false);
    return(
        <>
             {user.name} 
             <button onClick={() => onDelete(user.id)}>삭제</button>
             <button onClick={() => setDetail(!detail)}>Detail</button>
             {
                detail && (
                    <Modal closeModal={() => setDetail(!detail)} user={user}/> 
                    )
                }
        </>
    )
    
}