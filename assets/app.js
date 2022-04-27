var Menu = ""

const unblockingBrower = 'https://accidentreturns.com';

const AppInfo = "Crafterbot's Menu";
const AppVersion = "1.0.0";
const key = 'crafterbot9';
const listOfCommands = `help - List commands    \n  gc - Warp to google classroom   \n  gd - Warp to google docs   \n  unblock - Opens unblocking brower   \n  y - Opens youtube   \n  t - Allows you to edit a webpage like a document(toggle)    \n  tips - Shows you tips for unblocking    \n  about - Shows info about the app and me.`;

Menu = prompt(`\n ${AppInfo} - ${AppVersion} \n \n Security check \n \n Please fill out the password to continue.`);
if (Menu === key) {
    load();
} else {
    Menu = alert('Password incorrect. \n \n All attempts are logged. This device will be terminated if multiple failed security checks occur.')
}
function load() {
    Menu = prompt(`\n ${AppInfo} - ${AppVersion} \n \n Type help to see a list of commands.`);
    CheckPromptResults();
}

function CheckPromptResults() {
    if (Menu === 'help' || Menu === 'Help') {
        Menu = alert(`${listOfCommands}`);
        load();
    }
    else if (Menu === 'gc' || Menu === 'Gc' || Menu === 'GC' || Menu === 'gC') {
        window.open('https://classroom.google.com/h')
    }
    else if (Menu === 'gd' || Menu === 'Gd' || Menu === 'GD' || Menu === 'gD') {
        window.open('https://docs.google.com/document/u/0/')
    }
    else if (Menu === 'unblock' || Menu === 'Unblock') {
        Menu = alert(`${AppInfo} \n \n This unblocking brower uses the Ludicrous unblocking brower If it is blocked in your school districted DM me on discord.`)

        var a = document.createElement("iframe") || document.getElementById('636738947');
        a.setAttribute("allow", "fullscreen");
        a.src = unblockingBrower;
        a.id = "636738947";
        a.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";


        document.body.addEventListener('keydown', keydown);


        document.body.appendChild(a);
    } else if (Menu === 'y' || Menu === 'Y') {
        window.open('https://youtube.com/');
    } else if (Menu === 't' || Menu === 'T') {
        if (document.body.contentEditable === 'true') {
            document.body.designMode = 'off';
            document.body.contentEditable = 'false';
        } else {
            document.body.designMode = 'on';
            document.body.contentEditable = 'true';
        }
    } else if (Menu === 'tips' || Menu === 'Tips') {
        Menu = alert('Tips for unblocking. \n \n 1. Never show anybody tools you use for unblocking. \n 2. Make sure you remember that this can be blocked. \n 3. Never hint to you having a unblocking brower. \n 4. If your school uses an extensions to control your computer try to use google chrome webstore. If you find a unblocked app attempt to use google accounts or facebook accounts to get to a brower. A brower on a app will be unblocked.');
        load();
    } else if(Menu === 'about' || Menu === 'About') {
        Menu = alert(`${AppInfo} - ${AppVersion} \n \n This app was developed by Crafterbot. \n This project page https://github.com/TheOmag/Crafterbot-s-Menu-Bookmarklet \n Github: https://github.com/TheOmag \n Discord: https://discord.com/invite/MyU9mBR352 \n \n Make sure you check for updated regularly on my discord server or on my github page.`)
        load();
    } else if (Menu === '' || Menu === ' ') {
        Menu.alert("Closing Menu");
    }
    else
    {
        Menu = alert('Invalid command');
    }
}

function keydown(e) {
    if (e.code === 'Backquote') {
        var x = document.getElementById('636738947').remove();
    }
}
