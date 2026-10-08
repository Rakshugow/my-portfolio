import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

const ModalContent = styled(motion.div)`
  background: ${(props) => props.theme.body || "#000000"};
  color: ${(props) => props.theme.text || "#ffffff"};
  border: 1px solid ${(props) => props.theme.text || "#ffffff"};
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.2rem 0.6rem;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #050505;
  min-height: 350px;
  max-height: 520px;
  overflow: hidden;
`;

const DisplayImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$left ? "left: 1rem;" : "right: 1rem;")}
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-50%) scale(1.1);
  }
`;

const InfoBar = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(0, 0, 0, 0.3);
`;

const CaptionTitle = styled.h4`
  font-size: 1rem;
  margin: 0 0 0.3rem 0;
  color: ${(props) => props.theme.text || "#fff"};
`;

const CaptionText = styled.p`
  font-size: 0.85rem;
  margin: 0;
  opacity: 0.8;
  line-height: 1.4;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  background: #000;
  overflow-x: auto;
`;

const Thumbnail = styled.img`
  width: 54px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${(props) => (props.$active ? 1 : 0.4)};
  border: 2px solid ${(props) => (props.$active ? props.theme.text || "#fff" : "transparent")};
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const GalleryModal = ({ isOpen, onClose, gallery, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, gallery]);

  if (!isOpen || !gallery || gallery.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const currentItem = gallery[currentIndex];

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContent
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Header>
            <Title>
              {projectTitle} — Photo {currentIndex + 1} of {gallery.length}
            </Title>
            <CloseButton onClick={onClose} title="Close">&times;</CloseButton>
          </Header>

          <ImageContainer>
            <NavButton $left onClick={handlePrev} title="Previous photo">&lsaquo;</NavButton>
            <AnimatePresence mode="wait">
              <DisplayImage
                key={currentIndex}
                src={currentItem.url}
                alt={currentItem.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
            <NavButton onClick={handleNext} title="Next photo">&rsaquo;</NavButton>
          </ImageContainer>

          <InfoBar>
            <CaptionTitle>{currentItem.title}</CaptionTitle>
            <CaptionText>{currentItem.caption}</CaptionText>
          </InfoBar>

          <ThumbnailContainer>
            {gallery.map((img, idx) => (
              <Thumbnail
                key={idx}
                src={img.url}
                alt={img.title}
                $active={idx === currentIndex}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </ThumbnailContainer>
        </ModalContent>
      </Overlay>
    </AnimatePresence>
  );
};

export default GalleryModal;
