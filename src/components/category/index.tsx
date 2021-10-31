import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SportsLogo } from "../../assets/sports.svg";
import { ReactComponent as BooksLogo } from "../../assets/books.svg";
import { ReactComponent as ComputerLogo } from "../../assets/computer.svg";
import { ReactComponent as KnowledgeLogo } from "../../assets/knowledge.svg";
import { ReactComponent as MythologyLogo } from "../../assets/mythology.svg";
import { ReactComponent as GamesLogo } from "../../assets/boardGames.svg";
import CategoryCard from "./categoryCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 80vw;
`;
export interface Colour {
  [key: string]: any;
}

export const initialObj = {
  "Board Games": false,
  "Books": false,
  "Computers": false,
  "General Knowledge": false,
  "Mythology": false,
  "Sports": false,
};

const iconArray: [string, JSX.Element][] = [
  ["Sports", <SportsLogo />],
  ["Books", <BooksLogo />],
  ["Computer", <ComputerLogo />],
  ["Board Games", <GamesLogo />],
  ["General Knowledge", <KnowledgeLogo />],
  ["Mythology", <MythologyLogo />],
];

const CategoryPage: React.FC = () => {
    
  const [colour, setColour] = useState<Colour>(initialObj);
  

  return (
    <Container className="categoryContainer">
      {iconArray.map((logo: [string, JSX.Element]) => (
        <CategoryCard
          key={logo[0]}
          name={logo[0]}
          icon={logo[1]}
          setColour={ setColour }
          colour={ colour }
        />
      ))}
    </Container>
  );
};

export default CategoryPage;
