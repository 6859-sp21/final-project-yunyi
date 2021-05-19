import csv
import json

# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath, dataFieldMapping):
     
    # create a dictionary
    data = []
     
    # Open a csv reader called DictReader
    with open(csvFilePath) as csvf:
        csvReader = csv.DictReader(csvf)
        
        # Convert each row into a dictionary
        # and add it to data
        for row in csvReader:

        	filtered_row = {}

        	for key in dataFieldMapping.keys():
        		value = row[key]
        		new_key = dataFieldMapping[key]
        		filtered_row[new_key] = value

        	data.append(filtered_row)
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
# Driver Code
 
# Decide the two file paths according to your
# computer system
csvFilePath = r'source.csv'
jsonFilePath = r'result.json'
dataFieldMapping = {
	"Country Code": "id",
	"2009": "value"
}
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath, dataFieldMapping)