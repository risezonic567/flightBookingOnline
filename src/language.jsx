import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      contact: "Contact Us",
      welcome: "Welcome to Rail Booking Hub",
      book: "Book Train Tickets",
    },
  },
  es: {
    translation: {
      home: "Inicio",
      about: "Sobre Nosotros",
      contact: "Contáctanos",
      welcome: "Bienvenido a Rail Booking Hub",
      book: "Reservar boletos de tren",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;