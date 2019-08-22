import React, { Component } from 'react';
import { StyleSheet, TextInput, FlatList, Text, Dimensions, TouchableOpacity, Share, ScrollView, TouchableHighlight } from 'react-native';
import { Appbar } from 'react-native-paper';
import { View } from 'native-base';
import { Card, Icon } from "react-native-elements";
import ActionSheet from 'react-native-actionsheet';
import axios from 'axios';

const options = [
    <Text style={{ color: '#FF9800' }}>A-Z</Text>,
    <Text style={{ color: '#FF9800' }}>Newest</Text>,
    <Text style={{ color: '#FF9800' }}>High To Low Price</Text>,
    <Text style={{ color: '#FF9800' }}>Low To High Price</Text>,
    <Text style={{ color: '#FF9800' }}>The Best Rating</Text>,
    <Text style={{ color: 'red' }}>Cancel</Text>
]
class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: []
        };
    }

    componentDidMount() {
        axios.get("http://192.168.1.14:3500/api/details")
            .then(response => {
                const detail = response.data;
                this.setState({ detail });
                console.log(detail);
            })
            .catch(error => {
                alert(error)
            })
    }
    static navigationOptions =
        {
            title: 'Booking List',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#FF9800'
            }
        };
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => {
        const { width, height } = Dimensions.get('window');
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail', { rows: item })} underlayColor="white">
                <View style={{ flex: 1, width: width * 94 / 100,  }} >
                    <Card style={{ marginTop: 10 }}
                        image={{ uri: item.image }}
                        containerStyle={{ padding: 2 }}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            {item.name_kost}
                        </Text>
                        <Text style={{ marginBottom: 6, fontWeight: 'bold' }}>
                            Rp.{item.price}
                        </Text>
                        <Text style={{ marginBottom: 6 }}>
                            {item.address_kost}
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 6 }}>
                            <View style={{ width: width * 62 / 100 }} >
                                <View style={{ height: 26, width: 130, backgroundColor: "#FF9800", borderRadius: 50 }}>
                                    <Text style={{ fontSize: 16, color: "white", textAlign: "center", justifyContent: "center" }}>{item.booking_availabel}</Text>
                                </View>
                            </View>
                            <View style={{ width: width * 30 / 100 }} >
                                <Text style={{ color: 'red' }}>{item.stock_room} rooms</Text>
                            </View>
                        </View>
                    </Card>
                </View>
            </TouchableHighlight>
        )
    }
    render() {
        const { width, height } = Dimensions.get('window');
        const extractKey = ({ id }) => id.toString()
        return (
            <View style={{ backgroundColor: 'white' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                        <Appbar.BackAction color="black"
                            onPress={() => this.props.navigation.goBack()}
                        />
                        <TextInput style={styles.header} placeholder="Search Here" />
                    </Appbar.Header>
                    <View>
                        <FlatList
                            style={styles.container}
                            data={this.state.detail}
                            renderItem={this.renderItem}
                            keyExtractor={extractKey}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    card: {


    },
    row: {
        padding: 5,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
})
export default SearchPage;