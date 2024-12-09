import User from '../models/User.js';
import bcrypt from 'bcryptjs';
const { hash, compare } = bcrypt;
import jwt from 'jsonwebtoken';
const { sign } = jwt;


export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    
    const hashedPassword = await hash(password, 10);

   
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}


export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    
    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', 
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
