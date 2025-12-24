import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "ananya.sharma@example.com",
    fullName: "Ananya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    email: "priya.verma@example.com",
    fullName: "Priya Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    email: "neha.patel@example.com",
    fullName: "Neha Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    email: "kavya.reddy@example.com",
    fullName: "Kavya Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    email: "isha.mehta@example.com",
    fullName: "Isha Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    email: "poonam.singh@example.com",
    fullName: "Poonam Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    email: "richa.malhotra@example.com",
    fullName: "Richa Malhotra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    email: "sneha.iyer@example.com",
    fullName: "Sneha Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/72.jpg",
  },

  // Male Users
  {
    email: "rahul.sharma@example.com",
    fullName: "Rahul Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    email: "arjun.verma@example.com",
    fullName: "Arjun Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    email: "rohit.patel@example.com",
    fullName: "Rohit Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    email: "sachin.kumar@example.com",
    fullName: "Sachin Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    email: "vikram.singh@example.com",
    fullName: "Vikram Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/69.jpg",
  },
  {
    email: "amit.mishra@example.com",
    fullName: "Amit Mishra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    email: "naveen.reddy@example.com",
    fullName: "Naveen Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/71.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Indian users seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Run seeder
seedDatabase();
