import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    state = {
        auth: false
    }

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline',
                                    
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-sumbit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                    {/*<Route path="/" exact render={() => <h1>Home</h1>} />
                    <Route path="/" render={() => <h1>Home2</h1>} />*/}
                    
                    <Switch>
                        { this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
                        <Route path="/posts" component={Posts}/>
                        <Route render={() => <h1>Not found</h1>}/>
                        {/* <Redirect from="/" to="/posts" /> */}
                    </Switch>
            </div>
        );
    }
}

export default Blog;