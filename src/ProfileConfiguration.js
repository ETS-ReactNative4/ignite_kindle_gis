import React, { Component } from 'react';
import {PageHeader,Field,CountryList} from './lib/util.js';
import './lib/util.css';


class ProfileConfiguration extends Component {
  
  // constructor(props)
  // {
  //   super(props);
    
  // }
 

  render() {
    var s={'height':'100px','width':'200px'};
    return (
      <div>
      <PageHeader text="Profile Configuration"/>
      <table className="pageMargin">
      <tbody>
        <tr>
          <td className="alignTop"> <Field text="Country Name" className="pageFont" isMandatory="true"/>  </td>
          <td>
            <div className="list pageFont" style={s}>
            <CountryList/>
            </div> 
          </td>
          </tr>
          </tbody>
      </table>
      </div>
    );
  }

}
export default ProfileConfiguration;

