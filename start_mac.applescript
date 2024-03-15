set scriptPath to path to me
set scriptDir to POSIX path of (scriptPath as text)
set projectPath to quoted form of POSIX path of (do shell script "dirname " & scriptDir)

tell application "Terminal"
	do script "cd " & projectPath & " && npm start"
end tell

-- Wait for the server to start
delay 3

-- Open the client in default browser as app
set clientURL to "http://localhost:3000"
do shell script "open -na 'Google Chrome' --args --new --background --app=" & quoted form of clientURL