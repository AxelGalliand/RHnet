import React, { useState } from "react";
import styles from '../styles/Home.module.css';
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { employeCreation } from "../features/employe.slice";
import DateSelector from "../Component/DatePicker/datePicker";
import Selector from "../Component/Selector/selector";
import Modal from"../Component/Modal/modal";


const Home =()=> {
  const inputFirstNameRef = useRef();
  const [errorFirstName, setErrorFirstName] = useState(false)
  const inputLastNameRef = useRef();
  const [errorLastName, setErrorLastName] = useState(false);
  const [inputDateOfBirth, setInputDateOfBirth] = useState("");
  const [errorDateOfBirth, setErrorDateOfBirth] = useState(false);
  const [inputDateOfStart, setInputDateOfStart] = useState("");
  const [errorDateOfStart, setErrorDateOfStart] = useState(false);
  const inputStreetRef = useRef();
  const [errorStreet, setErrorStreet] = useState(false);
  const inputCityRef = useRef();
  const [errorCity, setErrorCity] = useState(false);
  const [inputState, setInputState] = useState("");
  const [errorState, setErrorState] = useState(false);
  const inputZipCodeRef = useRef();
  const [errorZipCode, setErrorZipCode] = useState(false);
  const [inputDepartment, setInputDepartment] = useState("");
  const [errorDepartment, setErrorDepartment] = useState(false);
  const getAccessRef = useRef();
  const dispatch = useDispatch();
  
  const states= [
    { "abbreviation": "AK", "value": "Alaska" },
    { "abbreviation": "AL", "value": "Alabama" },
    { "abbreviation": "AS", "value": "American Samoa" },
    { "abbreviation": "AZ", "value": "Arizona" },
    { "abbreviation": "AR", "value": "Arkansas" },
    { "abbreviation": "CA", "value": "California" },
    { "abbreviation": "CO", "value": "Colorado" },
    { "abbreviation": "CT", "value": "Connecticut" },
    { "abbreviation": "DE", "value": "Delaware" },
    { "abbreviation": "DC", "value": "District Of Columbia" },
    { "abbreviation": "FM", "value": "Federated States Of Micronesia" },
    { "abbreviation": "FL", "value": "Florida" },
    { "abbreviation": "GA", "value": "Georgia" },
    { "abbreviation": "GU", "value": "Guam" },
    { "abbreviation": "HI", "value": "Hawaii" },
    { "abbreviation": "ID", "value": "Idaho" },
    { "abbreviation": "IL", "value": "Illinois" },
    { "abbreviation": "IN", "value": "Indiana" },
    { "abbreviation": "IA", "value": "Iowa" },
    { "abbreviation": "KS", "value": "Kansas" },
    { "abbreviation": "KY", "value": "Kentucky" },
    { "abbreviation": "LA", "value": "Louisiana" },
    { "abbreviation": "ME", "value": "Maine" },
    { "abbreviation": "MH", "value": "Marshall Islands" },
    { "abbreviation": "MD", "value": "Maryland" },
    { "abbreviation": "MA", "value": "Massachusetts" },
    { "abbreviation": "MI", "value": "Michigan" },
    { "abbreviation": "MN", "value": "Minnesota" },
    { "abbreviation": "MS", "value": "Mississippi" },
    { "abbreviation": "MO", "value": "Missouri" },
    { "abbreviation": "MT", "value": "Montana" },
    { "abbreviation": "NE", "value": "Nebraska" },
    { "abbreviation": "NV", "value": "Nevada" },
    { "abbreviation": "NH", "value": "New Hampshire" },
    { "abbreviation": "NJ", "value": "New Jersey" },
    { "abbreviation": "NM", "value": "New Mexico" },
    { "abbreviation": "NY", "value": "New York" },
    { "abbreviation": "NC", "value": "North Carolina" },
    { "abbreviation": "ND", "value": "North Dakota" },
    { "abbreviation": "MP", "value": "Northern Mariana Islands" },
    { "abbreviation": "OH", "value": "Ohio" },
    { "abbreviation": "OK", "value": "Oklahoma" },
    { "abbreviation": "OR", "value": "Oregon" },
    { "abbreviation": "PW", "value": "Palau" },
    { "abbreviation": "PA", "value": "Pennsylvania" },
    { "abbreviation": "PR", "value": "Puerto Rico" },
    { "abbreviation": "RI", "value": "Rhode Island" },
    { "abbreviation": "SC", "value": "South Carolina" },
    { "abbreviation": "SD", "value": "South Dakota" },
    { "abbreviation": "TN", "value": "Tennessee" },
    { "abbreviation": "TX", "value": "Texas" },
    { "abbreviation": "UT", "value": "Utah" },
    { "abbreviation": "VT", "value": "Vermont" },
    { "abbreviation": "VI", "value": "Virgin Islands" },
    { "abbreviation": "VA", "value": "Virginia" },
    { "abbreviation": "WA", "value": "Washington" },
    { "abbreviation": "WV", "value": "West Virginia" },
    { "abbreviation": "WI", "value": "Wisconsin" },
    { "abbreviation": "WY", "value": "Wyoming" }
  ];
  
  const departments =[
    {"abbreviation": "SL","value": "Sales"},
    {"abbreviation": "MK","value": "Marketing"},
    {"abbreviation": "EG","value": "Engeneering"},
    {"abbreviation": "HR","value": "Human Resources"},
    {"abbreviation": "LG","value": "Legal"}
  ];

  const handleSubmit = (e) => {
   e.preventDefault();

   if(inputFirstNameRef.current.value === ""){
    setErrorFirstName(true)
   }
   if(inputLastNameRef.current.value === ""){
    setErrorLastName(true)
   }
   if(inputDateOfBirth === ""){
    setErrorDateOfBirth(true)
   }
   if(inputDateOfStart === ""){
    setErrorDateOfStart(true)
   }
   if(inputStreetRef.current.value === ""){
    setErrorStreet(true)
   }
   if(inputCityRef.current.value === ""){
    setErrorCity(true)
   }
   if(inputState === ""){
    setErrorState(true)
   }
   if(inputZipCodeRef.current.value === ""){
    setErrorZipCode(true)
   }
   if(inputDepartment === ""){
    setErrorDepartment(true)
   }

   console.log(errorFirstName)


   if(errorFirstName === true || errorLastName === true || errorDateOfBirth === true || errorDateOfStart === true || errorStreet === true || errorCity === true || errorState === true || errorZipCode === true || errorDepartment === true ){
    console.log("teste")
   }else{
    console.log("qifg")
    // const data = {
    //    firstName: inputFirstNameRef.current.value,
    //    lastName: inputLastNameRef.current.value,
    //    dateBirth: inputDateOfBirth,
    //    dateStart: inputDateOfStart,
    //    street: inputStreetRef.current.value,
    //    city: inputCityRef.current.value,
    //    state: inputState,
    //    zipCode: inputZipCodeRef.current.value,
    //    departement: inputDepartment
    // };
    // <Modal/>
 
    // dispatch(employeCreation(data))
   }
  }
   return(
    <main>
    <div className={styles["title"]}>
      <h1>HRnet</h1>
    </div>
    <div className={styles["container"]}>
      <div className={styles["emplyoyeList-linkContainer"]}>
        <Link className={styles["employeList-link"]} to="/employees">
          <p className={styles["employeList-link-text"]}>View Current Employees</p>
        </Link>
      </div>
      <section className={styles["employeForm"]}>
        <h2 className={styles["FormTitle"]}>Create Employee</h2>
        <form className={styles["sign-inForm"]} onSubmit={(e) => handleSubmit(e)} ref={getAccessRef}>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="firstname">FirstName</label>
            <span className={`${styles["firstNameWarn"]} ${errorFirstName ? styles["has-error"]: null}`}>A first name is needed !</span>
            <input type="text" id="firstname" ref={inputFirstNameRef}/>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="lastname">LastName</label>
            <span className={`${styles["lastNameWarn"]} ${errorLastName ? styles["has-error"]: null}`}>A last name is needed !</span>
            <input type="text" id="lastname" ref={inputLastNameRef}/>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="dateOfbirth">Date of Birth</label>
            <span className={`${styles["dateOfBirthWarn"]} ${errorDateOfBirth ? styles["has-error"]: null}`}>A date of birth is needed !</span>
            <DateSelector id="dateofbirth" selectDate={(e) => setInputDateOfBirth(e)}/>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="dateOfstart">Date of Start</label>
            <span className={`${styles["dateOfStartWarn"]} ${errorDateOfStart ? styles["has-error"]: null}`}>A date of start is needed !</span>
            <DateSelector id="dateofstart" selectDate={(e) => setInputDateOfStart(e)} />
          </div>
          <h3 className={styles["AdressTitle"]}> Address </h3>
          <div className={styles["AdressForm"]}>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="street">Street</label>
              <span className={`${styles["streetWarn"]} ${errorStreet ? styles["has-error"]: null}`}>A street is needed !</span>
              <input type="text" id="street" ref={inputStreetRef}/>
            </div>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="city">City</label>
              <span className={`${styles["cityWarn"]} ${errorCity ? styles["has-error"]: null}`}>A city is needed !</span>
              <input type="text" id="city" ref={inputCityRef}/>
            </div>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="state">State</label>
              <span className={`${styles["stateWarn"]} ${errorState ? styles["has-error"]: null}`}>A state is needed !</span>
              <Selector className={styles["stateWrapper"]} id="state" options={states} select={(value) => setInputState(value)}/>        
            </div>

            <div className={styles["input-wrapper"]}>
              <label htmlFor="zipcode">Zip Code</label>
              <span className={`${styles["zipCodeWarn"]} ${errorZipCode ? styles["has-error"]: null}`}>A zip code is needed !</span>
              <input type="text" id="zipcode" ref={inputZipCodeRef}/>
            </div>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="department">Department</label>
            <span className={`${styles["departmentWarn"]} ${errorDepartment ? styles["has-error"]: null}`}>A department is needed !</span>
            <Selector className={styles["departmentWrapper"]} id="department" options={departments} select={(value) => setInputDepartment(value)}/>
          </div>
          
          <button className={styles["sign-in-button"]}>Sign In</button> 
        </form>
      </section>

     </div>
     
  </main>
  )
 };
 export default Home;