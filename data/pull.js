import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1-WUhojQ0W3FAdoVFMdC2ag1uib9LhT0sUQE5s_7bSl0",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
     <>
      <h1>data from google sheets</h1>
      <ul>
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>URL -- {item.URL}</li>
            <li>Email - {item.email}</li>
            <li>Token - {item.token}</li>
            <br />
          </Fragment>
        ))}
      </ul>
    </>
  );
}