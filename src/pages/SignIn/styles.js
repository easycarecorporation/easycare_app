import styled from 'styled-components/native';

import { colors, fontSize } from '../../variables';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    display: flex;
    justifyContent: space-around;
    flexDirection: column;
    alignItems: center;
    background-color: ${colors.white};
`;

export const IconContainer = styled.View`
    display: flex;
    justifyContent: center;
    alignItems: center;
    paddingTop: 80px;
`;

export const Icon = styled.Image`
    width: 80px;
    height: 80px;
`;

export const TextIcon = styled.Text`
    font-size: 30px;
    color: ${colors.primary};
`;

export const InputContainer = styled.View`
    display: flex;
    justifyContent: center;
    alignItems: center;
    width: 300px;
`;


export const SignInButton = styled.View`
    border: 1px solid ${colors.white};
    border-radius: 50px;
    width: 300px;
    height: 50px;
    display: flex;
    alignItems: center;
    justifyContent: center;
    flexDirection: row;
    background-color: ${colors.primary};
`;

export const SignInText = styled.Text`
    textTransform: uppercase;
    color: ${colors.white};
    fontSize: ${ fontSize.default };
`;

export const Loading = styled.ActivityIndicator`
    alignSelf: center;
    marginLeft: 10px;
`;

export const ForgotPassword = styled.Text`
    color: ${colors.primary};
    fontSize: ${fontSize.default};
    textTransform: uppercase;
    alignSelf: flex-end;
`;

export const SocialMediaContainer = styled.View``;

export const OthersConnectionsContainer = styled.View`
    display: flex;
    alignItems: center;
    justifyContent: space-around;
    flexDirection: row;
    width: 300px;
    marginBottom: 20px;
`;

export const ConnectWith = styled.Text`
    color: ${colors.primary};
`;

export const Stick = styled.View`
    width: 80px;
    height: 1px;
    backgroundColor: ${colors.primary};
`;

export const MediaIconContainer = styled.View`
    width: 100px;
    height: 50px;
    background: ${ props => props.background ? props.background : 'red'};
    borderRadius: 50px;
    display: flex;
    alignItems: center;
    justifyContent: center;
`;

export const MediaIcon = styled.Image`
    width: 30px;
    height: 30px;
    backgroundColor: ${colors.white}
    borderRadius: 30px;
`;
