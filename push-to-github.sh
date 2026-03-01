#!/bin/bash
# Script to push workshop5 to GitHub
# Run this from inside the workshop5 folder

git config user.email "aouinirayen@gmail.com"
git config user.name "aouinirayen"

# If repo already initialized, just add remote and push
git remote remove origin 2>/dev/null
git remote add origin https://github.com/aouinirayen/workshop5.git
git branch -M main
git push -u origin main

echo "✅ Push terminé vers https://github.com/aouinirayen/workshop5.git"
