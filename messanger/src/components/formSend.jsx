import React, { useState, useEffect } from 'react';

const Form = (probs) => {



    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [message, setmessage] = useState(null);

    const sendForm = (e) => {
        e.preventDefault();


        const form = new FormData();

        form.append("from_id", 1);
        form.append("to_id", probs.client);
        form.append("role", 'text');
        form.append("message", message);

        fetch(
            `http://127.0.0.1:8000/api/send`
            ,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
                ,
                body: JSON.stringify({
                    from_id: 1,
                    to_id: probs.client,
                    role: 'text',
                    message: message,
                })
            })
            .then((res) => res.json())
            .then((json) => {

                // setData(json);
                console.log(json)
                // setLoading(false);


            }).catch(err => {
                // setError(err)
            }
            )
    }

    console.log(message)

    return (
        <>




            <h4>
                form
                <form>

                    <input type="text" onChange={e => setmessage(e.target.value)} />
                    <button onClick={sendForm}>send</button>
                </form>
            </h4>

        </>
    );
}

export default Form;