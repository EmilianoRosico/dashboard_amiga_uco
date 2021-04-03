import React, { Component } from 'react'

class Card extends Component {
    state = {
        total: ""
    }
    componentDidMount() {
        fetch("http://localhost:3001/api/products")
            .then(respuesta => respuesta.json())
            .then(info => {
                this.setState({ total: info.answer.meta.count })
            })
    }
    render() {
        let customStyle = "card shadow h-100 py-2 " + this.props.color;
        let customIcons = "fas  fa-2x text-gray-300 " + this.props.icon;
        let subStyle = "text-xs font-weight-bold text-uppercase mb-1 " + this.props.subtitleStyle;
        let val = this.state.total !== undefined ? this.state.total : this.props.value
        return (
            <div className="col-md-4 mb-4">
                <div className={customStyle}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={subStyle}> {this.props.subtitle}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{val}</div>
                            </div>
                            <div className="col-auto">
                                <i className={customIcons}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;