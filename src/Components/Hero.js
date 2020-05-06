import React from 'react';
import Modal from 'react-modal';
import placeholder from '.././Assets/placeholder-img.svg';

const customStyles = {
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

const hero = () => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }


  return (
    <div className="Hero-container">
      <div className="Hero-row">
        <div className="Hero-content">
          <h1 className="Hero-title">You want this deal</h1>
          <h2>Smart lot device</h2>
          <p className="mb-24">This great product is consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <button onClick={openModal} className="Btn">See this deal</button>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="Modal-container">
              <div className="Modal-row">
                <div className="Modal-col">
                  <img src={placeholder} width="450" className="Modal-img" />
                </div>
                <div className="Modal-col ml-24">
                  <h2 ref={_subtitle => (subtitle = _subtitle)}>Product Name</h2>
                  <p className="mb-24">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis.</p>
                  <h3 className="mb-12">$89.99</h3>
                  <button className="Btn">Get deal</button>
                </div>
              </div>
              <div className="Modal-close" onClick={closeModal}></div>
            </div>
          </Modal>

        </div>
        <div className="Hero-controls">
          <span className="Hero-control-active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default hero;
