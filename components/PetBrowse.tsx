import React, {Component} from 'react';
import {collection} from "@cuba-platform/react-core";
import {Pet, PetView} from "../cuba/entities/petclinic_Pet";
import {ScrollView, Text, View} from "react-native";
import {PredefinedView} from "@cuba-platform/rest";
import {observer} from "mobx-react";

@observer
export class PetBrowse extends Component {

  petsData = collection<PetView<'_base'>>(Pet.NAME, {view: PredefinedView.BASE});

  render() {

    const {status, items} = this.petsData;

    if (status !== "DONE") {
      return <Text>'Loading...'</Text>;
    }

    return (
      <ScrollView>
        {items.map(pet =>
          <Text key={pet.id}>{pet._instanceName}</Text>
        )}
      </ScrollView>
    );
  }
}