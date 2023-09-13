import { useState } from "react";

function NewPost(){
    const stateData = useState('');
    //stateData[0] // Current Value;
    //stateData[1] // State updating function;

    let enteredBody = '';
    function changeBodyHandler(event){
       enteredBody = event.target.alue;
    }


    return(
        <div>
            <form>
                <p>
                    <input placeholder="Your Name" />
                </p>
                <p>
                    <textarea onChange={changeBodyHandler}></textarea>
                    <p>{enteredBody}</p>
                </p>
            </form>
        </div>
    )

}
export default NewPost;