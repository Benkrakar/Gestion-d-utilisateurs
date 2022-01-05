const app = require('./app')
const PORT = process.env.PORT || 3000;
model.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`app listning on port : ${PORT}`);
  });
});
