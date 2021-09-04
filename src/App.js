import React, { useState } from "react";
import "./App.css";
import data from "./sampleData";
import AddNewCard from "./components/addNewCard";
import Header from "./components/Header";
import Card from "./components/Card";
import { getDefaultNormalizer } from "@testing-library/dom";

function App() {
  const [userList, setUserList] = useState(data.users);

  function minusButton(user) {
    user.followers--;
    setUserList([...userList]);
  }

  function plusButton(user) {
    user.followers++;
    setUserList([...userList]);
  }

  function getData(name, followers, difference) {
    userList.push({ name: name, followers: followers, difference: difference });
    setUserList([...userList]);
  }

  return (
    <div className="root">
      <Header users={userList} />
      {userList.map((card) => (
        <Card
          key={card.name}
          user={card}
          icon={data.icon}
          plusButton={plusButton}
          minusButton={minusButton}
        />
      ))}

      <AddNewCard getUser={getData} />
    </div>
  );
}

export default App;
