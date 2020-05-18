import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './sites.css';
class Sites extends React.Component {
    render = () =>{
        const { sites } = this.props.sites;
        return (
            <div className="sites-container">
                {sites.length !==0 ? sites.map((site, i) => (
                    <Link className="link" key={i}  to={`/site/${site.slug}`}>{i+1 + ') '+ site.slug}</Link>
                )): 'Site list is empty'}
            </div>
        );
    };
}

function mapStateToProps(state){
    return {
      sites: state
    }
}

export default connect(mapStateToProps)(Sites);