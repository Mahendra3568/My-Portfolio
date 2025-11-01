const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// --- IMPORTANT: Your Connection String ---
const MONGO_URI = "mongodb+srv://portfolio_user:Portfolio12345@portfoliocluster.prhmoil.mongodb.net/portfolioDB?appName=PortfolioCluster";

// --- Middleware ---
//app.use(cors()); // Allow cross-origin requests
// --- Middleware ---
const allowedOrigins = [
  'http://localhost:4200',                  // Your local frontend
  'https://kvmportfolio.netlify.app',
  'https://idyllic-sunflower-8bc781.netlify.app'        // Your new Netlify frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
// --- (The app.use(express.json()) line should be next) ---
app.use(express.json()); // Allow app to accept JSON

// --- MongoDB Connection ---
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch(err => console.error("MongoDB connection error: ", err));

// -----------------------------------------------------------------
// 1. DEFINE OUR DATA "SCHEMAS" (The structure of our data)
// -----------------------------------------------------------------

// Note: We tell Mongoose to use the *existing* collection names
// (e.g., { collection: 'profile' })

const profileSchema = new mongoose.Schema({
  name: String,
  headline: String,
  summary: String,
  about_me: String,
  email: String,
  phone: String,
  linkedin_url: String,
  github_url: String
}, { collection: 'profile' }); // Use the 'profile' collection

const skillSchema = new mongoose.Schema({
  name: String,
  type: String
}, { collection: 'skills' }); // Use the 'skills' collection

const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  dates: String,
  description: String
}, { collection: 'experiences' }); // Use the 'experiences' collection

const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  dates: String,
  notes: String
}, { collection: 'educations' }); // Use the 'educations' collection

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  github_link: String,
  demo_link: String
}, { collection: 'projects' }); // Use the 'projects' collection

// -----------------------------------------------------------------
// 2. CREATE "MODELS" (The tools to interact with our collections)
// -----------------------------------------------------------------

const Profile = mongoose.model('Profile', profileSchema);
const Skill = mongoose.model('Skill', skillSchema);
const Experience = mongoose.model('Experience', experienceSchema);
const Education = mongoose.model('Education', educationSchema);
const Project = mongoose.model('Project', projectSchema);

// -----------------------------------------------------------------
// 3. CREATE OUR 5 API ENDPOINTS (The "routes" our frontend will call)
// -----------------------------------------------------------------

// --- GET Profile ---
// We use .findOne() because there is only ONE profile
app.get('/api/profile', async (req, res) => {
  try {
    const data = await Profile.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- GET Skills ---
// We use .find() because there are MANY skills
app.get('/api/skills', async (req, res) => {
  try {
    const data = await Skill.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- GET Experiences ---
app.get('/api/experiences', async (req, res) => {
  try {
    const data = await Experience.find().sort({ dates: -1 }); // Sort newest first
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- GET Educations ---
app.get('/api/educations', async (req, res) => {
  try {
    const data = await Education.find().sort({ dates: -1 }); // Sort newest first
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- GET Projects ---
app.get('/api/projects', async (req, res) => {
  try {
    const data = await Project.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// -----------------------------------------------------------------
// 4. START THE SERVER
// -----------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});