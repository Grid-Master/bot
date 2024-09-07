import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import styled from "styled-components";
import { useAppDispatch } from "../../../common/hooks/reduxHooks";
import { setUserPhone } from "../../../store/auth/authSlice";

export const SignIn = () => {
  const [form] = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    //TODO:починить валидацию
    form
    .validateFields()
    .then((values) => {
      // Если валидация успешна, выполнить действие
      dispatch(setUserPhone(values.phone));
    })
    .catch((error) => {
      // Если валидация не пройдена, обработать ошибку
      console.error("Ошибка валидации:", error);
    });
  };

  return (
    <Container>
      <Form form={form}>
        <Title>Вход</Title>
        <Text>
          Введите пожалуйста свой номер телефона без '0'
          <br />
          Например: 077772244
          <br />
          или 060164998
        </Text>
        <FormItem
          name={"phone"}
          rules={[
            { required: true, message: "Пожалуйста, введите номер телефона" },
            {
              pattern: /^77[5-9]\d{5}$/,
              message: "Некорректный номер телефона",
            },
          ]}
        >
          <StyledInput maxLength={8} />
        </FormItem>
        <StyledButton onClick={onSubmit}>Войти</StyledButton>
      </Form>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.div`
  padding: 8px;
  font-weight: 500;
  font-size: 20px;
  border-bottom: 2px solid black;
`;

const Text = styled.div`
  padding: 8px;
  font-size: 12px;
  color: gray;
  margin-bottom: 12px;
`;

const FormItem = styled(Form.Item)`
  width: 100%;
  .ant-form-item-explain-error {
    margin: 0 16px;
  }
`;

const StyledInput = styled(Input)`
  margin: 0 16px;
  width: calc(100% - 32px);
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;
