"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Валера",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "музыкалка",
          user_id: 1,
        },
        {
          title: "кайтик",
          user_id: 1,
        },
        {
          title:'Бобрсы',
          user_id:1,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Сколько нот в октаве?",
          answer: "Восемь",
          topic_id: 1,
        },
        {
          question: "Как называется скорость музыки?",
          answer: "Темп",
          topic_id: 1,
        },
        {
          question: "Что обозначает знак '♯'?",
          answer: "Диез",
          topic_id: 1,
        },
        {
          question: "Из чего сделана скрипка?",
          answer: "Дерево",
          topic_id: 1,
        },
        {
          question: "Кто написал 'Лунную сонату'?",
          answer: "Бетховен",
          topic_id: 1,
        },
        {
          question: "Как называется вращение кайта вокруг своей оси?",
          answer: "Кайтлуп",
          topic_id: 2,
        },
        {
          question: "Сколько строп у кайтборда?",
          answer: "Четыре",
          topic_id: 2,
        },
        {
          question: "Как называется форма доски для кайтинга?",
          answer: "Твинтип",
          topic_id: 2,
        },
        {
          question: "Что такое чикен-луп?",
          answer: "Петля",
          topic_id: 2,
        },
        {
          question: "Какая форма у кайта для фрирайда?",
          answer: "Дельта",
          topic_id: 2,
        },
        {
          question: "Почему бобры так любят строить плотины?",
          answer: "потому",
          topic_id: 3,
        },
        {
          question: "Что делает бобр, когда ему скучно?",
          answer: "кодит",
          topic_id: 3,
        },
        {
          question: "Как зовут самого умного бобра в мире?",
          answer: "Юра",
          topic_id: 3,
        },
        {
          question:
            "Какой самый популярный спорт среди молодых поколений бобров сегодня ?",
          answer: "анжумания",
          topic_id: 3,
        },
        {
          question:
            "Что главное для счастливой жизни одного взрослого бobra ?",
          answer: "офер",
          topic_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Topics", null, {});
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
