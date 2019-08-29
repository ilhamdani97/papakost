import React, { Component } from 'react';
import { StyleSheet, TextInput, FlatList, ActivityIndicator, Text, Dimensions, TouchableOpacity, Share, ScrollView, TouchableHighlight } from 'react-native';
import { Appbar } from 'react-native-paper';
import { View } from 'native-base';
import { Card, Icon } from "react-native-elements";
import { connect } from 'react-redux';
import * as actionDorms from '../redux/actions/dorms';

class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: [],
            data: null
        };
    }
    toRupiah = (price) => {
        let rupiah = '';
        let convert = price.toString().split('').reverse().join('');
        for (var i = 0; i < convert.length; i++) if (i % 3 == 0) rupiah += convert.substr(i, 3) + '.';
        return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
    }
    componentDidMount() {
        this.props.getData()
    }
    async componentWillMount() {
        this.setState(
            { data: await this.props.dorms.data },

        )
    }
    static navigationOptions =
        {
            title: 'Booking List',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#FF9800'
            }
        };

    render() {
        const { width, height } = Dimensions.get('window');
        if (this.props.dorms.isLoading==true) {
            return (
                <ActivityIndicator
                    color="#FF9800"
                    animating={true}
                    style={styles.indicator}
                    size="large"
                />
            );
        }
        return (

            <View style={{ backgroundColor: 'white', marginBottom: 10 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                        <Appbar.BackAction color="black"
                            onPress={() => this.props.navigation.navigate('RootStack')}
                        />
                        <TextInput style={styles.header} placeholder="Search Here" />
                    </Appbar.Header>
                    
                    {this.props.dorms.data.map((item, i) => (
                        <View key={i}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail', { dorms: item })} underlayColor="white">
                                <View style={{ flex: 1, width: width * 100 / 100, }} >
                                    <Card style={{ marginTop: 10 }}
                                        image={{ uri: `http://192.168.1.25:3000/images/${item.image}` }}
                                        containerStyle={{ padding: 2 }}
                                    >
                                        <Text style={{ marginBottom: 10 }}>
                                            {item.name_kost}
                                        </Text>
                                        <Text style={{ marginBottom: 6, fontWeight: 'bold' }}>
                                            {this.toRupiah(item.price)}
                                        </Text>
                                        <Text style={{ marginBottom: 6 }}>
                                            {item.address_kost}
                                        </Text>
                                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 6 }}>
                                            <View style={{ width: width * 70 / 100 }} >
                                                <View style={{ height: 26, width: 130, backgroundColor: "#FF9800", borderRadius: 50 }}>
                                                    <Text style={{ fontSize: 13, marginTop: 2, color: "white", textAlign: "center", justifyContent: "center" }}>Booking Available</Text>
                                                </View>
                                            </View>
                                            <View style={{ width: width * 30 / 100 }} >
                                                <Text style={{ color: 'red' }}>{item.stock_room} rooms</Text>
                                            </View>
                                        </View>
                                    </Card>
                                </View>
                            </TouchableHighlight>
                        </View>
                    ))}
                </ScrollView>

            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        dorms: state.dorms
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(actionDorms.getData()),
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    card: {
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    row: {
        padding: 5,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage);