import React, { Component } from 'react';   
import postUser from './../../actions/userActions';

class UsersComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            UserID: '',
            Name: '',
            Address: '',
            Email: ''
        }
    }
   
    OnPropertyChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value, submitted: true });
    }


    onClickSave = () => {
        var user = {
            UserID: this.state.UserID,
            Name: this.state.Name,
            Address: this.state.Address,
            Email: this.state.Email
        };
       
        postUser(user);
    }

    render(){
        const { UserID, Name, Address, Email } = this.state;
        return(
            <div className="container bg-light col-md-6" style={{ marginTop: 20, padding:20}}>
                <div className="form-group">
                    <label htmlFor="RoleID "> User ID</label>
                    <input type="text" className="form-control" value={UserID}
                        name="UserID" onChange={this.OnPropertyChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="Name "> Name </label>
                    <input type="text" className="form-control" value={Name}
                        name="Name" onChange={this.OnPropertyChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="Add">Address</label>
                    <input type="text" className="form-control" value={Address}
                        name="Address" onChange={this.OnPropertyChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="Email "> Email </label>
                    <input type="text" className="form-control" value={Email}
                        name="Email" onChange={this.OnPropertyChange} />
                </div>
                <input type="button"
                    style={{ marginBottom: 20 }}
                    value="Save"
                    className="btn btn-success"
                    onClick={this.onClickSave} />

            </div>
        )
    }
}

export default UsersComponent;
