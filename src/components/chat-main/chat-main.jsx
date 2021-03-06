import React, { Component } from 'react';
import './ChatMain.scss';
import ChatServerNav from '../chat-servers-nav/chatServersNav.jsx';
import { Route, Redirect} from 'react-router-dom';
import ChatServer from '../chat-server/chat-server.jsx';
import { Scrollbars } from 'react-custom-scrollbars';
import DMInterface from '../dm-interface/dm-interface.jsx';
class ChatMain extends Component {
    render() {
        return (
            <div className="row ChatMain">
                <div
                    className="col-md-1"
                    style={{ height: '100%', maxHeight: '100%' }}
                >
                    <Scrollbars style={{ height: '100%', maxHeight: '100%' }}>
                        <ChatServerNav {...this.props} />
                    </Scrollbars>
                </div>
                <div className="col-md-11" style={{ padding: 0 }}>
                    <Route
                        path="/channel/:server_id/:section_id?/:channel_id?"
                        render={({ history, match }) => (
                            <ChatServer
                                key={
                                    match.params.server_id +
                                    match.params.channel_id
                                }
                                match={match}
                                {...this.props}
                            />
                        )}
                    />
                    <Route exact path="/" render={() => <Redirect to="/@me" push/>}/>
                    <Route path="/@me" render={({match, history}) => {
                        return <DMInterface {...this.props} />
                    }}/>
                </div>
            </div>
        );
    }
}
export default ChatMain;
