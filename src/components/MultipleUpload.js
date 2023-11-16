import React, { Component } from "react";

export default class MultipleUpload extends Component {
    constructor(props) {
    super(props);
    this.state = { files: [], urls: [], data: [] };
}

    selectFile = (event) => {
        this.setState({ files: event.target.files }, () => {
        console.log(this.state);
    });

    let array = [];

    // Array.from(event.target.files).forEach( (f) => array.push(URL.createObjectURL(f)) );
    // Better way
    Array.from(event.target.files).forEach(
        (f) => (array = [...array, URL.createObjectURL(f)])
    );

    this.setState({ urls: array }, () => {
        console.log(this.state);
    });
};

    render() {
    return (
        <div>
            {" "}
            <h3>Multiple Upload</h3> <hr />{" "}
            <input type="file" onChange={this.selectFile} multiple />{" "}
            <button onClick={this.uploadFile}>Upload</button> <hr />{" "}
            {Array.isArray(Array.from(this.state.urls)) ? (
                Array.from(this.state.urls).map((i, index) => {
                return <img src={i} alt="picture" key={index} height="300px" />;
            })
            ) : (
            <span>Not an array</span>
            )}{" "}
        </div>
        );
    }
}
