// pages/_app.js
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css'; // Подключаем глобальные стили

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp); // Оборачиваем с локализацией
