import Home from './pages/Home/Home.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound.jsx';
import Login from './pages/authentication/Login/Login.jsx';
import RegisterAsJobSeeker from './pages/authentication/RegisterAsJobSeeker/RegisterAsJobSeeker.jsx';
import RegisterAsRecruiter from './pages/authentication/RegisterAsRecruiter/RegisterAsRecruiter.jsx';
import AddReview from './components/AddReview/AddReview.js';
import CreateCandidateProfile from './components/Candidates/CreateCandidateProfile/CreateCandidateProfile.js';
import Sidebar from './components/Shared/Sidebar/Sidebar.js';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register/jobSeeker'>
          <RegisterAsJobSeeker />
        </Route>
        <Route path='/register/recruiter'>
          <RegisterAsRecruiter />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/addReview'>
          <AddReview />
        </Route>
        <Route path='/createCandidateProfile'>
          <CreateCandidateProfile></CreateCandidateProfile>
        </Route>
        <Route path='/sidebar'>
          <Sidebar></Sidebar>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
