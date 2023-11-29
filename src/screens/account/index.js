import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import globalStyles from '../../styles/globalStyles';
import { COLORS, images } from '../../constants';
import styles from './styles';
import Icons from '../../component/Icons';
import { connect } from 'react-redux';
import { GetUserDataApi, LogoutApi } from '../../redux/actions/authActions';
import Loading from '../../component/loading';
import { http2 } from '../../services/api';


const ScreenNavigation = ({ iconName, onPress, children }) => {
    return (
        <TouchableOpacity
            style={[styles.screen_btn, children == "Logout" && { borderBottomWidth: 0 }]}
            onPress={onPress}
        >
            <Icons name={iconName} size={25} color={COLORS.secondary} style={styles.icon_style} />
            <Text style={styles.screen_title}>{children}</Text>
        </TouchableOpacity>
    )
}

const Account = ({ navigation, LogoutApi, loading, userData, GetUserDataApi }) => {

    useEffect(() => {
        GetUserDataApi()
    }, [])

    return (
        <>
            {loading ?
                <Loading />
                :
                <View style={globalStyles.container}>
                    <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />
                   
                        <View style={styles.profile_box}>
                            <View style={styles.image_box}>
                                <Image source={userData?.profile_picture ? { uri: userData.profile_picture } : images.profile1} style={styles.profile}
                                    resizeMode='stretch'
                                />
                            </View>
                            <Text style={styles.user_name}>{`${userData?.driver_details?.delivery_boy_name}`}</Text>
                            {/* <Text style={styles.text}>Welcome Back</Text> */}
                        </View>

                    {/* button container */}
                    <View style={styles.btn_container}>
                        <ScreenNavigation
                            iconName={"profile"}
                            onPress={() => navigation.navigate("EditProfile")}
                        >Edit Profile</ScreenNavigation>
                        
                       
                        <ScreenNavigation
                            iconName={"docs"}
                            onPress={() => navigation.navigate("UploadDocument")}
                        >Upload Document</ScreenNavigation>
                        <ScreenNavigation
                            iconName={"logout"}
                            onPress={LogoutApi}
                        >Logout</ScreenNavigation>
                    </View>
                </View>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    loading: state.auth.loading,
})

const mapDispatchToProps = {
    LogoutApi,
    GetUserDataApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)