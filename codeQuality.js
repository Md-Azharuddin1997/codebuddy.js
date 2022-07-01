// level 2
async function getUsers() {
    try{
        let doc = await Promise.all(getUser(), getProfile(), getPosts());
    
        let [user, profile, p] = [...doc]
    
        return userProfile = {
                user,
                profile,
                posts: p
            };
    }catch(error){
        console.log(error)
        return "user data not found";
    }
  }