//메인 페이지
import PhoneBookAdd from "./PhoneBookAdd"
import PhoneBookList from "./PhoneBookList"
import { useReducer,useEffect } from "react";
import tasksReducer from "./tasksReducer";

const contacts=[
    {id:0, name:"이희주",number:"010-9120-4599",mail:"leeheeju@heeju.com"}
]
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
            mail:mail,
        })
    }

    function DeleteUser(userid)
    {
        dispatch({
            type:'deleted',
            id:userid
        })
    }
    
    function ChangeUser(user)
    {
        dispatch({
            type:'changed',
            user:user,
        })
    }

    function SearchUser(name)
    {
        dispatch({
            type:'search',
            name : name,
        })
    }

    
    return(
        <>
        <h1>이희주의 전화번호</h1>
        <PhoneBookAdd  onAddUser={AddUser}/>
        <PhoneBookList users={users} onDeleteUser={DeleteUser} onChangeUser={ChangeUser}/>
        </>
    );
}