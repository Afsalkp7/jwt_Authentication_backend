import studentCollection from '../model/student.js';

export const dashboardView = (req,res)=>{
    return res.json({valid:true,message:"authorized"})
}