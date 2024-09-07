import styled from "styled-components";
import defaultImage from "../../assets/images/defaultImage.jpg"
import { useNavigate } from "react-router-dom";

export interface ICategoryCard {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}

export const CategoryCard = ({ id, name, imageUrl, link }: ICategoryCard) => {
const navigate = useNavigate()

const handleSelectCategory = () => {
  navigate(link)
}

  return (
    <Card onClick={handleSelectCategory}>
      <ImageContainer>
        <Image src={imageUrl || defaultImage} alt={name} />
      </ImageContainer>
      <Title>{name}</Title>
    </Card>
  );
};

const Card = styled.div`
  /* width: 170px; */
`;

const ImageContainer = styled.div`
  height: 170px;
  width: 100%;
`;
const Image = styled.img`
  height: 170px;
`;

const Title = styled.div`
  font-size: 20px;
`;
