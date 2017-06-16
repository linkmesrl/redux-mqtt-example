import styled from 'styled-components';

const Button = styled.button`
  color: ${props => (
    props.theme.buttons[props.type].default ||
    props.theme.buttons.primary.default
  )};
  border: 2px solid ${props => (
    props.theme.buttons[props.type].default ||
    props.theme.buttons.primary.default
  )};
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: ${props => (
      props.theme.buttons[props.type].hover ||
      props.theme.buttons.primary.hover
    )};
    color: white;
    border: 2px solid ${props => (
      props.theme.buttons[props.type].hover ||
      props.theme.buttons.primary.hover
    )};
  }
`;

export default Button;
