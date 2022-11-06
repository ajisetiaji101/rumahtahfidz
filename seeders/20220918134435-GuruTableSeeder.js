"use strict";
const uuid = require("uuid");

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
      "Gurus",
      [
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50460",
          name: "Adriansyah",
          niu: "RTU0001",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb37",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50461",
          name: "Putra Dwa",
          niu: "RTU0002",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb37",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50462",
          name: "Candra Dimuka",
          niu: "RTU0002",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb37",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50463",
          name: "Syailendra",
          niu: "RTU0003",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "96f95aea-ef38-4623-82af-979c383bbb37",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50464",
          name: "Sulaiman",
          niu: "RTU0004",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "5a7bee8c-3ac3-4542-b792-5fe7806077b4",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50465",
          name: "Aliansyah",
          niu: "RTU0005",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "5a7bee8c-3ac3-4542-b792-5fe7806077b4",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50466",
          name: "Batara Dwi",
          niu: "RTU0006",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "5a7bee8c-3ac3-4542-b792-5fe7806077b4",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50467",
          name: "Mahduf Munir",
          niu: "RTU0006",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "5a7bee8c-3ac3-4542-b792-5fe7806077b4",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50468",
          name: "Hola Kasih",
          niu: "RTU0007",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "e3028fca-6d4a-4c80-8e09-14d253dac964",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50480",
          name: "Dwi Asmarani",
          niu: "RTU0008",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "e3028fca-6d4a-4c80-8e09-14d253dac964",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50469",
          name: "Dwi hasanaha",
          niu: "RTU0009",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
          pondokId: "e3028fca-6d4a-4c80-8e09-14d253dac964",
        },
        {
          id: "245d57c6-0076-44ea-9876-dd2d3da50470",
          name: "Yansana alika",
          niu: "RTU0010",
          tempat: "Padang",
          datebirth: "1998-06-06",
          gender: "Pria",
          telephone: "082177751041",
          address:
            "Jl. Rasuna Said No.82, Rimbo Kaluang, Kec. Padang Bar., Kota Padang, Sumatera Barat",
          ayah: "Budi Santoso",
          ibu: "Sumarni",
          mulai_masuk: "2022-08-08",
          mulai_vakum: "2023-10-10",
          photo: "aji.jpg",
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
    await queryInterface.bulkDelete("Gurus", null, {});
  },
};
