import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addSite} from '../../actions/base';
import './create.scss';
import Select from 'react-select';
class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: "",
            numChildren: 0,
            blockData: [],
            height: 200,
            background: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
            color: 'yellow',
            title: 'batterfly'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleChangeColor = (selectedOption) => this.setState({ color: selectedOption.value });

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }  

    render() {
        const options = [
            { value: 'lightblue', label: 'lightblue' },
            { value: 'skyblue', label: 'skyblue' },
            { value: 'yellow', label: 'yellow' },
            { value: 'green', label: 'green' },
            { value: 'black', label: 'black' },
            { value: 'white', label: 'white' }
          ];
        const children = [];
        for (let i = 0; i < this.state.numChildren; i += 1) {
            const {height, background, title, color} = this.state.blockData.filter(el=> el.id === i)[0];
            children.push(<ChildComponent height={height} background={background} title={title} color={color} key={i} number={i} />);
        };
        return (
            <div>
                <div id="new_block" className="addNewBlock">
                    <Select name="color" className="select-color" placeholder="select color of headline" onChange={this.handleChangeColor} options = {options} />
                    <input
                        name="title"
                        type="text"
                        placeholder="headline for new block"
                        value={this.state.title}
                        onChange={this.handleInputChange} 
                    />
                    <input
                        name="background"
                        type="text"
                        placeholder="link to image for background"
                        value={this.state.background}
                        onChange={this.handleInputChange} 
                    />
                    <input
                        name="height"
                        type="text"
                        placeholder="block height in pixels"
                        value={this.state.height}
                        onChange={this.handleInputChange} 
                    />
                    <button className="addBlock__button" onClick={this.onAddChild}>Add new block</button>
                </div>
                <div id="slug_block" className="slugBlock">
                    <input
                        name="slug"
                        type="text"
                        placeholder="input slug for site"
                        value={this.state.slug}
                        onChange={this.handleInputChange} 
                    />
                    <button className="addBlock__button-save" onClick={this.setSlugAndSave}>save site</button>
                </div>

                <ParentComponent>
                    {children}
                    {children.length !== 0 ? <button id="create_button" className="addBlock__button" onClick={this.saveSite}>create site</button> : ''}
                </ParentComponent>
            </div>
        );
    }
      
    onAddChild = () => {
        this.setState({
           numChildren: this.state.numChildren + 1
        });
        const block = {
            id: this.state.numChildren,
            title: this.state.title,
            background: this.state.background,
            height: this.state.height + 'px',
            color: this.state.color
        }
        this.state.blockData.push(block);
        this.setState({
        title: "",
        background: "",
        height: ""
        });
    }
    saveSite = () => {
        window.scrollTo(0,0);
        document.getElementById('new_block').style.display="none";
        document.getElementById('create_button').style.display="none";
        document.getElementById('slug_block').style.display="flex";
    }

    setSlugAndSave = () => {
        const newSiteData = {
            slug: this.state.slug,
            body: this.state.blockData
        }
        if(this.state.slug === "" || this.state.slug.trim().length === 0 ){
            alert('wrong slug, slug must contains one word')
        }else{
            if(this.props.sites.sites.length !== 0){
                const checker = this.props.sites.sites.filter(obj=> obj.slug === this.state.slug);
                if(checker.length !==0){
                    alert('site with such slug already exists, select other slug!')
                }else{
                    const newSite = this.props.sites.sites;
                    newSite.push(newSiteData);
                    this.props.addSite(newSite);
                    setTimeout(()=> this.props.history.push(`/sites`),500)
                }
            }else{
                this.props.addSite([newSiteData]);
                setTimeout(()=> this.props.history.push(`/sites`),500)
            }
        }   
    }
}

const ParentComponent = props => (
    <div>
      <div className="create__container">
        {props.children}
      </div>
    </div>
  );

const ChildComponent = props => <div className="multi__block" style={{backgroundImage: 'url(' + props.background + ')', height: props.height, color: props.color}}>{props.title}</div>;

function mapStateToProps(state){
    return {
      sites: state
    }
}
export default connect(mapStateToProps, (dispatch) => bindActionCreators({addSite}, dispatch))(Create);
