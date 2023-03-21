import React, { useState } from 'react';

import {doPostFetch} from "./api/FetchFunctions";

import {Button, Input, Modal} from 'antd'

import styles from "../styles/Home.module.css";
export default function Home() {

    const [inputName, setInputName] = useState('');
    const [inputSurname, setInputSurname] = useState('');
    const [inputLogin, setInputLogin] = useState('');
    const [inputPass, setInputPass] = useState('');
    const uploadToServer = async (event) => {
   //     const body = new FormData();
     //   body.append("file", inputName);
        const body = {
            name:inputName,
            surname:inputSurname,
            login:inputLogin,
            pass:inputPass
        }
        const nm = await doPostFetch("./api/handleUpload", JSON.stringify(body), {
            'Content-Type': 'application/json',
        })
        console.log(nm);
       // setInputName(nm)
    };
    return (
        <div className={styles.container}>
            <form>
<Input style={{ width: '20%' }} placeholder="Name" name='input1' value={inputName} onChange={(event) => setInputName(event.target.value)}/>
<Input style={{ width: '20%' }} placeholder="Surname" name='input2' value={inputSurname} onChange={(event) => setInputSurname(event.target.value)}/>
<Input style={{ width: '20%' }} placeholder="Login" name='input3' value={inputLogin} onChange={(event) => setInputLogin(event.target.value)}/>
<Input style={{ width: '20%' }} placeholder="Password" name='input4' value={inputPass} onChange={(event) => setInputPass(event.target.value)}/>
            <Button type="primary" onClick= {() =>
            {

                uploadToServer();
                /*window.close("http://localhost:3000/autorization")*/}} >
                Зарегистрироваться
            </Button>
            </form>
        </div>
)
}
