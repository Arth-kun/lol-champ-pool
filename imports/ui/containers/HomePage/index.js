/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H2 from '../../components/H2';
import CenteredSection from './CenteredSection';
import Section from './Section';
import Roles from '../Roles/index';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet
          title="Champion's Pool"
          meta={[
            { name: 'description', content: 'Lol Champion pool Manager' },
          ]}
        />
        <div>
          <CenteredSection>
            <H2>Welcome to your League of Legend champions pool manager</H2>
            <H2>You can add, edit and delete champ to/from any lane you want and add many details to them</H2>
          </CenteredSection>
          <Section>
            <Roles />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {

};

// Wrap the component to inject dispatch and state into it
export default HomePage;
