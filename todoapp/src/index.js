import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom

import App from './App';

const root = document.getElementById('root');
const reactRoot = createRoot(root); // Use createRoot to create a root

reactRoot.render(<App />); // Render your app inside the created root
