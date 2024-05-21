const users=[];

const addUser=({id,username,room})=>{

    // clean
    username=username.trim().toLowerCase();
    room=room.trim().toLowerCase();

    // Validate
    if(!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }
    // check for existing User
    const existingUser=users.find((user)=>{
        return user.room===room && user.username===username;
    })

    // validate
    if(existingUser)
    {
        return{
            error:'UserName is in Used'
        }
    }
    
    const user={id,username,room};
    users.push(user);
    return {user}

}

// remove
const removeUser=(id)=>{
    const index=users.findIndex((user)=>user.id===id)

    if(index!==-1)
    {
        return users.splice(index,1)[0]
    }
}

// getuser 
const getUser=(id)=>{
    return users.find((user)=>user.id===id)
}

// getUsersInRoom 

const getUsersInRoom=(room)=>{
    room=room.trim().toLowerCase();
    return users.filter((user)=>user.room===room)
}

module.exports={addUser,removeUser,getUser,getUsersInRoom};


