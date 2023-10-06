export default function handler(req, res) {
  res.status(200).json({ message: req.query["name"].toString() })
}