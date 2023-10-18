import React from "react";
import styles from '../styles/Home.module.css';
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { employeCreation } from "../features/employe.slice";


export function Home () {
  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputDateOfBirth = useRef();
  const inputDateOfStart = useRef();
  const inputStreet = useRef();
  const inputCity = useRef();
  const inputState = useRef();
  const inputZipCode = useRef();
  const inputDepartment = useRef();
  const getAccessRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
   e.preventDefault();
   const data = {
     firsName: inputFirstName.current.value,
     lastName: inputLastName.current.value,
     dateOfBirth: inputDateOfBirth.current.value,
     dateOfStart: inputDateOfStart.current.value,
     street: inputStreet.current.value,
     city: inputCity.current.value,
     sate: inputState.current.value,
     zipCode: inputZipCode.current.value,
     department: inputDepartment.current.value

   };

  dispatch(employeCreation(data))
  }
     
   return(
    <main>
    <div className={styles["title"]}>
      <h1>HRnet</h1>
    </div>
    <div className={styles["container"]}>
      <div className={styles["emplyoyeList-linkContainer"]}>
        <Link className={styles["employeList-link"]}>
          <p className={styles["employeList-link-text"]}>View Current Employees</p>
        </Link>
      </div>
      <section className={styles["employeForm"]}>
        <h2 className={styles["FormTitle"]}>Create Employee</h2>
        <form className={styles["sign-inForm"]} onSubmit={(e) => handleSubmit(e)} ref={getAccessRef}>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="firstname">FirstName</label>
            <input type="text" id="firstname" ref={inputFirstName}/>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="lastname">LastName</label>
            <input type="text" id="lastname" ref={inputLastName}/>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="dateofbirth">Date of Birth</label>
            <input type="date" id="dateofbirth" ref={inputDateOfBirth}/>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="dateofstart">Date of Start</label>
            <input type="date" id="dateofstart" ref={inputDateOfStart}/>
          </div>
          <h3 className={styles["AdressTitle"]}> Address </h3>
          <div className={styles["AdressForm"]}>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="street">Street</label>
              <input type="text" id="street" ref={inputStreet}/>
            </div>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="city">City</label>
              <input type="text" id="city" ref={inputCity}/>
            </div>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="state">State</label>
              <select className={styles["stateWrapper"]} id="state" ref={inputState}>
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AS">American Samoa</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FM">Federated States Of Micronesia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="GU">Guam</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MH">Marshall Islands</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PW">Palau</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VI">Virgin Islands</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>

            <div className={styles["input-wrapper"]}>
              <label htmlFor="zipcode">Zip Code</label>
              <input type="text" id="zipcode" ref={inputZipCode}/>
            </div>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="department">Department</label>
            <select className={styles["departmentWrapper"]} id="department" ref={inputDepartment}>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engeneering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>
          
          <button className={styles["sign-in-button"]}>Sign In</button> 
        </form>
      </section>

     </div>
     
  </main>
  )
 }