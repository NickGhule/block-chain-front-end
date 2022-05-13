import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { useData } from "../AppContext";
import { parseData } from "./functions";
import Stepper from "./Stepper";

function DocumentHistory(props) {
  const { setData, data, selectedDocId, setSelectedDocId } = useData();
  const [historyData, setHistoryData] = useState(false);
  const [history, setHistory] = useState([
    "20 sep 2020",
    "20 sep 2020",
    "20 sep 2020",
  ]);
  const fetchData = async () => {
    var raw = "";

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      "http://127.0.0.1:5000/view/nickghule/test/history",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const fetched_history = [];
        // console.log(JSON.stringify(result));
        // const newData = parseData(result);
        // setSelectedDocId(newData[0].id);
        // setData(newData);
        result.forEach((history) => {
          fetched_history.push(history.timestamp.$date);
        });
        setHistory(fetched_history);

        const new_data = [];
        result.forEach((history) => {
          console.log(history);
          new_data.push({
            id: history["_id"]["$oid"],
            docName: history["documentName"],
            date: history["timestamp"]["$date"],
            userName: history["userName"],
            details: history["documentData"],
            shared_with: ["username1", "username2", "username2"],
          });
        });
        setHistoryData(new_data);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fetchData();
  }, [selectedDocId]);

  const handleStepClick = (index) => {
    const date = history[index];
    const currentHistory = historyData.find((history) => history.date == date);
    console.log(currentHistory);

    // // const data_to_change = data.find((data) => data.id == selectedDocId);
    // // const target_index = data.indexOf(data_to_change);
    // // console.log(target_index);
    // // data[target_index] = currentHistory;
    // // console.log(data);
    // console.log(data);
    const data_to_change = data.find((data) => data.id == selectedDocId);
    console.log(data_to_change);
    const target_index = data.indexOf(data_to_change);
    if (target_index === -1) return;
    setData((data) => {
      const temp_data = [...data];
      temp_data[target_index] = currentHistory;
      console.log(temp_data);
      setSelectedDocId(currentHistory.id);
      return temp_data;
    });
  };

  return (
    <DocumentHistoryStyle>
      <div className="history-title">Edit History</div>
      <Stepper steps={history} handleStepClick={handleStepClick} />
    </DocumentHistoryStyle>
  );
}

export default DocumentHistory;

const DocumentHistoryStyle = styledComponents.section`
    padding: 1rem 2rem;
    .history-title{
      margin-bottom: 1rem ;
      padding-bottom: 0.5rem ;
      font-size: 1.2rem;
      font-weight: 600;
      border-bottom: 1px solid rgba(0,0,0,0.3);
    }

`;
