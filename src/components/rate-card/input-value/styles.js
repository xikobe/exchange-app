import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;

  ${({ isInvalid, theme }) => isInvalid && `border-bottom: 2px solid ${theme.colors.red[700]}`}
`;
