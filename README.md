## Simple webserver

### Usage

    $> yarn start
    
By default the server will serve the `www`

    $> yarn start xyz
    
Now, it will serve everything inside the folder `xyz` from 'http://localhost:8080'

However, you can also define a default baseURL

    $> yarn start www a/b/c
    
This time the `www` folder is accessible through http://localhost:8080/a/b/c

