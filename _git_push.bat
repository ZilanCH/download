@echo off
:menu
cls
echo ================================
echo GitHub Script Menu
echo ================================
echo 1. Pull from GitHub
echo 2. Commit & Push (set commit message)
echo 3. Pull, Commit & Push (set commit message)
echo 4. Exit
echo.
set /p choice=Choose an option (1-4): 

if "%choice%"=="1" goto pull
if "%choice%"=="2" goto commitpush
if "%choice%"=="3" goto both
if "%choice%"=="4" exit
goto menu

:pull
git pull origin main
pause
goto menu

:commitpush
set /p msg=Enter commit message: 
git add .
git commit -m "%msg%"
git push origin main
pause
goto menu

:both
git pull origin main
set /p msg=Enter commit message: 
git add .
git commit -m "%msg%"
git push origin main
pause
goto menu