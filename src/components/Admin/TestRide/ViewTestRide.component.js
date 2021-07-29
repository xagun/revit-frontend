import Axios from "axios";
import React, { Component } from "react";
import ReactPaginate from "react-paginate";
const BASE_URL = process.env.REACT_APP_BASE_URL;

class ViewTestRide extends Component {
  constructor(props) {
    super(props);
 

    this.state = {
      testride: [],
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0
    };

    this.handlePageClick = this
    .handlePageClick
    .bind(this);


  }


  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.getAllTestRide()
    });

};

  componentDidMount() {
    this.getAllTestRide();
  }

  getAllTestRide = async () => {
    try {
      const response = await Axios.get(
        `${BASE_URL}/testride/getAll`
      );

      const data = response.data;
      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
 
      const postData = slice.map(pd => <React.Fragment>
        
                  <tr>
                  
                      <td>{pd.name}</td>
                      <td>{pd.email}</td>
                      <td>{pd.phone}</td>

                    
    <td>
                        <button className="btn btn-info" onClick={() => this.props.history.push(`/testride/${pd.testrideID}`)}>View</button>
        <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(pd.testrideID)}
                    >
                      Delete
                    </button>
    </td>
                  </tr>
                      
                  
                
    </React.Fragment>)


      if (response.data.length !== 0) {
        this.setState({
          testride: response.data,
          isEmpty: false,
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        });
      } else {
        this.setState({
          testride: [],
          isEmpty: true,
         
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };


  handleDelete = async (testrideID) => {
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      const response = await Axios.delete(
        `${BASE_URL}/testride/delete/${testrideID}`,
        {
          headers: {
            Authorization: admin.adminToken,
          },
        }
      );
      if (response.data) {
        this.getAllTestRide();
        alert("Deleted Successfully");
        this.props.history.push("/viewtestride");

      }
    } catch (error) {
 
      console.log(error.response);
    }
  };




  render() {
    return (
      <>
         <div className="content-detail">
        <h2>Test Ride Details</h2>
        <div className="contents">
       
        <div className="testRide-container table-responsive-sm">
          <table class="table table-striped">
            <thead>
              <tr>
            
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No.</th>

                
             
                <th scope="col">Action</th>

            
                </tr>
            </thead>
            <tbody>
            {this.state.postData}
      

            </tbody>
          </table>

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
                  activeClassName={"active"}/>
        </div>
        </div>
        </div>
      </>
    );
  }
}

export default ViewTestRide;