export default function handler(req, res) {
    res.status(200).json({
      message: "¡Hola, Francisco! Tu API funciona correctamente 🚀",
      fecha: new Date().toISOString(),
    })
  }