import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FootterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" Component={ListEmployeeComponent}></Route>
          <Route path="/employees" Component={ListEmployeeComponent}></Route>
          <Route path="add-employee" Component={AddEmployee}></Route>
        </Routes>
        <FootterComponent />
      </Router>
    </div>
  );
}

export default App;
