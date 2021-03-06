import React, { Component } from 'react';
import { 
    Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, 
    Button, Col, Label, Modal, ModalBody, ModalHeader, Row 
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderCampsite({ campsite }) {
    return (
        <React.Fragment>
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    );
}

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleSubmit(values) {
            console.log("Current state is: " + JSON.stringify(values))
            alert("Current state is: " + JSON.stringify(values))
        }
    
    render() {
        return (
            <React.Fragment>
                <Button outline className="fa-lg" onClick={this.toggleModal} >
                    <i className="fa fa-pencil"/>Submit Comment
                </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} color="primary">Comment Form</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                        <Row className="form-group">
                        <Col md={10}>
                            <Label htmlFor="author">Author</Label>
                                    <Control.text model=".author" id="author" name="author" 
                                        placeholder="Author" className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                       }}
                                       />
                                       <Errors
                                       className="text-danger"
                                       model=".author"
                                       show="touched"
                                       component="div"
                                       messages={{
                                            required: 'Must be between 2-15 characters.',
                                            minLength: 'Must be at least 2 characters.',
                                            maxLength: 'Must be 15 characters or less.'
                                       }}
                                       />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Col md={4}>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <Col md={10}>
                            <Label htmlFor="text">Comment</Label>
                                <Control.textarea model=".text" id="text" name="text" 
                                    placeholder="Comment text" rows="6" className="form-control" />
                                </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={10}>
                                <Button type="submit" color="primary" 
                                /*onClick=
                                 {handleSubmit(values) {
                                    console.log("Current state is: " + JSON.stringify(values)),
                                    alert("Current state is: " + JSON.stringify(values))
                                }}*/
                                >
                                    Send
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }

}

function RenderComments({ comments }) {
    if (comments) {
        console.log(comments)
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {
                    comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <p>
                                <blockquote className="blockquote">
                              <p className="mb-0">{comment.text}</p><footer className="blockquote-footer">
                              {comment.author} {"   [ "
                              + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} {"]"}</footer></blockquote>
                                </p>
                            </div>
                        )
                    }
                    )}
                    <CommentForm />
                    </div>
        );
    }
    return <div />;
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                {/* A JSX comment */}
            </div>
        )
    }
    return <div />
}

export default CampsiteInfo;