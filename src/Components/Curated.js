import React from 'react';
import Modal from 'react-modal';
import placeholder from '.././Assets/placeholder-img.svg';

import c1 from '../Assets/c1.png';
import c2 from '../Assets/c2.png';

const curatedModalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '65%',
    border                : 'none'
  }
};

Modal.setAppElement('#root')

const curated = () => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openCuratedModal() {
    setIsOpen(true);
  }

  function afterCuratedOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeCuratedModal(){
    setIsOpen(false);
  }

  return (
    <div className="Curated-container">
      <div className="Curated-row">
        <div className="Curated-column">
          <img className="Curated-img" src={c1} alt="Beats by Dre" />
          <div className="Curated-text">
            <h3>Beats By Dre</h3>
            <button onClick={openCuratedModal} className="Btn-outline">See Deal</button>
          </div>
        </div>
        <div className="Curated-column">
          <img className="Curated-img" src={c2} alt="Apple iPad Pro" />
          <div className="Curated-text">
            <h3>iPad Pro</h3>
            <button onClick={openCuratedModal} className="Btn-outline">See Deal</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterCuratedOpenModal}
        onRequestClose={closeCuratedModal}
        style={curatedModalStyles}
        contentLabel="Featured Product Modal"
        closeTimeoutMS={500}
      >
        <div className="Modal-container">
          <div className="Modal-row">
            <div className="Modal-col">
              <img src={placeholder} width="450" className="Modal-img" />
            </div>
            <div className="Modal-col ml-24">
              <h2 ref={_subtitle => (subtitle = _subtitle)}>Featured Product Name</h2>
              <p className="mb-24">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis.</p>
              <h3 className="mb-12">$19.99  <strike className="grey">$39.99</strike></h3>
              <button className="Btn">Get deal</button>
            </div>
          </div>
          <div className="Modal-close" onClick={closeCuratedModal}></div>
        </div>
      </Modal>
    </div>
  );
}

export default curated;
