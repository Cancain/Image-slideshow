import React from "react";
import "./App.css";
import ImageSlideshow from "./Component/ImageSlideshow/ImageSlideshow";
import { images } from "./TestImages/Images";

function App() {
  return (
    <div className="App">
      <ImageSlideshow
        size="500px"
        ratio="0.75"
        color="yellow"
        images={images}
      />
    </div>
  );
}

export default App;
