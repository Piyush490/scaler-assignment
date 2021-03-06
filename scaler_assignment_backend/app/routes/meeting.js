const express = require('express');
const router = express.Router();
const meetingController = require("./../../app/controllers/meetingController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/meetings`;

    
    app.post(`${baseUrl}/addMeeting`, auth.isAuthorized, meetingController.addMeetingFunction);
    

    // params: meetingId.
    app.put(`${baseUrl}/:meetingId/updateMeeting`, auth.isAuthorized, meetingController.updateMeetingFunction);
    

    // params: meetingId.
    app.post(`${baseUrl}/:meetingId/delete`, auth.isAuthorized, meetingController.deleteMeetingFunction);

    


    app.get(`${baseUrl}/view/all/meetings/:userId`, auth.isAuthorized, meetingController.getAllMeetingsFunction);
    


    // params: meetingId.
    app.get(`${baseUrl}/:meetingId/details`, auth.isAuthorized, meetingController.getMeetingDetailsFunction);
    


    // params: meetingId.
    app.post(`${baseUrl}/admin-meetings/sentReminders`, auth.isAuthorized, meetingController.sendReminderForTodaysMeetings);
    

}



