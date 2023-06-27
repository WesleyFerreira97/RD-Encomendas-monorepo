import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Sheet } from 'tamagui';
import { styles } from './styles';

export function TestSheet() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prevState) => !prevState);
    useEffect(() => {
        console.log(open, " open modal")
    }, [open])
    return (
        <View style={styles.container}>
            <Text>Test Sheet</Text>
            <Button onPress={handleToggle} title="Open Modal" />
            <Sheet
                open={open}
                onOpenChange={handleToggle}
                dismissOnSnapToBottom
                snapPoints={[35]}
                animation="bouncy"
            >
                <Sheet.Handle />
                <Sheet.Overlay />
                <Sheet.Frame
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                    zIndex={200}
                    position="relative"
                    borderTopLeftRadius="$6"
                    borderTopRightRadius="$6"
                    paddingTop="$6"
                    paddingHorizontal="$6"
                    backgroundColor="#0F1B2D"
                >
                    <View style={{
                        height: "100%",
                        width: "100%",
                        zIndex: 1000,
                        position: "absolute",
                        // bottom: 0,
                    }}>
                        <Text>Sheet content </Text>
                    </View>
                </Sheet.Frame>
            </Sheet>
        </View >
    );
}