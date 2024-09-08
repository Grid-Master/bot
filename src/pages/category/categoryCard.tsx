import { Button } from "antd";
import styled from "styled-components";
import defaultImage from "../../assets/images/defaultImage.jpg";
import { useAppDispatch } from "../../common/hooks/reduxHooks";
import { addInCart } from "../../store/cart/cartSlice";

export interface ICategoryCard {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export const CategoryCard = ({ id, name, imageUrl, price }: ICategoryCard) => {
  const dispatch = useAppDispatch();

  const handleAddItemInCart = () => {
    dispatch(addInCart({ id, name, imageUrl, price }));
  };

  return (
    <Card>
      <Title>{name}</Title>
      <ImageContainer>
        <Image src={imageUrl || defaultImage} alt={name} />
      </ImageContainer>
      <PriceContainer>
        <Price>{price} Р.</Price>
        <StyledButton onClick={handleAddItemInCart}>Хочу!</StyledButton>
      </PriceContainer>
    </Card>
  );
};

const Card = styled.div``;

const ImageContainer = styled.div`
  height: 170px;
  width: 100%;
  margin-bottom: 8px;
`;
const Image = styled.img`
  height: 170px;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const StyledButton = styled(Button)`
  padding: 2px 8px;
  border-radius: none;
  background-color: #ff6969;
  color: white;
`;
