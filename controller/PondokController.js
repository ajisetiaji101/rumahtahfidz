const { Pondok } = require("../models");
const uuid = require("uuid");

class PondokController {
  static async getPondoks(req, res) {
    try {
      const newData = await Pondok.findAll({
        include: [
          {
            all: true,
          },
        ],
      });

      res.status(200).json({ data: newData });
    } catch (error) {
      return res
        .status(400)
        .json({ data: "Data tidak ditemukan mengenai pondok" });
    }
  }

  static async getPondok(req, res) {
    try {
      const { id } = req.params;

      const newData = await Pondok.findOne({
        where: { id },
        include: [{ all: true }],
      });

      res.status(200).json({ data: newData });
    } catch (error) {
      return res.status(400).json({ data: "Data tidak ditemukan" });
    }
  }

  static async getPondokRumahTahfidz(req, res) {
    try {
      const { id } = req.params;

      const newData = await Pondok.findAll({
        where: { masterpondokId: id },
        include: [{ all: true }],
        order: [["createdAt", "ASC"]],
      });

      res.status(200).json({ data: newData });
    } catch (error) {
      return res.status(400).json({ data: "Data tidak ditemukan" });
    }
  }

  static async getPondokRumahTahfidzbyid(req, res) {
    try {
      const { id } = req.params;

      const newData = await Pondok.findAll({
        where: { id },
        include: [{ all: true }],
      });

      res.status(200).json({ data: newData });
    } catch (error) {
      return res.status(400).json({ data: "Data tidak ditemukan" });
    }
  }

  static async createPondok(req, res) {
    try {
      const { files, fields } = req.fileAttrb;
      const payload = {
        id: uuid.v4(),
        name: fields[0].value,
        nit: fields[1].value,
        address: fields[2].value,
        telephone: fields[3].value,
        chief: fields[4].value,
        masterpondokId: fields[5].value,
        logo: files[0].file.newFilename,
        photo: files[1].file.newFilename,
      };

      const newData = await Pondok.create(payload);
      res.status(200).json({ data: newData });
    } catch (error) {
      return res.status(404).json({ data: error.message });
    }
  }

  static async updatePondok(req, res) {
    const { files, fields } = req.fileAttrb;

    if (
      files.length === 2 &&
      files[0].fieldName === "logo" &&
      files[1].fieldName === "photo"
    ) {
      try {
        const { id } = req.params;

        const payload = {
          name: fields[0].value,
          nit: fields[1].value,
          address: fields[2].value,
          telephone: fields[3].value,
          chief: fields[4].value,
          masterpondokId: fields[5].value,
          logo: files[0].file.newFilename,
          photo: files[1].file.newFilename,
        };

        const newData = await Pondok.update(payload, {
          where: { id },
          returning: true,
        });
        res.status(200).json({ data: newData });
      } catch (error) {
        return res.status(404).json({ data: "Pastikan Semua data benar" });
      }
    } else if (files[0].fieldName === "photo") {
      try {
        const { id } = req.params;

        const payload = {
          name: fields[0].value,
          nit: fields[1].value,
          address: fields[2].value,
          telephone: fields[3].value,
          chief: fields[4].value,
          masterpondokId: fields[5].value,
          photo: files[0].file.newFilename,
        };

        const newData = await Pondok.update(payload, {
          where: { id },
          returning: true,
        });
        res.status(200).json({ data: newData });
      } catch (error) {
        return res.status(404).json({ data: "Pastikan Semua data benar" });
      }
    } else if (files[0].fieldName === "logo") {
      try {
        const { id } = req.params;

        const payload = {
          name: fields[0].value,
          nit: fields[1].value,
          address: fields[2].value,
          telephone: fields[3].value,
          chief: fields[4].value,
          masterpondokId: fields[5].value,
          logo: files[0].file.newFilename,
        };

        const newData = await Pondok.update(payload, {
          where: { id },
          returning: true,
        });
        res.status(200).json({ data: newData });
      } catch (error) {
        return res.status(404).json({ data: "Pastikan Semua data benar" });
      }
    }
  }

  static async updatePondokNoFile(req, res) {
    try {
      const { id } = req.params;
      const { name, nit, address, telephone, chief, masterpondokId } = req.body;

      const payload = {
        name,
        nit,
        address,
        telephone,
        chief,
        masterpondokId,
      };

      const newData = await Pondok.update(payload, {
        where: { id },
        returning: true,
      });
      res.status(200).json({ data: newData });
    } catch (error) {
      return res.status(404).json({ data: "Pastikan Semua data benar terisi" });
    }
  }

  static async deletePondok(req, res) {
    try {
      const deleteData = await Pondok.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json("delete data" + deleteData + "successfully");
    } catch (error) {
      return res.status(404).json({ data: error.message });
    }
  }
}

module.exports = PondokController;
