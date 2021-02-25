import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcyrpt';

const UserSchema = new Schema({
    username: String,
    hashedPassword: String,
});

UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPasssword = hash;
};

UserSchema.methods.checkPassword = async function(password) {
    const result = await crypto.compare(password, this.hashedPassword);
    return result; // true / false
};

UserSchema.statics.findByUsername = function(username) {
    return this.findOne({username});
};

const User = mongoose.model('User', UserSchema);
export default User;