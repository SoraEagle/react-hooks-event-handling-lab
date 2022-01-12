// Code Keypad Component Here

function Keypad(){
    function word(){
        console.log("Entering password...");
    }
    return <input type="password" onChange={word} />
}

export default Keypad;