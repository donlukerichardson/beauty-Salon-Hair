import axios from "axios";

const LamassatiBot = "5315167378:AAEDQ3MA1Mhipy-4lBv9MDeOGD__eaU3Twc"
const telegramId = '-1001638375748' // contacts;

const sendContact = (msg , ChatId = telegramId , bot = LamassatiBot) => {
    const message = msg = encodeURI(msg);

    const dataParams = new URLSearchParams({
        'chat_id' : ChatId ,'text' : message,'parse_mode' : "html",'disable_web_page_preview' : true,
        'disable_notification' : false //,'reply_to_message_id' : null,'reply_markup' : null
      });

      const params = dataParams.toString();
      const url = `https://api.telegram.org/bot${bot}/sendMessage?${decodeURI(params)}`;
  
    axios.get(url).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })

}


export {
    sendContact
}

   
// const message = `new contact \n
// firstname : ${firstname} \n
// lastname : ${lastname} \n
// email : ${email} \n 
// phone : ${phone} \n
// date : ${date}` ;
// sendContact(message)
