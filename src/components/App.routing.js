import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import About from "./About/About.component";
import CarouselDetail from "./CarouselDetail/CarouselDetail.component";
import Contact from "./Contact/Contact.component";

import Home from './HomePage/Home.component';
import NavBar from "./NavBar/Navbar.component";
import Footer from "./Footer/Footer.component";
// import Product from "./Products/Product.component";
import Gallery from "./Gallery/Gallery.component";
import Booking from "./Booking/Booking.component";
import Motorcycle from "./Motorcycle/Motorcycle.component";
import Login from "./Admin/Login/Login.component";

import {Dashboard} from "./Admin/Dashboard/Dashboard.component";
import TestRideBook from "./TestRide/TestRide.component";
import WelcomeContent from "./Admin/Dashboard/Welcome.component";
import ViewContacts from "./Admin/Contact/viewContact.component";
import ContactDetail from "./Admin/Contact/ContactDetail.component";
import viewGallery from "./Admin/GalleryContent/viewGallery.component";
import AddGallery from "./Admin/GalleryContent/AddGallery.component";
import ViewBooking from "./Admin/Booking/viewBookig.component";
import BookingDetail from "./Admin/Booking/BookingDetail.component";
import ViewTestRide from "./Admin/TestRide/ViewTestRide.component";
import TestRideDetail from "./Admin/TestRide/TestRideDetail.component";
import ViewNewsletter from "./Admin/NewsLetter/ViewNewsletter.component";
import ViewSlider from "./Admin/SliderContent/ViewSlider.component";
import SliderForm from "./Admin/SliderContent/SliderForm.component";
import ViewHomeContent from "./Admin/HomeContent/ViewHomeContent.component";
import HomeForm from "./Admin/HomeContent/HomeForm.component";







const NotFound = (props) => {
  return (
    <div className="error-page">
      <img src="images/blank.jpg" alt="error" />
    </div>
  );
};

export const AdminPublicRoute = ({ restricted, component: Comp, ...rest }) => {
  let admin = JSON.parse(localStorage.getItem("admin"));
  return (
    <Route
      {...rest}
      component={(props) =>
        restricted ? (
          admin.isAdmin ? (
            <Redirect to="/dashboard" {...props} />
          ) : (
            <Comp {...props} />
          )
        ) : (
          <Comp {...props} />
        )
      }
    />
  );
};

const AdminRoute = ({ component: Component, ...rest }) => {
  let admin = JSON.parse(localStorage.getItem("admin"));
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        admin.isAdmin ? (
          <div>
            <div className="main">
                <Dashboard />
              <Component {...routeProps} />
            </div>
          </div>
        ) : (
          <Login />
        )
      }
    ></Route>
  );
};

const Router = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <div>
          <NavBar />
          <Component {...routeProps} />
          <Footer />
        </div>
      )}
    ></Route>
  );
};

export const AppRouting = (props) => {
  return (
    <BrowserRouter forceRefresh>
      <Switch>
      <Router exact path = "/" component = {Home} />
     <Router exact path = "/home" component = {Home} />

     <Router exact path = "/about" component = {About} />
     {/* <Router exact path = "/product" component = {Product} /> */}
     <Router exact path = "/slider-detail" component = {CarouselDetail} />
     <Router exact path = "/contact" component = {Contact} />
     <Router exact path = "/gallery" component = {Gallery} />
     <Router exact path = "/booking" component = {Booking} />
     <Router exact path = "/motorcycle" component = {Motorcycle} />
     <Router exact path = "/testRide" component = {TestRideBook} />


     


        {/* Admin panel */}

        <AdminPublicRoute
          path="/admin"
          restricted={false}
          exact
          component={Login}
        />

     <AdminRoute exact path = "/dashboard" component = {WelcomeContent} />
     <AdminRoute exact path="/viewContact" component={ViewContacts}></AdminRoute>
     <AdminRoute exact path="/contact/:id" component={ContactDetail}></AdminRoute>
     <AdminRoute exact path="/viewGallery" component={viewGallery}></AdminRoute>
     <AdminRoute exact path="/addGallery" component={AddGallery}></AdminRoute>
     <AdminRoute exact path="/viewBooking" component={ViewBooking}></AdminRoute>
     <AdminRoute exact path="/booking/:id" component={BookingDetail}></AdminRoute>
     <AdminRoute exact path="/viewTestRide" component={ViewTestRide}></AdminRoute>
     <AdminRoute exact path="/testride/:id" component={TestRideDetail}></AdminRoute>
     <AdminRoute exact path="/viewNewsLetter" component={ViewNewsletter}></AdminRoute>
     <AdminRoute exact path="/viewSlider" component={ViewSlider}></AdminRoute>
     <AdminRoute exact path="/slider/:id" component={SliderForm}></AdminRoute>
     <AdminRoute exact path="/addSlider" component={SliderForm}></AdminRoute>
     

     <AdminRoute exact path="/viewHomeContent" component={ViewHomeContent}></AdminRoute>
     <AdminRoute exact path="/homeContent/:id" component={HomeForm}></AdminRoute>
     <AdminRoute exact path="/addHomeContent" component={HomeForm}></AdminRoute>



        {/* 
        <AdminRoute exact path="/viewProducts" component={ViewProducts}></AdminRoute>
     
        <AdminRoute exact path="/viewCareer" component={ViewCareer}></AdminRoute>
        <AdminRoute exact path="/addProduct" component={ProductForm}></AdminRoute>
        <AdminRoute exact path="/product/:id" component={ProductForm}></AdminRoute>
        <AdminRoute exact path="/viewQuotes" component={ViewQuotes}></AdminRoute>
        <AdminRoute exact path="/contact/:id" component={ContactDetail}></AdminRoute>
        <AdminRoute exact path="/quotes/:id" component={QuotesDetail}></AdminRoute>
        <AdminRoute exact path="/career/:id" component={CareerDetail}></AdminRoute> */}


        {/* <AdminRoute exact path="/message" component={Message}></AdminRoute> */}






        <AdminRoute  component={NotFound}></AdminRoute>




        <Router component={NotFound}></Router>
      </Switch>
    </BrowserRouter>
  );
};
