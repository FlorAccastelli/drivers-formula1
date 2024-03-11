const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3002;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
// conn.sync({ force: true }).then(() => {
  // server.listen(PORT, () => {
  //   console.log(`Server listening on port ${PORT}`);
  // })
// }).catch(error => console.error(error))
