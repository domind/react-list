
import React from 'react';
import renderIcon from './renderIcon';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isToggleOn: false };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
  
    }
  
    render() {
      //  console.log(this.props.file);
      const childs = this.props.node
        .map(item =>
          <div className="row" key={item.id}>
            <div className="col-sm-1 mainText" >
            </div>
            <div className="col-sm-10 mainText" >
              {item.fileName ? <a href={item.fileName} target="_blank" rel="noopener noreferrer">{item.name} </a> : item.name}
            </div>
            <div className="col-sm-1 mainText ">
              {item.fileType ? <a href={item.fileName} target="_blank" rel="noopener noreferrer">{renderIcon(item.fileType)}</a> : ""}
            </div>
          </div>
        )
      return (
        <div>
          <div className="row " >
            <div className="col-sm-10 mainText">
              {this.props.file ? <a href={this.props.file} target="_blank" rel="noopener noreferrer">{this.props.name}</a> : this.props.name}
            </div>
            <div className="col-sm-2 mainText">
              <button className="btn btn-sm dropdown-toggle  mainText " onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Close' : 'Open'}
              </button>
            </div>
          </div>
          {this.state.isToggleOn ? <div>{childs}</div> : ''}
        </div>
      );
    }
  }

  export default Toggle ;