import React, {useState} from "react";

function Time() {
    const [time, setTime] = useState(1);


    function handleClick() {
        let newTime;
        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    }

    console.log('렌더링');

    return (
        <div>
            <span>현재 시간 : {time}시</span><br/>
            <button onClick={handleClick}>Update</button>
        </div>
    );
}

export default Time;