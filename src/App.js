import './App.css';
import AppBaar from './components/AppBaar';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import User from './components/User';
import DataNotFound from './components/DataNotFound';
import Employee from './components/Employee';
import Company from './components/Company';
import Footer from './components/Footer';

function App() {
  return (
    //Employee and Company pages are only for dropdown so in that file there are no content only one text
    <div className="App">
      <Router>
        <AppBaar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/user" component={User} />
          <Route exact path="/employee" component={Employee} />
          <Route exact path="/company" component={Company} />
          <Route path="*" component={DataNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
