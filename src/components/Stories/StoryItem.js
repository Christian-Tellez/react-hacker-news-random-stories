import React, { useEffect, useState } from "react";
import { getStory, getUser } from "../../services/api";
import Card from "../UI/Card";
import "./StoryItem.css";

const StoryItem = ({ storyId }) => {
  const [storyItem, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => {
      setStory(data);
      // return getUser(data.by);
      // }).then((data) => {
      //   // console.log(data);
      //   // console.log(storyItem);
      //   setStory((prevData) => {
      //     return [...prevData, { karma: data.karma }]
      //   });
    });
  }, []);

  function timeConverter(timestamp) {
    var date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  //TODO ORDER THE STORIES BY SCORE AND ADD KARMA VALUE
  return storyItem ? (
    <Card className="story-item">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyOEOIqQRPWXoZZN-jOfPpudGsx7aMfRzlg"
        alt="Avatar"
      />
      <div className="story-item__description">
        <div className="story-item__upper-side">
          <a href={storyItem.url}>
            <h2>{storyItem.title}</h2>
          </a>
        </div>
        <div className="story-item__bottom-side">
          <ul>
            <li>Time: {timeConverter(storyItem.time)}</li>
            <li>User: {storyItem.by}</li>
            <li>Karma: {storyItem.karma}</li>
          </ul>
        </div>
      </div>
      <div className="story-item__score">⬍ {storyItem.score}</div>
    </Card>
  ) : null;
};

export default StoryItem;
