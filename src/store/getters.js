const  getters={
    id:state=>state.user.user.id,
    token: state => state.user.token,
    avatar:state=>state.user.user.avatar,
    city:state=>state.user.user.city,
    school:state=>state.user.user.school,
    company:state=>state.user.user.company,
    personLink:state=>state.user.user.personLink,
    nickname:state=>state.user.user.nickname,
    motto:state=>state.user.user.motto,
    birthday:state=>state.user.user.birthday,
    email:state=>state.user.user.email,
    job:state=>state.user.user.job
}

export default getters