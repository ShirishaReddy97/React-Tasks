import React, { useEffect, useState } from 'react'
import axios from 'axios';
const UserCards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetchCards();
    }, []); //Runs only on the first render//
    const fetchCards = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res);
                setCards(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>User Cards</h1>
            <div className='item-container'>
                {cards.map((card) => (
                    <div className='card' key={card.id}>
                        <h3 className='card-1'>UserId:{card.userId}</h3>
                        <h3 className='card-2'>Id:{card.id}</h3>
                        <p className='card-3'>Title:{card.title}</p>
                        <p className='card-4'>Body:{card.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserCards
