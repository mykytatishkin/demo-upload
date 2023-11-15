import React, { Component } from 'react';

class Upload extends Component {
    
    constructor(props) {
        super(props);
        this.state = { selectFile: null };
    }
    
selectFile = (event) => {
    this.setState( { selectedFile: event.target.files[0] } );

    const url = URL.createObjectURL();
}

    render() {
        return (
            <div>
                <h3>Upload</h3>
                <input type='file' onChange={this.selectFile}/>
                <button onClick={this.uploadFile}>Upload</button>
                <hr/>
            </div>
        );
    }
}

export default Upload;