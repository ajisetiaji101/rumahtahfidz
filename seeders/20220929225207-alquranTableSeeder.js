"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   surah: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Alquransantris",
      [
        {
          id: 1,
          juz: "12",
          surah: "Al maidah",
          halaman: "14",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008a8",
        },
        {
          id: 2,
          juz: "2",
          surah: "Al Baqarah",
          halaman: "20",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008a8",
        },
        {
          id: 3,
          juz: "20",
          surah: "An Nasr",
          halaman: "20",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008a8",
        },
        {
          id: 4,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008a9",
        },
        {
          id: 5,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008a9",
        },
        {
          id: 6,
          juz: "20",
          surah: "An Nasr",
          halaman: "20",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b1",
        },
        {
          id: 7,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b1",
        },
        {
          id: 8,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b1",
        },
        {
          id: 9,
          juz: "20",
          surah: "An Nasr",
          halaman: "20",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b3",
        },
        {
          id: 10,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b3",
        },
        {
          id: 11,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b3",
        },
        {
          id: 12,
          juz: "20",
          surah: "An Nasr",
          halaman: "20",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b4",
        },
        {
          id: 13,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b4",
        },
        {
          id: 14,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b4",
        },
        {
          id: 15,
          juz: "20",
          surah: "An Nasr",
          halaman: "20",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b6",
        },
        {
          id: 16,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b6",
        },
        {
          id: 17,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b6",
        },
        {
          id: 18,
          juz: "20",
          surah: "An Nasr",
          halaman: "20",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b7",
        },
        {
          id: 19,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b7",
        },
        {
          id: 20,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008b7",
        },
        {
          id: 21,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c3",
        },
        {
          id: 22,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c3",
        },
        {
          id: 23,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c4",
        },
        {
          id: 24,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c4",
        },
        {
          id: 25,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c7",
        },
        {
          id: 26,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c7",
        },
        {
          id: 27,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c8",
        },
        {
          id: 28,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c8",
        },
        {
          id: 29,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c11",
        },
        {
          id: 30,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c11",
        },
        {
          id: 31,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c15",
        },
        {
          id: 32,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c15",
        },
        {
          id: 33,
          juz: "18",
          surah: "An Naba",
          halaman: "22",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c14",
        },
        {
          id: 34,
          juz: "23",
          surah: "Al-Kafirun",
          halaman: "90",
          tgl_selesai: "06-06-1998",
          ket: "Tuntas lanjut",
          santriId: "4aeb9b02-0ceb-4a52-9d55-38ad38f008c14",
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
    await queryInterface.bulkDelete("Alquransantris", null, {});
  },
};
