

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
                    mail:action.mail
                },
            ];
        }

        case 'deleted' : {
            return (
                users.filter((user) => user.id !== action.id)
            );
        }

        case 'changed' : {
            return (
                users.map((user) => { if (user.id === action.user.id)
                    return {...user,
                        ...action.user}
                else {
                    return user
                }
            }))
        }
    }
    

}