export interface AUTHSTATE{
    auth:{
        user:{_id:string,email:string,name:string,image:string,phone:string},
        otpdata:object,
        loading:boolean

    }
}

const selectUser = (state:AUTHSTATE) => state.auth.user;
 const selectData = (state:AUTHSTATE) => state.auth.otpdata;
 const selectLoading = (state:AUTHSTATE) => state.auth.loading;
export {selectUser,selectData,selectLoading}