import { motion } from 'motion/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';
import GalleryModal from './GalleryModal';

const Box = styled(motion.li)`
  width: 18rem;
  height: 52vh;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 1.2rem 1.5rem;
  margin-right: 6rem;
  border-radius: 0 40px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.body};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 15rem;
    height: 55vh;
    margin-right: 3rem;
    padding: 1rem;
  }
`;

const CategoryBadge = styled.span`
  align-self: flex-start;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  background-color: ${props => (props.$type === 'hardware' ? '#ff4081' : '#00e676')};
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 0.6rem;
  border: 1px solid rgba(128, 128, 128, 0.3);
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

const GalleryOverlayBtn = styled.button`
  position: absolute;
  bottom: 6px;
  right: 6px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #000;
  }
`;

const Title = styled.h2`
  font-size: calc(0.95em + 0.4vw);
  margin: 0.2rem 0;
`;

const Description = styled.p`
  font-size: calc(0.75em + 0.2vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 0.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${props => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 0.6rem;
  font-size: calc(0.7em + 0.2vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const Link = styled.a`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.4rem calc(1.5rem + 1vw);
  border-radius: 0 0 0 30px;
  font-size: calc(0.85em + 0.4vw);
  cursor: pointer;

  ${Box}:hover & {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${props => props.theme.text};
    }
  }
`;

const Item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
};

const Card = (props) => {
  const { id, name, category, description, tags, image, gallery, demo, github } = props.data;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <Box key={id} variants={Item}>
        {category && <CategoryBadge $type={category}>{category}</CategoryBadge>}

        {image && (
          <ImageContainer onClick={() => gallery && setIsGalleryOpen(true)}>
            <img src={image} alt={name} />
            {gallery && gallery.length > 0 && (
              <GalleryOverlayBtn onClick={() => setIsGalleryOpen(true)}>
                📸 Gallery ({gallery.length})
              </GalleryOverlayBtn>
            )}
          </ImageContainer>
        )}

        <Title>{name}</Title>
        <Description>{description}</Description>

        <Tags>
          {tags.map((t, index) => (
            <Tag key={index}>#{t}</Tag>
          ))}
        </Tags>

        <Footer>
          {category === 'hardware' ? (
            gallery && gallery.length > 0 ? (
              <Link onClick={(e) => { e.preventDefault(); setIsGalleryOpen(true); }}>
                Gallery
              </Link>
            ) : (
              <Link as="span" style={{ cursor: 'default', opacity: 0.85 }}>
                Hardware
              </Link>
            )
          ) : (
            demo && (
              <Link href={demo} target="_blank" rel="noreferrer">
                Visit
              </Link>
            )
          )}

          {category !== 'hardware' && github && (
            <Git href={github} target="_blank" rel="noreferrer">
              <Github width={26} height={26} />
            </Git>
          )}
        </Footer>
      </Box>

      {gallery && (
        <GalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          gallery={gallery}
          projectTitle={name}
        />
      )}
    </>
  );
};

export default Card;
