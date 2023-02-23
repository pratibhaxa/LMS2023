import { Routes, Route } from 'react-router-dom'
import SignUpPage from './SignUpPage';

function App() {
  return(
    <Routes>
      <Route  path="/sign-up-page" element={<SignUpPage />}></Route>
    </Routes>
  )
}

export default App;