import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ReviewItem from "../components/ReviewItem";

const ReviewsSection = () => {
  return (
    <ReviewsSectionStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eveniet repudiandae mollitia quibusdam."
            }
          />
          <ReviewItem
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eveniet repudiandae mollitia quibusdam? dos repudiandae mollitia."
            }
          />
        </div>
      </InnerLayout>
    </ReviewsSectionStyled>
  );
};

const ReviewsSectionStyled = styled.div`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width: 650px) {
      flex-direction: column;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ReviewsSection;
