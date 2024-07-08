import studentCollection from '../model/student.js';

export const dashboardView = async (req,res)=>{
    return res.json({valid:true,message:"authorized"})
}