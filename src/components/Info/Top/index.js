import React, { useCallback, useRef, useState } from "react";
import {
  GoBackContainer,
  GoBackIcon,
  InfoTopButtons,
  InfoTopContainer,
  InfoTopEpisode,
  InfoTopImage,
  InfoTopImageContainer,
  InfoTopImageWrapper,
  InfoTopPlayButton,
  InfoTopPlayButtonText,
  InfoTopPoster,
  InfoTopPosterContainer,
  InfoTopPosterImageWrapper,
  InfoTopTitle,
  InfoTopWrapper,
} from "./InfoTop.styles";
import { api, helpers, utils } from "../../../utils";
import { useNavigation } from "@react-navigation/native";

const InfoTop = (props) => {
  let {
    title,
    name,
    poster_path: image,
    poster,
    id,
    backdrop_path: cover,
    type,
  } = props;
  const navigation = useNavigation();

  //   const gotoPlayer = async () => {
  //     const whatEpisodeToGet = !nextEpisode ? props.episodes[0] : nextEpisode;
  //     const { headers, sources } = await api.getSource(whatEpisodeToGet.id);

  //     setQualities(sources);

  //     setDataToSend({
  //       ...whatEpisodeToGet,
  //       animeId: id,
  //       totalEpisodes: totalEpisodes,
  //       id: whatEpisodeToGet.id,
  //       title: whatEpisodeToGet.title,
  //       episode: whatEpisodeToGet.number,
  //       referer: headers.Referer,
  //       nextEpisodeId: `${whatEpisodeToGet.id
  //         .split("-")
  //         .splice(0, 3)
  //         .join("-")}-${whatEpisodeToGet.number + 1}`,
  //     });

  //     return setShowQualityModal(true);
  //   };
  image = utils.getPosterUrl(image, "original");
  cover = utils.getPosterUrl(cover, "original");
  return (
    <InfoTopContainer>
      <InfoTopImageContainer>
        <InfoTopImage source={{ uri: cover }}>
          <GoBackContainer onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </GoBackContainer>
          <InfoTopImageWrapper />
        </InfoTopImage>
      </InfoTopImageContainer>
      <InfoTopPosterContainer>
        <InfoTopPosterImageWrapper>
          <InfoTopPoster source={{ uri: image }} />
        </InfoTopPosterImageWrapper>
        <InfoTopWrapper>
          <InfoTopTitle numberOfLines={1}>{title || name}</InfoTopTitle>
          {type !== "movie" ? (
            <InfoTopEpisode numberOfLines={1}>Episode 1</InfoTopEpisode>
          ) : null}
          <InfoTopButtons>
            <InfoTopPlayButton>
              {/* <InfoTopPlayButtonText>
                {nextEpisode && nextEpisode.number > 1 ? `Continue` : `Play`}
              </InfoTopPlayButtonText> */}
              <InfoTopPlayButtonText>Play</InfoTopPlayButtonText>
            </InfoTopPlayButton>
          </InfoTopButtons>
        </InfoTopWrapper>
      </InfoTopPosterContainer>
    </InfoTopContainer>
  );
};

export default InfoTop;
