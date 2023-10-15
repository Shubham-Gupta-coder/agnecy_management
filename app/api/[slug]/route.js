import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

// get data from any collection
export async function GET(request, { params }) {
  let { slug } = params;
  const database = client.db("agency_management");
  const collections = database.collection(slug);

  const data = await collections.find().toArray();
  return Response.json(data);
}

// post data to any collection
export async function POST(request, { params }) {
  let { slug } = params;
  const toPost = await request.json()
  const database = client.db("agency_management");
  const collections = database.collection(slug);
  const data = await collections.insertOne(toPost);
  return Response.json(data, {status: 201});
}
