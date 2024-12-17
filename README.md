# **AskyAI** 🤖  
**Your Personal AI Chatbot Powered by Gemini**

AskyAI is a cutting-edge AI chatbot that leverages the **Gemini Model** for real-time, intelligent, and seamless conversations. Built with a modern tech stack, it features a robust architecture combining **React**, **Express**, **TypeScript**, **PostgreSQL**, and **Turborepo** for optimal performance and scalability.

---

## 🚀 **Tech Stack**  
- **Frontend**: React.js with TypeScript  
- **Backend**: Express.js with TypeScript  
- **Database**: PostgreSQL  
- **Monorepo Management**: Turborepo  
- **AI Model**: Gemini API  
- **Package Manager**: npm  

---

## ⚙️ **Key Features**  
- **Gemini Model Integration**: Provides accurate and insightful real-time responses.  
- **Full-Stack Implementation**: End-to-end integration with React (frontend) and Express (backend).  
- **PostgreSQL Database**: Efficient and structured storage for conversations and user data.  
- **TypeScript Support**: Ensures type safety and cleaner code for both client and server.  
- **Monorepo Setup with Turborepo**: Streamlined development across packages with shared configurations.  
- **Developer-Friendly**: Easy setup, clear structure, and ready-to-run commands.  

---
AskyAI/ ├── apps/ │ ├── server/ # Backend Express.js project │ ├── client/ # Frontend React.js project ├── packages/ │ ├── db/ # Database setup for PostgreSQL │ ├── tsconfig/ # Shared TypeScript configurations ├── package.json # Root configurations and scripts └── turbo.json # Turborepo configuration

yaml
Copy code

---

## 🛠️ **Getting Started**  

### **Prerequisites**  
Make sure you have the following installed:  
- Node.js  
- PostgreSQL  
- npm  

---

### **Clone the Repository**  
```bash
git clone https://github.com/ashutoshpaliwal26/AskyAi.git
cd AskyAi
Setup the Project
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables:
Create an .env file in apps/server and apps/client directories:

plaintext
Copy code
# apps/server/.env
KEY=your_api_key_here
DATABASE_URL=postgres://username:password@localhost:5432/askyai
Database Setup:
Run the following command to initialize your PostgreSQL database:

bash
Copy code
npm run db:init
Run the Development Server
Start both the frontend and backend servers with Turborepo:

bash
Copy code
npm run dev
The frontend will run on http://localhost:5137
The backend will run on http://localhost:8000
```
🎯 Usage
Once the development server is running:

Open your browser and visit http://localhost:3000.
Start interacting with AskyAI! Ask questions, get answers, and explore its capabilities.
🤝 Contributing
Contributions are always welcome!

Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m "Add new feature")
Push to the branch (git push origin feature-branch)
Open a pull request
📜 License
This project is licensed under the MIT License.

🔗 Repository: AskyAI on GitHub
🌟 Star the project if you find it useful!

markdown
Copy code

### Key Details Added:
1. **Monorepo Setup** with Turborepo directory structure.  
2. Environment file instructions for **PostgreSQL** and **Gemini API key**.  
3. Commands for running the development server (`npm run dev`).  
4. Organized tech stack, usage guide, and contribution instructions.

Let me know if you want me to refine or add more! 🚀





