import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, StatusBar } from 'react-native'
import { COLORS, SIZES, icons } from '../../constants'
import styles from './styles'
import ImagePicker from 'react-native-image-crop-picker';
import { BottomSheet } from 'react-native-btr';
import Button1 from '../../component/button/Button1';
import { UploadDocumentApi } from '../../redux/actions/authActions';
import { connect } from 'react-redux';


const { width, height } = Dimensions.get('window')

const UploadDocument = ({ navigation, UploadDocumentApi }) => {
    const [loading, setLoading] = useState(false)
    const [conditionState, setConditionState] = useState("ID")

    const [postData, setPostData] = useState({
        aadhar_front: null,
        aadhar_back: null,
        pan_card: null,
        driving_license: null
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const ImagePick = (name) => {
        ImagePicker.openPicker({
            width: width * .4,
            height: height * .13,
            cropping: true

        }).then(image => {
            // setImg(image.path)
            // setFirstImg(image.path)
            handleChange(name, {
                uri: image.path,
                name: image.filename || Date.now() + "-" + image.path.slice(-10),
                type: image.mime
            })
        });
    }

    const ImagePick2 = (name) => {
        ImagePicker.openPicker({
            width: width * .65,
            height: height * .2,
            cropping: true
        }).then(image => {
            handleChange(name, {
                uri: image.path,
                name: image.filename || Date.now() + "-" + image.path.slice(-10),
                type: image.mime
            })
        });

    }

    const handleSubmit = () => {
        if (postData.aadhar_back && postData.aadhar_front && postData.driving_license && postData.pan_card) {
            UploadDocumentApi(postData, navigation, (data) => setLoading(data))
            // setConditionState("DL")
        }
    }
    return (
        <View style={styles.UploadDriverDocumentCont}>
            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            <View style={styles.idTextMain} >
                <Text style={[styles.idDlText,]}>ID</Text>
                <Text style={[styles.idDlText, { marginLeft: width * .03 }]}>DL</Text>
                <Text style={[styles.idDlText, { marginLeft: width * .04 }]}>PAN</Text>
            </View>
            <View style={styles.indicatorMain}>
                <View style={[styles.horizontalLine, { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, { backgroundColor: COLORS.primary }]} />
                <View style={[styles.horizontalLine, (conditionState == 'DL' || conditionState == 'PAN') && { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, (conditionState == 'DL' || conditionState == 'PAN') && { backgroundColor: COLORS.primary }]} />
                <View style={[styles.horizontalLine, conditionState == 'PAN' && { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, conditionState == 'PAN' && { backgroundColor: COLORS.primary }]} />
                <View style={styles.horizontalLine} />
            </View>

            <View style={{ alignItems: 'center', marginTop: height * .05 }}>
                <View style={{ width: width * .93, }}>

                    {
                        conditionState == "ID" ?
                            <>
                                <Text style={styles.ownerText}>Owner Aadhar card</Text>
                                <View style={styles.adharCardTouchMain}>
                                    <TouchableOpacity style={styles.adharCardPicTouch}
                                        activeOpacity={0.3}
                                        onPress={() => ImagePick("aadhar_front")}
                                    >
                                        {postData.aadhar_front ?
                                            <Image source={{ uri: postData.aadhar_front?.uri }} resizeMode='contain' style={styles.adharImg} />
                                            :
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={icons.camera} resizeMode='contain' style={styles.cameraIcon} />
                                                <Text style={styles.sideText}>Front side</Text>
                                            </View>
                                        }
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.adharCardPicTouch}
                                        activeOpacity={0.3}
                                        onPress={() => ImagePick("aadhar_back")}
                                    >
                                        {postData.aadhar_back ?
                                            <Image source={{ uri: postData.aadhar_back.uri }} resizeMode='contain' style={styles.adharImg} />
                                            :
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={icons.camera} resizeMode='contain' style={styles.cameraIcon} />
                                                <Text style={styles.sideText}>Back side</Text>
                                            </View>
                                        }
                                    </TouchableOpacity>
                                </View>
                            </>
                            :
                            conditionState == "DL" ?
                                <>
                                    <Text style={styles.ownerText}>Upload Driving licence</Text>
                                    <View style={{ alignItems: 'center', marginTop: height * .023 }}>
                                        <View style={styles.adharCardTouchMain}>
                                            <TouchableOpacity style={styles.adharCardPicTouch}
                                                activeOpacity={0.3}
                                                onPress={() => ImagePick2("driving_license")}
                                            >
                                                <Image source={postData.driving_license ? { uri: postData.driving_license?.uri } : icons.dl} resizeMode='contain' style={styles.dlImg} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </>
                                :
                                <>
                                    <Text style={styles.ownerText}>Upload Pan Card</Text>
                                    <View style={{ alignItems: 'center', marginTop: height * .023 }}>
                                        <View style={styles.adharCardTouchMain}>
                                            <TouchableOpacity style={styles.adharCardPicTouch}
                                                activeOpacity={0.3}
                                                onPress={() => ImagePick2("pan_card")}
                                            >
                                                <Image source={postData.pan_card ? { uri: postData.pan_card?.uri } : icons.dl} resizeMode='contain' style={styles.dlImg} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </>

                    }

                    <Text style={styles.tipText}>Tip</Text>
                    <Text style={styles.makeText}>Make sure things like Names, Numbers, Address are cleary visible while taking photo</Text>

                </View>
            </View>

            {conditionState == "ID" ?
                <Button1
                    backgroundColor={postData.aadhar_front && postData.aadhar_back ? COLORS.buttonColor : COLORS.gray20}
                    disabled={postData.aadhar_front && postData.aadhar_back ? false : true}
                    style={styles.btnTouch}
                    onPress={() => setConditionState("DL")}
                >Next</Button1>
                :
                conditionState == "DL" ?
                    <Button1
                        backgroundColor={postData.driving_license ? COLORS.buttonColor : COLORS.gray20}
                        disabled={postData.driving_license ? false : true}
                        style={styles.btnTouch}
                        onPress={() => setConditionState("PAN")}
                    >Next</Button1>
                    :
                    <>
                        <Button1
                            backgroundColor={postData.pan_card ? COLORS.buttonColor : COLORS.gray20}
                            disabled={postData.pan_card && !loading ? false : true}
                            loading={loading}
                            style={styles.btnTouch}
                            onPress={() => handleSubmit()}
                        >Save</Button1>
                    </>
            }


        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    UploadDocumentApi
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadDocument)