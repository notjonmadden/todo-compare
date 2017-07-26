function Clean-Folder
{
    param (
        [string]$Path
    )

    Push-Location
    
    cd $Path
    rm bundle.js
    rm bundle.min.js
    rm ./src/index.js
    rm ./src/components/*.js

    Pop-Location
}

Clean-Folder ./homebrew
Clean-Folder ./react