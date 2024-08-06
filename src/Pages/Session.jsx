import React, { useEffect, useState } from "react";
import Workshop from "../Components/WorkShop";
import ChangeInLife from "../Components/ChangeinLife";
import meditation from "../assets/meditation.jpg";
import Timeline from "../Components/Timeline";
import Bonus from "../Components/Bonus";
import Testimonials from "../Components/Testimonials";
import CoachProfile from "../Components/CoachProfile";
import FAQ from "../Components/FAQ";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CoachSection from "../Components/CoachSection";
import Modal from "../Components/Modal";
import Form from "../Components/Form";
import Form2 from "../Components/Form2";

function Session() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const filled = localStorage.getItem("Filled");
 


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if(!filled) handleOpenModal();
    }, 1500);
  }, []);

  return (
    <div
      className="flex flex-col bg-cover bg-fixed bg-center min-h-screen"
      style={{ backgroundImage: `url(${meditation})` }}
    >
      <Header onClick={handleOpenModal2} />
      <ChangeInLife onClick={handleOpenModal2} />
      <Timeline />
      <Bonus onClick={handleOpenModal2} />
      <Testimonials />
      <CoachSection onClick={handleOpenModal2} />
      <FAQ onClick={handleOpenModal2}/>
      <Footer onClick={handleOpenModal2} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Form2 onClose={handleCloseModal} />
      </Modal>
      <Modal isOpen={isModalOpen2} onClose={handleCloseModal2}>
        <Form onClose={handleCloseModal2} />
      </Modal>
    </div>
  );
}

export default Session;
