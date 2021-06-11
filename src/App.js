import NavBar from "./components/NavBar/NavBar";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <Router>
      <NavBar />
      <div className='container py-4'>
        <Switch>
          <Route exact path='/'>
            <SubmitForm />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
