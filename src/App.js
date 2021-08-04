import logo from './logo.svg';
import './App.css';
import { RecipeNames } from './Components/RecipeName';
import { RecipeIngredients } from './Components/RecipeIngredients';
import { RecipeCooking } from './Components/RecipeCooking';
import React from 'react';

function App() {

  let recipe = {
    qTitle: "Рататуй",
    qImgUrl: "https://img1.russianfood.com/dycontent/images_upl/442/big_441791.jpg",
    qText: "По-летнему яркое, очень вкусное и очень ароматное блюдо из овощей - рататуй.",
    qIngredients: [{ name: "Баклажаны", amount: "600 г", things: "(2 шт.)" },
    { name: "Кабачки ", amount: `600 г`, things: " (2 шт.)" },
    { name: "Помидоры ", amount: " 1 кг", things: "(7 шт.)" },
    { name: "Лук репчатый", amount: " 150 г", things: "(2 шт.)" },
    { name: "Перец болгарский", amount: " 400 г", things: "(4 шт.)" },
    { name: "Чеснок", amount: " ", things: "4 зубчика" },
    { name: "Масло оливковое", amount: " 100 мл", things: "" },
    { name: "Паприка молотая", amount: " 1 ч. ложка", things: "" },
    { name: "Травы прованские сушёные", amount: " по вкусу", things: "" },
    { name: "Зелень петрушки (для подачи)", amount: " по вкусу", things: "" },
    { name: "Соль", amount: " по вкусу", things: "" }
    ],
    qCooking: [{
      id: 1, imgUrl: "https://img1.russianfood.com/dycontent/images_upl/442/big_441792.jpg", text: `Мелко нарезанный лук обжарить до прозрачности на 2 ст. ложках оливкового масла, посолить.
С 3-х помидоров снять кожицу.
У болгарского перца удалить плодоножки и семена.Помидоры и перец нарезать кубиками и добавить к луку.Обжаривать овощи в течение 10-ти минут.Затем измельчить обжаренные овощи блендером до желаемой консистенции.
Готовый соус ровным слоем выложить на дно формы для запекания.`},
    {
      id: 2, imgUrl: "https://img1.russianfood.com/dycontent/images_upl/442/big_441793.jpg", text: `Включить духовку и разогреть до 180°С.
Вымытые и очищенные от кожицы кабачки и баклажаны, а также оставшиеся помидоры нарезать кружочками толщиной 5 мм и выложить сверху на соус, чередуя. Посолить.` },
    { id: 3, imgUrl: "https://img1.russianfood.com/dycontent/images_upl/442/big_441794.jpg", text: `Сверху смазать оливковым маслом, смешанным с измельчённым чесноком, молотой паприкой и прованскими травами.` },
    {
      id: 4, imgUrl: "https://img1.russianfood.com/dycontent/images_upl/442/big_441795.jpg", text: `Накрыть форму фольгой и отправить в духовку, нагретую до 180°С, на 30 минут.
Затем фольгу снять, запекать ещё 20 минут.` },
    {
      id: 5, imgUrl: "https://img1.russianfood.com/dycontent/images_upl/442/big_441796.jpg", text: `Готовый рататуй посыпать мелко нарезанной свежей зеленью.
Приятного аппетита!` }
    ]
  };

  let { qTitle, qImgUrl, qText, qIngredients, qCooking } = recipe;

  return (
    <div className="App">
      <h1>Рецепт блюда</h1>

      <RecipeNames title={qTitle} imgUrl={qImgUrl} text={qText} />
      <RecipeIngredients ingredients={qIngredients.map(item => (<div className="recipeIngred-item-block"><p>{item.name}<span> - </span></p><p> {item.amount} {item.things}</p></div>))} />
      <RecipeCooking cooking={qCooking.map(item => (<div className="recipeCooking-item-block"> <p className="a">{item.id}. </p><img src={item.imgUrl} width="10%"></img><p>{item.text}</p></div>))} />

    </div>
  );
}

export default App;
