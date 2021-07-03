import React from 'react';
import PropTypes from 'prop-types';
import { companyForUserID, farmsForCompanyID, fieldsForCompanyID } from './getAgworldData';
import TopBar from './topBar';

function Main(props) {
  const { title, userId, userName, thumbURL } = props;
  let company;
  let companyName;
  let farms;
  let fields;

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

  return (
    <div>
      <TopBar title={title} companyName={companyName} thumbURL={thumbURL} />
      <p></p>
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
