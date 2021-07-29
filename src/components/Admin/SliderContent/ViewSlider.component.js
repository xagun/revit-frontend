import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import '../Dashboard/Dashboard.component.css'



const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_FILE_URL;


class ViewSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [],
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.getAllSlider();
      }
    );
  };

  componentDidMount() {
    this.getAllSlider();
  }

  getAllSlider = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/slider/getAll`);

      const data = response.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );

      const postData = slice.map((pd) => (
        <React.Fragment>
          <tr>
            <td>{pd.heading}</td>
            <td> <img
                      src={`${BASE_IMG_URL}/${pd.uploadFile}`}
                      alt="No preview available"
                    /></td>
         
            <td>
            <button
              className="btn btn-info"
              onClick={() => this.props.history.push(`/slider/${pd.sliderID}`)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(pd.sliderID)}
            >
              Delete
            </button>
            </td>
         
          </tr>
        </React.Fragment>
      ));

      if (response.data.length !== 0) {
        this.setState({
          slider: response.data,
          isEmpty: false,
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData,
        });
      } else {
        this.setState({
          slider: [],
          isEmpty: true,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  
  handleDelete = async (sliderID) => {
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      const response = await Axios.delete(
        `${BASE_URL}/slider/delete/${sliderID}`,
        {
          headers: {
            Authorization: admin.adminToken,
          },
        }
      );
      if (response.data) {
        this.getAllSlider();
        alert("Deleted Successfully");
        this.props.history.push("/viewSlider");

      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    return (
      <>
        <div className="content-detail">
          <h2>Our slider</h2>
      
        <div className ="contents">
          <p className = "warn-p">*Only 3 contents are shown in slider.</p>

        <div className="slider-container table-responsive-sm">
        <Link to="/addSlider">
            <button className="add-btn">Add item</button>
          </Link>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Heading</th>
                <th scope="col">Image</th>

            
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{this.state.postData}</tbody>
          </table>
          </div>

          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
        </div>
       
      </>
    );
  }
}

export default ViewSlider;
