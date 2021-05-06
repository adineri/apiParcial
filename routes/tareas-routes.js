const express = require("express");
const router = express.Router();
const tareasController = require("../controllers/tareas-controller");

router.get("/", tareasController.getAllTareas)
router.post("/", tareasController.createTarea);
router.put("/:id", tareasController.updateTarea);
router.delete("/:id", tareasController.deleteTarea);


module.exports = router;