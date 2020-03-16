import styled from 'styled-components/native';
import Text from '../../widget/text';
import PhoneInput from 'react-native-phone-input'

export const TextView = styled(Text)`
    fontSize: ${props => props.fontSize};
    color: ${props => props.color};
`;

export const ContainerView = styled.View`
    flex: ${props => props.flex};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    background-color: ${props => props.backgroundColor};
    border-bottom-left-radius: ${props => props.leftBottomRadius};
    border-bottom-right-radius: ${props => props.rightBottomRadius};
    paddingHorizontal: ${props => props.paddingHorizontal};
`;

export const LogoView = styled.View`
    flexDirection: row;
    paddingVertical: 25px;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 50px;
    height: 50px;
    borderRadius: 25px;
`;

export const WrapperView = styled.View`
    align-items: ${props => props.alignItems};
    padding: 10px;
`;

export const PhoneNumber = styled(PhoneInput)`
    marginVertical: 10px;
    borderWidth: 1px;
    padding: 7px 5px;
    borderRadius: 6px;
    borderColor: #FFF;
    backgroundColor: #FFF;
`;

export const SocialLogin = styled.View`
    borderWidth: 1px;
    borderRadius: 6px;
    borderColor: ${props => props.borderColor};
    flexDirection: row;
    alignItems: center;
    marginHorizontal: 10px;
`;

export const CustomButton = styled.TouchableWithoutFeedback`
`;

export const TextWrapper = styled.View`
    background-color: ${props => props.backgroundColor};
    borderRadius: ${props => props.borderRadius};
    padding: 7px 12px;
`;

export const ImageView = styled.Image`
    width: 25px;
    height: 25px;
    marginHorizontal: 7px;
`;