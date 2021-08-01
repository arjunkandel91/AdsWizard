import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, StatusBar, ScrollView, ActivityIndicator, FlatList } from 'react-native';

// networking
import Requests from '../../api/request';

// components
import AppHeader from '../../components/reusable/AppHeader';
import Screen from '../../components/Screen';

function Home() {
    const [isLoading, setisLoading] = useState(true);
    const [dataSource, setdataSource] = useState(null);

    const getDataFromServer = async () => {

        // change the page name here
        const getRequestData = await Requests.getData('/get-test');
        let RequestedData;

        if (getRequestData.status) {
            RequestedData = getRequestData.data;
            setdataSource(RequestedData);
            setisLoading(false);
            // we have error let check the cache and show the data
        } else {
            setisLoading(false);
            console.log(RequestedData);
        }
    };


    // useEffect hooks
    useEffect(() => {
        getDataFromServer();
    }, []);

    return (
        <Screen style={styles.screen}>
            <StatusBar backgroundColor="#3F8BB5" barStyle="light-content" />
            <ScrollView>
                <AppHeader />

                <View style={{ padding: 25 }}>
                    <Text style={{ paddingBottom: 25 }}>Welcome to Home! Your API request will be shown below!</Text>


                    {isLoading &&
                        <ActivityIndicator size="large" color="dogerblue" />}

                    {!isLoading &&
                        dataSource.map((item, index) => {
                            return (<Text key={index} style={{ marginBottom: 15 }}>{item.id.toString()}</Text>)
                        })
                    }

                </View>

            </ScrollView>
        </Screen>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 0,
    },

    container: {}
});

export default Home;