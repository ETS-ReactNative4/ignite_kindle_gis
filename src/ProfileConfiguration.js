import React, { Component } from 'react';
import {PageHeader,Field,CountryList,GridBody} from './lib/util.js';
import './lib/util.css';
import countryData from './data/country.json';


class ProfileConfiguration extends Component {
  
  // constructor(props)
  // {
  //   super(props);
    
  // }
 

  render() {
    var s={'height':'100px','width':'200px'};
    var s1={'width':'217px'};
    return (
      <div>
      <PageHeader text="Profile Configuration"/>
      <table className="pageMargin" cellSpacing="5px" border="0">
      <tbody>
        {/* <tr>
        <td className="alignTop"> <Field text="Name" className="pageFont" isMandatory="false"/>  </td>
          <td><input type="text" disabled="disabled" style={s1}/></td>
          </tr>*/}
        <tr> 
          <td className="alignTop"> <Field text="Country Name" className="pageFont" isMandatory="true"/>  </td>
          <td>
            <div className="list pageFont" style={s}>
            <CountryList isEdit={false} mode="view" Data={countryData} />
            </div> 
          </td>
          </tr>
          </tbody>
      </table>
      {/* Grid will come here */}
      <table  className="pageMargin tableborder" cellSpacing="0" border="0" width="50%">
        <thead>
          <tr className="header">
            <td></td>
            <td><Field text="Profile Name" className="pageFont bold" isMandatory="false"/></td>
            <td><Field text="Active" className="pageFont bold" isMandatory="false"/></td>
          </tr>
          </thead>
          <GridBody />
      </table>


      
      {/* <Popup trigger={<button> Click Here </button>} position="right center" modal closeOnDocumentClick>
          <div> Popup content will come here</div>
      </Popup> */}
      
      </div>
    );
  }

}
export default ProfileConfiguration;

