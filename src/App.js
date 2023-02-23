import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';

function App() {
  return(
    <Routes>
      <Route  path="/home-page" element={<HomePage />}></Route>
      <Route  path="/sign-up-page" element={<SignUpPage />}></Route>
    </Routes>
  )
}

export default App;