import React, { Component } from 'react';
import TopNav from './../common/TopNav';
import SideNav from './../common/SideNav';
import './../../assets/css/dashboard.css';
import '../../layouts/Footer';
import {
    Button
} from 'reactstrap';
import Footer from '../../layouts/Footer';
class Dashboard extends Component {

    render() {
        return (
            <div className="Dashboard">
                <TopNav />
                <div className="cariculo">
                    <Button className="button">Criar novo Curriculo</Button>
                </div>
                <br/>
                <SideNav/>
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;
