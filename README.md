# javascript_concepts
JavaScript concepts

# There are two ways to execute these JS files 
#   Using Node.JS       (Without Browser)
       Open termial using (control + ~)
       Type command --> node <filename>.js --> node array.js
       Output will be visible in console window

#   Using Index.HTML    (With Browser)
        Open index.html file and add the JS file want to execute
        <script src="array.js"></script> (here we are executing array.js)
        then we have below two options to run index.html into browser
            1. Locally host index.html with http-server (Recomended)
                Navigate to the location in terminal where index.html is located
                Start the server with command -> http-server
                In Console, it will prompt the port number -> http://10.2.0.2:8080
                Open browser and enter URL -> http://localhost:8080/index.html
                Use debugger tool (F12) to start debugging.

            2. Locally host with VS Code - Live Server
                Install Live Server extension 
                Click the "Go Live" button that appears in the bottom-right corner of the editor's status bar.
                default browser will automatically open the file at a local address like 127.0.0.1. 
                Any changes you save will automatically refresh the browser page. 

            2. Open index.html locally (Not Recomended)
                Open index.html in file explorer and just dowble click on this file to open it in browser.
                Not recomeneded as it got many limitations like CORS, also cannot load ES Module - <script type="module" src="array.js"></script>