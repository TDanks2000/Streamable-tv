import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Container = styled.View`
  padding: 15px 25px 5px 25px;
`;

export const MetaContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))`
  margin-top: 15px;
`;

export const MetaItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 15px;
  padding: ${({ isMobile }) => (isMobile ? "5px 15px" : "10px 20px")};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

export const MetaItem = styled.Text`
  font-family: ${({ theme }) => theme.text.font.secondary};
  color: ${({ theme }) => theme.text.offWhite};
  text-transform: uppercase;
  font-size: ${({ isMobile }) => (isMobile ? "12px" : "18px")};
`;

export const MetaItemIcon = styled(Icon)`
  color: ${({ theme }) => theme.base.gold};
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
`;
