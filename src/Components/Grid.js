import React from 'react';
import Modal from 'react-modal';
import placeholder from '.././Assets/placeholder-img.svg';

import g1 from '../Assets/g1.png';
import g2 from '../Assets/g2.png';
import g3 from '../Assets/g3.png';
import g4 from '../Assets/g4.png';
import g5 from '../Assets/g5.png';
import g6 from '../Assets/g6.png';
import g7 from '../Assets/g7.png';
import g8 from '../Assets/g8.png';

const gridModalStyles = {
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

const grid = () => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openGridModal() {
    setIsOpen(true);
  }

  function afterGridOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeGridModal(){
    setIsOpen(false);
  }

  return (
    <div className="Grid-container">
      <div className="Grid-section-text mb-48">
        <h1>Deals on deal, yo. Bust down.</h1>
      </div>

      <div className="Grid-row">
        <button onClick={openGridModal} className="Grid-item">
          <img className="mb-12" src={g1} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$18.00</p>
        </button>
        <button onClick={openGridModal} className="Grid-item">
          <img className="mb-12" src={g2} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$28.00</p>
        </button>
        <button onClick={openGridModal} className="Grid-item">
          <img className="mb-12" src={g3} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$38.00</p>
        </button>
        <button onClick={openGridModal} className="Grid-item">
          <img className="mb-12" src={g4} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$48.00</p>
        </button>
      </div>

      <div className="mb-12"></div>

      <div className="Grid-row">
        <button onClick={openGridModal} className="Grid-item">
          <img className="mb-12" src={g5} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$58.00</p>
        </button>
        <button onClick={openGridModal} className="Grid-item">
          <img className="mb-12" src={g6} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$68.00</p>
        </button>
        <button onClick={openGridModal} className="Grid-item">
          <img className="mb-12" src={g7} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$78.00</p>
        </button>
        <button onClick={openGridModal} className="Grid-item">
          <img className="mb-12" src={g8} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$88.00</p>
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterGridOpenModal}
        onRequestClose={closeGridModal}
        style={gridModalStyles}
        contentLabel="Featured Product Modal"
        closeTimeoutMS={500}
      >
        <div className="Modal-container">
          <div className="Modal-row">
            <div className="Modal-col">
              <img src={placeholder} width="450" className="Modal-img" />
            </div>
            <div className="Modal-col ml-24">
              <h2 ref={_subtitle => (subtitle = _subtitle)}>Grid Product Name</h2>
              <p className="mb-24">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis.</p>
              <h3 className="mb-12">$19.99  <strike className="grey">$39.99</strike></h3>
              <button className="Btn">Get deal</button>
            </div>
          </div>
          <div className="Modal-close" onClick={closeGridModal}></div>
        </div>
      </Modal>
    </div>
  );
}

export default grid;
