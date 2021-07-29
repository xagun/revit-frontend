import Axios from "axios";
import React, { Component } from "react";
import { Button } from "../../utils/Button.component";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_FILE_URL;

class SliderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        heading: "",
        details: "",
        uploadFile: "",
      },
      isSubmitting: false,
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.getSliderDetails(this.props.match.params.id);
    }
  }

  getSliderDetails = async (id) => {
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      const response = await Axios.get(`${BASE_URL}/slider/${id}`);

      console.log("response",response.data);
      if (response.data) {
        this.setState({
          data: {
            heading: response.data[0].heading,
            details: response.data[0].details,
            uploadFile: response.data[0].uploadFile,
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

  handleChangeImage = (e) => {
   
    this.setState({
      data: { ...this.state.data, uploadFile: e.target.files[0] },
    });
 
  };


  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isSubmitting: true,
    });
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      let fileData = new FormData();
      fileData.append("heading", this.state.data.heading);
      fileData.append("details", this.state.data.details);
      fileData.append("uploadFile", this.state.data.uploadFile);
      console.log("filedata",fileData);

      if (this.props.match.params.id) {
        const updateResponse = await Axios.put(
          `${BASE_URL}/slider/update/${this.props.match.params.id}`,
          fileData,
          {
            headers: {
              Authorization: admin.adminToken,
            },
          }
        );
        console.log("updateres",updateResponse);
        console.log("filedata",fileData);
        if (updateResponse.data) {
          alert("Updated successfully");
          this.props.history.push(`/viewSlider`);
        }
      } else {
        const response = await Axios.post(
          `${BASE_URL}/slider/insert`,
          fileData,
          {
            headers: {
              Authorization: admin.adminToken,
            },
          }
        );
        if (response.data) {
          alert("Added successful");
          this.props.history.push(`/viewSlider`);
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    console.log("statedata", this.state.data);

    return (
      <div className="content-detail">
        {this.props.match.params.id ? (
          <h1>Update Slider content</h1>
        ) : (
          <h1>Add Slider Content</h1>
        )}
        <div className="contents">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <h2>Heading</h2>
            <input
              type="text"
              name="heading"
              className="form-control"
              value={this.state.data.heading}
              onChange={this.handleChange}
              required
            />
            <h2>Details</h2>
            <textarea
              name="details"
              className="form-control"
              value={this.state.data.details}
              onChange={this.handleChange}
              required
            />
            <div>Choose image</div>

            {this.state.data.uploadFile && (
              <img
                src={`${BASE_IMG_URL}/${this.state.data.uploadFile}`}
                alt={this.state.data.heading}
              />
            )}
            {this.props.match.params.id ? (
              <input
                type="file"
                onChange={this.handleChangeImage}
                accept=".jpg, .jpeg, .png"
              />
            ) : (
              <input
                required
                type="file"
                onChange={this.handleChangeImage}
                accept=".jpg, .jpeg, .png"
              />
            )}

            <div className="post-button">
              {/* <button type="submit" className="btn-post">
                {this.props.match.params.id ? "Update" : "Submit"}
              </button> */}
              <Button isSubmitting={this.state.isSubmitting}></Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SliderForm;
