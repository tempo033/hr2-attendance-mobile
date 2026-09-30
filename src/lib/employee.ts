import {supabase} from './supabase';
export async function getEmployeeRequests(){const {data,error}=await supabase.functions.invoke('employee-api',{method:'GET'});if(error)throw error;return data}
export async function requestAdvance(amount:number,installments:number,reason:string){const {data,error}=await supabase.functions.invoke('employee-api',{method:'POST',body:{action:'request_advance',amount,installments,reason}});if(error)throw error;return data}
export async function requestPermission(permission_type:string,start_at:string,end_at:string,reason:string){const {data,error}=await supabase.functions.invoke('employee-api',{method:'POST',body:{action:'request_permission',permission_type,start_at,end_at,reason}});if(error)throw error;return data}
