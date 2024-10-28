import { NextResponse } from 'next/server';
import getClient from '../../../lib/mongodb';

export async function POST(request: Request) {
  const { abholort, lieferort, wunschdatum, transportType } = await request.json();

  const client = await getClient();
  const db = client.db('mr-transporter');
  const collection = db.collection('transport_requests');

  try {
    const result = await collection.insertOne({
      abholort,
      lieferort,
      wunschdatum,
      transportType,
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Fehler beim Einfügen von Daten:", error); // Error inserting data
    return NextResponse.json({ success: false, error: "Fehler beim Einfügen von Daten" }); // Error inserting data
  }
}
