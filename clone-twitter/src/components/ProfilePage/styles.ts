import styled, { css } from 'styled-components';
import { LocationOn, Cake } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;

  overflow-y: auto;

  scrollbar-width: none; //firefox
  ::-webkit-scrollbar {
    //config do chorme nao aparcer barra scrooll
    display: flex;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0; // para nao diminuir o tamahho, encolher
  width: 100%;

  height: min(33vw, 199px);
  background: var(--twitter);
  position: relative;
`;

export const Avatar = styled.div``;

export const ProfileData = styled.div``;

const iconCss = css`
  width: 20px;
  height: 20px;
  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)``;

export const CakeIcon = styled(Cake)``;

export const Followage = styled.div``;
