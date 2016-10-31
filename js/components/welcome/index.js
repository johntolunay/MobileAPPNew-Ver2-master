import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, AsyncStorage, TouchableOpacity, Dimensions, Navigator, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { replaceRoute } from '../../actions/route';
import styles from "./styles";
import { globalNav } from '../../AppNavigator';
import { Dashboard } from '../dashboard/'
import { Video } from 'react-native-media-kit';

import Roundabout from '../roundabout';

var devWid = Dimensions.get('window').width;
var devHei = Dimensions.get('window').height;

var { width, height } = Dimensions.get('window');

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = { user: null, token: null, login_type: null };
  }
  replaceRoute(route) {
      this.props.replaceRoute(route);
  }

  render() {
    const routes = [
      {image: 'golf', title: 'Golf', index: 0},
      {image: 'ski', title: 'Ski', index: 1},
    ];
    return (
      <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={(route, navigator) =>
        <TouchableOpacity onPress={() => {
          if (route.index === 0) {
            global.world_type = 1;
            this.replaceRoute('dashboard');
          } else {
            navigator.pop();
          }
        }}>
        <Image style={{flex:1, width: width, height: height}} resizeMode={Image.resizeMode.cover} source={require("../../../images/golf_full.png")}>

        </Image>
        </TouchableOpacity>
      }
      configureScene={(route, routeStack) =>
    Navigator.SceneConfigs.HorizontalSwipeJumpFromRight}



    />
    )
  }
}


function bindAction(dispatch) {
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Welcome);