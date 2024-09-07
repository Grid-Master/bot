export const getTitle = (path:string, title?: string) => {
    
 switch(path) {
    case "/main": return "Главная";
    case "/profile": return "Профиль";
    case "/history": return "История заказов";
    case "/bonuses": return "О бонусах";
    case "/cart": return "Корзина";
    case "/pizzas": return "Пиццы";
    case "/salads": return "Салаты";
    case "/sushi": return "Суши";
    case "/sauces": return "Соусы";
    case "/desserts": return "Десерты";
    default: return "???"
 }
}