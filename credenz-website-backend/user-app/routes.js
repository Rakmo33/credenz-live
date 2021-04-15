const express = require('express');
const router = express.Router();
const c = require('./controller');

// <--------------------- GET REQUEST ------------------------>
router.get('/allevents', c.allevents);                                                      // all events
router.get('/updates', c.updates);                                                          // all updates
router.get('/user/:username', c.userdetials);                       // user details
router.get('/:username/played', c.checkUserParams, c.authToken, c.allowAdmin, c.played);    // total played event by the user
router.get('/:username/present', c.present);  // total present events by the user
// router.get('/leaderboard', c.leaderboard);
router.get('/sponsors', c.sponsors); 
router.get('/regcount', c.regcount);


// <--------------------- POST REQUEST ------------------------>
router.post('/signup', c.signup);                                                          // Signup
router.post('/login', c.login);
router.post('/:username/sendmail', c.sendmail);                                                            // Login
router.post('/:username/:event', c.checkUserParams, c.authToken, c.private, c.register);   // User Register for the Event
router.post('/addteam', c.authToken, c.createteams);
router.post('/payment', c.payment);   
                                      // add Teams
// router.post('/leaderboard', c.leaderboard);

// <--------------------- PUT REQUEST ------------------------>
router.put('/:username/update', c.authToken, c.private, c.updateuser);  // Update User details

// <--------------------- ADMIN ------------------------>
router.get('/allteams', c.createteams);                                       // All teams
router.get('/allusers', c.allusers);                                          // All Users
router.get('/allregs', c.authToken, c.onlyAdmin, c.allregs);                  // All registrations
router.get('/event/:event', c.authToken, c.onlyAdmin, c.eventusers);          // All registrations of the event
router.get('/admin/allregs/:id',  c.authToken, c.onlyAdmin ,c.allregsid);     // View that registration
router.post('/admin/allregs/:id',  c.authToken, c.onlyAdmin ,c.allregsid);    // Approve Registrations with given ID
router.post('/addupdate', c.authToken, c.onlyAdmin, c.updates);               // Adding Update
router.post('/eventlogin', c.eventlogin);     // Login From the main Event
router.post('/addevent', c.authToken, c.onlyAdmin, c.allevents);        // Add any event
router.put('/edit/:event', c.authToken, c.onlyAdmin, c.allevents);      // Edit particular Event

module.exports = router;

// MIDDLE WARES 
// authToken -> check JWT token correct or not and authenticate user
// private -> compare url user with authenticated user, only he can access
// allowAdmin -> compare url name with authenticated user and admin users, both user and admin can access
// onlyAdmin -> Only admin user can access
// checkUserParams -> check url params exists or not 
// onlyAdmin -> only admin can access