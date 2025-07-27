# ABC Model - CBT Tool

A modern web application for Cognitive Behavioral Therapy (CBT) using the ABC model. This tool helps users track and analyze their thoughts, emotions, and behaviors through a structured step-by-step process.

## 🌟 Features

- **Step-by-step ABC Model**: Guided process through all CBT steps
- **Local Storage**: All data is saved locally on your device
- **History View**: Access and review all your previous entries
- **Share Functionality**: Share your entries via WhatsApp
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Auto-focus**: Smart navigation between fields with Enter key
- **Progress Tracking**: Visual progress bar showing completion status

## 📋 ABC Model Steps

The application follows the standard CBT ABC model:

1. **A - Acontecimiento (Activating Event)**: What happened?
2. **B - Pensamientos (Beliefs)**: What were your thoughts?
3. **C - Consecuencias (Consequences)**:
   - Emocionales (Emotional)
   - Fisiológicas (Physiological)
   - Conductuales (Behavioral)
4. **D - Debate (Dispute)**: Challenge your thoughts
5. **E - Efectos (Effects)**: New beliefs, emotions, and behaviors
6. **Review**: Complete overview before saving

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd abc-model
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Biome** - Fast linter and formatter

## 📱 Usage

### Creating a New Entry

1. Click "Ir a Inicio" to start a new ABC model entry
2. Fill out each step following the prompts
3. Use Enter to navigate between fields
4. Review your entry on the final step
5. Save your entry

### Managing History

- Click "Ver Historial" to view all your saved entries
- Share entries via WhatsApp using the share button
- Delete entries using the delete button (with confirmation)

### Keyboard Navigation

- **Enter**: Move to the next field or step
- **Shift + Enter**: Create a new line in text areas
- **Tab**: Navigate between form elements

## 🔒 Privacy & Data

- All data is stored locally in your browser's localStorage
- No data is sent to external servers
- You can share entries manually via WhatsApp
- Data persists between browser sessions

## 🎨 UI Components

The application uses a custom component library:

- **Card**: Main container component
- **Button**: Interactive buttons with variants
- **ProgressBar**: Visual step indicator
- **ConfirmationModal**: Delete confirmation dialogs
- **HistoryView**: List of saved entries

## 📁 Project Structure

```
src/
├── components/
│   ├── steps/          # Individual step components
│   ├── ui/             # Reusable UI components
│   ├── card.tsx        # Card container
│   ├── confirmation-modal.tsx
│   ├── history-view.tsx
│   └── progress-bar.tsx
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── global.css          # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This tool is designed to support mental health practices but is not a substitute for professional therapy. If you're experiencing mental health challenges, please consult with a qualified mental health professional.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

---

**Note**: This application is designed to be a supportive tool for CBT practice. Always consult with mental health professionals for clinical guidance.
