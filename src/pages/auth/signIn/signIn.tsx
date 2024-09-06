import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import styled from "styled-components";
import { useAppDispatch } from "../../../common/hooks/reduxHooks";
import { setUserPhone } from "../../../store/auth/authSlice";

export const SignIn = () => {
  const [form] = useForm();
  const dispatch = useAppDispatch()

  const onSubmit = () => {

    //починить валидацию
    form.validateFields().then((values) => {
        dispatch(setUserPhone(values.phone))
    })
  }

  return (
    <Container>
      <Form form={form}>
        <Form.Item name={"phone"} required>
          <Input />
        </Form.Item>
        <Button onClick={onSubmit}>Войти</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div``;
