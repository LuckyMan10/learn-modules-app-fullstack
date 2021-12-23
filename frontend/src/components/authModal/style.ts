import Styled from "styled-components";

const StyledForm = Styled.div`
h1 {
    font-size: 1.9em;
    text-align: center;
}
width: 100%;
display: flex;
justify-content: center;
align-items: center;
.wrapper {
    background: white;
    padding: 30px 10px;
    display: flex;
    align-items: center;
    width: 50%;
    flex-direction: column;
}
.forms {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: start;
}
.form-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 80%;
      button[type="submit"] {
          display: flex;
          justify-content: center;
          width: 100%;
      }
    }
}
@media (max-width: 1100px) {
    .wrapper {
        width: 80%;
    }
}
@media (max-width: 800px) {
    .wrapper {
        width: 95%;
    }
}
@media (max-width: 600px) {
    h1 {
        font-size: 1.5em;
    }
    .forms {
        flex-direction: column;
    }
}
@media (max-width: 400px) {
    .form-wrapper form {
        width: 100%;
    }
}
`

export {
    StyledForm
}