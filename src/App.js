import { Routes, Route } from 'react-router-dom'
import AddNewBook from './AddNewBook';
import AfterLoginPage from './AfterLoginPage';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import ViewBooks from './ViewBooks';

function App() {
  return(
    <Routes>
      <Route  path="/" element={<HomePage />}></Route>
      {/* <Route  path="/home" element={<HomePage />}></Route> */}
      <Route  path="/about" element={<HomePage />}></Route>
      <Route  path="/sign-up" element={<SignUpPage />}></Route>
      <Route  path="/sign-in" element={<SignInPage />}></Route>
      <Route  path='/after-login' element={<AfterLoginPage />}></Route>
      <Route  path='/add-new-book' element={<AddNewBook />}></Route>
      <Route  path='/view-books' element={<ViewBooks />}></Route>
    </Routes>
  )
}

export default App;