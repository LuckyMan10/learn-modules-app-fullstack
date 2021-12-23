import React from 'react';
import {StyledPage} from './style';
import { Archive } from './archive';
import { Session } from './session';
import { Auth } from './auth';
import {Modules} from './modules';


const SandboxPage: React.FC = () => {

  return (
    <StyledPage>
      <h1>Sandbox page</h1>
      <Archive />
      <Session />
      <Auth />
      <Modules />

      {/* there is no module change*/}
      {/* dump not exist */}
    </StyledPage>
  );
};

export {SandboxPage};
