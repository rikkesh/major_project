"use server"
import { prisma } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"


export const fetchusers = async () =>{
    try{
        const clerkUser =await currentUser()
        let mongoUser = null
        mongoUser =await prisma.user.findunique({
            where:{
                clerkUserId: clerkUser?.id
            }
        })


        if(!mongoUser){
            let username = clerkUser?.username
            if (!username){
                username = clerkUser?.firstName + " " +clerkUser?.lastName
            }
            const newUser ={
                clerkUserId: clerkUser?.id,
                username,
                email: clerkUser?.emailAddresses[0].emailAddress,
                profilePic: clerkUser?.imageUrl
            }
            mongoUser = await prisma.user.create({
                data: newUser
            })
        }


        const quizResult = await prisma.quizResult.findMany({
            where: {
                userId: mongoUser.id
            }
        })


        return{
            data:{
                user: mongoUser,
                quizResult: quizResult 
            }
        }
    } catch(error){
        console.log(error)
    }


}