import React from 'react';

// import { Container } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outile>Editar Perfil</EditButton>

        <h1>Allison V.Araújo</h1>
        <h2>@allisonn.araujoo</h2>
        <p>
          Developer at <a href="www.w16.com.br">@w16</a>
        </p>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
