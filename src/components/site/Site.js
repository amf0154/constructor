import React from 'react';
import {connect} from 'react-redux';
import './site.css';
class Site extends React.Component {
    render = () =>{
        const {id: site_id} = this.props.match.params;
        const site = this.props.sites.filter(site => site.slug === site_id);
        return (
            <div className="site-container">
                {site.length !== 0 ?  site[0].body.map((obj, i) => (
                    <ChildComponent height={obj.height} background={obj.background} title={obj.title} color={obj.color} key={i} number={i} />
                )): <ChildComponent height={'50px'} title={'site with such slug not found!'} color={'red'} />} 
            </div>
        );
    };
}

const ChildComponent = props => <div className="multi__block" style={{backgroundImage: 'url(' + props.background + ')', height: props.height, color: props.color}}>{props.title}</div>;
function mapStateToProps(state){
    return {
      sites: state.sites
    }
}
export default connect(mapStateToProps)(Site);