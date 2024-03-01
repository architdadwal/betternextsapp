export default async function handler(req, res) {
  // For non-OPTIONS requests, handle your route logic
  if (req.method === "POST") {
    const subdomain = req.body["subdomain"];

    // Check if the subdomain is provided
    if (!subdomain) {
      res.redirect("/login?msg=Subdomain is required");
      return;
    }

    // Redirect to the subdomain's URL
    res.redirect(`http://${subdomain}.localhost:3000/`);
  } else {
    res.redirect("/");
  }
}
