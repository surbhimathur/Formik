import React, { useState } from "react";

import { useFormik } from 'formik';

const validateForm=(values)=>{
    const errors={};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
     
}
function UserForm() {
    const[name,setName]=useState([]);
    const[newuser,setNewUser]=useState([]);
    const formik=useFormik({
        initialValues:{
            name:'',
            dob:'',
            sex:'',
            mobile:'',
            govtid:'',
            gid:'',
            guardian:'',
            guardian_name:'',
            email:'',
            emergency:'',
            address:'',
            state:'',
            city:'',
            country:'',
            pincode:'',
            occupation:'',
            religion:'',
            marital:'',
            blood:'',
            nationality:''
            
                },
                validate:validateForm,
                onSubmit:(values)=>{
                    console.log("onSubmit",values);
                    if(values.name)
                    {
                        const addDetails=[...newuser,{
                            name:values.name
                           }];
                           setNewUser([...addDetails]);
                    }
                   
                }
    })
 
   
  return (
    <section>
    <div className="userform">
    <form onSubmit={formik.handleSubmit} >
      <div className="personal_details">
      <h4>Personal Details</h4>
        <div className="personal_first_row">
          <label>
            Name<span>*</span>
          </label>
          <input type="text" placeholder="Enter Name" id="name" onChange={formik.handleChange}
         value={formik.values.name} required></input>
          <label>
            Date of Birth or 
            Age<span>*</span>
          </label>
          <input type="text" placeholder="DD/MM/YY or Age in Years" id="dob"  onChange={formik.handleChange}
         value={formik.values.dob} required></input>
          <label>
            Sex<span>*</span>
          </label>
          <select name="sex" id="sex" onChange={formik.handleChange}
         value={formik.values.sex} required>
          <option value="" disabled selected>Enter Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="personal_second_row">
          <label>
            Mobile 
          </label>
          <input type="text" placeholder="Enter Mobile" id="mobile" onChange={formik.handleChange}
         value={formik.values.mobile}></input>
         
          <label>
            Govt Issued ID
          </label>
          <select name="govtid" id="govtid" onChange={formik.handleChange}
         value={formik.values.govtid}>
          <option value="" disabled selected>ID Type</option>
            <option value="aadhar">Aadhar card</option>
            <option value="passport">Passport</option>
            <option value="PAN">PAN Card</option>
            <option value="voterid">Voter ID</option>
          </select>
          <input type="text" placeholder="Enter Govt ID" className="gid" id="gid" onChange={formik.handleChange}
         value={formik.values.gid}></input>
        </div>
      </div>


      <div className="personal_details">
      <h4>Contact Details</h4>
        <div className="personal_first_row">
          <label>
            Guardian details
          </label>
          <select name="guardian" id="guardian_label" className="guardian" onChange={formik.handleChange}
         value={formik.values.guardian}>
          <option value="" disabled selected>Enter Label</option>
            <option value="mr">Mr</option>
            <option value="ms">Ms</option>
            <option value="mrs">Mrs</option>
          </select>

          <input type="text" placeholder="Enter Guardian Name" className="guardian_name" id="guardian_name" onChange={formik.handleChange}
         value={formik.values.guardian_name}></input>
          <label>
            Email
          </label>
          <input type="email" placeholder="Enter Email" className="email" id="email" onChange={formik.handleChange}
         value={formik.values.email}></input>
         {formik.errors.email}
          <label>
            Emergency Contact Number
          </label>
          <input type="text" placeholder="Enter Emergency No" id="emergency" onChange={formik.handleChange}
         value={formik.values.emergency}></input>
        </div>
        </div>

        <div className="personal_details">
      <h4>Address Details</h4>
        <div className="personal_first_row">
          <label>
            Address
          </label>
          <input type="text" placeholder="Enter Address" id="address" className="address" onChange={formik.handleChange}
         value={formik.values.address}></input>
          <label>
           State
          </label>
          <select name="state" id="state" onChange={formik.handleChange}
         value={formik.values.state}>
          <option value="" disabled selected>Enter State</option>
            <option value="Andhra">Andhra Pradesh</option>
            <option value="Arunachal">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh </option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal	</option>
          </select>
          <label>
           City
          </label>
          <select name="city" id="city" onChange={formik.handleChange}
         value={formik.values.city}>
          <option value="" disabled selected>Enter city/village/town</option>
            <option value="ajmer">Ajmer</option>
            <option value="gwalior">Gwalior</option>
            <option value="bangalore">Bangalore</option>
            <option value="bangalore">Lucknow</option>
            <option value="bangalore">Agra</option>
            <option value="bangalore">Mathura</option>
          </select>
        </div>

        <div className="personal_second_row">
          <label>
            Country
          </label>
          <input type="text" placeholder="India" id="country" className="country" onChange={formik.handleChange}
         value={formik.values.country} ></input>
          <label>
            Pincode
          </label>
         
          <input type="text" placeholder="Enter Pincode" className="gid" id="pincode" onChange={formik.handleChange}
         value={formik.values.pincode}></input>
        </div>
      </div>


      <div className="personal_details">
      <h4>Other Details</h4>
        <div className="personal_first_row">
          <label>
            Occupation
          </label>
          <input type="text" placeholder="Enter Occupation" id="occupation" onChange={formik.handleChange}
         value={formik.values.occupation}></input>
          <label>
           Religion
          </label>
          <select name="religion" id="religion" onChange={formik.handleChange}
         value={formik.values.religion}>
          <option value="" disabled selected>Enter Religion</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="sikh">Sikh</option>
            <option value="other">Other</option>
          
          </select>
          <label>
           Marital Status
          </label>
          <select name="marital" id="marital" onChange={formik.handleChange}
         value={formik.values.marital}>
          <option value="" disabled selected>Enter Marital Status</option>
            <option value="married">Married</option>
            <option value="single">Single</option>
            <option value="widowed">Widowed</option>
            <option value="divorced">Divorced</option>
          </select>
          <label>
           Blood Group
          </label>
          <select name="blood" id="blood" onChange={formik.handleChange}
         value={formik.values.blood}>
          <option value="" disabled selected>Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="personal_second_row">
          <label>
            Nationality
          </label>
          <input type="text" placeholder="India" id="nationality" onChange={formik.handleChange}
         value={formik.values.nationality} ></input>
          
        </div>
      </div>
      
      <div className="buttons">
      <button className="cancel">CANCEL</button>
      <button type="submit" className="submit">SUBMIT</button>
      </div>
      </form>
    </div>



    <div className="userlist">
  <h3>New users list</h3>
    {newuser.map((list)=>
        <li>{list.name}</li>
    )}
    </div>
    </section>
  );
}

export default UserForm;
