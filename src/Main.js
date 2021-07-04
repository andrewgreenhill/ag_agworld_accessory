import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { companyForUserID, farmsForCompanyID, fieldsForCompanyID } from './getAgworldData';
import TopBar from './topBar';
import WeatherPage from './weatherPage';

function Main(props) {
  const { title, userId, userName, thumbURL } = props;
  let company;
  let companyName;
  let farms;
  let fields;
  const [currentPage, setCurrentPage] = useState('weather');
  let pageElement = <></>;

  console.log(userName);
  if (!company) {
    company = companyForUserID(userId);
    companyName = company.attributes.name;
  }
  console.log(`Company name: ${companyName}`);

  if (!farms) farms = farmsForCompanyID(company.id);
  farms.forEach((farm) => {
    console.log(`Farm description: ${farm.attributes.description}`);
  });

  if (!fields) fields = fieldsForCompanyID(company.id);
  fields.forEach((field) => {
    console.log(`Field description: ${field.attributes.description}`);
  });

  if (currentPage === 'weather') {
    pageElement = <WeatherPage farms={farms} fields={fields} setCurrentPage={setCurrentPage} />;
  } else {
    pageElement = <></>;
  }

  return (
    <div>
      <TopBar title={title} companyName={companyName} thumbURL={thumbURL} setCurrentPage={setCurrentPage} />
      {pageElement}
    </div>
  );
}

Main.propTypes = {
  title: PropTypes.string,
  userId: PropTypes.number,
  userName: PropTypes.string,
  thumbURL: PropTypes.string,
};

export default Main;
