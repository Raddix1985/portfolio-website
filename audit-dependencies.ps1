$ErrorActionPreference = "Stop"

$Root = Get-Location
$Package = Get-Content package.json -Raw | ConvertFrom-Json

$Excluded = '\\(node_modules|\.next|\.git|dist|build)\\'
$Extensions = @("*.ts", "*.tsx", "*.js", "*.jsx", "*.mjs", "*.cjs")

$Files = Get-ChildItem -Path $Root -Recurse -File -Include $Extensions |
    Where-Object { $_.FullName -notmatch $Excluded }

$Source = ($Files | ForEach-Object {
    Get-Content $_.FullName -Raw
}) -join "`n"

$Dependencies = @()

foreach ($Section in @("dependencies", "devDependencies")) {
    $Entries = $Package.$Section

    if ($Entries) {
        foreach ($Property in $Entries.PSObject.Properties) {
            $Name = $Property.Name

            $Pattern = "(?<![\w@/-])" + [regex]::Escape($Name) + "(?![\w/-])"
            $Matches = [regex]::Matches($Source, $Pattern)

            $Dependencies += [PSCustomObject]@{
                Package = $Name
                DeclaredVersion = $Property.Value
                Section = $Section
                ReferenceCount = $Matches.Count
                Status = if ($Matches.Count -gt 0) {
                    "Referenced"
                } else {
                    "Potentially unused"
                }
            }
        }
    }
}

$Dependencies = $Dependencies | Sort-Object Section, Package

$Dependencies | Export-Csv ".\dependency-usage.csv" -NoTypeInformation

$Dependencies | Format-Table -AutoSize

Write-Host "`nDependency inventory saved to dependency-usage.csv"
Write-Host "Source files inspected: $($Files.Count)"
Write-Host "Declared dependencies: $($Dependencies.Count)"
Write-Host "Potentially unused: $(($Dependencies | Where-Object Status -eq 'Potentially unused').Count)"
