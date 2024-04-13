@echo off

rem Open the browser
start "Chrome" "C:\Program Files\Google\Chrome\Application\chrome.exe" --app="http://localhost:3000"

rem Start the system
cmd /k npm start

rem Wait for the server to start
timeout /t 5

rem Open the browser once the client is running
echo Waiting for system to start...
:waitForSystemUp
timeout /t 2 /nobreak >nul
tasklist /fi "imagename eq node.exe" | find /i "node.exe" >nul
if errorlevel 1 goto waitForSystemUp

rem Wait for the user to close the client command line window
:waitForSystemClose
timeout /t 2 /nobreak >nul
tasklist /fi "imagename eq cmd.exe" | find /i "cmd.exe" >nul && goto :waitForSystemClose

rem Terminate the server once the client command line window is closed
taskkill /f /im node.exe

echo System stopped.
pause
