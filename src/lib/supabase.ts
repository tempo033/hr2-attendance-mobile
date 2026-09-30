import 'react-native-url-polyfill/auto';
import * as Keychain from 'react-native-keychain';
import {createClient} from '@supabase/supabase-js';
const url=process.env.EXPO_PUBLIC_SUPABASE_URL;const key=process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
if(!url||!key)throw new Error('Missing Supabase environment variables');
const storage={getItem:async(k:string)=>{const x=await Keychain.getGenericPassword({service:k});return x&&typeof x==='object'?x.password:null},setItem:async(k:string,v:string)=>{await Keychain.setGenericPassword('supabase',v,{service:k})},removeItem:async(k:string)=>{await Keychain.resetGenericPassword({service:k})}};
export const supabase=createClient(url,key,{auth:{storage,autoRefreshToken:true,persistSession:true,detectSessionInUrl:false}});
