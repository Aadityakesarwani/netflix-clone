import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Check if the request method is POST
    if (req.method !== 'POST') {
      return res.status(405).end(); // Method Not Allowed
    }

    // Authenticate the request
    // await serverAuth(req, res);

    // Extract movie data from the request body
    const { title, description, videoUrl, thumbnailUrl, genre, duration } = req.body;

    // Create a new movie record in the database
    const newMovie = await prismadb.movie.create({
      data: {
        title,
        description,
        videoUrl,
        thumbnailUrl,
        genre,
        duration,
      },
    });

    // Respond with the newly created movie
    return res.status(201).json(newMovie);
  } catch (error) {
    console.error('Error adding movie:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
