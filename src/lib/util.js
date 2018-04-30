import React from 'react';
import './util.css';
import bannerData from '../data/banner.json';
import profileData from '../data/profiles.json';
import Popup from 'reactjs-popup';
import ProfileCountry from '../data/ProfileCountry.json';

class PageHeader extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    // }
    render()
    {
    return(
        <div className="pageMargin pageHeader">
        {this.props.text}
        <hr className="ruler"/>
      </div>
      );
    }
}



class Field extends React.Component
{
// constructor(props)
// {
// super(props);
// }
    render()
    {
        return(
            <div className={this.props.className}>
            {this.props.text} {this.props.isMandatory==="true"?<span className="star">*</span>:''}
            </div>
        );
    }
}

class CountryList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={data:this.props.Data,Show:false,Code:''}
        this.handleClick = this.handleClick.bind(this);
        this.BannerClick = this.BannerClick.bind(this);
    }
    handleClick(CurrentCode,e)
    {
        //var rect =  ReactDOM.findDOMNode(e).getBoundingClientRect();
        this.setState({Code:CurrentCode});
    }
    BannerClick()
    {
        this.setState({Code:''});
    }
    render()
    {
        return(
            <div>
                
                {
                    this.state.data.Countries.map(item =>
                     <Country key={item.code}  isChecked = {item.selected} mode={this.props.mode} isEdit={this.props.isEdit} Code={item.code} Name={item.name}  Show={item.code === this.state.Code} onCountryClick={this.handleClick} onHideBanner={this.BannerClick}/>
                    )
                }
            </div>
        );
    }
}

class Country extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={Show:false,Code:this.props.Code,isChecked :this.props.isChecked}

        this.handleClick = this.handleClick.bind(this);
        this.HideBanner= this.HideBanner.bind(this);
        this.CheckBoxClicked = this.CheckBoxClicked.bind(this);
    }
    handleClick(CurrentCode,e)
    {
        this.props.onCountryClick(CurrentCode,e);
    }
    CheckBoxClicked()
    {
        
        this.setState((prevState) => (
            {
                isChecked :  (prevState.isChecked.toString() === "true")? "false" :"true"
                
            }))
    }
    HideBanner()
    {
        this.props.onHideBanner();
    }

    render()
    {
        return(
            <div  className={(this.props.mode.toString().toLowerCase() !== "view" && this.state.isChecked.toString().toLowerCase() === "true") ? "listselected" : "padding"}>
            { this.props.mode.toString().toLowerCase() !== "view" &&
            <input type="checkbox" onChange={this.CheckBoxClicked} checked={this.state.isChecked.toString() === "true" ? "true" : ""} disabled={ !this.props.isEdit ? "disabled" : null }/>
            }
            <span>{this.props.Name}</span><RightArrow mode={this.props.mode} isEdit={this.props.isEdit} onHideBannerClick={this.HideBanner} onRightArrowClick={this.handleClick} Code={this.props.Code} Top={this.props.Top} Left={this.props.Left} Show={this.props.Show}/></div>
        );
    }
}

class RightArrow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={showStyle:{'left':'550px','top':'40px'},hideStyle:{'display':'none'}}
        this.showBanner= this.showBanner.bind(this);
        this.handleClick =this.handleClick.bind(this);
    }

    componentDidMount()
    {
        
    }

    showBanner()
    {
        this.props.onRightArrowClick(this.props.Code,this);
    }

    handleClick()
    {
        this.props.onHideBannerClick();
    }

    render()
    {
        return(
            <span>
            <span className="rightArrow"><i onClick={this.showBanner} className="right"></i></span>
            {
                this.props.Show ? 
                <div className="banner" style={this.props.Show ? this.state.showStyle : this.state.hideStyle}>
                    <BannerList mode={this.props.mode} isEdit={this.props.isEdit} Code={this.props.Code}  onBannerListClick={this.handleClick}/> 
                </div>
                    : null
            }
            </span>

        );
    }
}

