import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import About from './components/pages/About';
import Article from './components/pages/Article';
import axios from 'axios';

export const fetchContact = (id) => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(res  => console.log(res.data))
}

class App extends Component {

  state = {
    articles: [
     
    ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts?limit=10')
    .then(res  => this.setState({articles: res.data}))
  }
  
  render(){
    return (
      <Router>
        <div className="App">
            <div className="site_main_container">
              <Header  />
              <Route exact path="/" component={About}></Route>
              <Route exact path="/blog" render={
                props => (
                  <React.Fragment>
                    <main id="content" className="site-content">
                      <Articles articles={this.state.articles} />
                    </main>
                  </React.Fragment>
                )} />
              
              <Route exact path="/article/:articleId" component={Article}></Route>
              
           
              
            </div>
        </div>
      </Router>
     
    );
  }

}




export default App;

