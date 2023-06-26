import React from 'react';
import './DeleteAccount.css'

function DeleteAccount() {
  

  return (
    <section className="details">
      <div className='wrapper'>
        <div className='confirm-delete'>
            <h5>Do you want to delete your account?</h5>
            <p>Are you sure you want to delete your Saver bank account?you can not undo this action</p>
        </div>
        <div className='warning'>
            <h5>Warning</h5>
            <p>By Deleting your account , you will loose all saved data and your account will be permanently deleted </p>
        </div>
        <a className='del btn' href=''>Delete Account</a>
        <a className='cancel btn' href=''>Cancel</a>
      </div>
    </section>
  );
};

export default DeleteAccount;
