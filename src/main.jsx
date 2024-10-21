import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the application
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import the Bootstrap CSS file and custom CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App'; // Import the main App component
import NotFound from './pages/NotFound'; // Import the NotFound component for handling 404 errors
import About from './pages/About'; // Import the About page component
import Portfolio from './pages/Portfolio'; // Import the Portfolio page component
import Contact from './pages/Contact'; // Import the Contact page component
import Resume from './pages/Resume'; // Import the Resume page component

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <App />, // Main App component
    errorElement: <NotFound />, // Component to render for 404 errors
    children: [
      {
        index: true, // Default child route to render
        element: <About />, // About page component to render by default
      },
      {
        path: '/about', // Path for the About page
        element: <About />, // About page component to render when the path is accessed
      },
      {
        path: '/portfolio', // Path for the Portfolio page
        element: <Portfolio />, // Portfolio page component to render when the path is accessed
      },
      {
        path: '/contact', // Path for the Contact page
        element: <Contact />, // Contact page component to render when the path is accessed
      },
      {
        path: '/resume', // Path for the Resume page
        element: <Resume />, // Resume page component to render when the path is accessed
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
