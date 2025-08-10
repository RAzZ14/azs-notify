fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'AZ-SCRIPTS'
description 'Advanced and Customizable Notification System - Standalone & Optimized'
version '1.0.0'

shared_script 'config.lua'
client_script 'client.lua'
server_script 'server.lua'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js',
    'html/sounds/notification.mp3'
}

exports {
    'Notify',
    'Success',
    'Warning',
    'Error'
}

server_exports {
    'Notify',
    'Success',
    'Warning',
    'Error'
}