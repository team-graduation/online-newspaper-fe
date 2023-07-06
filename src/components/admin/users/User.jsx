import React, { useContext } from "react";
import { Header } from "../../common/header/index";
import { Footer } from "../../common/footer/index";
import { useNavigate } from "react-router-dom";
import "../../admin/table.css";
import { UserContext } from "context/users.context";


const User = () => {
    const navigate = useNavigate();
    const { allUser = [], deleteUser } = useContext(UserContext);
    console.log(allUser);

    const onDeleteUserClickHandler = (user) => (event) => {
        deleteUser(user.id)
    }

    return (
        <div>
            <Header />
            <div style={{ marginTop: '100px' }} className="row">

                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <div className="container" style={{ marginBottom: '100px' }}>
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Users</b></h2>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Experience</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUser.map((user) => (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.experience}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <a onClick={onDeleteUserClickHandler(user)} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>100</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#">Previous</a></li>
                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item active"><a href="#" className="page-link">2</a></li>
                                <li className="page-item"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">Next</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            
                {/* Delete Modal HTML */}
                <div id="deleteEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete Employee</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete these Records?</p>
                                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                    <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default User