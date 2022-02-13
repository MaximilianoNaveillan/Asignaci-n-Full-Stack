import React, { useEffect, useState } from "react";
import List from "./components/List";
import Main from "./components/Main";

import axios from "axios";
import "./css/App.css";

function App() {
  const [data, setData] = useState({});
  const [listTags, setListTags] = useState({});
  const [search, setSearch] = useState("");

  const backendData = async () => {
    await axios
      .get("/api")
      .then((response) => {
        setData(response.data);
        setListTags(response.data.list);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectItem = async (cause) => {
    setData({});
    const url = cause === "all cause" ? "/api" : `/api/bycause/cause${cause}`;
    console.log(url);
    await axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchData(e.target.value);
  };

  const searchData = (text) => {
    var list = data.list.filter((tag) => {
      if (tag.name.toString().toLowerCase().includes(text.toLowerCase())) {
        return tag;
      }
    });
    setListTags(list);
  };

  const favoryteItem = (_id) => {
    const newListTags = [...listTags];
    const index = listTags.map((x) => x._id).indexOf(_id);
    const item = newListTags[index];
    const newTag = {
      name: item.name,
      favorite: !item.favorite,
      _id: item._id,
    };
    newListTags.splice(index, 1, newTag);
    setListTags(newListTags);
  };

  useEffect(() => {
    backendData();
  }, []);

  return (
    <div className="App">
      <div className="box">
        <div className="row header">
          <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
          <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
          <header>Visor Causas de muerte EEUU</header>
          <div className="drawer">
            <div className="search">
              <label className="pure-material-textfield-filled ">
                <input
                  value={search}
                  placeholder="BUSCADOR"
                  onChange={handleChange}
                />
                <span></span>
              </label>
            </div>
            <nav>
              <List
                selectItem={selectItem}
                favoryteItem={favoryteItem}
                list={listTags}
              />
            </nav>
          </div>
        </div>
        <div className="row content">
          <div className="menu"></div>

          <div className="main">
            {typeof data.rows !== "undefined" ? (
              <Main data={data} />
            ) : (
              <div className="container2">
                <div className="lds-ellipsis">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row footer">
          <b>Asignación Full Stack</b> - Maximiliano Nanveillan
        </div>
      </div>
    </div>
  );
}

export default App;
