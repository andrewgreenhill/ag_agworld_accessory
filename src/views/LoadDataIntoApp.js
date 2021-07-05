import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getCompanyForUserID, getFarmsForCompanyID, getFieldsForCompanyID } from '../utils/GetAgworldData';
import TopBar from '../components/TopBar';
import Main from './Main';

function LoadDataIntoApp(props) {
  const { title, userId, userName, thumbURL } = props;

  const [company, setCompany] = useState();
  const [farms, setFarms] = useState();
  const [fields, setFields] = useState();
  const [requestCompany, setRequestCompany] = useState(true);
  const [requestFarms, setRequestFarms] = useState(true);
  const [requestFields, setRequestFields] = useState(true);

  if (requestCompany && userId) {
    getCompanyForUserID(userId, setCompany);
    setRequestCompany(false);
  }

  if (requestFarms && company) {
    getFarmsForCompanyID(company.id, setFarms);
    setRequestFarms(false);
  }

  if (requestFields && company) {
    getFieldsForCompanyID(company.id, setFields);
    setRequestFields(false);
  }

  let content;

  if (company && farms && fields) {
    content = (
      <Main title={title} userName={userName} thumbURL={thumbURL} company={company} farms={farms} fields={fields} />
    );
  } else {
    content = (
      <>
        <TopBar title={title} companyName="" thumbURL={thumbURL} />
        <div>Loading...</div>
      </>
    );
  }

  return <>{content}</>;
}

LoadDataIntoApp.propTypes = {
  title: PropTypes.string,
  userId: PropTypes.number,
  userName: PropTypes.string,
  thumbURL: PropTypes.string,
};

export default LoadDataIntoApp;
