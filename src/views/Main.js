import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import MenuBar from '../components/MenuBar';
import WeatherPage from './WeatherPage';

function Main(props) {
  const { title, userName, thumbURL, company, farms, fields } = props;
  const companyName = company.attributes.name;
  const [currentPage, setCurrentPage] = useState('');
  let pageElement = <></>;

  useEffect(() => console.log(userName), [userName]);

  if (currentPage === 'weather') {
    pageElement = (
      <WeatherPage farms={farms} fields={fields} setCurrentPage={setCurrentPage} companyName={companyName} />
    );
  } else {
    pageElement = <></>;
  }

  return (
    <div>
      <TopBar title={title} companyName={companyName} thumbURL={thumbURL} />
      <MenuBar setCurrentPage={setCurrentPage} />
      <p className="systemNotificationText">I have paused operating this app because of a Heroku cost increase :^(</p>
      {pageElement}
    </div>
  );
}

Main.propTypes = {
  title: PropTypes.string,
  userName: PropTypes.string,
  thumbURL: PropTypes.string,
  company: PropTypes.any,
  farms: PropTypes.any,
  fields: PropTypes.any,
};

export default Main;
