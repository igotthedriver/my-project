import firebase from '../firebase.js';
import React, { useEffect, useState } from 'react';
import './UserList.css'

const UserList = () => {
    const ref = firebase.firestore().collection('users')
    const [data, setdata] = useState([])

    function getData() {
        ref.onSnapshot((QuerySnapshot) => {
            const items = []
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setdata(items)
        })
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(data);



     return (
           <div className='UsersList'>
            {data.map((elem) => {
                return (
                    <div className='UserList'>                     
                        <p>{elem.name}</p>
                        <img src = {elem.img}/>
                        <p>{elem.description}</p>
                        <p>{elem.price}</p>
                        <p>{elem.nolan.batman}</p>
                    </div>
                )
            }
            )}
           </div>
        )
}

export default UserList;