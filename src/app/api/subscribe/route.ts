import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(request: Request) {
  const { email } = await request.json();

  const client = await clientPromise;
  const db = client.db('mr-transporter');
  const collection = db.collection('subscribers');

  try {
    const result = await collection.insertOne({
      email,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Fehler beim Einfügen von Daten:", error); // Error inserting data
    return NextResponse.json({ success: false, error: "Fehler beim Einfügen von Daten" }); // Error inserting data
  }
}
