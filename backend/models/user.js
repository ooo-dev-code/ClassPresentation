import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

UserSchema.statics.signup = async function (username, password) {
    if (!username || !password) {
        throw Error('All fields must be filled');
    }
    const exists = await this.findOne({ username });
    if (exists) {
        throw Error('Username already in use');
    }
    const user = await this.create({ username, password });
    return user;
}

UserSchema.statics.login = async function (username, password) {
    if (!username || !password) {
        throw Error('All fields must be filled');
    }
    const user = await this.findOne({ username });
    if (!user) {
        throw Error('Incorrect username or password');
    }
    const match = password === user.password;
    if (!match) {
        throw Error('Incorrect username or password');
    } 
    return user;
}

const User = mongoose.model('User', UserSchema);
export default User;