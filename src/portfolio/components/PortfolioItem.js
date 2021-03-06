import React from "react";

import classes from "./PortfolioItem.module.css";
import Modal from "../../shared/components/UIElements/Modal/Modal";
import PortfolioItemDetail from "./PortfolioItemDetail";
import { useModal } from "../../shared/hooks/modal-hook";

const PortfolioItem = (props) => {
  const [showModal, openModalHandler, closeModalHandler] = useModal();

  const onShowModalHandler = () => {
    openModalHandler();
  };

  const onCloseModalHandler = () => {
    closeModalHandler();
  };

  const renderButton = () => {
    return (
      <React.Fragment>
        <Modal
          show={showModal}
          onCancel={onCloseModalHandler}
          header={props.name}
        >
          <PortfolioItemDetail {...props} onCloseDetail={onCloseModalHandler} />
        </Modal>
        <button
          className={`${classes.PortfolioActionButton} ${classes.FaEyes}`}
          type="button"
          onClick={onShowModalHandler}
        >
          <i className="fas fa-eye"></i>
        </button>
        {props.hasLink ? (
          <a
            href={props.link}
            className={`${classes.PortfolioActionButton} ${classes.FaLink}`}
            type="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link"></i>
          </a>
        ) : (
          <button
            className={`${classes.PortfolioActionButton} ${classes.FaLink}`}
            type="button"
          >
            <i className="fas fa-link"></i>
          </button>
        )}
      </React.Fragment>
    );
  };

  return (
    <div
      className={`${classes.PortfolioItem} ${classes.PortfolioItemBox} ${
        props.isHero ? classes.PortfolioHero : classes.PortfolioSideBox
      }`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={classes.PortfolioCTAGroup}>
        <h5>{props.name}</h5>
        <div>{renderButton()}</div>
      </div>
    </div>
  );
};

export default PortfolioItem;
