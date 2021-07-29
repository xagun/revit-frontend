import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import '../Dashboard/Dashboard.component.css'


const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_FILE_URL;


class ViewHomeContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            homeContent: [],
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
            this.getAllHomeContent();
          }
        );
      };
    
      componentDidMount() {
        this.getAllHomeContent();
      }

      getAllHomeContent = async () => {
        try {
          const response = await Axios.get(`${BASE_URL}/homenews/getAll`);
    
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
                  onClick={() => this.props.history.push(`/homeContent/${pd.homenewsID}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(pd.homenewsID)}
                >
                  Delete
                </button>
                </td>
             
              </tr>
            </React.Fragment>
          ));
    
          if (response.data.length !== 0) {
            this.setState({
              homenews: response.data,
              isEmpty: false,
              pageCount: Math.ceil(data.length / this.state.perPage),
              postData,
            });
          } else {
            this.setState({
              homenews: [],
              isEmpty: true,
            });
          }
        } catch (error) {
          console.log(error.response);
        }
      };
    
      
      handleDelete = async (homenewsID) => {
        let admin = JSON.parse(localStorage.getItem("admin"));
        try {
          const response = await Axios.delete(
            `${BASE_URL}/homenews/delete/${homenewsID}`,
            {
              headers: {
                Authorization: admin.adminToken,
              },
            }
          );
          if (response.data) {
            this.getAllHomeContent();
            alert("Deleted Successfully");
            this.props.history.push("/viewHomeContent");
    
          }
        } catch (error) {
          console.log(error.response);
        }
      };
    


render(){
    return(
        <>
            <div className="content-detail">
          <h2>Home Contents</h2>
      
        <div className ="contents">

        <div className="homenews-container table-responsive-sm">
        <Link to="/addHomeContent">
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
    )
}
}

export default ViewHomeContent;
