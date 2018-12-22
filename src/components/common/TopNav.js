import React, { Component } from 'react';
import './../../assets/css/TopNav.css'
import {
    Button
} from 'reactstrap';
class TopNav extends Component {
    render() {
        return (
            <div className="TopNav">
                <div className="row">
                    <button class="button button4">Novidades</button>
                    <div className="lorem-ipsum">
                        <span>Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..</span>
                        <br />
                        <span className="para2">Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..</span>
                    </div>
                    <div className="Inscrever">
                        <span>Voce quer se inscrever para receber
                        atualizacoes?<a href="#">Inscrever</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNav;
