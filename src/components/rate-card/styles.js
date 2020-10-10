import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 20px;
  align-items: flex-end;
  overflow: hidden;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.blue[800]}
`;

export const BalanceWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[700]};
  width: 100%;
  padding: 10px;
  text-align: right;
`;
