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

function Session() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      handleOpenModal();
    }, 1500);
  }, []);

  return (
    <div
      className="flex flex-col bg-cover bg-fixed bg-center min-h-screen"
      style={{ backgroundImage: `url(${meditation})` }}
    >
      <Header onClick={handleOpenModal} />
      <ChangeInLife onClick={handleOpenModal} />
      <Timeline />
      <Bonus onClick={handleOpenModal} />
      <Testimonials />
      <CoachSection onClick={handleOpenModal} />
      <FAQ onClick={handleOpenModal}/>
      <Footer onClick={handleOpenModal} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Form onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}

export default Session;
