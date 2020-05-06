import React from 'react';
import Modal from 'react-modal';
import placeholder from '.././Assets/placeholder-img.svg';

import f1 from '../Assets/f1.png';
import f2 from '../Assets/f2.png';
import f3 from '../Assets/f3.png';
import f4 from '../Assets/f4.png';
import f5 from '../Assets/f5.png';
import f6 from '../Assets/f6.png';

const featuredModalStyles = {
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

const featured = () => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openFeaturedModal() {
    setIsOpen(true);
  }

  function afterFeaturedOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeFeaturedModal(){
    setIsOpen(false);
  }

  return (
    <div className="Featured-container">
      <div className="Featured-row">
        <ul className="Featured-items">
          <button className="Featured-btn" onClick={openFeaturedModal}>
            <li>
              <img className="Featured-img" src={f1} />
              <p>Google Pixel</p>
            </li>
          </button>
          <button className="Featured-btn" onClick={openFeaturedModal}>
            <li>
              <img className="Featured-img" src={f2} />
              <p>Google Home Mini</p>
            </li>
          </button>
          <button className="Featured-btn" onClick={openFeaturedModal}>
            <li>
              <img className="Featured-img" src={f3} />
              <p>IoT Device</p>
            </li>
          </button>
          <button className="Featured-btn" onClick={openFeaturedModal}>
            <li>
              <img className="Featured-img" src={f4} />
              <p>Google Home</p>
            </li>
          </button>
          <button className="Featured-btn" onClick={openFeaturedModal}>
            <li>
              <img className="Featured-img" src={f5} />
              <p>Google Home Max</p>
            </li>
          </button>
          <button className="Featured-btn" onClick={openFeaturedModal}>
            <li>
              <img className="Featured-img" src={f6} />
              <p>Day Dream View</p>
            </li>
          </button>
        </ul>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterFeaturedOpenModal}
        onRequestClose={closeFeaturedModal}
        style={featuredModalStyles}
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
          <div className="Modal-close" onClick={closeFeaturedModal}></div>
        </div>
      </Modal>
      
    </div>
  );
}

export default featured;
