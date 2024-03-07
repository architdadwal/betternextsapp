import clientPromise from "../../lib/mongodb";
import jwt from "jsonwebtoken";
import { createHash } from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const client = await clientPromise;

    try {
      const db = client.db("Users");
      const user = await db
        .collection("Profiles")
        .findOne({ Username: username });

      if (!user) {
        res.status(401).json({ message: "Incorrect username or password" });
        return;
      }

      const guess_hash = createHash("sha256").update(password).digest("hex");

      if (guess_hash === user.Password) {
        const token = jwt.sign({ username: user.Username }, "1234567890", {
          expiresIn: "1h",
        });

        res.json({ token });
      } else {
        res.status(401).json({ message: "Incorrect username or password" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
