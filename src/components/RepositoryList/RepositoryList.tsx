import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../redux';

import { Repository } from '../../redux/ducks/repositories/types';
import * as repositoriesActions from '../../redux/ducks/repositories/actions';
import RepositoryItem from '../RepositoryItem';


interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem
            key={repository.id}
            repository={repository}
          />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  repositoriesActions,
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
