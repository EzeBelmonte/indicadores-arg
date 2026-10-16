@echo off
start "Indicadores - Frontend y Backend" cmd /k "cd /d ""%~dp0"" && start "" /b pnpm dev && vercel dev"