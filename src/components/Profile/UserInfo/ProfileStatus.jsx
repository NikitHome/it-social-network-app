import React from "react";
import style from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMod = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMod = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div className={style.status}>
                <div>
                Status:
                </div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMod}>{this.props.status || " ----"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMod} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;