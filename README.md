# 🤖 Vasu AI Voice Assistant

**The Ultimate Voice-Controlled Universal Automation Platform**

Vasu is a Jarvis-like AI assistant that controls your entire digital world through voice commands. Built with React Native, Node.js, and OpenAI GPT-4.

## ✨ Features

### 🎙️ Voice Recognition
- **Always Listening**: Customizable wake word ("Hey Vasu")
- **Multi-language**: Hindi + English (Hinglish) support
- **Real-time Processing**: Instant speech-to-text conversion
- **Voice Waveform**: Visual feedback while listening

### 📱 Full System Control
- **Apps**: Open/close any app (YouTube, Chrome, WhatsApp, etc.)
- **Settings**: WiFi, Bluetooth, Flashlight, Volume, Brightness
- **Communication**: Calls, messages, emails, WhatsApp
- **Media**: Play music, videos, control playback

### 💻 AI Coding Engine
- **Generate Code**: "Create a React calculator app"
- **Auto-Complete**: Voice-to-code conversion
- **Debug**: "Fix this error in my code"
- **Templates**: React, Node.js, Python, Flutter, HTML

### 🚀 Deployment Automation
- **One-Click Deploy**: Vercel, Netlify, GitHub Pages, Firebase
- **Auto Build**: Handles dependencies and build process
- **Live URL**: Instant deployment with shareable links

### 🧠 Memory System (Faster Than Brain)
- **Spaced Repetition**: Smart revision scheduling
- **Voice Flashcards**: Hands-free learning
- **Habit Tracking**: Learns your patterns
- **Suggestions**: Predicts what you need

### 🔒 Security
- **Voice Authentication**: Speaker recognition
- **PIN Fallback**: Secure backup access
- **Biometric**: Fingerprint/Face ID support
- **Safety Layer**: Confirms risky actions

### ♿ Accessibility
- **Screen Reader**: Full voice feedback
- **High Contrast**: Visual impairment support
- **Large UI**: Minimal touch requirement
- **Gesture Control**: Shake to activate

### ⚡ Automation
- **Custom Routines**: "Good Morning" = News + Weather + Calendar
- **Scheduled Tasks**: Voice-based reminders
- **Smart Shortcuts**: Multi-step workflows
- **Context Awareness**: Location/time-based actions

## 🛠️ Tech Stack

### Frontend
- React Native + Expo
- React Navigation
- AsyncStorage (local DB)
- Expo Voice / Web Speech API
- Lottie Animations

### Backend
- Node.js + Express
- OpenAI GPT-4 API
- Puppeteer (web automation)
- Firebase / MongoDB
- Socket.io (real-time)

### AI/ML
- OpenAI Whisper (speech-to-text)
- GPT-4 (natural language understanding)
- Custom intent classifier
- Spaced repetition algorithm

## 🚀 Quick Start

### Prerequisites
```bash
# Install Node.js 18+
# Install Expo CLI
npm install -g expo-cli

# Install backend dependencies
cd backend
npm install
```

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/vasu-ai.git
cd vasu-ai
```

2. **Install dependencies**
```bash
# Frontend
npm install

# Backend
cd backend
npm install
cd ..
```

3. **Environment Variables**
Create `.env` file:
```env
OPENAI_API_KEY=your_openai_key_here
FIREBASE_API_KEY=your_firebase_key
BACKEND_URL=http://localhost:3001
```

4. **Start the app**
```bash
# Start backend
cd backend
npm start

# Start frontend (new terminal)
cd ..
npm start
```

## 📱 Usage

### Basic Commands
```
"Vasu, open YouTube"
"Vasu, call Papa"
"Vasu, WiFi on karo"
"Vasu, flashlight chalu karo"
"Vasu, Arijit Singh ka gana bajao"
```

### Advanced Commands
```
"Vasu, ek React app banao"
"Vasu, is code ko deploy karo Vercel pe"
"Vasu, mujhe Spanish sikhao"
"Vasu, Good Morning routine chalao"
"Vasu, 8 baje alarm lagao"
```

### Coding Commands
```
"Vasu, create a todo app in React"
"Vasu, write a Python script for web scraping"
"Vasu, debug this function"
"Vasu, build and deploy to Netlify"
```

## 📁 Project Structure

```
vasu-ai-assistant/
├── App.js                 # Main entry point
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── VoiceWaveform.js
│   │   └── StatusBar.js
│   ├── screens/            # App screens
│   │   ├── HomeScreen.js
│   │   ├── VoiceScreen.js
│   │   ├── CommandsScreen.js
│   │   ├── AutomationScreen.js
│   │   ├── MemoryScreen.js
│   │   ├── SettingsScreen.js
│   │   ├── SecurityScreen.js
│   │   ├── AccessibilityScreen.js
│   │   ├── CodingScreen.js
│   │   ├── DeploymentScreen.js
│   │   └── LearningScreen.js
│   ├── context/            # React Context providers
│   │   ├── VasuContext.js
│   │   ├── VoiceContext.js
│   │   ├── MemoryContext.js
│   │   ├── SecurityContext.js
│   │   └── AutomationContext.js
│   └── utils/              # Helper functions
├── backend/
│   ├── server.js           # Express API server
│   └── package.json
└── README.md
```

## 🔌 API Endpoints

### Voice Processing
```
POST /api/voice/process
Body: { command: "open youtube", language: "hi-EN" }
```

### Code Generation
```
POST /api/code/generate
Body: { description: "calculator app", language: "javascript" }
```

### Web Automation
```
POST /api/web/automate
Body: { url: "https://example.com", actions: [...] }
```

### Deployment
```
POST /api/deploy
Body: { platform: "vercel", projectPath: "./my-app" }
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run specific test
npm test -- VoiceContext.test.js
```

## 📦 Building for Production

### Android
```bash
cd android
./gradlew assembleRelease
```

### iOS
```bash
cd ios
xcodebuild -workspace Vasu.xcworkspace -scheme Vasu -configuration Release
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- OpenAI for GPT-4 and Whisper APIs
- React Native community
- Expo team for amazing tools
- All contributors and testers

---

**Made with ❤️ by Vasu AI Team**

*Voice is the future of computing. Welcome to the revolution.* 🎙️✨
