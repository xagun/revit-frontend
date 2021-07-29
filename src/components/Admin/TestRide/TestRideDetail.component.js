import Axios from "axios";
import React, { Component } from "react";



const BASE_URL = process.env.REACT_APP_BASE_URL;


class TestRideDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                email: "",
                phone: "",
                address: "",   
                licenseNo:""       

            },
        };
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.getTestRide(this.props.match.params.id);
        }
    }

    getTestRide = async (id) => {
        try {
            const response = await Axios.get(
                `${BASE_URL}/testride/${id}`
            );
            console.log(response.data);
         
            if(response.data){

                this.setState({
                    data: {
                        name: response.data[0].name,
                        email: response.data[0].email,
                        phone: response.data[0].phone,
                        address: response.data[0].address,
                        licenseNo: response.data[0].licenseNo,

          

                    },
                   
                });
                console.log("state data",this.state.data);
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
                <h2>Test Ride Booking Details</h2>
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
                       <h4>License No.</h4>
                       <p> {this.state.data.licenseNo}</p>
              


                    </div>





                </div>
            </div>
        );
    }
}

export default TestRideDetail;