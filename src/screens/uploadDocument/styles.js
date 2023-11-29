import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../constants'
const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
    UploadDriverDocumentCont: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    indicatorMain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * .01,
        justifyContent: 'center'
    },
    horizontalLine: {
        width: width * .25,
        height: 2.4,
        backgroundColor: COLORS.gray20
    },
    dot: {
        width: width * .03,
        height: width * .03,
        backgroundColor: COLORS.gray20,
        borderRadius: 100
    },
    idTextMain: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
        // paddingHorizontal: width * .15,
        marginTop: height * .015
    },
    idDlText: {
        width: width * .25,
        color: COLORS.gray40,
        fontFamily: FONTS.medium,
        marginBottom: -3,
        textAlign: 'right',
    },



    // ==============adhar card===========
    adharCardPicTouch: {
        borderWidth: 1.7,
        borderColor: COLORS.primary,
        width: width * .44,
        height: height * .145,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    adharCardTouchMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height * .02
    },
    ownerText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        fontSize: 17
    },
    cameraIcon: {
        width: width * .08,
        height: width * .08
    },
    sideText: {
        color: COLORS.primary,
        fontFamily: FONTS.medium,
    },
    adharImg: {
        width: width * .4,
        height: height * .13
    },




    // ============make========
    tipText: {
        color: COLORS.gray80,
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        marginTop: height * .06
    },
    makeText: {
        color: COLORS.gray40,
        fontFamily: FONTS.regular,
        fontSize: 13
    },


    // ==============dl===========
    dlImg: {
        width: width * .65,
        height: height * .2,
        borderRadius: 10
    },

    // =========btn==========
    btnTouch: {
        width: width * .94,
        position: 'absolute',
        bottom: height * .02,
    },
    
})