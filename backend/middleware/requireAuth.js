import jwt from 'jsonwebtoken';
import User from '../models/user';

const requireAuth = async (req, res, next) => {
  
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Authorization header is missing' });
    }

    const token = authorization.split('')[1]

    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET)

        req.user = User.findOne({ _id }).select('_id');
        next();

    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = requireAuth;   
export default requireAuth;