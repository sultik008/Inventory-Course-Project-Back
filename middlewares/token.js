import jwt from 'jsonwebtoken'

export default function checkToken(req, res, next){
    try {
        const token = req.headers[authorization]
        if (!token) {
            res.status(401).json("No token")
        }
        const result = jwt.verify(token , process.env.JWT_SECRET)
        console.log(token , result)
        next()
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
}