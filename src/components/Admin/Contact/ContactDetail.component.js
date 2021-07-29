import Axios from "axios";
import React, { Component } from "react";



const BASE_URL = process.env.REACT_APP_BASE_URL;


class ContactDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                email: "",
                phone: "",
                message: "",          

            },
        };
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.getContactDetails(this.props.match.params.id);
        }
    }

    getContactDetails = async (id) => {
        try {
            const response = await Axios.get(
                `${BASE_URL}/contact/${id}`
            );
            console.log(response.data);
         
            if(response.data){

                this.setState({
                    data: {
                        name: response.data[0].name,
                        email: response.data[0].email,
                        phone: response.data[0].phone,
                        message: response.data[0].message,
          

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
                <h2>Contact Details</h2>
                <hr />
                <div className="contents">
                    <div className="career-bg">
                        <h4>Name</h4>
                       <p> {this.state.data.name}</p>

                        <h4>Email</h4>
                        <p>{this.state.data.email}</p>
                        <h4>Phone Number</h4>
                        <p>{this.state.data.phone}</p>
                        <h4>Message</h4>
                       <p> {this.state.data.message}</p>
              


                    </div>





                </div>
            </div>
        );
    }
}

export default ContactDetail;
