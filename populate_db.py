import pymongo

# ----------------------------------------------------------------------------
# YOUR DATA: This is all the information we consolidated.
# ----------------------------------------------------------------------------

# This is your connection string. I've added your database name "portfolioDB"
CONNECTION_STRING = "mongodb+srv://portfolio_user:Portfolio12345@portfoliocluster.prhmoil.mongodb.net/portfolioDB?appName=PortfolioCluster"

# --- Profile Data ---
profile_data = {
    "name": "KAPARAPU VEERA VENKATA MAHENDRA",
    "headline": "ML ENTHUSIAST",
    "summary": "A dedicated and analytical student with a strong passion for developing intelligent systems. Seeking a role where I can leverage my proficiency in Python, SQL, and machine learning algorithms to contribute to data-driven projects, build innovative AI solutions, and continuously learn in a challenging and growth-oriented environment.",
    "about_me": "I’m a Computer Science Engineering student with specialization in Artificial Intelligence and Machine Learning at BVC College of Engineering, Rajahmundry, graduating in 2026.\n\nI’m passionate about web development and actively explore how AI and ML can enhance intelligent applications. As part of my learning journey, I completed a 4-week virtual internship on Artificial Intelligence and Data Analytics, organized by AICTE, Shell India, and Edunet Foundation under the Skills4Future program.\n\nDuring this internship, I worked on a project titled “Multiclass Animal Recognition”, where I gained hands-on experience in developing a deep learning model capable of classifying animal images. This opportunity helped me strengthen my skills in model training, data handling, and practical application of ML techniques.\n\nI have hands-on experience with Python, C, Java, and web development tools such as HTML, CSS, and JavaScript. I also have a foundational understanding of data structures and IT service management principles, holding certifications as a ServiceNow Certified System Administrator (CSA) and Certified Application Developer (CAD), which support my analytical and problem-solving abilities.\n\nI’m always eager to learn, collaborate, and contribute to meaningful tech projects. Currently, I’m looking for internship or project opportunities in web development, AI, or machine learning to expand my skills and make a real-world impact.",
    "email": "mahendrakaparapu2348@gmail.com",
    "phone": "9515165082",
    "linkedin_url": "https://www.linkedin.com/in/kaparapu-veera-venkata-mahendra-97379927a/",
    "github_url": "https://github.com/Mahendra3568"
}

# --- Skills Data ---
skills_data = [
    {"name": "Python programming", "type": "technical"},
    {"name": "Artificial Intelligence", "type": "technical"},
    {"name": "MySQL", "type": "technical"},
    {"name": "Servicenow (CSA & CAD)", "type": "technical"},
    {"name": "Java programming", "type": "technical"},
    {"name": "HTML", "type": "technical"},
    {"name": "CSS", "type": "technical"},
    {"name": "JavaScript", "type": "technical"},
    {"name": "Multitasking and organization", "type": "soft"},
    {"name": "Team work & collaboration", "type": "soft"},
    {"name": "Creative problem solving", "type": "soft"}
]

# --- Experience Data ---
experience_data = [
    {
        "title": "Intern",
        "company": "Edunet Foundation",
        "dates": "April 2025",
        "description": "During this internship, I worked on a project titled 'Multiclass Animal Recognition for wildlife conservation', where I gained hands-on experience in developing a deep learning model capable of classifying animal images. This opportunity helped me strengthen my skills in model training, data handling, and practical application of ML techniques."
    },
    {
        "title": "Intern",
        "company": "Infosys Springboard",
        "dates": "15 September 2025 – ongoing",
        "description": "Infosys Springboard Internship on SmartStock Inventory Optimization for Retail Stores, focused on developing an intelligent system to forecast demand, optimize stock levels, and enhance retail efficiency through data analytics and visualization. The project covered multiple milestones—data collection, analysis, model building, and dashboard creation using Python and streamlit."
    }
]

# --- Education Data ---
education_data = [
    {
        "degree": "B.Tech, Computer Science and Engineering (AI & ML)",
        "institution": "BVC College of engineering, Palacharla",
        "dates": "2022 – 2026",
        "notes": "70%"
    },
    {
        "degree": "INTERMEDIATE, MPC",
        "institution": "Sri Sai Aditya Junior College, Rajahmundry",
        "dates": "2020 – 2022",
        "notes": "90%"
    },
    {
        "degree": "Class X / High School",
        "institution": "Government High School, Korukonda",
        "dates": "Completed 2020",
        "notes": "94%"
    }
]

# --- Project Data ---
project_data = [
    {
        "title": "Multi class animal recognition for wild life conservation",
        "description": "During a 4-week virtual internship by AICTE, Shell, and Edunet Foundation, I developed a deep learning model to recognize animal images. I worked on data preprocessing, CNN implementation, and model evaluation.",
        "technologies": ["Python", "TensorFlow"],
        "github_link": "https://github.com/Mahendra3568/AICTE-INTERNSHIP",
        "demo_link": "N/A"
    },
    {
        "title": "Smart Stock Inventory Optimization for Retail Stores",
        "description": "Infosys Springboard Internship on SmartStock Inventory Optimization for Retail Stores, focused on developing an intelligent system to forecast demand, optimize stock levels, and enhance retail efficiency through data analytics and visualization. The project covered multiple milestones—data collection, analysis, model building, and dashboard creation using Python and streamlit.",
        "technologies": ["Python", "ML", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Streamlit", "Pyplot", "TensorFlow", "Sklearn"],
        "github_link": "https://github.com/Mahendra3568/Smart-Stock-Inventory-Optimization-for-Retail-Stores",
        "demo_link": "N/A"
    }
]

# ----------------------------------------------------------------------------
# DO NOT EDIT BELOW THIS LINE
# ----------------------------------------------------------------------------
def populate_database():
    try:
        print("Connecting to MongoDB Atlas...")
        client = pymongo.MongoClient(CONNECTION_STRING)
        
        # This specifies our database. It will be created if it doesn't exist.
        db = client.portfolioDB
        print("Successfully connected!")
        
        # --- Populate Profile ---
        print("Populating 'profile' collection...")
        db.profile.delete_many({}) # Clear old data
        db.profile.insert_one(profile_data)
        
        # --- Populate Skills ---
        print("Populating 'skills' collection...")
        db.skills.delete_many({}) # Clear old data
        db.skills.insert_many(skills_data)
        
        # --- Populate Experiences ---
        print("Populating 'experiences' collection...")
        db.experiences.delete_many({}) # Clear old data
        db.experiences.insert_many(experience_data)
        
        # --- Populate Educations ---
        print("Populating 'educations' collection...")
        db.educations.delete_many({}) # Clear old data
        db.educations.insert_many(education_data)
        
        # --- Populate Projects ---
        print("Populating 'projects' collection...")
        db.projects.delete_many({}) # Clear old data
        db.projects.insert_many(project_data)
        
        print("\n-----------------------------------------")
        print("✅ DATABASE POPULATION SUCCESSFUL! ✅")
        print("-----------------------------------------")
        
        client.close()
        
    except pymongo.errors.ConnectionFailure as e:
        print(f"Connection Failed: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    populate_database()
