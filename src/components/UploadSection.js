import React, { useState } from "react";
import "./UploadSection.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import { TextField, Button } from "@material-ui/core";
import { storage, db } from "../firebase";
import firebase from "firebase";

const UploadSection = ({ posts, setPosts }) => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [progressBar, setProgressBar] = useState(0);

  const addImage = (e) => {
    if (!image) return;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress Function
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressBar(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // Post image to database
            const image = {
              imageUrl: url,
              id: Math.random() * 1000,
              description: description,
              isFavorite: false,
            };
            const imagesArray = [...posts, image];
            setPosts(imagesArray);
            console.log(imagesArray);
            localStorage.setItem("images", JSON.stringify(imagesArray));
            db.collection("images").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              description: description,
              imageUrl: url,
              isFavorite: false,
            });
            setProgressBar(0);
            setDescription("");
            setImage(null);
          });
      }
    );
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="upload">
      <label htmlFor="image-input" className="upload-image">
        <i className="fas fa-plus-circle upload-icon"></i>
        <small style={{ marginBottom: "10px" }} className="upload-text">
          {image && image.name}
        </small>
        <small className="upload-text">Upload a photo</small>
      </label>
      <input id="image-input" type="file" onChange={handleImageChange} />
      <TextField
        id="standard-textarea"
        label="Add a description"
        placeholder="Add a description"
        multiline
        className="description-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        className="addBtn"
        color="primary"
        onClick={addImage}
      >
        Add
      </Button>

      <LinearProgress
        variant="determinate"
        value={progressBar}
        className="progress-bar"
      />
    </div>
  );
};

export default UploadSection;
