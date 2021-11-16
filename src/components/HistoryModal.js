import moment from 'moment';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Modal from "react-native-modal";
import colors from '../assets/colors';
const { width, height } = Dimensions.get('window');
import Button from './Button';


const HistoryModal = ({ data, showModal, setIsModalVisible }) => {
    return <View style={{
        height: height * 0.01,
    }}>
        <Modal isVisible={showModal}>
            <View style={styles.container}>
                <View style={{
                    backgroundColor: 'white',
                    paddingHorizontal: width * 0.05,
                    borderRadius: 20,
                }}>
                    <Text style={styles.heading}>Recipt</Text>
                    <Text style={styles.label}>Location</Text>
                    <Text style={{ fontSize: width * 0.045 }}>{data?.location}</Text>


                    <Text style={[styles.label, { marginTop: height * 0.02, }]}>Date</Text>
                    <Text style={styles.value}>{moment(data?.date).format("hh MMMM yyyy")}</Text>

                    <View style={[styles.rowView, { marginTop: height * 0.03 }]}>
                        <Text style={[styles.label,]}>Total Amount</Text>
                        <Text style={styles.value}>$30</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text style={styles.label}>Amount Paid</Text>
                        <Text style={styles.value}>{`$${data?.price.toFixed(2)}`}</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text style={styles.label}>Refunded</Text>
                        <Text style={styles.value}>{`$${20.0.toFixed(2)}`}</Text>
                    </View>

                </View>
                    <Button title={"GENERATE PDF"} onBtnPress={() => setIsModalVisible(false)} isBgColor={true} />
            </View>
        </Modal>
    </View>
}

export default HistoryModal;

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'space-between',
        paddingVertical: height * 0.008,
    },
    container: {
        backgroundColor: 'white',
        width: width * 0.9,
        borderRadius: width * 0.08,
        paddingVertical: height * 0.03,

    },
    heading: {
        color: colors.themeBlue,
        fontSize: width * 0.08,
        fontWeight: '800',
        alignSelf: 'center'
    },
    value: {
        fontSize: width * .05
    },
    label: {
        fontWeight: '800',
        color:'black',
        fontSize: width * .05
    }
})