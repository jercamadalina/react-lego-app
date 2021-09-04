import React, {useState} from "react";

const AddNewCard = (props) => {
    const [name, setName] = useState("")
    const [followers, setFollowers] = useState("")
    const [difference, setDifference] = useState("")

    function sendStates() {
        if (name.length > 0 && followers >= 0) {
         props.getUser(name, followers, difference)
        }
        console.log('functie');
    }

    return (
        <div className="add-card">
            <input type='text' value={name} placeholder="name" onChange={e => setName(e.target.value)}></input>
            <input type='number' value={followers} placeholder="followers" onChange={e => setFollowers(e.target.value)}></input>
            <input type='number' value={difference} placeholder="difference" onChange={e => setDifference(e.target.value)}></input>
            <button onClick={() => sendStates()}>Create New Card</button>
        </div>
    )
}

export default AddNewCard;
