import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { SEND_TO_SERVER } from '../../config';

export default function Login() {
  const { Kakao } = window;
  let history = useHistory();

  const KakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        sendTokenToServer();
      },
    });
  };

  function sendTokenToServer() {
    fetch(SEND_TO_SERVER, {
      method: 'POST',
      headers: {
        Authorization: Kakao.Auth.getAccessToken(),
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          localStorage.setItem('access_token', res.token);
          history.push('/');
        } else if (res.message === 'INVALID_USER') {
          const state = {
            pathname: '/signup',
            state: {
              email: res.email,
              id_number: res.id_number,
            },
          };
          history.push(state);
        }
      });
  }

  // 동의하기 절차를 위한 테스트용으로 필요함
  useEffect(() => {
    return sendUnlink();
  }, []);

  function sendUnlink() {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }

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
