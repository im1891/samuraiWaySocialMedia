import React, { ChangeEvent } from "react";

type ProfileStatusPropsType = {
  status: string;
  updateStatus: (status: string) => void;
};

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status,
  };
  componentDidUpdate = (prevState: any, prevProps: any) => {
    prevState.status !== this.props.status &&
      this.setState({ status: this.props.status });
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <span>Status: </span>
            <input
              type="text"
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              onChange={this.onStatusChange}
              autoFocus
            />
          </div>
        ) : (
          <div>
            <span>Status: </span>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </div>
    );
  }
}
