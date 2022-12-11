import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { List, Avatar, Divider, FAB, Portal, Dialog, Button, TextInput } from 'react-native-paper'


const ChatList = () => {

    const [isDialogVisible, setIsDialogVisible] = useState(false)

    return (
        <View style={{ flex: 1, }} >
            <List.Item
                title="Kullanıcı Adı"
                description="Merhaba"
                left={() => <Avatar.Text label="KA" size={50} />}
            />
            <Divider inset  />
            <Portal>
                <Dialog 
                    visible={isDialogVisible} 
                    onDismiss= {()=> setIsDialogVisible(false) }
                >
                    <Dialog.Title>Konuşma Başlat</Dialog.Title>
                    <Dialog.Content>
                        <TextInput label="Emaili Giriniz" />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setIsDialogVisible(false)}>
                            İptal Et
                        </Button>
                        <Button>Ekle</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <FAB
                icon="plus"
                style={{ position: "absolute", bottom: 16, right: 16 }}
                onPress={() => setIsDialogVisible(true)}
            />
        </View>

    )
};

export default ChatList


