import Form from "@/components/atoms/Form";
import StyledButton from "@/components/atoms/StyledButton";
import Gnb from "@/components/organisms/gnb/Gnb";
import { insertPost, insertPostDto } from "@/hooks/apiRequest";
import { colors, tempValues } from "@/hooks/colorScheme";
import { loadUsername } from "@/hooks/customHooks";
import { uploadImage } from "@/hooks/uploadFiles";
import { router } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, Image, Alert, Linking } from "react-native";

// react-native-image-picker 대신 expo-image-picker를 가져옵니다.
import * as ImagePicker from "expo-image-picker";

export interface Props {}

export default function WritePost({ ...rest }: Props) {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [imgUri, setImgUri] = useState<string>("");

  const handleTitle = (text: string) => {
    setTitle(text);
  };

  const handleDesc = (text: string) => {
    setDesc(text);
  };

  const handleSave = async () => {
    const uploader = (await loadUsername()) ?? "";

    if (uploader !== null) {
      const postData: insertPostDto = { uploader, title, desc, imgUri };
      insertPost(postData);

      router.navigate("/board");
    }
  };

  const onSelectImage = async () => {
    // 권한 상태 확인 및 요청
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "권한 요청",
        "사진첩 접근 권한이 필요합니다. 설정으로 이동하여 권한을 허용해 주세요.",
        [
          { text: "취소", style: "cancel" },
          { text: "설정으로 이동", onPress: () => Linking.openSettings() },
        ]
      );
      return;
    }

    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true, // base64 데이터 포함
    });

    console.log(res);

    if (!res.canceled && res.assets && res.assets.length > 0) {
      const imageData = res.assets[0].base64;
      if (imageData) {
        const receivedUri = await uploadImage(imageData);
        if (receivedUri) {
          setImgUri(receivedUri);
        }
      }
    }
  };

  return (
    <View style={styles.formWrap}>
      <View style={styles.uploadWrap}>
        <Image
          style={styles.uploadedImg}
          source={{
            uri: imgUri || tempValues.placeholderImg,
          }}
        />
        <View style={styles.uploadBtnWrap}>
          <StyledButton
            text="Upolaod Photo"
            height={38}
            fitContent
            onPress={onSelectImage}
          />
        </View>
      </View>
      <Form placeholder="Enter Title Here.." onChangeText={handleTitle} />
      <Form
        placeholder="Start Writing Your Entry.."
        onChangeText={handleDesc}
        fill
      />
      <View style={styles.saveBtnWrap}>
        <StyledButton text="Save" height={48} onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formWrap: {
    flex: 1,
    paddingTop: 15,
    paddingRight: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    rowGap: 10,
  },
  uploadWrap: {
    backgroundColor: colors.whiteGray,
    width: "100%",
    height: 126,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderWidth: 1,
    borderColor: "#d9d9de",
    borderStyle: "solid",
    boxSizing: "border-box",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOpacity: 1,
    paddingTop: 13,
    paddingRight: 18,
    paddingBottom: 13,
    paddingLeft: 18,
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  uploadedImg: {
    width: 100,
    height: 100,
  },
  uploadBtnWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  saveBtnWrap: {
    marginTop: 10,
  },
});
