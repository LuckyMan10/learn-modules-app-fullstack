import styled from 'styled-components';

const StyledPage = styled.div`
  h1, h2, h3, h4 {
      text-align: center;
      color: white;
  }
  display: flex;
  font-size: 28px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .registration,
  .login,
  .add-active-module,
  .update-acc-info,
  .delete-module,
  .delete-archive {
    padding: 15px;
    border-radius: 10px;
    margin: 20px 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 600px;
    form {
      gap: 10px;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
  .registration {
      background-color: rgb(0, 167, 225);
  }
  .login {
    background-color: rgb(0, 23, 31);
  }
  .add-active-module {
    background-color: rgb(0, 52, 89);
  }
  .update-acc-info {
    background-color: rgb(0, 126, 167);
  }
  .delete-module {
    background-color: rgb(0, 104, 225);
  }
  .delete-archive {
    background-color: rgb(0, 99, 126);
  }
  button {
    padding: 10px;
    margin: 10px 0px;
    display: flex;
    justify-content: center;
  }
`;

export {StyledPage};
