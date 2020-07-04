<!DOCTYPE html><html lang="ru"><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <title>Визитка</title>  <link rel="stylesheet" href="css/font-awesome.min.css">  <link rel="stylesheet" href="css/swiper.min.css">  <link rel="stylesheet" href="css/style.css">  <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon/favicon-32x32.png">  <script src="js/jquery-3.5.1.min.js"></script>  <script src="js/mask.min.js"></script>  <script src="js/script.js"></script></head><body>  <header class="block__background-color--gray">  <div class="container">    <div class="header">      <button class="header__burger">      </button>      <nav class="header__nav">        <ul class="header__menu">          <li class="header__menu-item">            <a href="#serviceBlock" class="header__menu-link">              Услуги            </a>          </li>          <li class="header__menu-item">            <a href="#myPortfolio" class="header__menu-link">              Портфолио            </a>          </li>          <li class="header__menu-item">            <a href="#myPrice" class="header__menu-link">              Стоимость            </a>          </li>        </ul>      </nav>      <a class="header__phone-link" href="tel:+79214891850">        +7 (921) 489-18-50      </a>      <button class="header__button header__button-big borderButton">        Заказать звонок      </button>      <a class="header__button header__button-small" href="#"></a>    </div>  </div></header>  <main>    <section class="about-my">  <div class="about-my__background block__background-color--gray">    <code class="fly-text fly-text__elem-1--position fly-text__elem-1--size">#</code>    <code class="fly-text fly-text__elem-2--position fly-text__elem-2--size">&#123;&nbsp;&#125;</code>    <code class="fly-text fly-text__elem-3--position fly-text__elem-3--size">&lt;div&gt;</code>    <code class="fly-text fly-text__elem-4--position fly-text__elem-4--size">&lt;div&gt;</code>    <code class="fly-text fly-text__elem-5--position fly-text__elem-5--size">&lt;/&gt;</code>    <code class="fly-text fly-text__elem-6--position fly-text__elem-6--size">&lt;/&gt;</code>    <canvas class="about-my__svg-element" id='example'>Обновите браузер</canvas>    <picture><source srcset="./img/photo_small2.webp" type="image/webp"><img class="about-my__my-foto" src="./img/photo_small2.png" alt=""></picture>  </div>  <div class="container">    <div class="about-my__content">      <h1 class="title-1 about-my__title">        Алексей Сухарев      </h1>      <p class="about-my__text">        Frontend-разработчик и <br class="about-my__text--break">веб-верстальщик      </p>      <button class="in-modal__center about-my__button mainButton">        Узнать больше      </button>    </div>  </div></section>    <section class="service" id="serviceBlock">  <div class="container">    <div class="service__content">      <h2 class="title-2 service__title">        Что я делаю      </h2>      <ul class="service__container">        <li class="service-inner-container">          <picture><source srcset="./img/service1.webp" type="image/webp"><img class="service-inner-container__image" src="./img/service1.png" alt=""></picture>          <p class="service-inner-container__text">            Вёрстка лендинг–страниц<br>и сайтов любой сложности          </p>        </li>        <li class="service-inner-container">          <picture><source srcset="./img/service2.webp" type="image/webp"><img class="service-inner-container__image" src="./img/service2.png" alt=""></picture>          <p class="service-inner-container__text">            Адаптивная вёрстка под все<br>браузеры и устройства          </p>        </li>        <li class="service-inner-container">          <picture><source srcset="./img/service3.webp" type="image/webp"><img class="service-inner-container__image" src="./img/service3.png" alt=""></picture>          <p class="service-inner-container__text">            Frontend–разработка<br>и программирование          </p>        </li>        <li class="service-inner-container">          <picture><source srcset="./img/service4.webp" type="image/webp"><img class="service-inner-container__image" src="./img/service4.png" alt=""></picture>          <p class="service-inner-container__text">            Исправление и доработка<br>существующей вёрстки          </p>        </li>      </ul>      <button class="in-modal__center service__button mainButton">        Узнать стоимость      </button>    </div>  </div></section>    <section class="portfolio" id="myPortfolio">  <div class="container portfolio__content">    <h2 class="portfolio__title title-2">      Примеры моих работ    </h2>    <div class="swiper-button-container">      <div class="swiper-button-prev"></div>      <div class="swiper-button-next"></div>    </div>    <div class="swiper-container">      <div class="swiper-wrapper">        <div class="swiper-slide portfolio__csrd">          <picture><source srcset="./img/work_1.webp" type="image/webp"><img class="portfolio__card-image" src="./img/work_1.png" alt=""></picture>          <p class="portfolio__card-text">Сайт психолога Веры&nbsp;Антоновой</p>        </div>        <div class="swiper-slide">          <picture><source srcset="./img/work_2.webp" type="image/webp"><img class="portfolio__card-image" src="./img/work_2.png" alt=""></picture>          <p class="portfolio__card-text">Сайт магазина детской одеждый</p>        </div>        <div class="swiper-slide">          <picture><source srcset="./img/work_3.webp" type="image/webp"><img class="portfolio__card-image" src="./img/work_3.png" alt=""></picture>          <p class="portfolio__card-text">Сайт магазина «Рыболов»</p>        </div>      </div>      <div class="swiper-pagination"></div>    </div>    <button class="in-modal__center portfolio__button mainButton">      Заказать проект    </button>  </div></section>    <section class="price" id="myPrice">  <div class="container price__content">    <h2 class="title-3 price__title">      Адаптивная вёрстка под все устройства и&nbsp;браузеры от 1000 рублей всего за&nbsp;4&nbsp;часа.*    </h2>    <p class="price__footnote">      * Срок и стоимость могут отличаться от заявленных и рассчитываются индивидуально, в&nbsp;зависимости      от сложности задач.    </p>  </div>  <div class="price__elem--white">    <code class="price__elem price__elem-1">&#123;&nbsp;&#125;</code>    <code class="price__elem price__elem-2">&#123;&nbsp;&#125;</code>    <code class="price__elem price__elem-3">&lt;div&gt;</code>    <code class="price__elem price__elem-4">#</code>    <code class="price__elem price__elem-5">&lt;/&gt;</code>  </div></section>  </main>  <footer class="footer">  <div class="container">    <div class="footer__content">      <div class="footer__col1">        <ul class="footer__nav">          <li class="footer__nav-item">            <a class="footer__nav-link" href="#serviceBlock">Услуги</a>          </li>          <li class="footer__nav-item">            <a class="footer__nav-link" href="#myPortfolio">Портфолио</a>          </li>          <li class="footer__nav-item">            <a class="footer__nav-link" href="#myPrice">Стоимость</a>          </li>        </ul>      </div>      <div class="footer__col2">        <a class="footer__contacts" href="tel:+79214891850">          <span class="footer__fa fa fa-phone"></span>          +7 (921) 489-18-50        </a>        <a class="footer__contacts" href="mailto:leshiys@inbox.ru">          <span class="footer__fa fa fa-envelope"></span>          leshiys@inbox.ru        </a>      </div>      <div class="footer__col3">        <button class="in-modal__center borderButton footer__button">Заказать звонок</button>        <ul class="footer__nets">          <li class="footer__nets-item">            <a target="_blank" class="footer__nets-link vk" href="https://vk.com/alexeysukharev_kotlas">            </a>          </li>          <li class="footer__nets-item">            <a target="_blank" class="footer__nets-link fb" href="https://www.facebook.com/">            </a>          </li>          <li class="footer__nets-item">            <a target="_blank" class="footer__nets-link tw" href="https://twitter.com">            </a>          </li>          <li class="footer__nets-item">            <a target="_blank" class="footer__nets-link inst" href="https://www.instagram.com">            </a>          </li>        </ul>      </div>    </div>  </div>  <div class="copyright">    &copy; Алексей Сухарев, 2019 – 2020  </div></footer>  <div class="modal__close modal modal--left modal__background">  <div class="modal__window modal__window--left">    <div class="modal__close-button modal__close-button--left">      <span class="modal__close-button--line-1"></span>      <span class="modal__close-button--line-2"></span>    </div>    <ul class="modal__menu">      <li class="modal__menu-item">        <a class="modal__menu-link" href="tel:+79214891850">          +7 (921) 489-18-50        </a>      </li>      <li class="modal__menu-item">        <a class="modal__close modal__menu-link" href="#serviceBlock">          Услуги        </a>      </li>      <li class="modal__menu-item">        <a class="modal__close modal__menu-link" href="#myPortfolio">          Портфолио        </a>      </li>      <li class="modal__menu-item">        <a class="modal__close modal__menu-link" href="#myPrice">          Стоимость        </a>      </li>      <li> </li>    </ul>  </div></div><div class="modal__close modal modal--right modal__background">  <div class="modal__window modal__window--right">    <div class="modal__close-button modal__close-button--right">      <span class="modal__close-button--line-1"></span>      <span class="modal__close-button--line-2"></span>    </div>    <form class="form" method="POST">      <ul class="modal__menu">        <li class="modal__menu-item">          Заказать звонок        </li>        <li class="modal__menu-item">          <input name="name" class="modal__menu-input" required type="text" placeholder="Имя">        </li>        <li class="modal__menu-item">          <input name="phone" class="phone modal__menu-input" required type="text" placeholder="Телефон"            pattern="[\+]7[\(][0-9]{3}[\)][\s][0-9]{3}[-][0-9]{2}[-][0-9]{2}">        </li>        <li class="modal__menu-item">          <input class="modal__menu-button mainButton" type="submit" value="Заказать звонок">        </li>        <li class="modal__menu-item">          <p class="modal__personal-data">Нажав на кнопку Заказать звонок я даю согласие на обработку моих персональных            данных.          </p>        </li>      </ul>    </form>  </div></div><div class="modal__close modal modal--center modal__background">  <div class="modal__window modal__window--center">    <div class="modal__close-button modal__close-button--right">      <span class="modal__close-button--line-1"></span>      <span class="modal__close-button--line-2"></span>    </div>    <form class="form" method="POST">      <ul class="modal__menu">        <li class="modal__menu-item">          Заказать звонок        </li>        <li class="modal__menu-item">          <input name="name" class="modal__menu-input" required type="text" placeholder="Имя">        </li>        <li class="modal__menu-item">          <input name="phone" class="phone modal__menu-input" required type="text" placeholder="Телефон"            pattern="[\+]7[\(][0-9]{3}[\)][\s][0-9]{3}[-][0-9]{2}[-][0-9]{2}">        </li>        <li class="modal__menu-item">          <input name="mail" class="modal__menu-input" required type="email" placeholder="E-mail">        </li>        <li class="modal__menu-item">          <input class="mainButton modal__menu-button" type="submit" value="Заказать звонок">        </li>        <li class="modal__menu-item">          <p class="modal__personal-data">Нажав на кнопку Заказать звонок я даю согласие на обработку моих персональных            данных.          </p>        </li>      </ul>    </form>  </div></div><div class="modal__close modal modal__sent modal__background">  <div class="modal__window modal__window--send">    <ul class="modal__menu">      <li class="modal__menu-item">        <p class="modal__close modal__menu-link">          Сообщение отправлено        </p>      </li>    </ul>    <button class="modal--send-button modal__close mainButton">      OK    </button>  </div></div><div class="modal__close modal modal__error modal__background">  <div class="modal__window modal__window--send">    <ul class="modal__menu">      <li class="modal__menu-item">        <p class="modal__close modal__menu-link">          Ошибка отправки        </p>      </li>    </ul>    <button class="modal--send-button modal__close mainButton">      OK    </button>  </div></div>  <script src="js/swiper.min.js"></script></body></html>