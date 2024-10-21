import React from 'react'; // Import the React library
import { Outlet } from 'react-router-dom'; // Import Outlet for rendering child routes

// Import the Header and Footer components
import Header from './components/Header';
import Footer from './components/Footer';

// Define the App component
function App() {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

// Export the App component for use in other components
export default App;
