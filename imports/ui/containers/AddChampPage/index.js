/*
 * AddChampPage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectChampId, makeSelectChampsList, makeSelectChamp, makeSelectLoading, makeSelectError } from './selectors';
import { loadChamps, loadChampDetails, changeChampId } from './actions';
import { lanes } from '../../utils/settings';
import H1 from '../../components/H1';
import AddChampForm from '../../components/AddChampForm/index';


class AddChampPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.onSelectChamp = this.onSelectChamp.bind(this);
  }

  componentDidMount() {
    const { champsList, champ, dispatch } = this.props;
    if (champsList.size === 0 && champ.size === 0) {
      dispatch(loadChamps());
      dispatch(loadChampDetails());
    }
  }

  onSelectChamp() {
    console.log('toto');
  }

  render() {
    const { champsList, champ, champId } = this.props;
    const image = image && champ.image.full;
    return (
      <div>
        <Helmet
          title="Add Champion"
          meta={[
            { name: 'description', content: 'Creation Page of champions pool manager' },
          ]}
        />
        <br />
        <AddChampForm
          champsList={champsList}
          champ={champ}
          champId={champId}
          image={image}
        />
        <br />
      </div>
    );
  }
}

AddChampPage.propTypes = {
  champsList: PropTypes.object,
  champ: PropTypes.object.isRequired,
  champId: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  champsList: makeSelectChampsList(),
  champ: makeSelectChamp(),
  champId: makeSelectChampId(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(AddChampPage);
