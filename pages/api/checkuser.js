// pages/api/checkUser.js

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("Users");
      const user = await db
        .collection("Profiles")
        .findOne({ Username: username });

      if (user) {
        // User exists
        res.status(200).end();
      } else {
        // User does not exist
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error during database operation:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
