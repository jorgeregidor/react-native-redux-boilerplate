import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInfo } from "../actions";
import _ from "lodash";
import { 
  StyleSheet, 
  View, 
  Text, 
  Button,
  Header 
} from "react-native";

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info,
    };

    this.callAction = this.callAction.bind(this)
  }

  static navigationOptions = {
    header: null
  }

  callAction(){
    this.props.fetchInfo(this.state.info)
  }

  
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.info, nextProps.info)) {
      this.setState({ info: nextProps.info });
    }
  }

  render() {
    return (


       
        <View style={styles.container}>
          <Text>count = {this.state.info.data}</Text>
          <Button
            onPress={this.callAction}
            title="Add One"
            color="blue"/>
          <Text/>
          <Button
            onPress={() => this.props.navigation.navigate('Other')}
            title="Other Page"
            color="blue"/>
        </View>
    );
  }
}

const mapStateToProps = ({ info }) => ({
  info
});

const actions = {
  fetchInfo
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default connect(mapStateToProps, actions)(Home);
