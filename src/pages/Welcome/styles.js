import styled from 'styled-components/native';

import { colors } from '~/variables';

export const Container = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    justifyContent: space-around;
    flexDirection: column;
    alignItems: center;
    backgroundColor: ${colors.primary};
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
    fontSize: 30px;
    color: ${colors.white};
`;

export const ButtonsContainer = styled.View`
    width: 80%;
`;
