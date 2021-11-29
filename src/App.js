import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Header from './Components/Sheared/Header/Header';
import Footer from './Components/Sheared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import MyOrder from './Components/MyOrder/MyOrder';
import AddNewService from './Components/AddNewService/AddNewService';
import    Services from './Components/Services/Services';
import AllOrder from './Components/AllOrder/AllOrder';
import Login from './Components/Firebase/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute  from './Components/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
       <AuthProvider>
          <Router>
              <Header></Header>
              <Switch>
                    <Route exact path="/">
                      <Home></Home>
                    </Route>
                    <Route path="/home">
                       <Home></Home>
                        </Route>
                    <PrivateRoute path="/myCart">
                       <MyOrder></MyOrder>
                    </PrivateRoute>
                    <PrivateRoute path="/allOrders">
                      <AllOrder></AllOrder>
                    </PrivateRoute>
                    <PrivateRoute path="/placeOrder/:id">
                        <PlaceOrder></PlaceOrder>
                    </PrivateRoute>
                    <PrivateRoute path="/addNewService">
                      <AddNewService></AddNewService>
                    </PrivateRoute>
                     <PrivateRoute path="/Service">
                      <Services></Services>
                    </PrivateRoute>
                    <Route path="/login">
                      <Login></Login>
                    </Route>
                    <Route path="*">
                      <NotFound></NotFound>
                    </Route>
              </Switch>
            <Footer></Footer>
          </Router>
       </AuthProvider>

      




    </div>
  );
}

export default App;
