
import React from 'react';
import './style.css';
import {list} from './list.js'
import Toggle from './Toggle.js';
import renderIcon from './renderIcon';
class App extends React.Component {

  render() {
    let listMap = list
      .sort((a, b) => a.id - b.id)
      .map((x, index) => <div key={x.id}>
        <div className="row  " key={x.id}>
          <div className="col-sm-1 d-flex justify-content-center table_body">
            {(x.id <= 39) ? index + 1 : ""}
          </div>
          <div className="col-sm-10 mainText table_body">


            {x.sublist ?

              <Toggle key={x.id} node={x.sublist} file={x.fileName} name={x.name} />

              :
              <div className="row " >
                <div className="col-sm mainText">
                  {x.fileName ? <a href={x.fileName} target="_blank" rel="noopener noreferrer">{x.name}</a> : x.name}
                </div>
              </div>
            }
          </div>
          <div className="col-sm-1 d-flex justify-content-center table_body">
            {x.fileType ? <a href={x.fileName} target="_blank" rel="noopener noreferrer">{renderIcon(x.fileType)}</a> : ""}
          </div>

        </div>

      </div>
      );
    return (<div className="main">
      <div className="container main2 ">
        <div className="row">
          <div className="container">
            <p></p>
          </div>
        </div>
        <div className="row title_row">
          <div className="col-md-10 " id="title">
            <h1>PAGE TITLE</h1>
          </div>
          <div className="col-md-2" id="logo">
            <i className="fas fa-list fa-5x"></i>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <p></p>
          </div>
        </div>

        <div className="row">
          <div className="container">
            <p></p>
          </div>
        </div>

        <div className="row table_header">
          <div className="col-md-1 d-flex justify-content-center table_body">
            No.
        </div>
          <div className="col-md-11 table_body">
            Description
          </div>

        </div>
        {listMap}
      </div>

    </div>
    );
  }
}

export default App;