class BannerList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={data:bannerData,Code:this.props.Code}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.onBannerListClick();
    }
    render()
    {
        return(
            <div className="banner">
            <Field text="Banner Name" className="pageFont" isMandatory="true"/>
            <div className= "list">
                {
                    this.state.data[this.props.Code].map(item =>
                     <Banner key={item.name} Name={item.name} isEdit={this.props.isEdit} mode={this.props.mode}  isChecked={item.selected}/>
                    )
                }
            </div>
            <div><input type="button" className="btn Hide" value="x" onClick={this.handleClick} /></div> 
            {
            (this.props.mode !== "view" && this.props.isEdit) && 
            <div><input type="button" className="btn Hide" value="s" onClick={this.handleClick} /></div> 
            }
            </div>

        );
    }
}

class Banner extends React.Component
{
    constructor(props)
    {
    super(props);
    this.state={isChecked:this.props.isChecked}
    this.CheckBoxClicked = this.CheckBoxClicked.bind(this);
    }

    CheckBoxClicked()
    {
    this.setState((prevState) => (
        {
            isChecked :  (prevState.isChecked.toString() === "true")? "false" :"true"
            
        }))
    }

    render()
    {
        return(

            <div className={(this.props.mode.toString().toLowerCase() !== "view" && this.state.isChecked.toString().toLowerCase() === "true") ? "listItem listselected" : "listItem padding"} >
            { this.props.mode.toString().toLowerCase() !== "view" &&
            <input type="checkbox" onChange={this.CheckBoxClicked}  checked={this.state.isChecked.toString() === "true" ? "true" : ""} disabled={ !this.props.isEdit ? "disabled" : null }/>
            }
            <span>{this.props.Name}</span></div>
        );
    }
}

class GridBody extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={data:profileData};
    }
    render()
    {
        return(
                <tbody>
                    {
                     this.state.data.Profiles.map((item,index) => 
                     <DataRow key={item.name} Item ={item} className={index %2 === 0 ? "evenRow" : "oddRow"} />
                         )
                    }
                </tbody>
            );
    }
}

class DataRow extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    // }

    render()
    {
        return(
                                    <tr className={this.props.className} >
                                        <td className="pageFont">
                                        <Popup trigger={<a href="Javascript://">Edit</a>} modal>
                                        { 
                                            close => (
                                                    <div className="modal">
                                                    <a className="close" onClick={close}>
                                                    &times;
                                                    </a>
                                                    <PopupWindow Item={this.props.Item} onClick={close} />
                                                    </div>
                                            )
                                        }
                                        </Popup>
                                        </td>
                                        <td className="pageFont">{this.props.Item.name}</td>
                                        <td className="pageFont">{this.props.Item.isActive ? "Active" : "Inactive"}</td>
                                    </tr>
        );
    }
}

class PopupWindow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.onClick();
    }
    render()
    {
        var s1={'width':'217px'};
        var s={'height':'100px','width':'200px'};
        return(
            <table cellSpacing="5px" border="0" width="100%">
                <tbody>
                    <tr>
                        <td className="alignTop"><Field text="Name" className="pageFont" isMandatory="false"/></td>
                        <td><input type="text" disabled="disabled" style={s1} value={this.props.Item.name}/></td>
                    </tr>
                    <tr> 
                        <td className="alignTop"> <Field text="Country Name" className="pageFont" isMandatory="true"/>  </td>
                        <td>
                            <div style={s}>
                            <div className="list pageFont" style={s}>
                                <CountryList isEdit={true} mode="edit" Data={ProfileCountry[this.props.Item.name]} />
                            </div> 
                            {
                                <input type="button" className="relative btn Hide" value="s" /> 
                            }
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="checkbox" checked={this.props.Item.isActive.toString() === "true" ? "true" : ""}/>Active</td>
                    </tr>
                    <tr>
                        <td align="right"><input className="bigbtn" type="button" value="Update" onClick={this.handleClick} /></td>
                        <td align="left"><input className="bigbtn" type="button" value="Cancel" onClick={this.handleClick} /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export {Field,PageHeader,Country,CountryList,GridBody}