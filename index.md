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
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.js-toggle-dark-mode');
  
  function updateButtonText() {
    const isDark = document.documentElement.getAttribute('data-color-scheme') === 'dark';
    button.textContent = isDark ? 'Включить светлую тему' : 'Включить темную тему';
  }
  
  // Загрузить сохраненную тему
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
  }
  updateButtonText();
  
  // Обработка клика
  button.addEventListener('click', function() {
    const currentScheme = document.documentElement.getAttribute('data-color-scheme');
    const newScheme = currentScheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-color-scheme', newScheme);
    localStorage.setItem('theme', newScheme);
    updateButtonText();
  });
});
</script>

---

## Начало работы

С ботом можно взаимодействовать через несколько платформ.

### Доступные платформы

| Платформа | Описание | Ссылка |
|-----------|---------|--------|
| **Почта** | Получение расписания на электронную почту | [Читать](/timetablebot-site/link-pages/mail.html) |
| **ВКонтакте** | Личные сообщения и чаты | [Читать](/timetablebot-site/link-pages/vk.html) |
| **Telegram** | Личные чаты и группы | [Читать](/timetablebot-site/link-pages/telegram.html) |
| **Discord** | Серверы | [Читать](/timetablebot-site/link-pages/discord.html) |
| **Календарь** | Google Календарь и Apple Календарь | [Читать](/timetablebot-site/link-pages/calendar.html) |

---

## Дополнительно

- [Описание вывода расписания](/timetablebot-site/link-pages/outputdescription.html)
- [О разработчике](/timetablebot-site/link-pages/developer.html)
- [Помощь и поддержка](/timetablebot-site/link-pages/help.html)