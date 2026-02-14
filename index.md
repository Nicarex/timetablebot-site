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
// Более надежный скрипт с проверкой на загрузку JTD
(function() {
  // Функция инициализации кнопки
  function initThemeToggle() {
    const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');
    if (!toggleDarkMode || typeof jtd === 'undefined') {
      // Если JTD еще не загружен, попробуем позже
      setTimeout(initThemeToggle, 100);
      return;
    }

    // Функция для установки текста кнопки
    function updateButtonText() {
      const currentTheme = jtd.getTheme();
      if (currentTheme === 'dark') {
        toggleDarkMode.textContent = 'Включить светлую тему';
      } else {
        toggleDarkMode.textContent = 'Включить темную тему';
      }
    }

    // Загрузить сохраненную тему при загрузке страницы
    const savedTheme = localStorage.getItem('jtd-theme');
    if (savedTheme && savedTheme !== jtd.getTheme()) {
      jtd.setTheme(savedTheme);
    }
    updateButtonText();

    // Обработчик клика на кнопку
    toggleDarkMode.addEventListener('click', function(){
      const currentTheme = jtd.getTheme();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      jtd.setTheme(newTheme);
      
      // Сохранить выбор в localStorage
      localStorage.setItem('jtd-theme', newTheme);
      updateButtonText();
    });
  }

  // Инициализировать при готовности DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
</script>

---

## Начало работы

С ботом можно взаимодействовать через несколько платформ.

### Доступные платформы

| Платформа | Описание | Ссылка |
|-----------|---------|--------|
| **Почта** | Получение расписания на электронную почту | [Читать](/timetablebot-site/link-pages/mail/) |
| **ВКонтакте** | Личные сообщения и чаты | [Читать](/timetablebot-site/link-pages/vk/) |
| **Telegram** | Личные чаты и группы | [Читать](/timetablebot-site/link-pages/telegram/) |
| **Discord** | Серверы | [Читать](/timetablebot-site/link-pages/discord/) |
| **Календарь** | Google Календарь и Apple Календарь | [Читать](/timetablebot-site/link-pages/calendar/) |

---

## Дополнительно

- [Описание вывода расписания](/timetablebot-site/link-pages/outputdescription/)
- [О разработчике](/timetablebot-site/link-pages/developer/)
- [Помощь и поддержка](/timetablebot-site/link-pages/help/)