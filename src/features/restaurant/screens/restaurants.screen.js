import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";



const SearchView = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const restaurantsContext = useContext(RestaurantsContext);
  console.log(restaurantsContext);
  return (
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      <RestaurantList
        data={restaurantsContext.restaurants}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large" />
            <RestaurantInfoCard />
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
