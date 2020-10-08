import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue[900]};
  padding: 20px 40px;
`;
