# Exotel IVR Calling Demo

A full-stack web application demonstrating how to integrate Exotel's telephony APIs with a modern web interface. Users can enter their phone number on the frontend, and the backend securely orchestrates an automated Interactive Voice Response (IVR) call via Exotel.

## 🚀 Tech Stack
* **Frontend:** React.js, Vite, TailwindCSS
* **Backend:** Node.js, Express.js, Axios
* **Telephony:** Exotel API (Calls & Webhooks)

## 📁 Project Structure
* `/frontend`: React application containing the UI, interactive call simulator, and architectural overviews.
* `/backend`: Node.js Express server that acts as a secure bridge between the React frontend and Exotel's API.

## 🛠️ Local Setup Instructions

### 1. Backend Setup
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   * Rename `.env.example` to `.env`
   * Fill in your Exotel credentials (`EXOTEL_SID`, `EXOTEL_API_KEY`, `EXOTEL_API_TOKEN`, `EXOTEL_EXOPHONE`, `EXOTEL_APP_ID`).
4. Start the server:
   ```bash
   npm start
   ```
   *Note: The server will run on port 5001 to avoid conflicts.*

### 2. Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser to the URL provided (usually `http://localhost:5173`) to view the application!

## 🔐 Security Note
Never expose your Exotel API credentials on the frontend. The Node.js backend acts as a secure proxy to construct the Basic Auth headers and securely dispatch the outbound call.

## 👨‍💻 Built By
* Aditya
