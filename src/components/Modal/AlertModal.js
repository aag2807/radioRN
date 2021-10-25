import React from 'react'
import { View, StyleSheet, Modal, Text } from 'react-native'

const AlertModal = ({ title, children, showmodal = true }) => {
    return (
        <View>
            <Modal
                transparent={true}
                visible={showmodal}
                animationType="fade"
            >
                <View>
                    <Text>{title}</Text>

                    <Text>{children}</Text>
                </View>
            </Modal>
        </View>
    )
}

export default AlertModal
