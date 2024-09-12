import styled from "styled-components";
import { useAppSelector } from "../../common/hooks/reduxHooks";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../store/cart/cartSelector";
import { EmptyCart } from "./emptyCart";
import { CartItem } from "./cartItem";
import { Button, Checkbox, Divider, Form, Input, Radio, Select } from "antd";
import { Group } from "antd/es/radio";

const cityOptions = [
  { value: "Tiraspol", label: "Тирасполь" },
  { value: "Dnestrovsk", label: "Днестровск" },
  { value: "Bender", label: "Бендеры" },
];

export const Cart = () => {
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  console.log(items);

  return items.length ? (
    <Container>
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <Divider style={{ margin: "0 6px" }} />
      <Promocode>
        <Input placeholder="Промокод" />
      </Promocode>
      <BonusesWrapper>
        <BonuseFormItem label="Списать бонусные баллы?">
          <Checkbox style={{ width: "20px" }} />
        </BonuseFormItem>
        <BonuseButton>Доступно 0 бонусов</BonuseButton>
      </BonusesWrapper>

      <FormBlockContainer>
        <Form.Item
          label="Способ доставки"
          style={{ marginBottom: 0 }}
          // name="radioOption"
          // rules={[
          //   { required: true, message: "Пожалуйста, выберите одну из опций" },
          // ]}
        >
          <Radio.Group>
            <Radio value="option1">Курьером</Radio>
            <Radio value="option2">Самовывоз</Radio>
          </Radio.Group>
        </Form.Item>
      </FormBlockContainer>

      <FormBlockContainer>
        <CityFormItem label="Город доставки*">
          <Select options={cityOptions} />
        </CityFormItem>
      </FormBlockContainer>

      <FormBlockContainer style={{ justifyContent: "space-between" }}>
        <div>Общая стоимость заказа</div>
        <div>{totalPrice} Р.</div>
      </FormBlockContainer>

      <OrderButtom>Оформить заказ</OrderButtom>
    </Container>
  ) : (
    <EmptyCart />
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
`;

const Promocode = styled.div`
  background-color: #ecf8f8;
  padding: 12px;
  border-radius: 6px;
`;

const BonusesWrapper = styled.div`
  background-color: #ecf8f8;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BonuseButton = styled(Button)`
  width: 180px;
`;

const BonuseFormItem = styled(Form.Item)`
  margin-bottom: 10px;
  width: 100%;

  .ant-form-item-row {
    flex-flow: row-reverse;
    align-items: start;
    justify-content: start;
  }
  .ant-form-item-control {
    flex-grow: none;
  }
`;

const FormBlockContainer = styled.div`
  background-color: #ecf8f8;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

const CityFormItem = styled(Form.Item)`
  margin-bottom: 0;
  .ant-form-item-row {
    flex-direction: column;
  }
  .ant-form-item-control {
    width: 100%;
  }
`;

const OrderButtom = styled.div`
  margin: 0 auto;
  background-color: #ff6969;
  text-align: center;
  font-size: 16px;
  padding: 8px 8px;
  border-radius: 8px;
  color: white;
  width: fit-content;
`;
