import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import History from './History';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="pageone">Page 1</Link></li>
                <li className="breadcrumb-item"> <Link to="pagetwo">Page 2</Link></li>
                <li className="breadcrumb-item"><Link to="pagethree">Page 3</Link></li>
              </ol>
            </nav>

            <History />
            <Route path="/pageone" component={PageOne} />
            <Route path="/pagetwo" component={PageTwo} />
            <Route path="/pagethree" component={PageThree} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
