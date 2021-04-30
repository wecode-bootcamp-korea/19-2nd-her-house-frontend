import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { SEND_TO_SERVER } from '../../config';

const { Kakao } = window;

export default function Login() {
  const history = useHistory();

  const KakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function () {
        sendTokenToServer();
      },
    });
  };

  const sendTokenToServer = () => {
    fetch(SEND_TO_SERVER, {
      method: 'POST',
      headers: {
        Authorization: Kakao.Auth.getAccessToken(),
      },
    })
      .then(res => res.json())
      .then(({ message, token, email, id_number }) => {
        if (message === 'SUCCESS') {
          localStorage.setItem('access_token', token);
          history.push('/');
        } else if (message === 'INVALID_USER') {
          history.push({
            pathname: '/signup',
            state: { email, id_number },
          });
        }
      });
  };

  // 동의하기 절차를 위한 테스트용으로 필요함
  useEffect(() => {
    return sendUnlink();
  }, []);

  const sendUnlink = () => {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  return (
    <LoginContainer>
      <div>
        <div>소셜 간편로그인/회원가입</div>
        <SocialImage
          src="/images/kakao_login_medium_narrow.png"
          onClick={KakaoLoginClickHandler}
        />
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  ${props => props.theme.flexCenter}

  > div {
    margin-top: 100px;

    div,
    img {
      padding: 5px;
    }
  }
`;
const SocialImage = styled.img`
  border-radius: 10px;
  cursor: pointer;
`;
