import React, {Component} from 'react';
import {collection} from "@cuba-platform/react-core";
import {ScrollView, StyleSheet, Text} from "react-native";
import {PredefinedView} from "@cuba-platform/rest";
import {observer} from "mobx-react";
import {colors} from '../styles/palette';
import {User, UserView} from '../cuba/entities/base/sec$User';

const styles = StyleSheet.create({
  list: {
    marginTop: 16,
  },
  item: {
    fontSize: 16,
    fontColor: colors.textPrimary,
    marginTop: 4,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

@observer
export class PetBrowse extends Component {

  petsData = collection<UserView<'_base'>>(User.NAME, {view: PredefinedView.BASE});

  render() {

    const {status, items} = this.petsData;


    if (status !== "DONE") {
      return <Text>'Loading...'</Text>;
    }

    return (
      <>
        <Text style={styles.title}>List of users:</Text>
        <ScrollView style={styles.list}>
          {items.map(pet =>
            <Text style={styles.item} key={pet.id}>{pet._instanceName}</Text>
          )}
        </ScrollView>
      </>
    );
  }
}
