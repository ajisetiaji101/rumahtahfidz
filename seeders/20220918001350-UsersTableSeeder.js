"use strict";
const uuid = require("uuid");
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3039",
          name: "Master Admin",
          password: bcrypt.hashSync("admin123", 10),
          email: "masteradmin@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "8b273d68-fe09-422d-a660-af3d8312f883",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb35",
        },
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3040",
          name: "Admin",
          password: bcrypt.hashSync("admin123", 10),
          email: "admin@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "8b273d68-fe09-422d-a660-af3d8312f884",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb37",
        },
        {
          id: "8ce3ed88-34e4-4fb2-baa7-26b6151a43fc",
          name: "Orang Tua",
          password: bcrypt.hashSync("admin123", 10),
          email: "ortu@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "1a2832f9-ceb7-4ff9-930a-af176c88dcc5",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb37",
        },
        {
          id: "7a8fd74d-3fe0-4b7b-8d77-1e8266983ade",
          name: "Donatur",
          password: bcrypt.hashSync("admin123", 10),
          email: "donatur@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "1b864518-299d-469c-b270-4d4b9d5b120f",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb37",
        },
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3041",
          name: "Admin2",
          password: bcrypt.hashSync("admin123", 10),
          email: "admin2@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "8b273d68-fe09-422d-a660-af3d8312f884",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb36",
        },
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3042",
          name: "Orang Tua2",
          password: bcrypt.hashSync("admin123", 10),
          email: "ortu2@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "1a2832f9-ceb7-4ff9-930a-af176c88dcc5",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb36",
        },
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3043",
          name: "Donatur",
          password: bcrypt.hashSync("admin123", 10),
          email: "donatur@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "1b864518-299d-469c-b270-4d4b9d5b120f",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb36",
        },
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3044",
          name: "Adminhikmah1",
          password: bcrypt.hashSync("admin123", 10),
          email: "adminhikmah1@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "8b273d68-fe09-422d-a660-af3d8312f884",
          pondokId: "e3028fca-6d4a-4c80-8e09-14d253dac964",
        },
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3045",
          name: "Orang Tua Hikmah1",
          password: bcrypt.hashSync("admin123", 10),
          email: "ortuhikmah1@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "1a2832f9-ceb7-4ff9-930a-af176c88dcc5",
          pondokId: "e3028fca-6d4a-4c80-8e09-14d253dac964",
        },
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3046",
          name: "Donatur hikmah 1",
          password: bcrypt.hashSync("admin123", 10),
          email: "donaturhikmah1@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "1b864518-299d-469c-b270-4d4b9d5b120f",
          pondokId: "e3028fca-6d4a-4c80-8e09-14d253dac964",
        },
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3047",
          name: "Adminhikmah2",
          password: bcrypt.hashSync("admin123", 10),
          email: "adminhikmah2@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "8b273d68-fe09-422d-a660-af3d8312f884",
          pondokId: "e3028fca-6d4a-4c80-8e09-14d253dac964",
        },
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3048",
          name: "Orang Tua Hikmah2",
          password: bcrypt.hashSync("admin123", 10),
          email: "ortuhikmah2@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "1a2832f9-ceb7-4ff9-930a-af176c88dcc5",
          pondokId: "e3028fca-6d4a-4c80-8e09-14d253dac964",
        },
        {
          id: "1c7258f8-0ac0-4c36-aba2-94ba3f4f3049",
          name: "Donatur hikmah 2",
          password: bcrypt.hashSync("admin123", 10),
          email: "donaturhikmah2@gmail.com",
          address: "Jalan Samiban Bayam Lorong Ayam",
          telephone: "082177751041",
          age: "24",
          datebirth: "06-06-1998",
          photo: "adminprofile.png",
          roleId: "1b864518-299d-469c-b270-4d4b9d5b120f",
          pondokId: "e3028fca-6d4a-4c80-8e09-14d253dac964",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
