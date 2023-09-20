"use client"
import Sidebaar from '../template/Sidebaar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState, useEffect } from 'react';
import $ from "jquery";
import Header from '../template/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import MyVerticallyCenteredModal from '../template/ProfileEdit'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Profile=()=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [profileData, setProfileData] = useState({
    companyname : '',
    title : '',
    name : '',
    email : '',
    contactno : '',
    about : '',
    location : '',
    image : '',
    logo : '',
    userid : ''
});
  const sideCanvasActive= () =>{ 
    $(".expovent__sidebar").removeClass("collapsed");
    $(".expovent__sidebar").removeClass("open");
    $(".app__offcanvas-overlay").removeClass("overlay-open");
  }
  useEffect(() => {
    if(localStorage.email && localStorage.userid && localStorage.name){
        setProfileData({
            companyname : localStorage.companyname,
            title : localStorage.title,
            name : localStorage.name,
            email : localStorage.email,
            contactno : localStorage.contactno ? localStorage.contactno : '',
            about : localStorage.about ? localStorage.about : '',
            location : localStorage.location ? localStorage.location : '',
            image : localStorage.image ? localStorage.image : 'https://reseller.ezrankings.in//dashboard/images/avtar.png',
            logo : localStorage.logo ? localStorage.logo :'https://reseller.ezrankings.in//dashboard/images/avtar.png',
            userid : localStorage.userid
        });
    }
    }, []);
 return(
    <>
         <div className='page_-full-wrapper'>
           <Sidebaar />
            <div className="app__offcanvas-overlay" onClick={sideCanvasActive}>
            </div>
            <div className="page__body-wrapper">
              <Header/>
              <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Update Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
              </Modal>
              <div className="app__slide-wrapper">
                  <div className="row">
                      <div className="col-xl-12">
                          <div className="breadcrumb__wrapper">
                              <div className="breadcrumb__inner">
                                  <div className="breadcrumb__icon">
                                  <FontAwesomeIcon icon={faHouse}/>
                                  </div>
                                  <div className="breadcrumb__menu">
                                      <nav>
                                      <ul>
                                          <li><span><a href="#">Home</a></span></li>
                                          <li className="active"><span>Profile</span></li>
                                      </ul>
                                      </nav>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='profile-area'>
                      <div className='body-card-wrapper'>
                        <div className='card-header-top'>
                          <div className='card-title-inner'>
                            <h4>Profile Information</h4>
                          </div>
                        </div>
                        <div className='profile-main-wrapper'>
                          <div className='row'>
                              <div className='col-md-12 '>
                                <div className='profile__left'>
                                  <div className='padding-left-inner'>
                                    <div className='profile-user'>
                                      <Link href='#'  onClick={() => setModalShow(true)}>
                                      <div className='profile-edit'>
                                          <FontAwesomeIcon icon={faPenToSquare} />
                                      </div>
                                      </Link>
                                      <ul>
                                          <li>
                                            <div className='profile-user-item'>
                                                <div className='profile-user-tiitle'>
                                                  <span>Name:</span>
                                                </div>
                                                <div className='profile-user-info'>
                                                  <span>{profileData.name}</span>
                                                </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className='profile-user-item'>
                                                <div className='profile-user-tiitle'>
                                                  <span>Email Address:</span>
                                                </div>
                                                <div className='profile-user-info'>
                                                  <span>{profileData.email}</span>
                                                </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className='profile-user-item'>
                                                <div className='profile-user-tiitle'>
                                                  <span>Phone Number:</span>
                                                </div>
                                                <div className='profile-user-info'>
                                                  <span>{profileData.contactno}</span>
                                                </div>
                                            </div>
                                          </li>
                                      </ul>
                                    </div>
                                    </div>
                                </div>
                              </div>
                              {/* <div className='col-md-7'>
                                <div className='profile-right'>
                                    <Link href='#'>
                                    <div className='profile-edit'>
                                      <FontAwesomeIcon icon={faPenToSquare} />
                                    </div>
                                    </Link>
                                    <div className='profile-about-info'>
                                      <span className='profile-title'>About Me</span>
                                      <div className='profile-text'>
                                          <p>When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short,
                                            its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came
                                            with the arrival of the web.
                                          </p>
                                      </div>
                                    </div>
                                </div>
                              </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
      />
    </>
 )


}
export default Profile