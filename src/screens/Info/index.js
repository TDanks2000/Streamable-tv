import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { InfoSkeleton, InfoTop } from "../../components";
import { api } from "../../utils";
import { Container, ScrollView } from "../screen.styles";

const InfoScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id, type } = route?.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    api.getInfo(id, type).then((data) => setData(data));
  }, [id, type]);

  if (!data) return <InfoSkeleton />;
  return (
    <Container style={{ marginTop: 0 }}>
      <ScrollView vertical={true}>
        <InfoTop {...data} type={type} />
      </ScrollView>
    </Container>
  );
};

export default InfoScreen;
