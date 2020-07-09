import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import CountAdd from 'material-ui/svg-icons/content/add'

import { readEvents } from '../actions';

// イベント一覧
class EventsIndex extends Component {
  // コンポーネントマウント時に走る処理
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <TableRow key={ event.id }>
        <TableRowColumn>{ event.id }</TableRowColumn>
        <TableRowColumn>
          <Link to={ `/events/${event.id}` }>{ event.title }</Link>
        </TableRowColumn>
        <TableRowColumn>{ event.body }</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={ style } containerElement={ < Link to='/events/new' /> } >
          <CountAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={ false }>
            { this.renderEvents() }
          </TableBody>
        </Table>

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
