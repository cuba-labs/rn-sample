import React, {Component} from 'react';
import {collection} from "@cuba-platform/react-core";
import {Pet, PetView} from "../cuba/entities/petclinic_Pet";
import {ListRenderItemInfo, Text} from "react-native";
import {PredefinedView, SerializedEntity} from "@cuba-platform/rest";
import {observer} from "mobx-react";
import {Button, List, ListItem, ListItemElement} from "react-native-ui-kitten";

@observer
export class PetBrowse extends Component {

  petsData = collection<PetView<'_base'>>(Pet.NAME, {view: PredefinedView.BASE});

  renderItem = (info: ListRenderItemInfo<SerializedEntity<PetView<'_base'>>>): ListItemElement => {
    const {id: petId, _instanceName, birthDate, identificationNumber} = info.item;

    return (
      <ListItem
        title={_instanceName}
        description={birthDate}
        accessory={() =>
          <Button
            size='small'
            onPress={() => this.openEditor(petId)}>
            Edit
          </Button>}
      />
    );
  };

  render() {

    const {status, items} = this.petsData;

    if (status !== "DONE") {
      return <Text>'Loading...'</Text>;
    }

    return (
      <List
        data={items}
        renderItem={this.renderItem}
      />
    );
  }

  openEditor = (petId: string) => {

  }
}
