import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

interface IButtonLikeProps {
  color: string;
  background: string;
}

interface IStyleLike {
  colorLike: string;
  background: string;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-weight: bold;
  height: 150px;
  color: ${EThemeColor.fontColor};
  border: 2px solid ${EThemeColor.accentColor};
  border-radius: 30px;
`;

// css in styled components
const Title = styled.div`
  font-size: 1.8em;
  text-align: center;
`;

const Content = styled.div`
  font-size: 1.3em;
  text-align: center;
`;

const ButtonEdit = styled.button`
  position: absolute;
  top: 13px;
  right: 75px;
  width: 50px;
  height: 50px;
  font-size: 1.9em;
  color: ${EThemeColor.accentColor};
  background-color: ${EThemeColor.primaryColor};
  border-radius: 10px 10px 10px 10px;
  border: 3px solid ${EThemeColor.accentColor};

  &:hover {
    transform: scale(1.1);
  }
`;

const FormEditPostData = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonDelete = styled.button`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 50px;
  height: 50px;
  font-size: 1.9em;
  color: ${EThemeColor.accentColor};
  background-color: ${EThemeColor.primaryColor};
  border-radius: 10px 20px 10px 10px;
  border: 3px solid ${EThemeColor.accentColor};

  &:hover {
    transform: scale(1.1);
  }
`;

const WindowConfirmationDelete = styled.div`
  position: fixed;
`;

const BoxForSystemLike = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
`;

const ButtonLike = styled.button<IButtonLikeProps>`
  width: 43px;
  height: 43px;
  font-size: 1.5em;
  border: 3px solid ${EThemeColor.accentColor};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-radius: 10px 10px 10px 50%;

  &:hover {
    transform: scale(1.1);
  }

  /* &:active {
    color: ${EThemeColor.primaryColor};
    background-color: ${EThemeColor.accentColor};
    transform: scale(1.1);
  } */
`;

const CountLike = styled.div`
  font-size: 1.4em;
  margin: 0px 0px 0px 10px;
  padding: 5px;
  color: ${EThemeColor.accentColor};
  border-top: 3px solid ${EThemeColor.accentColor};
  border-right: 3px solid ${EThemeColor.accentColor};
  border-bottom: 3px solid ${EThemeColor.accentColor};
  border-radius: 0px 10px 10px 0px;
`;

const StyledPostItem = {
  Wrapper,
  Title,
  Content,
  ButtonEdit,
  FormEditPostData,
  ButtonDelete,
  WindowConfirmationDelete,
  BoxForSystemLike,
  ButtonLike,
  CountLike,
};

export default StyledPostItem;
