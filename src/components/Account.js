import React from 'react'
import {Modal } from 'react-bootstrap';

//Styles
import "../components/Account.css";

export default function Account(props) {
  

  return (
    
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
    <div className="container">
      <div className="row gutters">
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="account-settings">
            <div className="user-profile">
              <div className="user-avatar">
                <img src={props.userInfo.avatar} alt={props.userInfo.name.first + " " +  props.userInfo.name.last}/>
              </div>
              <h5 class="user-name">{props.userInfo.name.first + " " +  props.userInfo.name.last}</h5>
              <h6 class="user-email">{props.userInfo.contact.email}</h6>
              <h7 class="user-email">{props.userInfo.contact.phone}</h7>
            </div>
            <div className="about">
              <h5>About</h5>
              <p>{props.userInfo.about}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
    <div className="card h-100">
      <div className="card-body">
        <div className="row gutters">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 class="mb-2 text-primary">Personal Details</h6>
          </div>
          <div className="col-md-auto">
            <div className="form-group">
              <label for="eMail">Email</label>
              <input type="email" class="form-control" id="eMail" placeholder={props.userInfo.contact.email} disabled/>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="form-group">
              <label for="website">Website URL</label>
              <input type="url" class="form-control" id="website" placeholder={props.userInfo.contact.website} disabled/>
            </div>
          </div>
        </div>
        <div className="row gutters">
          <div className="col-md-auto">
            <h6 class="mt-3 mb-2 text-primary">Address</h6>
          </div>
          <div className="col-md-auto">
            <div className="form-group">
              <label for="Street">Street</label>
              <input type="name" class="form-control" id="Street" placeholder={props.userInfo.address.street} disabled/>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="form-group">
              <label for="ciTy">City</label>
              <input type="name" class="form-control" id="ciTy" placeholder={props.userInfo.address.city} disabled/>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="form-group">
              <label for="sTate">Province</label>
              <input type="text" class="form-control" id="sTate" placeholder={props.userInfo.address.province}/>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="form-group">
              <label for="sTate">Country</label>
              <input type="text" class="form-control" id="country" placeholder={props.userInfo.address.country}/>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="form-group">
              <label for="zIp">Postal Code</label>
              <input type="text" class="form-control" id="postal" placeholder={props.userInfo.address.postal} disabled/>
            </div>
          </div>
        </div>
      </div>
</div>
</div>
</div>
</div>


      </Modal.Body>
 
 </Modal>
     
    );
}



