import {sql} from "@vercel/postgres";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const {rows} = await sql`SELECT * FROM users`;
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
