import React, { useEffect, useState } from "react";
import { getStoryIds } from "../../services/api";
import StoryItem from "./StoryItem";
import Card from "../UI/Card";
import "./Stories.css";

const Stories = (props) => {
  const NUMBER_OF_STORIES_TO_SHOW = 10;

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds()
      .then((data) => {
        // Shuffle array
        const shuffledStoriesIds = data.sort(() => 0.5 - Math.random());

        // Get sub-array with first N elements after shuffled
        const selectedStoriesIds = shuffledStoriesIds.slice(
          0,
          NUMBER_OF_STORIES_TO_SHOW
        );

        setStoryIds(selectedStoriesIds);
      });
  }, []);

  return (
    <Card className="stories">
      {storyIds.map((storyId) => (
        <StoryItem storyId={storyId} key={storyId} />
      ))}
    </Card>
  );
};

export default Stories;
