const {app} = require("./app")
const { databaseConnection } = require('./database/dbConnection');
databaseConnection().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port:', process.env.PORT);
  });
});