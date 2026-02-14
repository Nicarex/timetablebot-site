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
(function(){
  const btn = document.querySelector('.js-toggle-dark-mode');
  if (!btn) return;

  const STORAGE_KEYS = ['just-the-docs-theme', 'jtd-theme', 'theme', 'color-scheme'];
  function normalize(t) { return t === 'dark' ? 'dark' : 'light'; }

  function saveAll(theme){
    try{ STORAGE_KEYS.forEach(k => localStorage.setItem(k, theme)); } catch(e){}
  }

  function applyTheme(theme){
    theme = normalize(theme);
    if (window.jtd && typeof jtd.setTheme === 'function') {
      jtd.setTheme(theme);
    } else {
      document.documentElement.setAttribute('data-color-scheme', theme);
    }
    saveAll(theme);
  }

  function getSaved(){
    if (window.jtd && typeof jtd.getTheme === 'function'){
      const t = jtd.getTheme(); if (t) return normalize(t);
    }
    for (const k of STORAGE_KEYS){
      const v = localStorage.getItem(k); if (v) return normalize(v);
    }
    return null;
  }

  function updateButton(){
    const current = (window.jtd && typeof jtd.getTheme === 'function') ? jtd.getTheme() : document.documentElement.getAttribute('data-color-scheme');
    const theme = normalize(current);
    btn.textContent = theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему';
  }

  document.addEventListener('DOMContentLoaded', function(){
    const saved = getSaved();
    if (saved) applyTheme(saved);
    updateButton();
  });

  btn.addEventListener('click', function(){
    const current = (window.jtd && typeof jtd.getTheme === 'function') ? jtd.getTheme() : document.documentElement.getAttribute('data-color-scheme') || 'light';
    const next = normalize(current) === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    updateButton();
  });
})();
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