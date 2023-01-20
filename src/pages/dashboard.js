import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { logOut } from '../utils/Firebase';
export default function dashboard() {
  function Navbar() {
    return (
      <div>
        <button
          className='btn'
          onClick={() => {
            logOut();
          }}
        >
          Signout
        </button>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      dashboard
    </div>
  );
}
