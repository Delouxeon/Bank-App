import React from 'react';
import './update.css'

const Update = () => {
  

  return (
    <section className="details">
        <div>
            <img></img>
            <img></img>
        </div>
        <div className="form-group">
            <div className="form-field1">
                <label htmlFor="fname">First Name</label> <br />
                <input type='text'/>
            </div>
            <div className="form-field2">
                <label htmlFor="gender">Gender</label> <br />
                <input type='text'/>
            </div>
          </div>
        <div className="form-group">
            <div className="form-field1">
                <label htmlFor="lname">Last Name</label> <br />
                <input type='text'/>
            </div>
            <div className="form-field2">
                <label htmlFor="country">Country</label> <br />
                <input type='text'/>
            </div>
        </div>
        <div className="form-field">
            <label htmlFor="bvn">BVN</label> <br />
            <input type='text'/>
        </div>
        <div className="form-field">
            <label htmlFor="email">Phone Number</label> <br />
            <input type='text'/>
        </div>
        <div className="form-field">
            <label htmlFor="address">Residential Address</label> <br />
            <input type='text'/>
        </div>
        <button className='del btn'>Save changes</button>
        <button className='cancel btn'>Cancel</button>
    </section>
  );
};

export default Update;
