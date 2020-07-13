// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// serviceWorker.unregister();

import React from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import GettingScreen from './screens/Getting/GettingScreen';
import BadgeIconScreen from './screens/BadgeIcon/BadgeIconScreen';
import CardScreen from './screens/Card/CardScreen';
import DividerScreen from './screens/Divider/DividerScreen';
import GuidesScreen from './screens/Guides/GuidesScreen';
import ListScreen from './screens/List/ListScreen';
import TextScreen from './screens/Text/TextScreen';
import ViewScreen from './screens/View/ViewScreen';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: 'Cari Component',
      currentMenu: 'Getting'
    }
  }

  changeContent(menu) {
    this.setState({currentMenu: menu})  
  }


  render() {
    const { search, currentMenu } = this.state
    let renderMenu = null
    if (currentMenu === 'Getting') {
      renderMenu = <GettingScreen />
    } else  if (currentMenu === 'Guides') {
      renderMenu = <GuidesScreen />
    } else if (currentMenu === 'View') {
      renderMenu = <ViewScreen />
    } else if (currentMenu === 'Text') {
      renderMenu = <TextScreen />
    } else if (currentMenu === 'Divider') {
      renderMenu = <DividerScreen />
    } else if (currentMenu === 'BadgeIcon') {
      renderMenu = <BadgeIconScreen />
    } else if (currentMenu === 'Card') {
      renderMenu = <CardScreen />
    } else if (currentMenu === 'List') {
      renderMenu = <ListScreen />
    } else if (currentMenu === 'View') {
      renderMenu = <ViewScreen />
    }
    return (
      <View style={styles.container}>
        <View style={styles.container_slider}>
          <ScrollView style={{ width: 280, height: 1800 }}>
            <View style={{ padding: 10 }}>
              <View style={{padding: 10}}>
                <Text style={styles.text_slider_title}>SMART UI GUIDE v0.0.1</Text>
              </View>

              <View style={{backgroundColor: 'white', flex: 1, height: 48, borderRadius: 5, borderWidth: 1, borderColor: 'white'}}>
                <TextInput
                  returnKeyType={'search'}
                  underlineColorAndroid={'transparent'}
                  placeholderTextColor={'gray'}
                  placeholder={'Cari Component'}
                  style={{padding: 5, color: 'black'}}
                  onChangeText={(value) => this.setState({search: value})}
                />
              </View>
              <TouchableOpacity>
                  <View style={{padding: 10, alignItems: 'flex-end'}}>
                    <Text style={styles.text_slider_sub}>Search</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.changeContent('Getting')}>
                <View style={{padding: 10}}>
                  <Text style={styles.text_slider}>GETTING STARTED</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changeContent('Guides')}>
                <View style={{padding: 10}}>
                  <Text style={styles.text_slider}>GUIDES</Text>
                </View>
              </TouchableOpacity>
              <View style={{padding: 10}}>
                <Text style={styles.text_slider}>GENERAL COMPONENT</Text>
              </View>
              <TouchableOpacity onPress={() => this.changeContent('View')}>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>View</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changeContent('Text')}>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Text</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changeContent('Divider')}>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Divider</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changeContent('BadgeIcon')}>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Badge Icon</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changeContent('Card')}>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Card</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changeContent('List')}>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>List</Text>
                </View>
              </TouchableOpacity>

              <View style={{padding: 10}}>
                <Text style={styles.text_slider}>NAVIGATION</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Top Navigation / ActionBar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Top Navigation</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Bottom Navigation</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Menu Item</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>ViewPager / Slider</Text>
                </View>
              </TouchableOpacity>

              <View style={{padding: 10}}>
                <Text style={styles.text_slider}>FORMS</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Button</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Checkbox</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Radio</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Toggle</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Input</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Select / Dropdown</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Autocomplete</Text>
                </View>
              </TouchableOpacity>

              <View style={{padding: 10}}>
                <Text style={styles.text_slider}>MODALS & OVERLAYS</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Modal</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Popover</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Tooltip / Toast</Text>
                </View>
              </TouchableOpacity>

              <View style={{padding: 10}}>
                <Text style={styles.text_slider}>EXTRA</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Avatar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container_slider_item}>
                  <Text style={styles.text_slider_sub}>Spinner / Progress</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.container_content}>
          <Text style={styles.text}>{search}</Text>
          { renderMenu }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  container_slider: { width: 280, flexDirection: 'row', padding: 10, backgroundColor: '#ff1f70' },
  container_slider_item: {padding: 10, flexDirection: 'row', alignItems: 'center'},
  container_content: { flex: 3, backgroundColor: 'white', padding: 10},
  text_slider_title: { fontSize: 18, color: 'white', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Droid Sans'},
  text_slider: { color: 'white', fontWeight: 'bold' },
  text_slider_sub: { color: 'white', paddingHorizontal: 10 },
  text: {  },
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });