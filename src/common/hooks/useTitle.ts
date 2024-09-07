import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useTitle = () => {
  const [title, setTitle] = useState<string>("???");
  const { pathname } = useLocation();

  const path = "/" + pathname.split("/").at(-1)

  useEffect(() => {
    switch (path) {
      case "/main":
        setTitle("Главная");
        break;
      case "/profile":
        setTitle("Профиль");
        break;
      case "/history":
        setTitle("История заказов");
        break;
      case "/bonuses":
        setTitle("О бонусах");
        break;
      case "/cart":
        setTitle("Корзина");
        break;
      case "/pizzas":
        setTitle("Пиццы");
        break;
      case "/salads":
        setTitle("Салаты");
        break;
      case "/sushi":
        setTitle("Суши");
        break;
      case "/sauces":
        setTitle("Соусы");
        break;
      case "/desserts":
        setTitle("Десерты");
        break;
    }
  }, [pathname]);

  return { title };
};
