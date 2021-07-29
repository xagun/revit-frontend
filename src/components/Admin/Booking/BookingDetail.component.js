import Axios from "axios";
import React, { Component } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

class BookingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        phone: "",
        address: "",
        motorcycle: "",
      },
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.getBookingDetails(this.props.match.params.id);
    }
  }

  getBookingDetails = async (id) => {
    try {
      const response = await Axios.get(`${BASE_URL}/booking/${id}`);

      if (response.data) {
        this.setState({
          data: {
            name: response.data[0].name,
            email: response.data[0].email,
            phone: response.data[0].phone,
            address: response.data[0].address,
            motorcycle: response.data[0].motorcycle,
          },
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="content-detail">
        <h2>Booking Details</h2>
        <hr />
        <div className="contents">
          <div className="career-bg">
            <h4>Name</h4>
            <p> {this.state.data.name}</p>

            <h4>Email</h4>
            <p>{this.state.data.email}</p>
            <h4>Phone Number</h4>
            <p>{this.state.data.phone}</p>
            <h4>Address</h4>
            <p> {this.state.data.address}</p>
            <h4>Motorcycle (Tyre Type)</h4>
            <p> {this.state.data.motorcycle}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingDetail;
