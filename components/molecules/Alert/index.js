import styled from 'styled-components';

const AlertStyled = styled.div`
  padding: 1em;
  width: 100%;
  background-color: ${props => props.theme.colors.message};
  color: ${props => props.theme.colors.textOnDark};
  box-shadow: 0 -3px 1px -2px rgb(0 0 0 / 20%), 0 -2px 2px 0 rgb(0 0 0 / 14%), 0 -1px 5px 0 rgb(0 0 0 / 12%);

  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .closebtn:hover {
    color: black;
  }
`;

function Alert({children, onClose, ...props}) {
  return (
    <AlertStyled {...props}>
      { onClose && <span className="closebtn" onClick={onClose}>&times;</span>}
      {children}
    </AlertStyled>
  )
}

export default Alert
