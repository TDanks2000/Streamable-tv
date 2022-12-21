import { FlatList, ScrollView } from "react-native";
import React, { useCallback, useEffect } from "react";
import Card from "../../components/Card";
import { Container, Title } from "../container.styles";
import { useFocusEffect } from "@react-navigation/native";

const Similar = ({ data }) => {
  if (data?.length === 0) return null;

  useFocusEffect(
    useCallback(() => {
      data.splice(0, 5);
    }, [])
  );

  const renderCard = (item, i) => {
    return <Card key={`similar-${i}`} index={i} {...item} />;
  };

  return (
    <Container>
      <Title>You might also like</Title>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => renderCard(item, index)}
        keyExtractor={(item, index) => `similar-${index}`}
      />
    </Container>
  );
};

export default Similar;
