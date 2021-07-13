# AG's Agworld Accessory

Get data from a weather station for completing Agworld's New Actual Weather Record.

## Basic usage instructions and explanation:

### Click Login

That simulates a login, getting a random user avatar,  
then simulates getting Agworld data for that user, for a company, farms and fields.

Note: The fields data has been supplemented by the addition of a 'weather station' property, except for tomatoes where that was intentionally left missing. Also the farm "Pasture" intentionally has no fields.

### Click Weather

This opens a dialog for getting weather data for a field

### Click a Farm

That opens (or closes) a list of that farm's fields.

### Click a Field

That triggers an API request to www.bom.gov.au to get weather for that field.

_The first time it reads weather data may take a while_ but after that it will be quick. That comes from needing to wake up my proxy on Heroku, as that is on a free plan (see https://devcenter.heroku.com/articles/free-dyno-hours).

========================================================

### To run _locally_ use: yarn start

=> http://localhost:3000/ag_agworld_accessory

### To deploy to _Git Hub pages_, use: npm run deploy

=>
https://andrewgreenhill.github.io/ag_agworld_accessory/

========================================================

### TO DO

1. Do the CSS properly, especially re Responsive Web Design!
1. Make use of a testing framework - probably _Jest_
1. Add internal documentation
1. Add tests to handle bad data & API responses!
1. Add a way for users to view & edit the weather station setting for fields.
