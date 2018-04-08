import React from 'react';
import './util.css';
import countryData from '../data/country.json';
import bannerData from '../data/banner.json';

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
        this.state ={data:countryData}
    }

    loadData()
    {
        // // console.log("Inside load Data");
        // // fetch(countryData)
        // // .then(res => {console.log(res)})
        // // .then(data => {this.setState({data:data})})
        // // .catch(err => console.error(err.toString()))
        // // console.log("loaded Data without any errors");
        //  console.log("load Data" + countryData.Countries.length);
        //  countryData.Countries.map((item,i)=>
        // {
        //     //console.log(item.name);
        //     //console.log(item.code);
            
        // })

        // // this.state.data.map((item,i) =>
        // // {

        // //     //console.log(i);
        // //     //console.log(item);
        // // } )
    }

    componentDidMount()
    {
        this.loadData();
    }
    render()
    {
        return(
            <div>
                {
                    this.state.data.Countries.map(item =>
                     <Country key={item.code} Code={item.code} Name={item.name}/>
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
    }
    render()
    {
        return(
            <div className="listItem"><span>{this.props.Name}</span><RightArrow Code={this.props.Code}/></div>
        );
    }
}

class RightArrow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={showBanner:false,showStyle:{'left':'200px'},hideStyle:{'display':'none'}}
        this.showBanner= this.showBanner.bind(this);
        
    }
    showBanner(e)
    {
        this.setState({showBanner:true});
    }

    render()
    {
        return(
            <span>
            <span className="rightArrow"><i onClick={this.showBanner} className="right"></i></span>
            {
                this.state.showBanner ? <div className="banner" style={this.state.showBanner ? this.state.showStyle : this.state.hideStyle}><BannerList  Code={this.props.Code}  /> </div>: null
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
    }
    render()
    {
        return(
            <div className="banner list">
                {
                    this.state.data[this.props.Code].map(item =>
                     <Banner key={item.name} Name={item.name}/>
                    )
                }
            
            </div>

        );
    }
}

class Banner extends React.Component
{
    render()
    {
        return(
            <div className="listItem"><span>{this.props.Name}</span></div>
        );
    }
}

export {Field,PageHeader,Country,CountryList}