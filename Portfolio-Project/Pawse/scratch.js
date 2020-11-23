/*
index.js:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-open-sans';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import App from './App';
- import for App is positioned as the last one 


app.js:
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter, Switch, Router, Redirect } from 'react-router-dom';
import './App.css';


directorycomponent.js:
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

headercomponent.js:
import { Switch, Route, Redirect } from 'react-router-dom';

footercomponent.js:
import { Link } from 'react-router-dom';

contactcomponent.js:
import { Breadcrumb, BreadcrumbItem, Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

----
react: 
     React, { Component }

reactstrap:
     { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardImg, CardImgOverlay, 
          CardText, CardTitle, Col, Collapse, Form, FormGroup, Input, Jumbotron,
          Label, Modal, ModalBody, ModalHeader, Nav, NavItem, Navbar, NavbarBrand,
          NavbarToggler, Row }

react-router-dom:
     { BrowserRouter, Link, Redirect, Route, Router, Switch }

react-redux-form: 
     { Control, LocalForm, Errors }

react-transition-group:
     { TransitionGroup, CSSTransition }

react-animation-components
     { FadeTransform, Fade, Stagger } 


---------------------

app.css:
- change all of that


----------------------
command for json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000

*/