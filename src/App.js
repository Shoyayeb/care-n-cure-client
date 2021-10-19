import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Ambulance from './Pages/Ambulance/Ambulance/Ambulance';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login-Register/Login/Login';
import Register from './Pages/Login-Register/Register/Register';
import NotFound from './Pages/NotFound/NotFound/NotFound';
import OnlineDoctor from './Pages/OnlineDoctor/OnlineDoctor/OnlineDoctor';
import Service from './Pages/Services/Service/Service';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>

      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/onlinedoctor">
              <OnlineDoctor></OnlineDoctor>
            </PrivateRoute>
            <PrivateRoute path="/ambulance">
              <Ambulance></Ambulance>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <Service></Service>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
