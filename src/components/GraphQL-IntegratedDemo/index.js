import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';
import { Link as RouterLink } from 'react-router-dom';

const GraphQLIntegratedDemo = (props) => {
    // Query results in integrated GraphQL replace the normal `fields` data
    // i.e. with { data, }
    // TODO - Pass in params via App
    const defaultCard = "{703C641C-8622-443E-9BEB-E47371ACEC61}";
    //Default card item ID
    const cardID = "/sitecore/content/Home/Notifications/slow_internet";
    //Full path of card ID
    const graphData = props.fields.data;

  return (
    <div data-e2e-id="graphql-integrated">
      <h2>GraphQL Integrated Demo - XFinity</h2>

      <p>
              Integrated GraphQL executes GraphQL queries within the Layout Service endpoint, and merges
              the query results into the Layout Service result JSON. The query results can be seen by
              inspecting the Layout Service response in the browser devtools network tab.
      </p>

      {graphData && (
              <div> {JSON.stringify(graphData)}</div>
      )}
    </div>
  );
};

export default GraphQLIntegratedDemo;
