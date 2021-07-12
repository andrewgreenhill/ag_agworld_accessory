# AG's Agworld Accessory

Get data from a weather station for completing Agworld's New Actual Weather Record.

## Basic usage instructions and explanation:

### Click Login

That simulates a login, getting a random user avatar,  
then simulates getting Agworld data for that user, for a company, farms and fields.

Note: The data for fields has been supplemented for a property for weather station, except for tomatoes where that was intentionally left missing. Also the farm "Pasture" intentionally has no fields.

### Click Weather

This opens a dialog for getting weather data for a field

### Click a Farm

That opens (or closes) a list of that farm's fields.

### Click a Field

That triggers an API request to www.bom.gov.au to get weather for that field.

========================================================

To run _locally_ use: yarn start  
=> http://localhost:3000/ag_agworld_accessory

To deploy to _Git Hub pages_, use: npm run deploy  
=>
https://andrewgreenhill.github.io/ag_agworld_accessory/
