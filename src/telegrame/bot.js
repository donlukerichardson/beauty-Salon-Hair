import axios from "axios";

const ArtflixBot = "5328622360:AAGawY0mHeHGsgwXX_J7TO62j0r7iTNcKOE"
const telegramId = '-1001763815503' // contacts;

const sendContact = (msg , ChatId = telegramId , bot = ArtflixBot) => {
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
