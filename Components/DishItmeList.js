import classes from "../styles/DishItemList.module.scss";
import { useState } from "react";
const DishItemList = () => {
  const [dishName, setDishName] = useState("");

  const creat = () => {
    console.log(dishName);
  };

  return (
    <div className={classes["DishItemList"]}>
      <div className={classes["DishItemList__Container"]}>
        <div className={classes["DishItemList__Container-inputs"]}>
          <input
            value={dishName}
            onChange={(e) => setDishName(e.currentTarget.value)}
            placeholder="name"
          ></input>
        </div>

        <div className={classes["DishItemList__Container-button"]}>
          <button onClick={() => creat()}>Click</button>
        </div>
      </div>
    </div>
  );
};

export default DishItemList;
