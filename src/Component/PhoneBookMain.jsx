//메인 페이지
import PhoneBookAdd from "./PhoneBookAdd"
import PhoneBookList from "./PhoneBookList"
import { useReducer } from "react";
import tasksReducer from "./tasksReducer";

const contacts=[]
let nextId=0;

export default function PhoneBookMain()
{
    const [users,dispatch]=useReducer(tasksReducer,contacts);

    function AddUser(name,number,mail)
    {
        dispatch({
            type:'added',
            id:nextId++,
            name:name,
            number:number,
            email:mail,
        })
    }

    function DeleteUser(userid)
    {
        dispatch({
            type:'deleted',
            id:userid
        })
    }

    
    return(
        <>
        <h1>이희주의 전화번호</h1>
        <PhoneBookAdd   onAddUser={AddUser}/>
        <PhoneBookList users={users} onDeleteUser={DeleteUser}/>
        </>
    );
}