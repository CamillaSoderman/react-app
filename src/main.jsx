import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Style/index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
