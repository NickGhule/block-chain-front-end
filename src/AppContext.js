import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const temp_data = [
  {
    id: 1,
    docName: "one",
    date: "10/05/2022",
    details: [
      { attr1: "value" },
      { attr2: "value" },
      { attr3: "value" },
      { attr4: "value" },
    ],
    shared_with: ["username1", "username2", "username2"],
  },
  {
    id: 2,
    docName: "two",
    date: "10/05/2022",
    details: [
      { attr1: "value" },
      { attr2: "value" },
      { attr3: "value" },
      { attr4: "value" },
    ],
    shared_with: ["username1", "username2", "username2"],
  },
  {
    id: 3,
    docName: "three",
    date: "10/05/2022",
    details: [
      { attr1: "value" },
      { attr2: "value" },
      { attr3: "value" },
      { attr4: "value" },
    ],
    shared_with: ["username1", "username2", "username2"],
  },
];

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState(temp_data);

  const [selectedDocId, setSelectedDocId] = useState(1);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        selectedDocId,
        setSelectedDocId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useData = () => {
  const { data, setData, selectedDocId, setSelectedDocId } =
    useContext(AppContext);
  return {
    data,
    setData,
    selectedDocId,
    setSelectedDocId,
  };
};
