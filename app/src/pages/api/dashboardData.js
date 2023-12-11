import dbConnect from '../../db/mongoose';

export default async function handler(req, res) {
    await dbConnect();

    // Fetch data from your database and return it
    res.status(200).json({ data: 'Your dashboard data' });
}
