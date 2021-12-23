import React, {useState} from 'react';
import {getActiveModules, addActiveModule, deleteActiveModule} from './api';
import {card, moduleData} from './types';
import * as uuid from 'uuid';

const Modules: React.FC = () => {
  const [cards, setCards] = useState<Array<card>>([]);
  const [id, setId] = useState<string>("");
  const [moduleTitle, setModuleTitle] = useState<string>('');
  const [moduleDescription, setModuleDescription] = useState<string>('');
  const [cardTitle, setCardTitle] = useState<string>('');
  const [termin, setTermin] = useState<string>('');
  const [file, setFile] = useState<any>();
  const [base64, setBase64] = useState<string | ArrayBuffer | null>();
  const [imgUrl, setImgUrl] = useState<string>('shorturl.at/clF16');

  const getActiveModulesBtn = () => {
    getActiveModules().then(data => {
      console.log('active modules data: ', data);
    });
  };
  const addCardHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const id = uuid.v4();
    const newCardItem: card = {
      title: cardTitle,
      image: imgUrl,
      termin,
      id,
    };
    setCards([...cards, newCardItem]);
  };
  const deleteModuleHandler = (e: any) => {
    e.preventDefault();
    deleteActiveModule(id).then((data) => {
      console.log(data)
    })
    console.log('delete!');
  };
  const changeFileInputHandler = (e: any) => {
    const targetFile = e.target.files[0];
    if (targetFile) {
      const reader = new FileReader();
      reader.readAsDataURL(targetFile);
      reader.onload = e => {
        if (e && e.target) {
          const baseString: string | ArrayBuffer | null = e.target.result;
          setBase64(baseString);
        }
      };
    }
    //after save in firebase and update imgUrl
  };
  const addModuleHandler = (e: any) => {
    e.preventDefault();
    const id = uuid.v4();
    const newModule: moduleData = {
      name: moduleTitle,
      description: moduleDescription,
      id,
      cards,
    };
    addActiveModule(newModule).then(data => {
      console.log('data: ', data);
    });
  };

  return (
    <>
      <div className="delete-module">
        <form onSubmit={deleteModuleHandler} action="">
          <input
            onChange={e => setId(e.target.value)}
            value={id}
            type="text"
            placeholder="enter module id..."
          />
          <button type="submit">Delete module</button>
        </form>
      </div>
      <button onClick={getActiveModulesBtn} className="getModulesBtn">
        get active modules(for authenticated users)
      </button>
      <div className="add-active-module">
        <form onSubmit={addModuleHandler} action="">
          <h3>Add new module</h3>
          <input
            value={moduleTitle}
            onChange={e => setModuleTitle(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="name"
          />
          <textarea
            value={moduleDescription}
            onChange={e => setModuleDescription(e.target.value)}
            name="description"
            id="description"
            placeholder="description"
          />
          <div className="cards">
            <h3>Cards</h3>
            <form
              onSubmit={addCardHandler}
              action=""
              className="cards-add-form"
            >
              <input
                type="text"
                placeholder="title"
                id="title"
                name="title"
                value={cardTitle}
                onChange={e => setCardTitle(e.target.value)}
              />
              <textarea
                placeholder="termin"
                id="termin"
                name="termin"
                value={termin}
                onChange={e => setTermin(e.target.value)}
              />
              <input
                type="file"
                name="file"
                id="file"
                value={file}
                onChange={changeFileInputHandler}
              />
              <button type="submit" id="addCard" className="cards-add-btn">
                add card
              </button>
            </form>
            <div className="cards-block">
              {cards?.map((el, index) => {
                return (
                  <div key={`cards_key_${index}`} className="cards-card">
                    <img src={el.image} alt="" width="100" />
                    <p>{el.title}</p>
                    <p>{el.termin}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <button id="addModule" className="add-module-btn">
            add module
          </button>
        </form>
      </div>
    </>
  );
};

export {Modules};
