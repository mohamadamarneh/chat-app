
import React, { useState, useEffect } from 'react';
import Form from './formSend';
const Conv = (probs) => {

    // console.log(probs.client)

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [message, setmessage] = useState(null);

    useEffect(() => {
        fetch(
            `http://127.0.0.1:8000/api/singleconv`
            ,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
                ,
                body: JSON.stringify({
                    to_id: probs.client,
                    from_id: 1
                })
            })
            .then((res) => res.json())
            .then((json) => {

                setData(json);
                setLoading(false);


            }).catch(err => {
                setError(err)
            }
            )
    }, [probs.client]);



    // console.log(probs.client)
    // console.log(data)









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
                document.getElementById('am').innerHTML += `<li className='frommessage'}>
                <h3>${message}</h3>
            </li>`

                // setLoading(false);


            }).catch(err => {
                // setError(err)
            }
            )
    }














    return (
        <>
            <h1>{probs.name}</h1>

            {loading && `loading ...`}
            <div className="con-te" id='am'>

                {
                    error ? `<h1> somthing wrong happend try later </h1> `
                        : data ?
                            data.map((a, b) => (
                                <li key={b} className={a.from_id == 1 ? 'frommessage' : 'tomessage'}>
                                    <h3>{a.message}</h3>
                                </li>
                            )) : 'no cinversation yet'


                }

            </div>

            {/* <Form client={probs.client}/> */}



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

export default Conv;