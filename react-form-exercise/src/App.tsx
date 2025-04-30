import "./App.css";
import { ChangeEvent, useState } from "react";

type FormData = {
  firstname: string;
  lastname: string;
  age: string;
  favoriteFoods: string[];
};

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    age: "",
    favoriteFoods: [],
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedFavoriteFoods = checked
        ? [...prevState.favoriteFoods, value]
        : prevState.favoriteFoods.filter((food) => food !== value);
      return {
        ...prevState,
        favoriteFoods: updatedFavoriteFoods,
      };
    });
  };

  const handleMessage = () => {
    console.log(formData);
    if (formData.favoriteFoods.length === 0) {
      setMessage(
        `Hello ${formData.firstname} ${formData.lastname}, you are ${formData.age} years old and you have not selected any favorite foods`
      );
      return;
    }
    setMessage(
      `Hello ${formData.firstname} ${formData.lastname}, you are ${
        formData.age
      } years old and your favorite foods are ${formData.favoriteFoods.join(
        ", "
      )}`
    );
  };

  const handleClear = () => {
    setFormData({
      firstname: "",
      lastname: "",
      age: "",
      favoriteFoods: [],
    });
    setMessage("");
  };
  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              value="Vegetables"
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              value="Dessert"
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              value="Pork"
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleMessage}>Display User</button>
      <button onClick={handleClear}>Clear</button>

      <div className="output">{message}</div>
    </div>
  );
};

export default App;
