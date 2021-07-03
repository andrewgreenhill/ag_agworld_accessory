import React from 'react';
import PropTypes from 'prop-types';
import { companyForUserID, farmsForCompanyID, fieldsForCompanyID } from './getAgworldData';

function Main(props) {
  const { userId, userName, thumbURL } = props;
  let company;
  let farms;
  let fields;

  company = companyForUserID(userId);
  console.log(`Company name: ${company.attributes.name}`);

  farms = farmsForCompanyID(company.id);
  farms.forEach((farm) => {
    console.log(`Farm description: ${farm.attributes.description}`);
  });

  fields = fieldsForCompanyID(company.id);
  fields.forEach((field) => {
    console.log(`Field description: ${field.attributes.description}`);
  });

  return (
    <div>
      <p>{userName}</p>
      <img src={thumbURL} />
    </div>
  );
}

Main.propTypes = {
  userId: PropTypes.number,
  userName: PropTypes.string,
  thumbURL: PropTypes.string,
};

export default Main;
