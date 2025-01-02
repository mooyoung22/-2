app.put('/user/:id/',(req,res)=>{
    let id req.params.id
    let updateUser = req.body

    //หา user จาก id ที่ส่งมาก
    let selecetindex = users.findIndex(user.id == id)

    // update user นั้น
    users[selecetindex].firsname = updateUser.firsname 
    users[selecetindex].last = updateUser.lastname
    users[selecetindex].age = updateUser.age
    users[selecetindex].gender = updateUser.gender

})