
import React, { useState, useEffect } from 'react';

import Conv from '../../components/conv';
import '../dashboard/dash.css';
const Dashboard = () => {


    const [data1, setData1] = useState(null);
    const [loading1, setLoading1] = useState(true);
    const [error1, setError1] = useState(null);
    const [converstate, setconverstate] = useState(false);
    const [converid, setconverid] = useState('');
    const [convername, setconvername] = useState('');

    useEffect(() => {
        fetch(
            `http://127.0.0.1:8000/api/conv`)
            .then((res) => res.json())
            .then((json) => {

                setData1(json);
                setLoading1(false);


            }).catch(err => {
                setError1(err)
            }
            )
    }, []);
    // console.log(data1);

    const conver = (id, name) => {

        setconverid(id)
        setconvername(name)
        setconverstate(true)

    }


    return (
        <>
        <h1>What is up</h1>

            <div className="container">

                <div className="main">

                    {loading1 && `loading ...`}
                    <div className="conv">
                        <ul>
                            {
                                error1 ? `<h1> somthing wrong happend try later </h1> `
                                    : data1 &&
                                    data1.map((a) => (
                                        <li className='convperson' key={a.id} onClick={() => { conver(a.id, a.name) }}>

                                            <h3>{a.name}</h3>
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>



                    
                    <div className='chat-box'>
                    <h2>Chat :</h2>
                        {
                            converstate ?
                                <Conv client={converid} name={convername} />
                                : 'dashboard'
                        }

                    </div>



                </div>








            </div>


        </>
    );
}

export default Dashboard;