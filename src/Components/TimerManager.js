import React, {useState} from "react";
import Timer from "./Timer";


const TimerManager = () => {
    const [timerNames, setTimerName] = useState([
        'Workout',
        'Tea',
        'Meditation'
    ]);

    const [name, setName] = useState("");

    return (
        
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();

                const copyOfTimerName = [...timerNames]
                copyOfTimerName.push(name)
                setTimerName(copyOfTimerName)
            }}>
                <input defaultValue= {name} onChange= {(event)=>{
                    setName(event.target.value)    
                }} />
                <button>Add new timer</button>
            </form>
            

            {timerNames.map(timerName => (
                <Timer name={timerName}
                key = {timerName} />
            ))}
        </div>
    )
}

export default TimerManager;