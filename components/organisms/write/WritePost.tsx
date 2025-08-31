import Form from "@/components/atoms/Form";
import StyledButton from "@/components/atoms/StyledButton";
import Gnb from "@/components/organisms/gnb/Gnb";
import { insertPost, insertPostDto } from "@/hooks/apiRequest";
import { colors, tempValues } from "@/hooks/colorScheme";
import { loadUsername } from "@/hooks/customHooks";
import { uploadImage } from "@/hooks/uploadFiles";
import { decode } from "base64-arraybuffer";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

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

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
      },
      async (res) => {
        console.log(res);
        if (res.didCancel) {
          return;
        } else if (res.errorCode) {
          console.log("Image Error : " + res.errorCode);
        }

        const imageData = res.assets![0].base64!;

        const recivedUri = await uploadImage(imageData);
        setImgUri(recivedUri!);
      }
    );
  };

  return (
    <View style={styles.formWrap}>
      <View style={styles.uploadWrap}>
        <Image
          style={styles.uploadedImg}
          source={{
            uri: imgUri || tempValues.placeholderImg,
          }}
          // source={require("@/assets/images/placeholder.jpg")}
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
