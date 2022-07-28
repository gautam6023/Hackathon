import Message from "../models/message.model";

messageRouter.post('/',createMessage)
messageRouter.get('/:chatId',getMessages)



export const createMessage = async (req, res) => {

    const { userId, receiverId,message } = req.body;

    let messageData
    try {
        messageData = await Message.create({userId,receiverId,message})
        res.status(200).json({ messageData })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

export const getMessages = async (req,res)=>{
  const {chatId} = req.params;

  let messageData
    try {
        messageData = await Message.findOne({chatId})
        res.status(200).json({ messageData })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
 
}

// export const getmessage

module.exports ={
    createMessage, 
    getMessages 
}