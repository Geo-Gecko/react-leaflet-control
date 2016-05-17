import { Component, PropTypes, Children } from 'react';
import { MapControl } from 'react-leaflet';
import { Map, control } from 'leaflet';
import { render } from 'react-dom';

export default class Control extends MapControl {
  static propTypes = {
    children: PropTypes.node,
    map: PropTypes.instanceOf(Map),
    popupContainer: PropTypes.object,
    position: PropTypes.array
  };
  constructor(props){
    super(props);
  }
  componentWillMount() {
    super.componentWillMount();
    const { children: _children, map: _map, popupContainer, ...props } = this.props;

    this.leafletElement = control(props);
    this.renderContent();
  }
  componentWillUpdate(next){
    super.componentWillMount(next);
    this.renderContent();
  }
  renderContent(){
    const container = this.leafletElement.getContainer();
    render(
      Children.only(this.props.children),
      container
    );
  }
  render(){
    return null;
  }
  
}