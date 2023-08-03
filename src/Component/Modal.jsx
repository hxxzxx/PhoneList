// import { useState } from "react";

// export default function Modal(props)
// {
// const[isEditing,setIsEditing] = useState(false);
// let modalContent

//     function closeModal()
//     {
//         props.closeModal();
//     }
//     if (isEditing)
//     {
//         modalContent = 
//             (
//             <>
//                이름:  <input onChange={(e)=>{
//                 props.onChange({
//                     name:e.target.value,
//                 })
//                }} value ={props.user.name}></input> <br />
//                 번호: <input value ={props.user.number}></input><br />
//                 메일: <input value ={props.user.mail}></input> <br />
//                 <button onClick={() => setIsEditing(!isEditing)}> 완료 </button>
//             </>
//             )
        
//     }
//     else {
//         modalContent = 
//         (
//            <>
//            <div> 이름: {props.user.name} <br /> 번호: {props.user.number}<br /> 메일: {props.user.mail}<br />
//             <button onClick={() => setIsEditing(!isEditing)}>수정</button> </div> 
//             </>
//         )
//     }

//     return(
//         <div className="Modal">
//             <div className="modalBody" >
//                 <button id="modalCloseBtn" onClick={closeModal}>
//                     ❌
//                 </button>
//                 {modalContent}

//             </div>
//         </div>
//     );
// }


import { useState } from "react";

export default function Modal(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...props.user });

  function closeModal() {
    props.closeModal();
  }

  function handleInputChange(event) {
    setEditedUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  }

  function handleCompleteEdit() {
    props.onChange(editedUser);
    setIsEditing(false);
  }

  let modalContent;

  if (isEditing) {
    modalContent = (
      <>
        이름:{" "}
        <input
          name="name"
          onChange={handleInputChange}
          value={editedUser.name}
        ></input>{" "}
        <br />
        번호:{" "}
        <input
          name="number"
          onChange={handleInputChange}
          value={editedUser.number}
        ></input>
        <br />
        메일:{" "}
        <input
          name="mail"
          onChange={handleInputChange}
          value={editedUser.mail}
        ></input>{" "}
        <br />
        <button onClick={handleCompleteEdit}>완료</button>
      </>
    );
  } else {
    modalContent = (
      <>
        <div>
          이름: {props.user.name} <br /> 번호: {props.user.number}
          <br /> 메일: {props.user.mail}
          <br />
          <button onClick={() => setIsEditing(!isEditing)}>수정</button>{" "}
        </div>
      </>
    );
  }

  return (
    <div className="Modal">
      <div className="modalBody">
        <button id="modalCloseBtn" onClick={closeModal}>
          ❌
        </button>
        {modalContent}
      </div>
    </div>
  );
}
