import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking';
import AuthProvider from './Pages/Context/AuthProvider';
import Doctors from './Pages/HomeItems/Doctors/Doctors';
import AboutUs from './Pages/HomeItems/AboutUs/AboutUs';
import Carrier from './Pages/HomeItems/Carrier/Carrier';
import FreeTreatments from './Pages/HomeItems/FreeTreatments/FreeTreatments';
import Home from './Pages/HomeItems/Home/Home';
import Login from './Pages/HomeItems/Login/Login';
import Register from './Pages/HomeItems/Register/Register';
import Header from './Pages/HomeItems/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>

      <Switch>
<Route exact path="/">
<Home></Home>
</Route>

<Route  path="/home">
<Home></Home>
</Route>

<PrivateRoute path="/booking/:serviceId">
  <Booking></Booking>
</PrivateRoute>

<Route path="/doctors">
<Doctors></Doctors>
</Route>

<PrivateRoute path="/freeTreatment">
<FreeTreatments></FreeTreatments>
</PrivateRoute>

<PrivateRoute path="/carrier">
<Carrier></Carrier>
</PrivateRoute>
<Route path="/about">
<AboutUs></AboutUs>
</Route>

<Route path="/login">
<Login></Login>
</Route>

{/* <Route path="/register">
<Register></Register>
</Route> */}

<Route path="*">
<NotFound></NotFound>
</Route>
      </Switch>
      </BrowserRouter>
      <Footer></Footer>
        </AuthProvider>
    </div>
  );
}

export default App;
