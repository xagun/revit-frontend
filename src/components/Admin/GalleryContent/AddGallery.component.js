import Axios from "axios";
import React, { Component } from "react";
import {Button} from '../../utils/Button.component';



const BASE_URL = process.env.REACT_APP_BASE_URL;

class GalleryContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadFile: "",
    };
  }

  handleChangeImage = (e) => {
    this.setState({
      data: { ...this.state.data, uploadFile: e.target.files[0] },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isSubmitting: true
    })
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      let fileData = new FormData();
      fileData.append("uploadFile", this.state.data.uploadFile);
         
        const response = await Axios.post(
          `${BASE_URL}/gallery/insert`,
          fileData,
          {
            headers: { Authorization: admin.adminToken },
          }
        );
        if (response.data) {
          this.props.history.push("/viewGallery");
        }
  
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    return (
      <div className="content-detail">
        <h2>Gallery Updates</h2>
        <div className="contents">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <h3>Choose image</h3>
            {this.props.match.params.id 
            ? <input type="file" onChange={this.handleChangeImage} accept=".jpg, .jpeg, .png" />
             
            : <input required type="file" onChange={this.handleChangeImage} accept=".jpg, .jpeg, .png" />

            } 
            <div className="post-button">
            <Button
                isSubmitting={this.state.isSubmitting}

              ></Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GalleryContent;
