import React, {useState, useEffect} from 'react';

const Timer = ({name}) => {

    const [seconds, setSeconds] = useState(60);
    const [isCountDownRunning, setIsCountDownRunning] = useState(false);
    const [shouldAlert, setShouldAlert] = useState(false);
    //console.log(isCountDownRunning);

    useEffect(()=> {
        const secondsLeft = parseInt(seconds);
        if (isCountDownRunning && secondsLeft > 0) {
            setTimeout(() => {
                setSeconds(secondsLeft - 1)
            }, 1000)
        }else {
            if(shouldAlert) {
                alert(`The countdown of ${name} is over`);
                setShouldAlert(false)
            }
            setIsCountDownRunning(false);
        }

    }, [isCountDownRunning, seconds, shouldAlert,name])

    return (
        <div className='timer'>
            This is for {name} <br />
            <input
                disabled={isCountDownRunning}
                type='number'
                value={seconds}
                onChange={(event) => {setSeconds(event.target.value)}}
            />

            <button
                onClick={() => {
                    setIsCountDownRunning(true)
                    setShouldAlert(true)
                }
                    
                }
            >
                Start
            </button>
        </div>
    )

}

export default Timer;