

export default function tasksReducer(users,action)
{
    switch(action.type)
    {
        case 'added' :{
            return [
                ...users,
                {
                    id:action.id,
                    name:action.name,
                    number:action.number,
                    email:action.mail
                },
            ];
        }

        case 'deleted' : {
            return (
                users.filter((user) => user.id !== action.id)
            );
        }
    }
    

}