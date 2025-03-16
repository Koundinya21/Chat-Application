import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket.js/socket.js";
// import { getReceiverSocketId } from "../socket/socket.js";

export const sendMessage=async(req,res)=>{
    try{

        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage=new Message({
            senderId:senderId,
            receiverId:receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }


        const receiversSocketId=getReceiverSocketId(receiverId);
        if(receiversSocketId){
            // io.to(socket_id).emit() used to send events to specific client
            io.to(receiversSocketId).emit("newMessage",newMessage);
        }

        // await conversation.save();
        // await newMessage.save();

        //This wil run in parallel
        await Promise.all([conversation.save(),newMessage.save()]);

        //SOCKET IO FUNCTIONALITY will GO HERE
        




    }catch(error){
        console.log("Error in Send Message controller: ",error.message);
        res.status(500).json({error:'Internal Sernver Error'});
    }
}


export const getMessages=async(req,res)=>{
    try{
        const {id:userToChatId}=req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages") // Not Reference But Actual Messages

        if(!conversation) return res.status(200).json([])

        const messages=conversation.messages;

        res.status(200).json(conversation.messages);
    }catch(error){
        console.log("Error in getMessages controller: ",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}