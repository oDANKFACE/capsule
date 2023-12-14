import React, {useState, useEffect} from 'react';
import FriendCard from './FriendCard';
import {get} from '@/app/utils/requests';

const FriendsList: React.FC = () => {

    interface User {
        id: number;
        username: string;
        profile_pic_url: string;
        bio: string;
    }

    const [users, setUsers] = useState<User[]>([]);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await get('/api/users');
                console.log("API response:", response);
                setUsers(response || []);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        console.log("Users state:", users);
    }, [users]);


    return (
        <div className="flex justify-center">
            <div className="flex flex-row flex-wrap justify-start gap-4 p-4" style={{maxWidth: '1200px'}}>
                {users.map(user => (
                    <FriendCard
                        key={user.id}
                        userId={user.id}
                        username={user.username}
                        profilePic={user.profile_pic_url}
                        bio={user.bio}
                    />
                ))}
            </div>
        </div>
    );
};

export default FriendsList;
