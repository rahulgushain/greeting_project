import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const getGreeting = async () => {
        if (!name) {
            setMessage('Name is required.');
            return;
        }
        try {
            const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
            const data = await response.json();
            setMessage(data.message || data.error);
        } catch (error) {
            setMessage('Error fetching greeting.');
        }
    };

    return (
        <div className='flex justify-center items-center w-full h-[100vh] bg-blue-200'>
        <div className='bg-yellow-200 p-5 rounded-xl'>
            <h1 className='text-3xl text-center font-bold mb-5'>Greeting App</h1>
            <div className='flex justify-center gap-5'>
            <input type='text' placeholder='Enter your name' 
            className='p-2 border-2 border-gray-400 rounded-xl outline-none'
            value={name} onChange={(e) => setName(e.target.value)} />
            <button 
            className='bg-red-400 text-white px-2 rounded-xl'
            onClick={getGreeting}>Get Greeting</button>
            </div>
            <p className='text-xl text-center mt-4'>{message}</p>
            </div>
        </div>
    );
}

export default App;
