import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { companyForUserID, farmsForCompanyID, fieldsForCompanyID } from '../utils/GetAgworldData';
import TopBar from '../components/TopBar';
import WeatherPage from './WeatherPage';

function Main(props) {
  const { title, userId, userName, thumbURL } = props;
  let company;
  let companyName;
  let farms;
  let fields;
  const [currentPage, setCurrentPage] = useState('weather');
  let pageElement = <></>;

  useEffect(() => console.log(userName), [userName]);
  if (!company) {
    company = companyForUserID(userId);
    companyName = company.attributes.name;
  }
  useEffect(() => console.log(`Company name: ${companyName}`), [companyName]);

  if (!farms) farms = farmsForCompanyID(company.id);
  farms.forEach((farm) => {
    useEffect(() => console.log(`Farm description: ${farm.attributes.description}`), [farm]);
  });

  if (!fields) fields = fieldsForCompanyID(company.id);
  fields.forEach((field) => {
    useEffect(() => console.log(`Field description: ${field.attributes.description}`), [field]);
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
