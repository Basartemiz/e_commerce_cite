# ShopEase E-Commerce Site

A basic e-commerce frontend built with React and Vite.

## Project Structure

```
e-commerce-cite/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── data/       # Static data (products)
│   │   ├── App.jsx     # Main application component
│   │   └── main.jsx    # Application entry point
│   ├── package.json
│   └── vite.config.js
├── backend/            # Backend directory (for future use)
├── .gitignore
├── requirements.txt    # Python dependencies (if using Python backend)
└── README.md
```

## Features

- Product listing with grid layout
- Shopping cart functionality
- Add/remove items from cart
- Quantity management
- Responsive design
- Hero section
- Navigation header
- Footer with links

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
cd frontend
npm run build
```

### Preview Production Build

```bash
cd frontend
npm run preview
```

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS** - Styling (component-scoped CSS files)

## Components

- `Header` - Navigation bar with logo and cart button
- `Hero` - Landing section with call-to-action
- `ProductList` - Grid of product cards
- `ProductCard` - Individual product display
- `Cart` - Shopping cart sidebar
- `Footer` - Site footer with links

## License

MIT
