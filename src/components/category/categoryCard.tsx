import React, { useState} from "react";
import styled from "styled-components";
import initialObj from "./index"

interface IBtn {
  clicked: boolean;
}

const CategoryWrapper = styled.button<IBtn>`
  align-items: center;
  background-color: ${(props) => (props.clicked ? "#D4DF9E" : "#E8DAEF")};
  border: none;
  border-radius: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 15vh;
  justify-content: center;
  margin: 20px;
  padding: 10px;
  width: 30vw;
  &hover {
    box-shadow: 10px 5px 27px 3px rgba(0, 0, 0, 0.38);
  }
  .categoryIcon {
    width: 80px;
  }
`;

export interface CategoryCardProps {
  name: string;
  icon: JSX.Element;
  setColour?: any;
  colour?: any;
};

const CategoryCard: React.FC<CategoryCardProps> = (
  props: CategoryCardProps
) => {

  const { icon, name, colour, setColour } = props;

  const handle = () => {
    setColour(() => {
      return {
        ...initialObj,
        [name]: !colour[name],
      };
    });
  };
  return (
    <CategoryWrapper role="button" clicked={colour[name]} onClick={ handle }>
      <div className="categoryIcon">{icon}</div>
      <div>{name}</div>
    </CategoryWrapper>
  );
};

export default CategoryCard;
