import React, { useState } from "react";



function UpdateComment(){

    const[comment,setComment]= useState('');
    function handle(e){
        setComment(e.target.value);
    };
    return(<>
    <label>Comment:</label><br>
    </br>
    <textarea value={comment} onChange={handle} placeholder="Type your comment here.." ></textarea>
    <p>{comment}</p>
    </>);

}
export default UpdateComment;