import React from 'react';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ open, close, header, children }) {
  return (
    <ModalWrapper className={open && 'openModal'}>
      {open && (
        <Section>
          <Header>
            <FontAwesomeIcon icon={faTimes} onClick={close} />
            {header}
          </Header>
          <main>{children}</main>
        </Section>
      )}
    </ModalWrapper>
  );
}
const ModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);

  &.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Section = styled.section`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow: hidden;

  main {
    padding: 12px;
    border-bottom: 1px solid #dee2e6;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 12px;
  font-weight: 700;

  svg {
    font-size: 25px;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
