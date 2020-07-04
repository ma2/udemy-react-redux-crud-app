import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions';

// イベント一覧
class EventsIndex extends Component {
  // コンポーネントマウント時に走る処理
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={ event.id }>
        <td>{ event.id }</td>
        <td>
          <Link to={ `/events/${event.id}` }>{ event.title }</Link>
        </td>
        <td>{ event.body }</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{ this.renderEvents() }</tbody>
        </table>
        <Link to='/events/new'>New Event</Link>
      </React.Fragment>
    );
  }
}

// stateからコンポーネントに必要なものを取り出してpropsにマッピングする
const mapStateToProps = (state) => ({ events: state.events });

// 上記のショートハンド
const mapDispatchToProps = { readEvents };

// stateとアクションを関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
