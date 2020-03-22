import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";

const width = "100%",
  height = "300px";
const Container = styled.div`
  display: flex;
  flex-flow: column;
  box-shadow: 0px 0px 3px 0px rgb(145, 143, 143);
  padding: 1.5em;
  position: relative;
  overflow: hidden;
  width: ${width};
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0.4em;
  width: 10%;
  font-size: 1.5em;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.right
      ? css`
          left: 95%;
        `
      : css`
          left: -5%;
        `}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
  color: #0a0e33;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
  color: #0a0e33;
`;

const TestimonialCard = styled.section`
  display: flex;
  flex-flow: column wrap;
  padding: 0 4.5em;
  align-items: center;
  color: #0a0e33;
  @media (max-width: 840px) {
    height: 450px;
    padding: 0.7em;
    margin: 0;
  }
`;
const TestifierImg = styled.div`
  display: flex;
  justify-content: center;
  width: 5em;
  height: 5em;
  border-radius: 50%;
`;
const TestifierName = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-top: 0.5em;
  @media (max-width: 840px) {
    font-size: 0.9em;
  }
`;
const TestifierMsg = styled.p`
  text-align: center;
  font-style: italic;
  margin-top: 1em;
  @media (max-width: 840px) {
    font-size: 0.9em;
    margin-top: 0.5em;
  }
`;

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>
        {"<"}
      </Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>
        {">"}
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

export const CarouselSlider = () => {
  return (
    <Carousel>
      <Slide right>
        <TestimonialCard>
          <TestifierImg>
            <img
              src="https://res.cloudinary.com/john-pels/image/upload/v1566911465/devlogo2.png"
              alt="testimonial"
              style={{ width: "5em", height: "3em" }}
            />
          </TestifierImg>
          <TestifierName>Akintunde Sultan</TestifierName>
          <TestifierMsg>
            John is a very fast leaner, he has achieved in few months what
            others would in 2 years. His consistency is amazing and how we was
            able to keep growing his skill while still being a part of a
            startup’s core team is wonderful. He’s great with leading and
            awesome with collaborating.
          </TestifierMsg>
        </TestimonialCard>
      </Slide>
      <Slide right>
        <TestimonialCard>
          <TestifierImg>
            <img
              src="https://res.cloudinary.com/john-pels/image/upload/v1566911465/devlogo2.png"
              alt="testimonial"
              style={{ width: "5em", height: "3em" }}
            />
          </TestifierImg>
          <TestifierName>Akintunde Sultan</TestifierName>
          <TestifierMsg>
            John is a very fast leaner, he has achieved in few months what
            others would in 2 years. His consistency is amazing and how we was
            able to keep growing his skill while still being a part of a
            startup’s core team is wonderful. He’s great with leading and
            awesome with collaborating.
          </TestifierMsg>
        </TestimonialCard>
      </Slide>
      <Slide right>
        <TestimonialCard>
          <TestifierImg>
            <img
              src="https://res.cloudinary.com/john-pels/image/upload/v1566911465/devlogo2.png"
              alt="testimonial"
              style={{ width: "5em", height: "3em" }}
            />
          </TestifierImg>
          <TestifierName>Akintunde Sultan</TestifierName>
          <TestifierMsg>
            John is a very fast leaner, he has achieved in few months what
            others would in 2 years. His consistency is amazing and how we was
            able to keep growing his skill while still being a part of a
            startup’s core team is wonderful. He’s great with leading and
            awesome with collaborating.
          </TestifierMsg>
        </TestimonialCard>
      </Slide>
    </Carousel>
  );
};
