import React, {useState, useEffect} from 'react';
import HomePage from '@/components/home/HomePage';
import {get} from '@/app/utils/requests';


const Index: React.FC = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     async function getData() {
    //         const data = await get('/api/users');
    //         setUsers(data);
    //     }
    //     getData().catch(console.error);
    // }, []);

    return (
        <div>
            <HomePage/>
            {
                // users.map(u => <div>{u.username}</div>)
            }
        </div>
    );
}

export default Index;
