<p align="center">
  <img src="https://media.discordapp.net/attachments/732211790804680814/769927661438107660/12.png">
  <br>
</p>

Привет, да-да, это снова я с очередным гавна кодом но теперь на **TypeScript**. Данный код поможет вам получать уведомления когда вам донатят на [donationalerts](https://donationalerts.com).


**❤️ Заранее огромное спасибо хочу сказать [MrVaDiM4iK#0232](https://github.com/MrVaDiM4iK/)**

[**Если вы хотите сделать чтоб сообщения отправлялись в Discord канал то, специально для вас я сделал специальную ветку для этого.**](https://github.com/perssBest/donation-monitor/tree/discord)


# ⚒ Настройка конфига:
И так, давайте разберемся по порядку. Открываем файл **config.ts** и видим первые три строчки
```
    "socket": "wss://socket.donationalerts.ru",
    "socket-port": "443",
    "type": "minor",
```
> ИХ НАМ ТРОГАТЬ НЕ НАДО!

<br><br>

Затем идут еще две строчки:
```
    "donation-token": "",
```
**donation-token** - Это токен от вашего аккаунта donationalerts. Как не удивительно нам нужен аккаунт. Если он у вас есть, заходите в него.
Далее заходим в **Настройки** -> **Главные настройки(General settings)**

![](https://cdn.discordapp.com/attachments/732211790804680814/769936491220041748/unknown.png)

Дальше видим **Secret token(Секретный ключ/токен)**, нажимаем на **Show(Показать)** и копируем ключ. Вставляет в конфиг **donation-token**

![](https://cdn.discordapp.com/attachments/732211790804680814/769936711110361088/unknown.png)



# 🔌Установка:
Для начало нам нужно скачать сам **typescript**. Это очень легко, всего лишь одна команда в командную строку. 

### npm
```
$ npm i -g typescript
```

### yarn 
```
$ yarn add typescript --dev
```

- Если у вас не получилось установить **typescript**, скорее всего у вас нету **nodejs**(если вы пытались установить через **npm**)
- [**Скачать nodejs**(кликабельно)](https://nodejs.org/en/)
- [**Скачать yarn**(кликабельно)](https://yarnpkg.com/getting-started/install)

<br><br>

Далее нам необходимо скомпилировать **ts** файлы в **js**. Для этого пропишем команду:
```
$ tsc index.ts // index.ts - название файла
```

<br>

Если во время компиляции у вас возникла ошибка по типу `tsc это неизвестная команда` то вы не установили сам **typescript**. Если у вас возникли сложности с этим заходите в наш [Discord сервер](https://discord.gg/RPb2KXN)

<br><br>


После успешной компиляции у вас появится файлы **index.js**. Запускаем его через **nodejs**
```
$ node index.js
```
Видим что в консоль выводится надпись о том что все работает корректно. Поздравляю! Теперь вы имеете свои алерты на донаты!

Так же не забываем установить нужные библиотеки:
```
npm i 

yarn add
```


<br><br>

# 🤝 Помощь.
- [Discord](https://discord.gg/RPb2KXN)

<br><br>

# 💸 Поддержать проект:
- [**QIWI**](https://qiwi.com/p/380956398566)
- [**donationalerts**(ваш донат отобразится у нас на сервере)](https://www.donationalerts.com/r/reedi)
