import React, { Component } from 'react';

class Upload extends Component {
    
    constructor(props) {
        super(props);
        this.state = { selectedFile: null, fileUrl: '', base64: '' };
    }
    
selectFile = (event) => {
    this.setState( { selectedFile: event.target.files[0] } );

    const url = URL.createObjectURL(event.target.files[0]);

    this.setState( { fileUrl: url}, () => {console.log("url = " + this.state.fileUrl); } );
    console.log(this.state);
}

uploadFile = (event) => {
    let base64 = '';
    if(this.state.selectedFile) {
        let reader = new FileReader();
        reader.readAsDataURL(this.state.selectedFile);
        reader.onload = () => {
            base64 = reader.result;
            console.log(base64);
            this.setState({ base64: base64 });
        };
    }
}

    render() {
        return (
            <div>
                <h3>Upload</h3>
                <input type='file' onChange={this.selectFile}/>
                <button onClick={this.uploadFile}>Upload</button>
                <hr/>

                {   
                    this.state.base64 &&
                    <img src={this.state.base64} alt='picture' /> 
                }
            </div>
        );
    }
}

export default Upload;