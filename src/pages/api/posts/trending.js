import {sql} from "@vercel/postgres";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const {rows} = await sql`
                    SELECT p.*, u.username, u.profile_pic_url
                    FROM posts p
                    INNER JOIN users u ON u.id = p.user_id
                    WHERE p.likes >= 100
                    ORDER BY p.likes DESC`;
                res.status(200).json(rows);
            } catch (error) {
                res.status(500).json({error: error.message});
            }
            break;
        case 'POST':
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}
