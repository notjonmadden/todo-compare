echo "~~ React ~~"
Get-ChildItem .\react\src\*.tsx -Recurse | gc | measure

echo "~~ Homebrew ~~"
Get-ChildItem .\homebrew\src\*.ts -Recurse | gc | measure