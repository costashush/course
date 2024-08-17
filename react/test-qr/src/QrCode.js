import React, { Component } from 'react';
import QRCode from 'qrcode.react';


export default class QrCode extends Component {
    render() {

        return <div> 
            <h1> THIS IS QR</h1>
               <QRCode value={this.props.code} />,

        </div>

    }
}
