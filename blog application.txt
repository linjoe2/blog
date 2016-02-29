Create a blogging application that allows users to do the following:

- register an account /users/new
	get /users/new - display a form to register
	form: username, password, email adress
	assign usr id
	post /users - write's username


- login /users/login
	post /users/login - login
	forum username pasword
	match if it is in the list
	post /users - reads username


- logout /users/logout



Once logged in, a user should be able to:

- create a post /post/new
	get /users - reads username
	loged in as...
	form: message title, message field

	post /message - writes messages


- view a list of their own posts users/:id
	get /users - reads username
	reads msg id from userdb
	get /message - reads messages linked to usr id


- view a list of everyone's posts /post
	get /message - reads messages
	post all message's


- view a specific post, including the comments people have made about it /post/:msg_id
	get /message - reads messages
	post specific message's
	get /comments - reads comments
	read comments

- leave a comment on a post /post/comment
	place box to comment
	post /comments - writes comments


--------------------------------------------
Prior to coding, determine the following:
- your tables: what columns will they have? How will they connect to one another?

3 tables, usersDB, message_board, 
- usr_id, username, password, emailadress
- msg_id, usr_id,msgt, msg, cmnt_id's
- cmnt_id, usr_id, message

- your routes: what routes should you have? What should each route do?
Once you are done designing your application, then proceed with coding.
Submit this document in a text file as part of your application.

get /users/new - display a form to register
get /users/login - login
get /users - reads username
post /users - write's username
 
get /message - reads messages
post /message - writes messages
 
get /comments - reads comments
post /comments - writes comments


Other requirements:
Your routes must be "RESTful". See slide 4 of the http requests lecture: Link. Also look at the RESTful routing example in the node sample apps: Link (Links to an external site.)
You must use Sequelize for this assignment. Your connection string must once again be read from the environment variables you set up for the Bulletin Board assignment.
Commit well - each commit should ideally be a new piece of functionality.

By 


----------
message:
haalt bericht op
zoekt database naar id van sessions.email
stuur id naar juiste veld
plaatst in database
stuurt terug naar nieuwe pagina /post/:msgid
