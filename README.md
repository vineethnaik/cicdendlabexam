# Hospital Frontend

A React-based frontend application for Hospital Management System, built with Vite.

## Features

- 🔐 User Authentication (Login/Signup)
- 📊 Dashboard with hospital statistics
- 🎨 Modern UI with gradient designs
- 🚀 Fast development with Vite
- 📱 Responsive design

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hospital-frontend-main
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Deployment

This project includes GitHub Actions workflow for automatic deployment to GitHub Pages.

### Quick Setup

1. Enable GitHub Pages in your repository settings (Settings → Pages → Source: GitHub Actions)
2. Push to the `main` branch - the workflow will automatically build and deploy

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## Project Structure

```
src/
├── components/     # Reusable components (Navbar)
├── pages/          # Page components (Login, Signup, Dashboard)
├── App.jsx         # Main app component with routing
└── main.jsx        # Application entry point
```

## API Configuration

The application connects to a backend API. By default, it uses `http://localhost:8081`.

To configure a different API URL:
- For development: Create a `.env` file with `VITE_API_URL=your-api-url`
- For production: Set the `VITE_API_URL` secret in GitHub repository settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary.
