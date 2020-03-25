import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";

const width = "100%",
  height = "320px";
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
  @media (max-width: 840px) {
    height: 400px;
  }
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
  flex-flow: column wrap !important;
  padding: 0 4.5em;
  align-items: center;
  color: #0a0e33;
  @media (max-width: 840px) {
    height: 400px;
    padding: 0.3em;
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
    font-size: 0.7em;
  }
`;
const TestifierMsg = styled.div`
  text-align: center;
  font-style: italic;
  margin-top: 1em;
  @media (max-width: 840px) {
    font-size: 0.7;
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
    <Carousel defaultWait={7000}>
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
              src="https://res.cloudinary.com/john-pels/image/upload/v1585119611/Chris.jpg"
              alt="testimonial"
              style={{ width: "5em", height: "5em", borderRadius: "50%" }}
            />
          </TestifierImg>
          <TestifierName>Chris Blakely</TestifierName>
          <TestifierMsg>
            John is an incredibly talented frontend developer who can turn
            designs into pixel-perfect code. He is able understand complex
            problems quickly and write well designed code to solve these
            problems. John is a natural leader who can communicate well with his
            teammates and clients.
          </TestifierMsg>
        </TestimonialCard>
      </Slide>
      <Slide right>
        <TestimonialCard>
          <TestifierImg>
            <img
              src="https://res.cloudinary.com/john-pels/image/upload/v1584945486/darling.jpg"
              alt="testimonial"
              style={{ width: "5em", height: "5em", borderRadius: "50%" }}
            />
          </TestifierImg>
          <TestifierName>Oyekanmi Tofunmi</TestifierName>
          <TestifierMsg>
            Believe me! Mr John is that excellent software developer you have
            been looking to get on your team but it only takes you hiring him
            for that project/job for you to know how blessed you are for such a
            rare gift as him.
          </TestifierMsg>
        </TestimonialCard>
      </Slide>
      <Slide right>
        <TestimonialCard>
          <TestifierImg>
            <img
              src="https://res.cloudinary.com/john-pels/image/upload/v1584949054/sadiq.jpg"
              alt="testimonial"
              style={{ width: "5em", height: "5em", borderRadius: "50%" }}
            />
          </TestifierImg>
          <TestifierName>Adeyemi Sadiq</TestifierName>
          <TestifierMsg>
            I’ve known and mentored John for the past five years. I’ve always
            been impressed with his ability to handle projects while at the
            university. He is always motivated to handle software tasks and his
            expertise in how he handles the colossal task and breaks it down to
            chunks.John would be an excellent addition to your team. Please feel
            free to contact me by Email
            <strong>
              (sadiq.adeyemi@gplustechsolutions.com) or (+2347062605399)
            </strong>
          </TestifierMsg>
        </TestimonialCard>
      </Slide>

      <Slide right>
        <TestimonialCard>
          <TestifierImg>
            <img
              src="https://res.cloudinary.com/john-pels/image/upload/v1585049073/Chidi.jpg"
              alt="testimonial"
              style={{ width: "5em", height: "5em", borderRadius: "50%" }}
            />
          </TestifierImg>
          <TestifierName>Chidi Okoye</TestifierName>
          <TestifierMsg>
            John's ability to come up with simple, yet efficient solutions to
            complex problems is definitely something I admire so much about him.
            His great dedication to learning and self-improvement is also very
            commendable. He is a really good team player, and has huge impact on
            both team efficiency and morale. Definitely a pleasure to work with
            him.
          </TestifierMsg>
        </TestimonialCard>
      </Slide>
    </Carousel>
  );
};
