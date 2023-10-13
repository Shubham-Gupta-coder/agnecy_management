import { MongoClient, ObjectId } from "mongodb";

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

// get data from any collection
export async function PUT(request, { params }) {
  let { slug } = params;
  const database = client.db("agency_management");
  const collections = database.collection(slug);

  const data = await collections.find().toArray();
  return Response.json(data);
}

// post data to any collection
export async function DELETE(request, { params }) {
  let { slug,id } = params;
  const database = client.db("agency_management");
  const collections = database.collection(slug);
    const data = await collections.deleteOne({"_id": new ObjectId(id) });
    if (data.deletedCount === 1) {
      return Response.json(
        { Status: "Sucessfully deleted", data },
        { status: 202 }
      );
    } else {
      return Response.json(
        { Status: "Cant delete" },
        { status: 400 }
      );
    }
    
}
