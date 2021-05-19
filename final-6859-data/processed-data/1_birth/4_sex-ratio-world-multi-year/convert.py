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
    return data

         
# Driver Code
 
# Decide the two file paths according to your
# computer system
csvFilePath = r'source.csv'
jsonFilePath = r'result.json'

all_year_data = []
for year in range (1990, 2019):

    dataFieldMapping = {
    	"Country Code": "id",
    	str(year): "value"
    }
 
    # Call the make_json function
    data = make_json(csvFilePath, jsonFilePath, dataFieldMapping)
    all_year_data.append({"year": year, "data": data})

with open(jsonFilePath, 'w') as jsonf:
    jsonf.write(json.dumps(all_year_data, indent=4))