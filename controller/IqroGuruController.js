const { Iqroguru, sequelize, Pondok } = require("../models");
const uuid = require("uuid");
const { QueryTypes, json } = require("sequelize");

class IqroGuruController {
  static async getIqros(req, res) {
    const { id } = req.params;
    const data = await Iqroguru.findAll({
      where: { guruId: id },
      order: [["id", "DESC"]],
      include: [{ all: true }],
    });
    res.status(200).json({ data });
  }
  catch(error) {
    return res.status(404).json({ data: error.message });
  }

  static async listIqroAwal(req, res) {
    try {
      const data = await sequelize.query(
        "SELECT gurus.name as namaguru, test.* FROM (SELECT * FROM iqrogurus ORDER BY iqrogurus.id DESC LIMIT 18446744073709551615)AS test JOIN gurus ON gurus.id=test.guruId GROUP BY guruId;",
        {
          model: Iqroguru,
          type: QueryTypes.SELECT,
          mapToModel: true,
          nest: true,
          raw: true,
        }
      );
      res.status(200).json({ data });
    } catch (error) {
      return res.status(404).json({ data: error.message });
    }
  }

  static async getIqro(req, res) {
    try {
      const { id } = req.params;
      const data = await Iqroguru.findOne({
        where: { id },
        include: [{ all: true, include: { model: Pondok } }],
      });
      res.status(200).json({ data });
    } catch (error) {
      return res.status(404).json({ data: error.message });
    }
  }

  static async createIqros(req, res) {
    try {
      const { name, halaman, tgl_selesai, ket, guruId } = req.body;

      const payload = {
        name,
        halaman,
        tgl_selesai,
        guruId,
        ket,
      };

      const newData = await Iqroguru.create(payload);
      res.status(200).json({ data: newData });
    } catch (error) {
      return res.status(404).json({ data: error.message });
    }
  }

  static async updateIqros(req, res) {
    try {
      const { name, halaman, tgl_selesai, ket } = req.body;

      const payload = {
        name,
        halaman,
        tgl_selesai,
        ket,
      };

      const newData = await Iqroguru.update(payload, {
        returning: true,
        where: { id: req.params.id },
      });
      res.status(200).json({ data: newData });
    } catch (error) {
      return res.status(404).json({ data: "Pastikan Semua data benar" });
    }
  }

  static async deleteIqros(req, res) {
    try {
      const deleteData = await Iqroguru.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json("delete data" + deleteData + "successfully");
    } catch (error) {
      return res.status(404).json({ data: "pastikan id data benar" });
    }
  }
}

module.exports = IqroGuruController;
