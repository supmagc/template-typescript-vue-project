<#
.SYNOPSIS
    Script that manages build automation.
.DESCRIPTION
    Script that manages build automation.
    If the author is the same as the local git user, script won't do a thing unless -NoAuthorCheck is specified.
    Different branches do different things:
    - default: run unit tests and coverage tests.
    - master: does nothing (not even default behavior).
    - develop: after successfull testing, bumps patch version, merges to master, tags and pushes to registry.

    The package is puched to the localy defined npm registry.
    The git push is done with the localy defined git user.
.PARAMETER NoAuthorCheck
    Skip the author check for the script execution.
#>

param(
    [switch]$NoAuthorCheck
)

$BranchName=(git rev-parse --abbrev-ref HEAD)
$CommitAuthor=(git log -1 --pretty="%an")
$LocalAuthor=(git config user.name)


if(!$NoAuthorCheck -and $CommitAuthor -eq $LocalAuthor) {
    '<?xml version="1.0"?>
<testsuites>
  <testsuite tests="0" failures="0" errors="0" name="default">
    <testcase name="Default empty test"/>
  </testsuite>
</testsuites>' | Set-Content tap.xml
    Write-Host "Commit author equal to buildauthor, exiting script"
    exit 0;
}

if($BranchName -ne "master") {
    Execute-CustomCommand yarn install
    Start-Sleep -s 5
    Execute-CustomCommand yarn test:lint
    Start-Sleep -s 5
    Execute-CustomCommand yarn test:junit
    Start-Sleep -s 5
    Execute-CustomCommand yarn test:coverage
    Start-Sleep -s 5
}

if($BranchName -eq "develop") {
    Execute-CustomCommand yarn build
    Start-Sleep -s 5
    
    Execute-NpmPackagePublishing
}