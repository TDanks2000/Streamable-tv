import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { api } from "../../utils";
import Card from "../../components/Card";
import { Container, Title } from "../container.styles";

const Recent = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .getRecent(type)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [type]);

  if (data?.length === 0) return null;
  return (
    <Container>
      <Title>Recent {type}</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => (
          <Card key={`recent-${type}-${i}`} index={i} {...item} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Recent;
