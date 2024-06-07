import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const AddEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    EmployeeService.addEmployee(employee)
      .then((response) => {
        navigate('/employees');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Add Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
              </form>
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
              </form>
              <form>
                <div className="form-group mb-2">
                  <label className="form-label ">Email:</label>
                  <input
                    type="text"
                    placeholder="Enter your Email Id"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <br />
                  <button
                    className="btn btn-success"
                    onClick={(e) => saveEmployee(e)}
                  >
                    Sumbit
                  </button>
                  <Link to="/employees" className="btn btn-danger">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEmployee;
