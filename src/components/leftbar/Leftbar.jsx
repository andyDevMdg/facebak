import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.css'
import FeedIcon from '@mui/icons-material/Feed';
import Groups3Icon from '@mui/icons-material/Groups3';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

function Leftbar() {
  return (
    <div className="sidebar d-flex flex-column justify-content-between text-white p-5 vh-100">
      <div>
        <ul className="nav nav-pills flex-column p-0">
          <li className="nav-item p-3">
            <a href="/home" className="nav-link text-white">
              <FeedIcon className="mb-2 me-3" id="icons"/>
              <span className="fs-20">Feed</span>
            </a>
          </li>
          <li className="nav-item p-3">
            <a href="#" className="nav-link text-white">
              <Groups3Icon className="mb-2 me-3" id="icons"/>
              <span className="fs-20">Followers</span>
            </a>
          </li>
          <li className="nav-item p-3">
            <a href="#" className="nav-link text-white">
              <ManageAccountsIcon className="mb-2 me-3" id="icons"/>
              <span className="fs-20">Setting</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="logout">
        <ul className="nav nav-pills flex-colum p-0">
          <li className="nav-item p-3">
            <a href="/" className="nav-link text-white">
              <LogoutIcon className="mb-2 me-3" id="icons"/>
              <span className="fs-20">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;