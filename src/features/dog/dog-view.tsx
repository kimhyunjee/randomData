import { useMemo, useState } from "react";

import { faker } from "@faker-js/faker";
import { DogInfo } from "./dog-info";

export function DogView() {
  const [count, setCount] = useState(0);
  // 배열로 10개 담기 useMemo사용해서
  // 버튼을 누르면 useMemo의 값이 변경되도록
  // 변경된 값 출력되도록

  const dogs = useMemo(() => {
    let arr = [] as {
      name: string;
      breed: string;
      age: number;
    }[];
    for (let i = 0; i < 10; i++) {
      arr.push({
        name: faker.person.firstName(),
        breed: faker.animal.dog(),
        age: Math.floor(Math.random() * 10),
      });
    }
    return arr;
  }, [count]);

  const handleClickChange = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={handleClickChange}>변경</button>

        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "100vw" }}>
          {dogs.map((dog) => {
            return <DogInfo name={dog.name} age={dog.age} breed={dog.breed} />;
          })}
        </div>
      </div>
    </>
  );
}
