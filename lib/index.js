Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _reactNative=require("react-native");var ReactNativeBiometrics=_reactNative.NativeModules.ReactNativeBiometrics;var _default={TouchID:'TouchID',FaceID:'FaceID',isSensorAvailable:function isSensorAvailable(){return ReactNativeBiometrics.isSensorAvailable();},createKeys:function createKeys(promptMessage){return ReactNativeBiometrics.createKeys(promptMessage);},deleteKeys:function deleteKeys(){return ReactNativeBiometrics.deleteKeys();},createSignature:function createSignature(promptMessage,payload){return ReactNativeBiometrics.createSignature(promptMessage,payload);},simplePrompt:function simplePrompt(promptMessage){return ReactNativeBiometrics.simplePrompt(promptMessage);}};exports.default=_default;