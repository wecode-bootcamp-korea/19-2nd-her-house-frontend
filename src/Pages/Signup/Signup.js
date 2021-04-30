import React from 'react';
import { useLocation } from 'react-router-dom';
import SignupInput from './Component/SignupInput';
import styled from 'styled-components';
import { SEND_TO_SERVER } from '../../config';
import useForm from './useForm';
import validate from './validate';

export default function Singup() {
  const location = useLocation();
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: location.state ? location.state.email : '',
      idNumber: location.state ? location.state.id_number : '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
    },
    validate,
  });

  return (
    <Container>
      <div>
        <form action={SEND_TO_SERVER} onSubmit={handleSubmit} noValidate>
          <MainTitle>추가 정보 입력</MainTitle>
          <label>
            <SignupInput
              title="이름"
              onChange={handleChange}
              name="name"
              value={values.name}
              guideText="이름을 입력하세요"
            />
          </label>
          <label>
            <SignupInput
              title="핸드폰번호"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              subTitle={errors.phone}
              guideText="핸드폰 번호를 입력해주세요"
            />
          </label>
          <Submit type="submit" disabled={submitting}>
            회원가입
          </Submit>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.flexCenter}
  margin-top: 100px;

  label,
  form,
  h1 {
    width: 100%;
  }

  > div {
    ${props => props.theme.flexCenter}
    width: 20vw;
    max-width: 20vw;

    h1 {
      font-weight: bold;
    }
  }
`;

const MainTitle = styled.h1`
  margin: 50px 0 30px 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Submit = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 35px;
  background-color: ${props => props.theme.mainPink};
  margin: 50px 0 10px 0;
  font-size: 1.2rem;
`;

const SocialImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
`;
