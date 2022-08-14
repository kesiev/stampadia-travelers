let AVATARPALETTES={
    // Body types
    humanBody: [ "avatarBodyNormal","avatarBodyNormal","avatarBodyNormal","avatarBodyChest", "avatarBodyMuscle" ],
    hugeBody: [ "avatarBodyHuge" ],
    skeletonBody: [ "avatarBodySkeleton" ],
    rudeBody: [ "avatarBodyChest", "avatarBodyMuscle" ],
    monsterBody: [ "avatarBodyMuscle", "avatarBodyChest" ],
    lightArmorBody:[ "avatarBodyLightArmor" ],
    darkArmorBody:[ "avatarBodyDarkArmor" ],
    mageBody:[ "avatarBodyLightMage", "avatarBodyDarkMage" ],
    ghostBody:[ "avatarBodyGhost" ],
    nightmareBody:[ "avatarBodyNightmare" ],
    // Dress types
    humanDress: [ 0, 0, 0, 0, 0, "avatarDressButtons", "avatarDressTunic", "avatarDressLord", "avatarDressEvilBanner", "avatarDressCollar", "avatarDressBelts", "avatarDressOpened", "avatarDressTop", "avatarDressKnots", "avatarDressDoubleCross" ],
    guardDress:[ 0, 0, "avatarDressButtons", "avatarDressEvilBanner", "avatarDressBelts" ],
    leaderDress:[ 0, 0, "avatarDressLord", "avatarDressCollar", "avatarDressBelts", "avatarDressTop" ],
    // HeadDecoration types
    monsterHeadDecoration: [ 0, "avatarHeadDecorationHorns", "avatarHeadDecorationCaprineHorns", "avatarHeadDecorationLargeHorns", "avatarHeadDecorationCurvedHorns", "avatarHeadDecorationMultipleHorns", "avatarHeadDecorationBullHorns" ],
    leaderHeadDecoration: [ 0, "avatarHeadDecorationHorns", "avatarHeadDecorationCaprineHorns", "avatarHeadDecorationLargeHorns", "avatarHeadDecorationCurvedHorns", "avatarHeadDecorationMultipleHorns", "avatarHeadDecorationBullHorns" ],
    dwarfHeadDecoration: [ "avatarHeadDecorationHorns" ],
    // Head types
    humanHead: [ "avatarHeadRound", "avatarHeadLong", "avatarHeadSquared", "avatarHeadEgg", "avatarHeadRectangle", "avatarHeadSlim", "avatarHeadCircle", "avatarHeadSquare", "avatarHeadSpikey", "avatarHeadChin" ],
    rudeHead: [ "avatarHeadSquared", "avatarHeadLong", "avatarHeadEgg", "avatarHeadRectangle", "avatarHeadSlim", "avatarHeadCircle", "avatarHeadSquare", "avatarHeadSpikey", "avatarHeadChin" ],
    monsterHead: [ "avatarHeadSquared", "avatarHeadEgg", "avatarHeadRectangle", "avatarHeadSlim", "avatarHeadSquare", "avatarHeadSpikey" ],
    // Helmet type
    humanHat:[ 0, 0, 0, 0, 0, 0, "avatarHatTurban", "avatarHatSimple", "avatarHatPoint", "avatarHatFarmer" ],
    guardHat: [ "avatarHatHelmet", "avatarHatFlatHelmet" ],
    darkArmorHat: [ "avatarHatDarkHelmet", "avatarHatDarkFlatHelmet" ],
    lightArmorHat: [ "avatarHatHelmet", "avatarHatFlatHelmet" ],
    leaderHat: [ 0, "avatarHatDarkHelmet", "avatarHatDarkFlatHelmet" ],
    executionerHat: [ "avatarHatExecutioner" ],
    dwarfHat: [ "avatarHatSimpleHelmet" ],
    // Eye types
    humanEye: [ "avatarEyesNormal", "avatarEyesFoxy", "avatarEyesSmall", "avatarEyesClosed", "avatarEyesFeline", "avatarEyesSqueezed","avatarEyesWideOpen" ],
    rudeEye: [ "avatarEyesFoxy", "avatarEyesFeline", "avatarEyesClosed", "avatarEyesSqueezed","avatarEyesWideOpen" ],
    monsterEye: [ "avatarEyesFoxy", "avatarEyesEvil", "avatarEyesHoles", "avatarEyesWhite", "avatarEyesWideOpen", "avatarEyesFeline" ],
    skeletonEye:[ "avatarEyesNormal", "avatarEyesFoxy", "avatarEyesSmall", "avatarEyesHoles", "avatarEyesWhite", "avatarEyesSqueezed","avatarEyesWideOpen" ],
    zombieEye:[ "avatarEyesHoles", "avatarEyesEvil", "avatarEyesWhite", "avatarEyesSqueezed","avatarEyesWideOpen" ],
    stampadianEye:[ "avatarEyesStampadian" ],
    // FaceDetail types
    humanFaceDetail: [ 0, 0, 0, 0, "avatarFaceDetailBlush", "avatarFaceDetailFreckles", "avatarFaceDetailWrinkles", "avatarFaceDetailScar", "avatarFaceDetailThirdEye", "avatarFaceDetailScary", "avatarFaceDetailFront" ],
    monsterFaceDetail: [ 0, 0, 0, "avatarFaceDetailThirdEye", "avatarFaceDetailScary", "avatarFaceDetailFront" ],
    rudeFaceDetail: [ 0, 0, 0, "avatarFaceDetailWrinkles", "avatarFaceDetailScar", "avatarFaceDetailScary", "avatarFaceDetailFront" ],
    dwarfFaceDetail: [ "avatarFaceDetailBeardTied", "avatarFaceDetailBeardLong" ],
    felineFaceDetail: [ "avatarFaceDetailBeardFeline" ],
    // Eyeberows types
    humanEyebrows: [ 0, "avatarEyebrowsAngry", "avatarEyebrowsPerplex", "avatarEyebrowsAggressive", "avatarEyebrowsScowl", "avatarEyebrowsSmarty", "avatarEyebrowsSorry", "avatarEyebrowsRelaxed", "avatarEyebrowsSuspicious", "avatarEyebrowsDiscouraged" ],
    rudeEyebrows:[ 0, "avatarEyebrowsAngry", "avatarEyebrowsAggressive", "avatarEyebrowsScowl", "avatarEyebrowsSmarty", "avatarEyebrowsSuspicious" ],
    felineEyebrows:[ "avatarEyebrowsFeline" ],
    // EyesDecoration types
    humanEyesDecoration: [ 0, 0, 0, 0, 0, "avatarEyesDecorationGlasses", "avatarEyesDecorationPatch", "avatarEyesDecorationSqueezed", "avatarEyesDecorationSquaredGlasses", "avatarEyesDecorationTinyGlasses", "avatarEyesDecorationGlassesHalf", "avatarEyesDecorationMonocular", "avatarEyesDecorationMissing", "avatarEyesDecorationImplant" ],
    monsterEyesDecoration: [ 0, 0, 0, "avatarEyesDecorationPatch", "avatarEyesDecorationSqueezed", "avatarEyesDecorationPossessed", "avatarEyesDecorationMissing", "avatarEyesDecorationImplant" ],
    nightmareEyesDecoration: [ 0, 0, 0, "avatarEyesDecorationPatch", "avatarEyesDecorationSqueezed", "avatarEyesDecorationPossessed", "avatarEyesDecorationMissing" ],
    creatureEyesDecoration: [ 0, 0, 0, "avatarEyesDecorationSqueezed", "avatarEyesDecorationPossessed", "avatarEyesDecorationMissing" ],
    rudeEyesDecoration: [ 0, 0, 0, 0, "avatarEyesDecorationPatch", "avatarEyesDecorationSqueezed", "avatarEyesDecorationPossessed", "avatarEyesDecorationMonocular", "avatarEyesDecorationMissing", "avatarEyesDecorationImplant" ],
    // Mouth types
    humanMouth: [ "avatarMouthGrin", "avatarMouthAngry", "avatarMouthSurprise", "avatarMouthBusy", "avatarMouthAjar", "avatarMouthSmarty", "avatarMouthEvilSmile", "avatarMouthShocked" ],
    monsterMouth: [ "avatarMouthGrin", "avatarMouthAngry", "avatarMouthVampire", "avatarMouthFurious", "avatarMouthFurious", "avatarMouthAjar", "avatarMouthEvilSmile" ],
    ghostMouth:[  "avatarMouthFurious", "avatarMouthBusy", "avatarMouthAjar", "avatarMouthEvilSmile" ],
    // Nose types
    humanNose: [ "avatarNoseLong", "avatarNoseShort", "avatarNosePointy", "avatarNoseHigh", "avatarNoseRound", "avatarNosePotato", "avatarNoseWhirl", "avatarNoseCrow" ],
    catNose: [ "avatarNoseCat" ],
    monsterNose: [ 0, 0, 0, "avatarNoseLong", "avatarNoseShort", "avatarNoseMonster", "avatarNoseWhirl", "avatarNoseCrow" ],
    nightmareNose: [ "avatarNoseMonster" ],
    skeletonNose: [ "avatarNoseMonster" ],
    // Hair types
    humanHair: [ 0, "avatarHairsShort", "avatarHairsAsym", "avatarHairsLongSide", "avatarHairsShell", "avatarHairsRazor", "avatarHairsSimple", "avatarHairsUnkempt" ],
    zombieHair: [ "avatarHairsZombie", "avatarHairsZombieTop" ],
    catHair: [ "avatarHairsCat" ],
    monsterHair: [ 0, "avatarHairsTuft" ],
    hightmareHair: [ 0, 0, 0, "avatarHairsTuft", "avatarHairsZombie", "avatarHairsRazor", "avatarHairsZombieTop" ],
    // Ear types
    humanEars:[ "avatarEarsNormal", "avatarEarsLarge", "avatarEarsWide", "avatarEarsEarring", "avatarEarsPendant" ],
    goblinEars:[ "avatarEarsPointy", "avatarEarsPointyDent" ],
    monsterEars:[ 0, 0, "avatarEarsMissing", "avatarEarsTube", "avatarEarsGills" ],
    // HeadAccessory types
    humanHeadAccessory: [ 0, 0, 0, "avatarHeadAccessoryTiara", "avatarHeadAccessoryBand", "avatarHeadAccessoryJewel", "avatarHeadAccessoryPearls", "avatarHeadAccessoryTuft", "avatarHeadAccessoryMonk", "avatarHeadAccessoryBandages", "avatarHeadAccessoryMysticBand", "avatarHeadAccessoryBandPointy", "avatarHeadAccessoryRope" ],
    hairlessHeadAccessory: [ 0, 0, 0, "avatarHeadAccessoryTiara", "avatarHeadAccessoryBand", "avatarHeadAccessoryJewel", "avatarHeadAccessoryPearls", "avatarHeadAccessoryMonk", "avatarHeadAccessoryBandages", "avatarHeadAccessoryMysticBand", "avatarHeadAccessoryBandPointy", "avatarHeadAccessoryRope" ],
    // Accessory types
    humanAccessory: [ 0, 0, 0, 0, 0, "avatarAccessoryGem", "avatarAccessoryCoat", "avatarAccessoryNecklace", "avatarAccessoryShoulderBag", "avatarAccessoryPin", "avatarAccessoryBandana", "avatarAccessoryPriest", "avatarAccessoryIronCollar", "avatarAccessoryVictorianCollar", "avatarAccessoryLock" ],
    noHeadAccessory: [ 0, 0, 0, "avatarAccessoryGem", "avatarAccessoryCoat", "avatarAccessoryNecklace", "avatarAccessoryShoulderBag", "avatarAccessoryPin", "avatarAccessoryBandana", "avatarAccessoryLock" ],
    evilAccessory: [ 0, 0, "avatarAccessoryGem", "avatarAccessoryCoat", "avatarAccessoryNecklace", "avatarAccessoryIronCollar", "avatarAccessoryLock" ],
    // Weapon types
    humanWeapon: [ 0, 0, 0, 0, 0, "avatarWeaponSword", "avatarWeaponPunches", "avatarWeaponPike", "avatarWeaponFists", "avatarWeaponClub", "avatarWeaponStaff", "avatarWeaponAxe", "avatarWeaponBow", "avatarWeaponKnife" ],
    guardWeapon: [ "avatarWeaponSword", "avatarWeaponPunches", "avatarWeaponPike", "avatarWeaponAxe", "avatarWeaponBow" ],
    monsterWeapon: [ 0, 0, "avatarWeaponPunches", "avatarWeaponFists", "avatarWeaponClub" ],
    armlessWeapon: [ "avatarWeaponSword", "avatarWeaponPike", "avatarWeaponClub", "avatarWeaponStaff" ],
    stampadianWeapon: [ "avatarWeaponSword" ],
    zombieWeapon: [ "avatarWeaponGrab" ],
    dwarfWeapon: [ "avatarWeaponSword", "avatarWeaponPunches", "avatarWeaponFists", "avatarWeaponClub", "avatarWeaponAxe" ],
    nightmareWeapon: [ 0, 0, "avatarWeaponSword", "avatarWeaponPike", "avatarWeaponKnife" ],
}
let AVATARMODELS={
    chest:[
        [ "avatarSpecialChest" ]
    ],
    trap:[
        [ "avatarSpecialTrap" ]
    ],
    enemy:[
        AVATARPALETTES.humanBody,
        AVATARPALETTES.humanDress,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.humanHead,
        AVATARPALETTES.humanEye,
        AVATARPALETTES.humanEyesDecoration,
        AVATARPALETTES.humanEyebrows,
        AVATARPALETTES.humanFaceDetail,
        AVATARPALETTES.humanMouth,
        AVATARPALETTES.humanHair,
        AVATARPALETTES.humanHeadAccessory,
        AVATARPALETTES.humanEars,
        AVATARPALETTES.humanHat,
        AVATARPALETTES.humanNose,
        AVATARPALETTES.humanWeapon,
    ],
    rudeEnemy:[
        AVATARPALETTES.rudeBody,
        AVATARPALETTES.humanDress,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.rudeHead,
        AVATARPALETTES.rudeEye,
        AVATARPALETTES.rudeEyesDecoration,
        AVATARPALETTES.rudeEyebrows,
        AVATARPALETTES.rudeFaceDetail,
        AVATARPALETTES.humanMouth,
        AVATARPALETTES.humanHair,
        AVATARPALETTES.humanHeadAccessory,
        AVATARPALETTES.humanEars,
        AVATARPALETTES.humanHat,
        AVATARPALETTES.humanNose,
        AVATARPALETTES.humanWeapon,
    ],
    guard:[
        AVATARPALETTES.rudeBody,
        AVATARPALETTES.guardDress,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.rudeHead,
        AVATARPALETTES.rudeEye,
        AVATARPALETTES.rudeEyesDecoration,
        AVATARPALETTES.humanEyebrows,
        AVATARPALETTES.rudeFaceDetail,
        AVATARPALETTES.humanMouth,
        AVATARPALETTES.humanHair,
        AVATARPALETTES.humanEars,
        AVATARPALETTES.guardHat,
        AVATARPALETTES.humanNose,
        AVATARPALETTES.guardWeapon,
    ],
    goblin:[
        AVATARPALETTES.humanBody,
        AVATARPALETTES.humanDress,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.humanHead,
        AVATARPALETTES.humanEye,
        AVATARPALETTES.humanEyesDecoration,
        AVATARPALETTES.humanEyebrows,
        AVATARPALETTES.humanFaceDetail,
        AVATARPALETTES.humanMouth,
        AVATARPALETTES.humanHair,
        AVATARPALETTES.humanHeadAccessory,
        AVATARPALETTES.goblinEars,
        AVATARPALETTES.humanNose,
        AVATARPALETTES.humanWeapon,
    ],
    kingGoblin:[
        AVATARPALETTES.hugeBody,
        AVATARPALETTES.evilAccessory,
        AVATARPALETTES.rudeHead,
        AVATARPALETTES.rudeEye,
        AVATARPALETTES.rudeEyesDecoration,
        AVATARPALETTES.rudeEyebrows,
        AVATARPALETTES.rudeFaceDetail,
        AVATARPALETTES.monsterMouth,
        AVATARPALETTES.monsterHair,
        AVATARPALETTES.hairlessHeadAccessory,
        AVATARPALETTES.goblinEars,
        AVATARPALETTES.monsterNose,
        AVATARPALETTES.nightmareWeapon
    ],
    golem:[
        AVATARPALETTES.monsterBody,
        AVATARPALETTES.monsterHeadDecoration,
        AVATARPALETTES.monsterHead,
        AVATARPALETTES.monsterEye,
        AVATARPALETTES.monsterEyesDecoration,
        AVATARPALETTES.rudeEyebrows,
        AVATARPALETTES.monsterFaceDetail,
        AVATARPALETTES.monsterMouth,
        AVATARPALETTES.monsterEars,
        AVATARPALETTES.monsterHair,
        AVATARPALETTES.monsterNose,
        AVATARPALETTES.monsterWeapon,
    ],
    evilLord:[
        AVATARPALETTES.rudeBody,
        AVATARPALETTES.leaderDress,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.leaderHeadDecoration,
        AVATARPALETTES.monsterHead,
        AVATARPALETTES.monsterEye,
        AVATARPALETTES.rudeEyesDecoration,
        AVATARPALETTES.rudeEyebrows,
        AVATARPALETTES.rudeFaceDetail,
        AVATARPALETTES.monsterMouth,
        AVATARPALETTES.humanHair,
        AVATARPALETTES.humanEars,
        AVATARPALETTES.leaderHat,
        AVATARPALETTES.monsterNose,
        AVATARPALETTES.guardWeapon,
    ],
    magicDarkArmor:[
        AVATARPALETTES.darkArmorBody,
        AVATARPALETTES.leaderHeadDecoration,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.darkArmorHat,
        AVATARPALETTES.armlessWeapon,
    ],
    stampadianGuardian:[
        AVATARPALETTES.darkArmorBody,
        AVATARPALETTES.humanAccessory,
        ["avatarHeadSquared"],
        AVATARPALETTES.stampadianEye,
        AVATARPALETTES.leaderHeadDecoration,
        AVATARPALETTES.stampadianWeapon,
    ],
    magicLightArmor:[
        AVATARPALETTES.lightArmorBody,
        AVATARPALETTES.leaderHeadDecoration,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.lightArmorHat,
        AVATARPALETTES.armlessWeapon,
    ],
    skeleton:[
        AVATARPALETTES.skeletonBody,
        AVATARPALETTES.humanHead,
        AVATARPALETTES.skeletonEye,
        AVATARPALETTES.rudeEyesDecoration,
        AVATARPALETTES.ghostMouth,
        AVATARPALETTES.hairlessHeadAccessory,
        AVATARPALETTES.humanHat,
        AVATARPALETTES.skeletonNose,
        AVATARPALETTES.armlessWeapon,
    ],
    feline:[
        AVATARPALETTES.humanBody,
        AVATARPALETTES.humanDress,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.humanHead,
        AVATARPALETTES.humanEye,
        AVATARPALETTES.humanEyesDecoration,
        AVATARPALETTES.felineEyebrows,
        AVATARPALETTES.humanMouth,
        AVATARPALETTES.humanHeadAccessory,
        AVATARPALETTES.catHair,
        AVATARPALETTES.felineFaceDetail,
        AVATARPALETTES.catNose,
        AVATARPALETTES.humanWeapon,
    ],
    mage:[
        AVATARPALETTES.humanEye,
        AVATARPALETTES.humanEyebrows,
        AVATARPALETTES.mageBody,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.humanWeapon,
    ],
    zombie:[
        AVATARPALETTES.humanBody,
        AVATARPALETTES.humanDress,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.humanHead,
        AVATARPALETTES.zombieEye,
        AVATARPALETTES.creatureEyesDecoration,
        AVATARPALETTES.monsterMouth,
        AVATARPALETTES.zombieHair,
        AVATARPALETTES.humanEars,
        AVATARPALETTES.humanNose,
        AVATARPALETTES.zombieWeapon,
    ],
    executioner:[
        AVATARPALETTES.humanBody,
        AVATARPALETTES.humanDress,
        AVATARPALETTES.humanAccessory,
        ["avatarHeadSquared"],
        AVATARPALETTES.humanEye,
        AVATARPALETTES.executionerHat,
        AVATARPALETTES.guardWeapon,
    ],
    ghost:[
        AVATARPALETTES.ghostBody,
        AVATARPALETTES.skeletonEye,
        AVATARPALETTES.creatureEyesDecoration,
        AVATARPALETTES.humanEyebrows,
        AVATARPALETTES.ghostMouth,
        AVATARPALETTES.noHeadAccessory,
        AVATARPALETTES.armlessWeapon,
    ],
    dwarf:[
        AVATARPALETTES.humanBody,
        AVATARPALETTES.dwarfHeadDecoration,
        AVATARPALETTES.humanDress,
        AVATARPALETTES.humanAccessory,
        AVATARPALETTES.humanHead,
        AVATARPALETTES.humanEye,
        AVATARPALETTES.creatureEyesDecoration,
        AVATARPALETTES.humanEyebrows,
        AVATARPALETTES.dwarfFaceDetail,
        AVATARPALETTES.humanMouth,
        AVATARPALETTES.humanHair,
        AVATARPALETTES.hairlessHeadAccessory,
        AVATARPALETTES.humanEars,
        AVATARPALETTES.dwarfHat,
        AVATARPALETTES.humanNose,
        AVATARPALETTES.dwarfWeapon,
    ],
    nightmare:[
        AVATARPALETTES.nightmareBody,
        AVATARPALETTES.evilAccessory,
        AVATARPALETTES.monsterHeadDecoration,
        AVATARPALETTES.monsterHead,
        AVATARPALETTES.monsterEye,
        AVATARPALETTES.nightmareEyesDecoration,
        AVATARPALETTES.rudeEyebrows,
        AVATARPALETTES.monsterFaceDetail,
        AVATARPALETTES.monsterMouth,
        AVATARPALETTES.hightmareHair,
        AVATARPALETTES.monsterEars,
        AVATARPALETTES.nightmareNose,
        AVATARPALETTES.nightmareWeapon,
    ]
};