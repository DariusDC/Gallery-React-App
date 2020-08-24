import React, { useState } from "react";
import "./Photo.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Photo = ({ post, addOrRemoveFav }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isfav, setIsfav] = useState(post.isFavorite);
  return (
    <div>
      {" "}
      <div className="photo">
        <button
          onClick={() => {
            addOrRemoveFav(post.imageUrl);
            setIsfav(!isfav);
          }}
        >
          {isfav ? `Remove from favorties` : `Add to favorites ⭐`}
        </button>
        <img
          onClick={() => setOpen(true)}
          src={post.imageUrl}
          alt="img"
          className="photo-image"
        />
        <p className="description">{post.description}</p>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className="modal-image">
              <img
                src={post.imageUrl}
                alt="modalimage"
                className="modal-image"
              />
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Photo;
