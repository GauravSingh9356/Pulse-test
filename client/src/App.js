import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import cookie from 'js-cookie';
import Login from './Pages/Login';
import Register from './Pages/Register';

import toast, { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <CheckAuth>
              <Home />
            </CheckAuth>
          }
        />

        <Route
          exact
          path='/login'
          element={
            <CheckAuth>
              <Login />
            </CheckAuth>
          }
        />

        <Route exact path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

const CheckAuth = ({ children }) => {
  const token = cookie.get('token');
  console.log(token);
  if (!token) <Navigate to='/login' />;

  return children;
};

export default App;
