const { IqroGuruController } = require("../controller");
const route = require("express").Router();

route.post("/", IqroGuruController.createIqros);
route.get("/listawal", IqroGuruController.listIqroAwal);
route.get("/list/:id", IqroGuruController.getIqros);
route.get("/:id", IqroGuruController.getIqro);
route.put("/:id", IqroGuruController.updateIqros);
route.delete("/:id", IqroGuruController.deleteIqros);

module.exports = route;