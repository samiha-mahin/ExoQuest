import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+top+300+pl_name+from+ps&format=json"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching exoplanet data:", error);
    res.status(500).json({ error: "Error fetching exoplanet data" });
  }
}
