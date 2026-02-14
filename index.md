---
layout: default
title: Timetable Bot
nav_order: 1
---

![Image](images/clock.jpg)

# Timetable Bot
{: .fs-9 .text-center}

## Бот, который помогает с расписанием.
{: .fs-6 .fw-300 }

* Для любой группы и преподавателя
* Автоматическое уведомление об изменениях в расписании
* Поддерживается почта, ВКонтакте, Telegram, Discord и календарь
{: .fs-6 .fw-300 }

<button class="btn js-toggle-dark-mode">Включить темный режим</button>

<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

// Функция для установки текста кнопки
function updateButtonText() {
  if (jtd.getTheme() === 'dark') {
    toggleDarkMode.textContent = 'Включить светлую тему';
  } else {
    toggleDarkMode.textContent = 'Включить темную тему';
  }
}

// Загрузить сохраненную тему при загрузке страницы
window.addEventListener('load', function() {
  const savedTheme = localStorage.getItem('jtd-theme');
  if (savedTheme) {
    jtd.setTheme(savedTheme);
  }
  updateButtonText();
});

// Обработчик клика на кнопку
jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
  } else {
    jtd.setTheme('dark');
  }
  // Сохранить выбор в localStorage
  localStorage.setItem('jtd-theme', jtd.getTheme());
  updateButtonText();
});
</script>

---

## Начало работы

С ботом можно взаимодействовать через несколько платформ.

### Доступные платформы

| Платформа | Описание | Ссылка |
|-----------|---------|--------|
| **Почта** | Получение расписания на электронную почту | [Читать](link-pages/mail) |
| **ВКонтакте** | Личные сообщения и чаты | [Читать](link-pages/vk) |
| **Telegram** | Личные чаты и группы | [Читать](link-pages/telegram) |
| **Discord** | Серверы | [Читать](link-pages/discord) |
| **Календарь** | Google Календарь и Apple Календарь | [Читать](link-pages/calendar) |

---

## Дополнительно

- [Описание вывода расписания](link-pages/outputdescription)
- [О разработчике](link-pages/developer)
- [Помощь и поддержка](link-pages/help)