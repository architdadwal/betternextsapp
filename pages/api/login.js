import Cookies from "cookies";
import clientPromise from "../../lib/mongodb";
const { createHash } = require("node:crypto");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const username = req.body["username"];
    const guess = req.body["password"];
    const client = await clientPromise;

    try {
      const db = client.db("Users");
      const users = await db
        .collection("Profiles")
        .find({ Username: username })
        .toArray();
      console.log("1", username);

      if (users.length === 0) {
        res.redirect("/login?msg=Incorrect username or password");
        return;
      }

      const user = users[0];
      const guess_hash = createHash("sha256").update(guess).digest("hex");

      if (guess_hash === user.Password) {
        // Set the cookie
        const cookies = new Cookies(req, res);
        cookies.set("username", username);

        // Redirect to the home page with the subdomain in the URL
        const subdomain = username.toLowerCase();
        res.redirect(`http://${subdomain}.localhost:3000/`);
        console.log("1", username);
      } else {
        res.redirect("/login?msg=Incorrect username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.redirect("/");
  }
}
