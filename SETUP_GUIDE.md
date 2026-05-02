# 🚀 Vasu AI - Complete Setup & Deployment Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running the App](#running-the-app)
5. [Voice Commands](#voice-commands)
6. [Features Guide](#features-guide)
7. [API Documentation](#api-documentation)
8. [Troubleshooting](#troubleshooting)
9. [Deployment](#deployment)
10. [Contributing](#contributing)

---

## Prerequisites

### Required Software
- **Node.js** 18+ (Download from [nodejs.org](https://nodejs.org))
- **npm** 9+ (Comes with Node.js)
- **Expo CLI** (`npm install -g expo-cli`)
- **Git** (Optional, for version control)

### For Mobile Development
- **Android Studio** (for Android emulator)
- **Xcode** (for iOS, macOS only)
- **Expo Go** app on your physical device

### API Keys Needed
- **OpenAI API Key** ([Get here](https://platform.openai.com/api-keys))
- **Firebase Account** (Optional, for cloud features)
- **Vercel/Netlify Token** (Optional, for deployment)

---

## Installation

### Step 1: Clone/Download Project
```bash
# If using git
git clone https://github.com/yourusername/vasu-ai.git
cd vasu-ai

# Or extract the zip file
cd vasu-ai-assistant
```

### Step 2: Install Frontend Dependencies
```bash
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### Step 4: Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your API keys
nano .env  # or use any text editor
```

### Step 5: Configure API Keys
Open `.env` file and add:
```env
OPENAI_API_KEY=sk-your-actual-key-here
BACKEND_URL=http://localhost:3001
```

---

## Configuration

### Frontend Configuration (`app.json`)
- App name, icon, splash screen
- Android/iOS permissions
- Expo plugins

### Backend Configuration (`backend/.env`)
```env
PORT=3001
OPENAI_API_KEY=your-key
NODE_ENV=development
```

### Voice Settings
- Wake word: "Vasu" (customizable in Settings)
- Language: Hindi + English (Hinglish)
- Speech rate: Adjustable

---

## Running the App

### Development Mode
```bash
# Terminal 1: Start Backend
cd backend
npm start

# Terminal 2: Start Frontend (new terminal)
cd ..
npm start
```

### Platform-Specific Commands
```bash
# Android
npm run android
# or press 'a' in Expo CLI

# iOS
npm run ios
# or press 'i' in Expo CLI

# Web
npm run web
# or press 'w' in Expo CLI
```

### Production Build
```bash
# Android APK
expo build:android

# iOS IPA
expo build:ios

# Web
expo build:web
```

---

## Voice Commands

### Basic Device Control
```
"Vasu, open YouTube"
"Vasu, open Chrome"
"Vasu, open WhatsApp"
"Vasu, call Papa"
"Vasu, call 9876543210"
"Vasu, WiFi on karo"
"Vasu, Bluetooth off karo"
"Vasu, flashlight chalu karo"
"Vasu, volume 80"
"Vasu, brightness 70"
```

### Communication
```
"Vasu, WhatsApp Mom ko message bhejo: Main aa raha hoon"
"Vasu, SMS bhejo 9876543210: Hello"
"Vasu, email boss@company.com: Project report attached"
```

### Media Control
```
"Vasu, Arijit Singh ka gana bajao"
"Vasu, play Hindi songs"
"Vasu, pause music"
"Vasu, next song"
"Vasu, volume up"
```

### Search & Web
```
"Vasu, Google par pizza recipe search karo"
"Vasu, YouTube par funny videos dikhayo"
"Vasu, open google.com"
"Vasu, weather batao"
```

### AI Coding
```
"Vasu, ek React calculator app banao"
"Vasu, Python script likho web scraping ke liye"
"Vasu, is code ko debug karo"
"Vasu, deploy karo Vercel pe"
```

### Automation
```
"Vasu, Good Morning routine chalao"
"Vasu, Movie Night routine start karo"
"Vasu, 8 baje alarm lagao"
"Vasu, har roz subah 7 baje news kholo"
```

### Learning Mode
```
"Vasu, mujhe Spanish numbers sikhao"
"Vasu, quiz mein capitals ke"
"Vasu, revision shuru karo"
"Vasu, yaad dilao Spanish greetings"
```

### Accessibility
```
"Vasu, screen reader on karo"
"Vasu, text bada karo"
"Vasu, contrast badhao"
"Vasu, kya hai screen pe"
```

---

## Features Guide

### 🎙️ Voice Recognition
- Always-listening wake word detection
- Real-time speech-to-text
- Hindi + English (Hinglish) support
- Visual waveform feedback
- Voice level indicator

### 📱 App Control
- Open any installed app
- Close/switch apps
- System settings control
- Quick actions grid

### 💻 AI Coding
- Generate code from voice
- Multiple language support
- Template-based projects
- Live code editor
- One-click deployment

### 🚀 Deployment
- Vercel integration
- Netlify support
- GitHub Pages
- Firebase hosting
- Build automation

### 🧠 Memory System
- Spaced repetition algorithm
- Voice flashcards
- Habit tracking
- Smart suggestions
- Learning analytics

### 🔒 Security
- Voice biometric authentication
- PIN fallback
- Biometric support
- Risk-level confirmation
- Security event logging

### ♿ Accessibility
- Screen reader support
- High contrast mode
- Large text option
- Gesture navigation
- Shake to activate

---

## API Documentation

### Base URL
```
http://localhost:3001/api
```

### Endpoints

#### Voice Processing
```http
POST /voice/process
Content-Type: application/json

{
  "command": "open youtube",
  "language": "hi-EN",
  "context": []
}
```

#### Code Generation
```http
POST /code/generate
Content-Type: application/json

{
  "description": "calculator app",
  "language": "javascript",
  "framework": "react"
}
```

#### Code Execution
```http
POST /code/execute
Content-Type: application/json

{
  "code": "console.log('Hello')",
  "language": "javascript"
}
```

#### Web Automation
```http
POST /web/automate
Content-Type: application/json

{
  "url": "https://example.com",
  "actions": [
    { "type": "click", "selector": "#button" },
    { "type": "type", "selector": "#input", "text": "hello" }
  ]
}
```

#### Deployment
```http
POST /deploy
Content-Type: application/json

{
  "platform": "vercel",
  "projectPath": "./my-app",
  "projectName": "my-awesome-app"
}
```

#### System Commands
```http
POST /system/execute
Content-Type: application/json

{
  "command": "ls -la",
  "requiresConfirmation": false
}
```

#### Memory Storage
```http
POST /memory/save
Content-Type: application/json

{
  "userId": "user123",
  "key": "learning_spanish",
  "data": { "level": "beginner" }
}
```

```http
GET /memory/get/:userId/:key
```

---

## Troubleshooting

### Common Issues

#### "npm install fails"
```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules
rm package-lock.json

# Reinstall
npm install
```

#### "Expo won't start"
```bash
# Clear Expo cache
expo start -c

# Or
npx expo start --clear
```

#### "Backend connection refused"
- Check if backend is running: `cd backend && npm start`
- Verify BACKEND_URL in `.env`
- Check firewall settings

#### "Voice not working"
- Grant microphone permissions
- Check if device supports speech recognition
- Try restarting the app

#### "OpenAI API errors"
- Verify API key is correct
- Check API quota/limits
- Ensure billing is set up

### Debug Mode
```bash
# Enable debug logging
DEBUG=true npm start

# Backend debug
DEBUG=* node backend/server.js
```

---

## Deployment

### Deploy Backend
```bash
# Heroku
git push heroku main

# Railway
railway up

# AWS
# Use Elastic Beanstalk or EC2

# VPS
# Use PM2 for process management
npm install -g pm2
pm2 start backend/server.js
```

### Deploy Frontend
```bash
# Expo EAS
expo build:android
expo build:ios

# Or use EAS Build
eas build --platform android
eas build --platform ios

# Web
expo build:web
# Deploy `web-build` folder to Netlify/Vercel
```

---

## Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Code Style
- Use ESLint configuration
- Follow React Native best practices
- Write tests for new features
- Update documentation

### Testing
```bash
# Run tests
npm test

# Run specific test
npm test -- VoiceContext.test.js

# Coverage report
npm test -- --coverage
```

---

## Support

### Getting Help
- 📧 Email: support@vasu-ai.com
- 💬 Discord: [Join our server](https://discord.gg/vasu-ai)
- 🐦 Twitter: [@VasuAI](https://twitter.com/vasuai)
- 📖 Docs: [docs.vasu-ai.com](https://docs.vasu-ai.com)

### Report Issues
```
1. Check existing issues first
2. Provide device info (OS, version)
3. Include error logs
4. Describe steps to reproduce
5. Attach screenshots if applicable
```

---

## License

MIT License - See [LICENSE](LICENSE) file

---

**Made with ❤️ by the Vasu AI Team**

*Voice is the future. Welcome to the revolution.* 🎙️✨
