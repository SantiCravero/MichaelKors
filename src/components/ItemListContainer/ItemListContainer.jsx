import React from "react";
import Card from "./Card/Card";

function ItemListContainer(props) {
  return (
    <>
      <h2 className="my-3 text-3xl uppercase">{props.greeting}</h2>
      <div className="flex justify-around my-5">
        <div className="grid gap-4 grid-cols-3 justify-items-center w-4/5">
          <Card
            img="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126655-0002.png?imwidth=840"
            title="Yacht-Master"
            price={29999.99}
            amount={1}
            stock={10}
          />
          <Card
            img="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126719blro-0002.png?imwidth=840"
            title="Air-King"
            price={14999.99}
            amount={1}
            stock={15}
          />
          <Card
            img="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m226658-0001.png?imwidth=840"
            title="Air-Most"
            price={6999}
            amount={1}
            stock={20}
          />
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
