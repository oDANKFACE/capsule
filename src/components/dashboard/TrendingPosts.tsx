import React, {useState, useEffect} from 'react';
import Post from './Post';
import {get} from '@/app/utils/requests';

const TrendingPosts: React.FC = () => {
    interface TrendingPost {
        id: number;
        username: string;
        profile_pic_url: string;
        post_image_url: string;
        post_text: string;
        buried_date: string;
        uncover_date: string;
        likes: number;
    }

    const [trendingPosts, setTrendingPosts] = useState<TrendingPost[]>([]);

    useEffect(() => {
        const fetchTrendingPosts = async () => {
            try {
                const response = await get('/api/posts/trending');
                setTrendingPosts(response || []);
            } catch (error) {
                console.error('Error fetching trending posts:', error);
                setTrendingPosts([]);
            }
        };

        fetchTrendingPosts();
    }, []);

    return (
        <div>
            {trendingPosts.map(post => (
                <Post
                    key={post.id}
                    username={post.username}
                    profilePic={post.profile_pic_url}
                    postImage={post.post_image_url}
                    postText={post.post_text}
                    buriedDate={post.buried_date}
                    uncoverDate={post.uncover_date}
                    likes={post.likes}
                />
            ))}
        </div>
    );
};

export default TrendingPosts;
