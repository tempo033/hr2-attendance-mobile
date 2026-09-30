import * as Keychain from 'react-native-keychain';
import {Platform} from 'react-native';
const KEY='hr2_attendance_device_id';
function uuid(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0,v=c==='x'?r:(r&3|8);return v.toString(16)})}
export async function getDeviceId(){const item=await Keychain.getGenericPassword({service:KEY});if(item&&typeof item==='object')return item.password;const id=uuid();await Keychain.setGenericPassword('device',id,{service:KEY});return id}
export function getPlatform(){return Platform.OS==='ios'?'ios':'android' as const}
