import React, { Component } from "react";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginTop:"15px"}} className="col-md-10 col-sd-12">
        <nav aria-label="breadcrumb" >
          <ol class="breadcrumb">
            <li class="breadcrumb-item " aria-current="page">
              Home
            </li>
          </ol>
        </nav>
        <button className="btn btn-primary" style={{marginLeft:"10px", borderRadius:"15px"}}>Create Folder</button>
        <button className="btn btn-danger" style={{marginLeft:"10px", borderRadius:"15px"}}>Delete Folder</button>
      </div>
    );
  }
}
