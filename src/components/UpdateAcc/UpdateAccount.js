import React from 'react';
import './update.css'
import profilePic from '../../assets/profilePic.png'
import cameraIcon from '../../assets/cameraIcon.png'

const UpdateAccount = () => {
  

  return (
    <section className="details">
        <div className='profilePicSection'>
            <img src = {profilePic} alt='profile pic' className='profile-pic'/>
            <span className='cameraIconBg'>
            <img src = {cameraIcon} alt='camera icon' className='camera-icon'/>
            </span>
            <a className='btn picUploadBtn' >Upload Now</a>
        </div>
        <form>
            <div className='inputs-wrapper'>
                <div className="input-div form-field1">
                    <label htmlFor="fname">First Name</label> 
                    <input type='text'/>
                </div>
                <div className="input-div form-field2">
                    <label htmlFor="gender">Gender</label> 
                    <input type='text'/>
                </div>
                <div className="input-div form-field3">
                    <label htmlFor="lname">Last Name</label>
                    <input type='text'/>
                </div>
                <div className="input-div form-field4">
                    <label htmlFor="country">Country</label> 
                    <input type='text'/>
                </div>
            
                <div className="input-div form-field5">
                    <label htmlFor="bvn">BVN</label>
                    <input type='text'/>
                </div>
                <div className="input-div form-field6">
                    <label htmlFor="email">Phone Number</label>
                    <input type='text'/>
                </div>
                <div className="input-div form-field7">
                    <label htmlFor="address">Residential Address</label>
                    <textarea cols='30' rows='3'></textarea>
                </div>
                <div className="input-div form-field8">
                    <input className='del btn input-btn' value ='Save changes' type='submit'/>
                </div>
                <div className="input-div form-field9">
                    <input className='cancel btn input-btn' value='Cancel' type='button'/>
                </div>
            </div>
        </form>
    </section>
  );
};

export default UpdateAccount;
