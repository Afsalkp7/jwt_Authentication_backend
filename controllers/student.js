import studentCollection from '../model/student.js';

export const registerStudent = (req,res) => {
    const {email,password} = req.body;
    studentCollection.create({email,password})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}

