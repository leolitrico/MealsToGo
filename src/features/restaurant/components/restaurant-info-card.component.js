import React from "react";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/spacer/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  IconContainer,
  Rating,
  EndContainer,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.theblondtravels.com/wp-content/uploads/2017/10/DSC_1685-1024x678.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <IconContainer>
          <Rating>
            {ratingArray.map((_, i) => {
              return <SvgXml key={i} xml={star} width={20} height={20} />;
            })}
          </Rating>
          <EndContainer>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </EndContainer>
        </IconContainer>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
