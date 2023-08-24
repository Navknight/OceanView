import styled from "@emotion/native";
import type { FlatList } from "react-native";

export const ItemContainer = styled.View`
  padding: 20px;
  margin-top: 10px;
`;

export const StyledFlatlist = styled.FlatList({}) as unknown as typeof FlatList