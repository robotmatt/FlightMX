# script for FAA import
# downloads files from faa.gov using curl, archives one iteration of past data, unzips compressed data,
# changes all files names to lowercase, replaces the header in each file (improve naming schema and 
# remove whitespace), compares prior download (file level) and if changed file converts to json, removes unwanted 
# removes unwanted key-value pairs to keep database import as clean as possible

# change directory to same as the executing script and output start time
startTime=$( date '+%F_%H:%M:%S' )
printf "\nFAA Import start time: $startTime %s\n\n" 
cd "${0%/*}" 

# check if lock file is present, aborts if needed or creates lock file of ok to process
if ! [ -f "faaImport.lock" ]; then
    touch faaImport.lock #create lock file
    cd faaData

    # archiving last downloaded zip file and any existing .txt file (only keeping 1 iteration)
    mv ReleasableAircraft.zip ReleasableAircraft.zip.old # archive last zip
    for f in *.txt; do
        mv -- "$f" "$(basename -- "$f" .txt).old" # archive last txt file   
    done 
    
    # using curl to retrieve zip download from faa.gov and unzipping the files to the faaData folder
    curl -L -O http://registry.faa.gov/database/ReleasableAircraft.zip
    unzip -o *.zip

    # Loops through all .txt files in the faaData folder, converts filenames to lowercase
    # and removes old headers (eliminating whitespace and renaming for import)     
    printf "\nFAA Text file modifications: %s\n" 
    for f in *.txt; do
         j=$(tr '[:upper:]' '[:lower:]' <<< "$f") ; mv "$f" "$j"  # moves to lower case
            case $j in
                'acftref.txt')
                    printf "%s" 'acftref.txt: applying changes: '
                    tail -n +2 "$j" > "$j.tmp" && mv "$j.tmp" "$j" # removes old header and replaces with the one below
                    echo "code,make,model,aircraftType,engineType,acCat,buildCert,engineQty,seats,acWeight,speed," | cat - $j > $j.temp && mv $j.temp $j
                    printf "%s\n" 'complete!' ;;  
                'dealer.txt')
                    printf "%s" 'dealer.txt: applying changes: '
                    tail -n +2 "$j" > "$j.tmp" && mv "$j.tmp" "$j" # removes old header and replaces with the one below
                    echo "certificateNumber,Ownership,certificateDate,expirationDate,expirationFlag,certificateIssueCount,name,street,street2,city,state,zip,otherNamesCount,otherNames1,otherNames2,otherNames3,otherNames4,otherNames5,otherNames6,otherNames7,otherNames8,otherNames9,otherNames10,otherNames11,otherNames12,otherNames13,otherNames14,otherNames15,otherNames16,otherNames17,otherNames18,otherNames19,otherNames20,otherNames21,otherNames22,otherNames23,otherNames24,otherNames25," | cat - $j > $j.temp && mv $j.temp $j
                    printf "%s\n" 'complete!' ;;  
                'dereg.txt')
                    printf "%s" 'dreg.txt: applying changes: '
                    tail -n +2 "$j" > "$j.tmp" && mv "$j.tmp" "$j" # removes old header and replaces with the one below
                    echo "nNumber,serialnumber,mfgModelCode,statusCode,name,streetMail,streetMail2,citymail,stateMail,zipMail,engineMfgModel,yearMfg,Certification,region,countyMail,countryMail,airWorthDate,cancelDate,modeSCode,indicatorGroup,expCountry,lastActiveDate,certIssueDate,streetPhysical,streetPhysical2,cityPhysical,statePhysical,zipPhysical,countyPhysical,countryPhysical,otherNames1,otherNames2,otherNames3,otherNames4,otherNames5,kitMfg,kitModel,modeSCode," | cat - $j > $j.temp && mv $j.temp $j
                    printf "%s\n" 'complete!' ;;  
                'docindex.txt')
                    printf "%s" 'docindex.txt: applying changes: '
                    tail -n +2 "$j" > "$j.tmp" && mv "$j.tmp" "$j" # removes old header and replaces with the one below
                    echo "typeCollateral,collateral,party,documentId,drDate,processingDate,corrDate,corrId,serialId," | cat - $j > $j.temp && mv $j.temp $j
                    printf "%s\n" 'complete!' ;;  
                'engine.txt')
                    printf "%s" 'engine.txt: applying changes: '
                    tail -n +2 "$j" > "$j.tmp" && mv "$j.tmp" "$j" # removes old header and replaces with the one below
                    echo "code,manufacturer,model,type,hp,thrust," | cat - $j > $j.temp && mv $j.temp $j
                    printf "%s\n" 'complete!' ;;   
                'master.txt')
                    printf "%s" 'master.txt: applying changes: '
                    tail -n +2 "$j" > "$j.tmp" && mv "$j.tmp" "$j" # removes old header and replaces with the one below
                    echo "nNumber,serialnumber,mfgModelCode,engMfgModel,yearMfg,typeRegistrant,name,street,street2,city,state,zip,region,county,country,lastActionDate,certIssueDate,certification,typeAircraft,typeEngine,statusCode,modeSCode,fractOwner,airWorthDate,otherNames1,otherNames2,otherNames3,otherNames4,otherNames5,expirationDate,uniqueId,kitMfg,kitModel,modeSCode," | cat - $j > $j.temp && mv $j.temp $j
                    printf "%s\n" 'complete!' ;;  
                'reserved.txt')
                    printf "%s" 'reserved.txt: applying changes: '
                    tail -n +2 "$j" > "$j.tmp" && mv "$j.tmp" "$j" # removes old header and replaces with the one below
                    echo "nNumber,registrant,street,street2,city,state,zip,rsvDate,tr,expDate,nNumberChange," | cat - $j > $j.temp && mv $j.temp $j
                    printf "%s\n" 'complete!' ;;  
                *)
                    printf "%s\n" '!!! File not processed - Error txt processing!' ;;  
            esac
    done 

    # Loops through all .txt files in the faaData folder, comparing prior download, if data is different text file 
    # is converted to json via csvtojson module (www.npmjs.com/package/csvtojson) removing whitespace and creating a 
    # portable import file.
    printf "\nFAA JSON file modifications: %s\n" 
    for f in *.txt; do  
        processFlag=0 # 0 - no, 1 - yes
        cmp --silent $f "$(basename $f .txt).old" && rm -f $f || processFlag=1 
        if [ "$processFlag" -gt 0 ]; then
            cat $f | csvtojson > json/"$(basename $f .txt).json"  # json conversion, moved to json import folder

            case "$(basename $f .txt).json" in  # filter for removing unwantd json key-value pairs
                'acftref.json')
                    printf "%s" 'acftref.json: applying changes: '
                    jq -c 'del(.. | .field12?)' \
                    json/acftref.json > json/acftref.out && mv json/acftref.out json/acftref.json
                    printf "%s\n" 'complete!' ;;  
                'dealer.json')
                    printf "%s" 'dealer.json: applying changes: '
                    jq -c 'del(.. | .otherNames6?, .otherNames7?, .otherNames8?, .otherNames9?, .otherNames10?, .otherNames11?, .otherNames12?, .otherNames13?, .otherNames14?, .otherNames15?, .otherNames16?, .otherNames17?, .otherNames18?, .otherNames19?, .otherNames20?, .otherNames21?, .otherNames22?, .otherNames23?, .otherNames24?, .otherNames25?, .field39?)' \
                    json/dealer.json > json/dealer.out && mv json/dealer.out json/dealer.json
                    printf "%s\n" 'complete!' ;;  
                'dereg.json')
                    printf "%s" 'dererg.json: applying changes: '
                    jq -c 'del(.. | .field39?)' json/dereg.json > json/dereg.out && mv json/dereg.out json/dereg.json
                    printf "%s\n" 'complete!' ;;  
                'docindex.json')
                    printf "%s" 'docindex.json: applying changes: '
                    jq -c 'del(.. | .field10?)' json/docindex.json > json/docindex.out && mv json/docindex.out json/docindex.json
                    printf "%s\n" 'complete!' ;;  
                'engine.json')
                    printf "%s" 'engine.json: applying changes: '
                    jq -c 'del(.. | .field7?)' json/engine.json > json/engine.out && mv json/engine.out json/engine.json
                    printf "%s\n" 'complete!' ;;  
                'master.json')
                    printf "%s" 'master.json: applying changes: '
                    jq -c 'del(.. | .fractOwner?, .field35?)' json/master.json > json/master.out && mv json/master.out json/master.json
                    printf "%s\n" 'complete!' ;;  
                'reserved.json')
                    printf "%s" 'reserved.json: applying changes: '
                    jq -c 'del(.. | .field12?)' json/reserved.json > json/reserved.out && mv json/reserved.out json/reserved.json
                    printf "%s\n" 'complete!' ;;  
                *)
                    printf "%s\n" '!!! File not processed - Error json processing!' 
            esac
        fi             
    done 

    # proccess complete, change folder and remove lock file
    cd ../
    rm faaImport.lock 

else
    # lock file exists, the process is either currently running or errored last run
    printf "%s\n" '!!! Lock file exists, process ended!' 
    printf "%s\n" 'The import process is either currently running or errored last run!' 
    printf "%s\n" 'If you are sure the process is not running, delete server/scripts/faaImport.lock and restart process!' 
fi
endTime=$( date '+%F_%H:%M:%S' )
printf " %s\n"
printf "FAA Import process complete! End time: $endTime %s\n\n"