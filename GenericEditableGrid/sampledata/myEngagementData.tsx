let GetSampleEngagements = function () {
    let tempRet = {
        "loading": false,
        "columns": [
          {
            "name": "msp_name",
            "displayName": "Name",
            "dataType": "SingleLine.Text",
            "alias": "msp_name",
            "order": 0,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": true,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_accountid",
            "displayName": "Account",
            "dataType": "Lookup.Simple",
            "alias": "msp_accountid",
            "order": 1,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_solutionarea",
            "displayName": "Solution Area",
            "dataType": "OptionSet",
            "alias": "msp_solutionarea",
            "order": 2,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_workloadtype",
            "displayName": "Workload Type",
            "dataType": "OptionSet",
            "alias": "msp_workloadtype",
            "order": 3,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_engagementstatus",
            "displayName": "Engagement Status",
            "dataType": "OptionSet",
            "alias": "msp_engagementstatus",
            "order": 4,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_salesplay",
            "displayName": "Sales Play",
            "dataType": "OptionSet",
            "alias": "msp_salesplay",
            "order": 5,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_activesalesstage",
            "displayName": "Active Sales Stage",
            "dataType": "SingleLine.Text",
            "alias": "msp_activesalesstage",
            "order": 6,
            "visualSizeFactor": 100,
            "isHidden": false,
            "imageProviderWebresource": "",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_estcompletiondate",
            "displayName": "Est. Completion Date",
            "dataType": "DateAndTime.DateOnly",
            "alias": "msp_estcompletiondate",
            "order": 7,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_engagementhealth",
            "displayName": "Engagement Health",
            "dataType": "OptionSet",
            "alias": "msp_engagementhealth",
            "order": 8,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_rollupestseats",
            "displayName": "Rollup Est. Active users/Devices Business Apps",
            "dataType": "Whole.None",
            "alias": "msp_rollupestseats",
            "order": 9,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_rollupestrevenue",
            "displayName": "Rollup Est. Monthly usage",
            "dataType": "Currency",
            "alias": "msp_rollupestrevenue",
            "order": 10,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_nonrecurringusersdevices",
            "displayName": "Non-Recurring Users/Devices Business Apps",
            "dataType": "Whole.None",
            "alias": "msp_nonrecurringusersdevices",
            "order": 11,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_nonrecurringacr",
            "displayName": "Non-Recurring ACR",
            "dataType": "Currency",
            "alias": "msp_nonrecurringacr",
            "order": 12,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_partneraccountid",
            "displayName": "Primary Partner",
            "dataType": "Lookup.Simple",
            "alias": "msp_partneraccountid",
            "order": 13,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_msservicesincluded",
            "displayName": "MS Services Involved",
            "dataType": "OptionSet",
            "alias": "msp_msservicesincluded",
            "order": 14,
            "visualSizeFactor": 150,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_summary",
            "displayName": "Engagement Description",
            "dataType": "Multiple",
            "alias": "msp_summary",
            "order": 15,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": true
          },
          {
            "name": "createdon",
            "displayName": "Created On",
            "dataType": "DateAndTime.DateAndTime",
            "alias": "createdon",
            "order": 16,
            "visualSizeFactor": 150,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_primarycompetitor",
            "displayName": "Primary Competitor",
            "dataType": "Lookup.Simple",
            "alias": "msp_primarycompetitor",
            "order": 17,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_othercompetitor",
            "displayName": "Other Competitor",
            "dataType": "SingleLine.Text",
            "alias": "msp_othercompetitor",
            "order": 18,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          },
          {
            "name": "msp_competethreatlevel",
            "displayName": "Compete Threat Level",
            "dataType": "OptionSet",
            "alias": "msp_competethreatlevel",
            "order": 19,
            "visualSizeFactor": 200,
            "isHidden": false,
            "imageProviderWebresource": "$webresource:",
            "imageProviderFunctionName": "",
            "isPrimary": false,
            "cellType": "",
            "disableSorting": false
          }
        ],
        "error": false,
        "errorMessage": null,
        "innerError": null,
        "sortedRecordIds": [
          "43fe7845-c09f-4101-af8a-2a70fa3cef0d",
          "04b19ddb-6033-4d8e-aaef-3d63802cf7c9",
          "93200b7b-9cf6-483f-b633-57df5f4aa1a7",
          "73036470-d775-4271-9752-66b756779259",
          "3008c2b6-7828-4ed8-aeaf-6990a618ce52",
          "0d08f437-fb0a-4b01-9347-6b1f40729582",
          "bea35ab1-b59f-43f5-ad94-6bacf56162aa",
          "5021083f-5887-4a4c-b10c-7d73f7c40693",
          "7de0d1a8-88a4-456e-9813-8a32b4fd5a3e",
          "8e3b7579-d221-4bf6-ba87-909da113a5bd",
          "8e77711a-93c8-4f15-98b0-934ab1793ebf",
          "0cc90a77-3946-44d1-90e7-93f690afe5af",
          "aacab187-8055-4fbc-ba25-9bbf4f7c860e",
          "6b8e14a3-7570-4336-9a2b-a053ea54ea8e",
          "b9e58c71-720b-4de3-95bc-af384972c8e3",
          "47d190c2-f43b-4726-b255-b8fef87c9a73",
          "738b38c0-d7fc-4bb6-aded-bd93a680a352",
          "e00f4377-ab08-4461-b924-c467afc9ab10",
          "868568a5-99ce-4abd-8b44-e9670a9183ba",
          "d6613dc1-345d-4b75-9f42-ed24af64299c",
          "b8898295-f0d6-41f3-a4cc-eda06f392406",
          "3e066856-4d71-48d3-a6e8-f1665e76c961",
          "2d1178c1-8e2e-4b58-90b3-fe74077321fa",
          "52774e3d-f568-4f4f-8951-a886af57ac23",
          "0a0d5639-b89e-45e7-9587-008ba4c770e7",
          "2dcf3bea-4096-4122-b20a-0fa43ec00219",
          "d17058c8-8c6c-4bc0-b600-560aa8596251",
          "165fd544-1e34-4b5e-8f4d-7965f7cff8cd",
          "20e0592b-e6ec-4b7b-b302-0b1bdd9e35a7",
          "a989804f-b9a6-450c-b8b8-13a0d0718106",
          "25e5b46f-9229-4db8-96ee-9dff635cfae1",
          "b84bb299-953f-462e-b3aa-16a499269ca0",
          "5f8e6e87-4817-4488-bb58-8906d91551e5",
          "99092e44-06ca-4beb-bb67-eabf77a48960",
          "ff74a8c3-67e8-46be-87f5-f5d409e4a930",
          "5e7c0081-0450-439f-abfe-dd288521587c"
        ],
        "records": {
          "43fe7845-c09f-4101-af8a-2a70fa3cef0d": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "43fe7845-c09f-4101-af8a-2a70fa3cef0d"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - BulkEngagement - 02",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-14T15:09:00.000Z",
                  "formatted": "7/14/2020 8:39 PM",
                  "timestamp": "2020-10-20T12:42:51.264Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "43fe7845-c09f-4101-af8a-2a70fa3cef0d",
              "_name": "Dev - Sales Play - BulkEngagement - 02"
            }
          },
          "04b19ddb-6033-4d8e-aaef-3d63802cf7c9": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "04b19ddb-6033-4d8e-aaef-3d63802cf7c9"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - SASPTC - Create - 01",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-08-13T11:49:03.000Z",
                  "formatted": "8/13/2020 5:19 PM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "04b19ddb-6033-4d8e-aaef-3d63802cf7c9",
              "_name": "Dev - SASPTC - Create - 01"
            }
          },
          "93200b7b-9cf6-483f-b633-57df5f4aa1a7": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "93200b7b-9cf6-483f-b633-57df5f4aa1a7"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - SASPTC - Create - 01",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-08-13T11:51:39.000Z",
                  "formatted": "8/13/2020 5:21 PM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "93200b7b-9cf6-483f-b633-57df5f4aa1a7",
              "_name": "Dev - SASPTC - Create - 01"
            }
          },
          "73036470-d775-4271-9752-66b756779259": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "73036470-d775-4271-9752-66b756779259"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - Create New Logic - 01 ",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-14T19:26:07.000Z",
                  "formatted": "7/15/2020 12:56 AM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "73036470-d775-4271-9752-66b756779259",
              "_name": "Dev - Sales Play - Create New Logic - 01 "
            }
          },
          "3008c2b6-7828-4ed8-aeaf-6990a618ce52": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "3008c2b6-7828-4ed8-aeaf-6990a618ce52"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - Create New Logic - 08",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "HPC",
                  "valueString": "861980009",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-15T06:01:32.000Z",
                  "formatted": "7/15/2020 11:31 AM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "3008c2b6-7828-4ed8-aeaf-6990a618ce52",
              "_name": "Dev - Sales Play - Create New Logic - 08"
            }
          },
          "0d08f437-fb0a-4b01-9347-6b1f40729582": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "0d08f437-fb0a-4b01-9347-6b1f40729582"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Sales - BulkEngagement - New Logic - 01",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": null,
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-15T06:09:23.000Z",
                  "formatted": "7/15/2020 11:39 AM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "0d08f437-fb0a-4b01-9347-6b1f40729582",
              "_name": "Sales - BulkEngagement - New Logic - 01"
            }
          },
          "bea35ab1-b59f-43f5-ad94-6bacf56162aa": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "bea35ab1-b59f-43f5-ad94-6bacf56162aa"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Select Checklist - Create - Test",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-01-27T10:03:13.000Z",
                  "formatted": "1/27/2020 3:33 PM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "bea35ab1-b59f-43f5-ad94-6bacf56162aa",
              "_name": "Select Checklist - Create - Test"
            }
          },
          "5021083f-5887-4a4c-b10c-7d73f7c40693": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "5021083f-5887-4a4c-b10c-7d73f7c40693"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Sales - BulkEngagement - New Logic - 01",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": null,
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-15T06:10:28.000Z",
                  "formatted": "7/15/2020 11:40 AM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "5021083f-5887-4a4c-b10c-7d73f7c40693",
              "_name": "Sales - BulkEngagement - New Logic - 01"
            }
          },
          "7de0d1a8-88a4-456e-9813-8a32b4fd5a3e": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "7de0d1a8-88a4-456e-9813-8a32b4fd5a3e"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Select Checklist - Create - Test",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-01-28T12:27:00.000Z",
                  "formatted": "1/28/2020 5:57 PM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "7de0d1a8-88a4-456e-9813-8a32b4fd5a3e",
              "_name": "Select Checklist - Create - Test"
            }
          },
          "8e3b7579-d221-4bf6-ba87-909da113a5bd": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "8e3b7579-d221-4bf6-ba87-909da113a5bd"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - BulkEngagement - 02",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-15T06:13:18.000Z",
                  "formatted": "7/15/2020 11:43 AM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "8e3b7579-d221-4bf6-ba87-909da113a5bd",
              "_name": "Dev - Sales Play - BulkEngagement - 02"
            }
          },
          "8e77711a-93c8-4f15-98b0-934ab1793ebf": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "8e77711a-93c8-4f15-98b0-934ab1793ebf"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Select Checklist - Create - Test",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-01-27T10:05:57.000Z",
                  "formatted": "1/27/2020 3:35 PM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "8e77711a-93c8-4f15-98b0-934ab1793ebf",
              "_name": "Select Checklist - Create - Test"
            }
          },
          "0cc90a77-3946-44d1-90e7-93f690afe5af": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "0cc90a77-3946-44d1-90e7-93f690afe5af"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - Create New Logic - 07",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "DevOps with GitHub",
                  "valueString": "861980006",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-15T05:07:56.000Z",
                  "formatted": "7/15/2020 10:37 AM",
                  "timestamp": "2020-10-20T12:42:51.265Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "0cc90a77-3946-44d1-90e7-93f690afe5af",
              "_name": "Dev - Sales Play - Create New Logic - 07"
            }
          },
          "aacab187-8055-4fbc-ba25-9bbf4f7c860e": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "aacab187-8055-4fbc-ba25-9bbf4f7c860e"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "TestCreateEngagement_Int1/27/2020 10:27:33 AM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-01-28T12:24:21.000Z",
                  "formatted": "1/28/2020 5:54 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "aacab187-8055-4fbc-ba25-9bbf4f7c860e",
              "_name": "TestCreateEngagement_Int1/27/2020 10:27:33 AM"
            }
          },
          "6b8e14a3-7570-4336-9a2b-a053ea54ea8e": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "6b8e14a3-7570-4336-9a2b-a053ea54ea8e"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "SalesPlay - BulkEngagement - N02",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": null,
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-15T06:11:44.000Z",
                  "formatted": "7/15/2020 11:41 AM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "6b8e14a3-7570-4336-9a2b-a053ea54ea8e",
              "_name": "SalesPlay - BulkEngagement - N02"
            }
          },
          "b9e58c71-720b-4de3-95bc-af384972c8e3": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "b9e58c71-720b-4de3-95bc-af384972c8e3"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - SASPTC - Create - 02",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Mixed Reality",
                  "valueString": "861980041",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-08-13T11:56:29.000Z",
                  "formatted": "8/13/2020 5:26 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "b9e58c71-720b-4de3-95bc-af384972c8e3",
              "_name": "Dev - SASPTC - Create - 02"
            }
          },
          "47d190c2-f43b-4726-b255-b8fef87c9a73": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "47d190c2-f43b-4726-b255-b8fef87c9a73"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - Create New Logic - 03",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-14T19:31:22.000Z",
                  "formatted": "7/15/2020 1:01 AM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "47d190c2-f43b-4726-b255-b8fef87c9a73",
              "_name": "Dev - Sales Play - Create New Logic - 03"
            }
          },
          "738b38c0-d7fc-4bb6-aded-bd93a680a352": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "738b38c0-d7fc-4bb6-aded-bd93a680a352"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Select Checklist - Create - Test",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-01-28T12:19:32.000Z",
                  "formatted": "1/28/2020 5:49 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "738b38c0-d7fc-4bb6-aded-bd93a680a352",
              "_name": "Dev - Select Checklist - Create - Test"
            }
          },
          "e00f4377-ab08-4461-b924-c467afc9ab10": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "e00f4377-ab08-4461-b924-c467afc9ab10"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Select Checklist - Create - Test",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-01-28T12:25:56.000Z",
                  "formatted": "1/28/2020 5:55 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "e00f4377-ab08-4461-b924-c467afc9ab10",
              "_name": "Select Checklist - Create - Test"
            }
          },
          "868568a5-99ce-4abd-8b44-e9670a9183ba": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "868568a5-99ce-4abd-8b44-e9670a9183ba"
                }
              },
              "fields": {
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-14T20:23:12.000Z",
                  "formatted": "7/15/2020 1:53 AM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "868568a5-99ce-4abd-8b44-e9670a9183ba",
              "_name": null
            }
          },
          "d6613dc1-345d-4b75-9f42-ed24af64299c": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "d6613dc1-345d-4b75-9f42-ed24af64299c"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Select Checklist - Create - Test",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-01-27T10:10:28.000Z",
                  "formatted": "1/27/2020 3:40 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "d6613dc1-345d-4b75-9f42-ed24af64299c",
              "_name": "Select Checklist - Create - Test"
            }
          },
          "b8898295-f0d6-41f3-a4cc-eda06f392406": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "b8898295-f0d6-41f3-a4cc-eda06f392406"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - BulkEngagement - 02",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-14T15:07:09.000Z",
                  "formatted": "7/14/2020 8:37 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "b8898295-f0d6-41f3-a4cc-eda06f392406",
              "_name": "Dev - Sales Play - BulkEngagement - 02"
            }
          },
          "3e066856-4d71-48d3-a6e8-f1665e76c961": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "3e066856-4d71-48d3-a6e8-f1665e76c961"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - Create New Logic - 05",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": null,
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-14T19:36:29.000Z",
                  "formatted": "7/15/2020 1:06 AM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "3e066856-4d71-48d3-a6e8-f1665e76c961",
              "_name": "Dev - Sales Play - Create New Logic - 05"
            }
          },
          "2d1178c1-8e2e-4b58-90b3-fe74077321fa": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "2d1178c1-8e2e-4b58-90b3-fe74077321fa"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Select Checklist Test",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "8605bff7-16b0-4e93-95b5-1b3e502299d5"
                    },
                    "name": "Novartis"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Modern Work",
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Modern Work",
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-06-27T00:00:00.000Z",
                  "formatted": "6/27/2020",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Yellow",
                  "valueString": "861980002",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "sdsd",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-01-22T10:50:08.000Z",
                  "formatted": "1/22/2020 4:20 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "2d1178c1-8e2e-4b58-90b3-fe74077321fa",
              "_name": "Select Checklist Test"
            }
          },
          "52774e3d-f568-4f4f-8951-a886af57ac23": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "52774e3d-f568-4f4f-8951-a886af57ac23"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Shiva Test",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "d2ac3b5d-70dd-e611-80eb-c4346bdcb261"
                    },
                    "name": "ABE architecten"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Business Apps",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Dynamics 365",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Build Agile Business Processes",
                  "valueString": "861980022",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-07-16T00:00:00.000Z",
                  "formatted": "7/16/2020",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Yellow",
                  "valueString": "861980002",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 68,
                  "formatted": "$68.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 3,
                  "formatted": "$3.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "ddd",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-04-23T15:11:19.000Z",
                  "formatted": "4/23/2020 8:41 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "52774e3d-f568-4f4f-8951-a886af57ac23",
              "_name": "Shiva Test"
            }
          },
          "0a0d5639-b89e-45e7-9587-008ba4c770e7": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "0a0d5639-b89e-45e7-9587-008ba4c770e7"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Sales Play - BulkEngagement - N05",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "d2ac3b5d-70dd-e611-80eb-c4346bdcb261"
                    },
                    "name": "ABE architecten"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Data and AI",
                  "valueString": "861980002",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Azure",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Linux & OSS DBs on Azure",
                  "valueString": "861980012",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-08-08T00:00:00.000Z",
                  "formatted": "8/8/2020",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Red",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 200000,
                  "formatted": "200,000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 600,
                  "formatted": "$600.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 803000,
                  "formatted": "$803,000.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "sds",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-15T06:14:18.000Z",
                  "formatted": "7/15/2020 11:44 AM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "0a0d5639-b89e-45e7-9587-008ba4c770e7",
              "_name": "Sales Play - BulkEngagement - N05"
            }
          },
          "2dcf3bea-4096-4122-b20a-0fa43ec00219": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "2dcf3bea-4096-4122-b20a-0fa43ec00219"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Active Stage - Test 1",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "d2ac3b5d-70dd-e611-80eb-c4346bdcb261"
                    },
                    "name": "ABE architecten"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Business Apps",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Dynamics 365",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Generate Value with Proactive Insights",
                  "valueString": "861980025",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "3-COMMIT",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-08-28T00:00:00.000Z",
                  "formatted": "8/28/2020",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "Active Stage - Test 1",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-08-28T05:18:21.000Z",
                  "formatted": "8/28/2020 10:48 AM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_primarycompetitor": {
                  "reference": {
                    "etn": "competitor",
                    "id": {
                      "guid": "9db461d3-4e13-e911-a849-000d3a30956c"
                    },
                    "name": "Test"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_competethreatlevel": {
                  "label": "Low/ None",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "2dcf3bea-4096-4122-b20a-0fa43ec00219",
              "_name": "Active Stage - Test 1"
            }
          },
          "d17058c8-8c6c-4bc0-b600-560aa8596251": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "d17058c8-8c6c-4bc0-b600-560aa8596251"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Select Checklist - Create - Test",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "d2ac3b5d-70dd-e611-80eb-c4346bdcb261"
                    },
                    "name": "ABE architecten"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Data and AI",
                  "valueString": "861980002",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Azure",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Modernize .NET Apps with App Service, Azure SQL DB",
                  "valueString": "861980015",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "2-VALIDATE",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-09-04T00:00:00.000Z",
                  "formatted": "9/4/2020",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "ABCD",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-02-12T12:26:00.000Z",
                  "formatted": "2/12/2020 5:56 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_primarycompetitor": {
                  "reference": {
                    "etn": "competitor",
                    "id": {
                      "guid": "8ee7ae3a-5bd8-e511-80dc-5065f38aab31"
                    },
                    "name": "Apple | iPad | "
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_competethreatlevel": {
                  "label": "Low/ None",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "d17058c8-8c6c-4bc0-b600-560aa8596251",
              "_name": "Dev - Select Checklist - Create - Test"
            }
          },
          "165fd544-1e34-4b5e-8f4d-7965f7cff8cd": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "165fd544-1e34-4b5e-8f4d-7965f7cff8cd"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "DEV - Test - 0918 - 01",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "d2ac3b5d-70dd-e611-80eb-c4346bdcb261"
                    },
                    "name": "ABE architecten"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Azure",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Modernize .NET Apps with App Service, Azure SQL DB",
                  "valueString": "861980015",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-09-29T00:00:00.000Z",
                  "formatted": "9/29/2020",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Yellow",
                  "valueString": "861980002",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 20,
                  "formatted": "20",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 10,
                  "formatted": "$10.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 40,
                  "formatted": "$40.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "sdsdsd",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-14T20:20:17.000Z",
                  "formatted": "7/15/2020 1:50 AM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "165fd544-1e34-4b5e-8f4d-7965f7cff8cd",
              "_name": "DEV - Test - 0918 - 01"
            }
          },
          "20e0592b-e6ec-4b7b-b302-0b1bdd9e35a7": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "20e0592b-e6ec-4b7b-b302-0b1bdd9e35a7"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Select Checklist - Create - Test",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "29e77f4e-4195-e611-80e0-5065f38b6151"
                    },
                    "name": "sialletopicsdk"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Modern Work",
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Modern Work",
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Teams Meetings, Calling & Devices",
                  "valueString": "861980034",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "2-VALIDATE",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-10-02T00:00:00.000Z",
                  "formatted": "10/2/2020",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Green",
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "ghgh",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-01-27T10:10:10.000Z",
                  "formatted": "1/27/2020 3:40 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_primarycompetitor": {
                  "reference": {
                    "etn": "competitor",
                    "id": {
                      "guid": "9db461d3-4e13-e911-a849-000d3a30956c"
                    },
                    "name": "Test"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_competethreatlevel": {
                  "label": "Low/ None",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "20e0592b-e6ec-4b7b-b302-0b1bdd9e35a7",
              "_name": "Select Checklist - Create - Test"
            }
          },
          "a989804f-b9a6-450c-b8b8-13a0d0718106": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "a989804f-b9a6-450c-b8b8-13a0d0718106"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - Create",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "d2ac3b5d-70dd-e611-80eb-c4346bdcb261"
                    },
                    "name": "ABE architecten"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Azure",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-10-02T00:00:00.000Z",
                  "formatted": "10/2/2020",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Green",
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 450,
                  "formatted": "450",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "test",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-14T14:57:32.000Z",
                  "formatted": "7/14/2020 8:27 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "a989804f-b9a6-450c-b8b8-13a0d0718106",
              "_name": "Dev - Sales Play - Create"
            }
          },
          "25e5b46f-9229-4db8-96ee-9dff635cfae1": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "25e5b46f-9229-4db8-96ee-9dff635cfae1"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - Create - 02",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "d2ac3b5d-70dd-e611-80eb-c4346bdcb261"
                    },
                    "name": "ABE architecten"
                  },
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Azure",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-10-07T00:00:00.000Z",
                  "formatted": "10/7/2020",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Yellow",
                  "valueString": "861980002",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 20,
                  "formatted": "20",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 30,
                  "formatted": "$30.00",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "sddsdsd",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-14T15:03:21.000Z",
                  "formatted": "7/14/2020 8:33 PM",
                  "timestamp": "2020-10-20T12:42:51.266Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "25e5b46f-9229-4db8-96ee-9dff635cfae1",
              "_name": "Dev - Sales Play - Create - 02"
            }
          },
          "b84bb299-953f-462e-b3aa-16a499269ca0": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "b84bb299-953f-462e-b3aa-16a499269ca0"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Dev - Sales Play - Create New Logic - 01 ",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "d2ac3b5d-70dd-e611-80eb-c4346bdcb261"
                    },
                    "name": "ABE architecten"
                  },
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Azure",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-10-16T00:00:00.000Z",
                  "formatted": "10/16/2020",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "dd",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-14T19:29:05.000Z",
                  "formatted": "7/15/2020 12:59 AM",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "b84bb299-953f-462e-b3aa-16a499269ca0",
              "_name": "Dev - Sales Play - Create New Logic - 01 "
            }
          },
          "5f8e6e87-4817-4488-bb58-8906d91551e5": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "5f8e6e87-4817-4488-bb58-8906d91551e5"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "Sales Play - BulkEngagement - N06",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "d2ac3b5d-70dd-e611-80eb-c4346bdcb261"
                    },
                    "name": "ABE architecten"
                  },
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Azure",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "DevOps with GitHub",
                  "valueString": "861980006",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "1-ENVISION",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-10-16T00:00:00.000Z",
                  "formatted": "10/16/2020",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "sdd",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-07-15T06:15:11.000Z",
                  "formatted": "7/15/2020 11:45 AM",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "5f8e6e87-4817-4488-bb58-8906d91551e5",
              "_name": "Sales Play - BulkEngagement - N06"
            }
          },
          "99092e44-06ca-4beb-bb67-eabf77a48960": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "99092e44-06ca-4beb-bb67-eabf77a48960"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "May -14 - 01",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "29e77f4e-4195-e611-80e0-5065f38b6151"
                    },
                    "name": "sialletopicsdk"
                  },
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Apps and Infra",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Azure",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_activesalesstage": {
                  "value": "2-VALIDATE",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-10-20T00:00:00.000Z",
                  "formatted": "10/20/2020",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Initiated",
                  "valueString": "861980004",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 135,
                  "formatted": "$135.00",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 315,
                  "formatted": "$315.00",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "May -14 - 01",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-05-14T08:40:09.000Z",
                  "formatted": "5/14/2020 2:10 PM",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_primarycompetitor": {
                  "reference": {
                    "etn": "competitor",
                    "id": {
                      "guid": "9db461d3-4e13-e911-a849-000d3a30956c"
                    },
                    "name": "Test"
                  },
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_competethreatlevel": {
                  "label": "Low/ None",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "99092e44-06ca-4beb-bb67-eabf77a48960",
              "_name": "May -14 - 01"
            }
          },
          "ff74a8c3-67e8-46be-87f5-f5d409e4a930": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "ff74a8c3-67e8-46be-87f5-f5d409e4a930"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "May 16 - 01",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "4ca69e9d-d731-e711-810c-5065f38b81a1"
                    },
                    "name": "Company test lead Allan Torres"
                  },
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Modern Work",
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Modern Work",
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2020-11-18T00:00:00.000Z",
                  "formatted": "11/18/2020",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Green",
                  "valueString": "861980003",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "May 16 - 02",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-05-16T13:20:33.000Z",
                  "formatted": "5/16/2020 6:50 PM",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "ff74a8c3-67e8-46be-87f5-f5d409e4a930",
              "_name": "May 16 - 01"
            }
          },
          "5e7c0081-0450-439f-abfe-dd288521587c": {
            "_record": {
              "initialized": 2,
              "identifier": {
                "etn": "msp_engagement",
                "id": {
                  "guid": "5e7c0081-0450-439f-abfe-dd288521587c"
                }
              },
              "fields": {
                "msp_name": {
                  "value": "May -14 - 02",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_accountid": {
                  "reference": {
                    "etn": "account",
                    "id": {
                      "guid": "29e77f4e-4195-e611-80e0-5065f38b6151"
                    },
                    "name": "sialletopicsdk"
                  },
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_solutionarea": {
                  "label": "Business Apps",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_workloadtype": {
                  "label": "Dynamics 365",
                  "valueString": "861980001",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementstatus": {
                  "label": "In Progress",
                  "valueString": "861980000",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_salesplay": {
                  "label": "Default",
                  "valueString": "861980040",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_estcompletiondate": {
                  "value": "2021-01-14T00:00:00.000Z",
                  "formatted": "1/14/2021",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_engagementhealth": {
                  "label": "Yellow",
                  "valueString": "861980002",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestseats": {
                  "value": 0,
                  "formatted": "0",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_rollupestrevenue": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringusersdevices": {
                  "value": 141,
                  "formatted": "141",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_nonrecurringacr": {
                  "value": 0,
                  "formatted": "$0.00",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "msp_summary": {
                  "value": "May -14 - 02",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                },
                "createdon": {
                  "value": "2020-05-14T08:43:09.000Z",
                  "formatted": "5/14/2020 2:13 PM",
                  "timestamp": "2020-10-20T12:42:51.267Z",
                  "validationResult": {
                    "errorId": null,
                    "errorMessage": null,
                    "isValueValid": true,
                    "userInput": null,
                    "isOfflineSyncError": false
                  }
                }
              }
            },
            "_columnAliasNameMap": {
              
            },
            "_primaryFieldName": "msp_name",
            "_isDirty": false,
            "_entityReference": {
              "_etn": "msp_engagement",
              "_id": "5e7c0081-0450-439f-abfe-dd288521587c",
              "_name": "May -14 - 02"
            }
          }
        },
        "sorting": [
          {
            "name": "msp_estcompletiondate",
            "sortDirection": 0
          }
        ],
        "filtering": {
          "aliasMap": {
            "msp_name": "msp_name",
            "msp_accountid": "msp_accountid",
            "msp_solutionarea": "msp_solutionarea",
            "msp_workloadtype": "msp_workloadtype",
            "msp_engagementstatus": "msp_engagementstatus",
            "msp_salesplay": "msp_salesplay",
            "msp_activesalesstage": "msp_activesalesstage",
            "msp_estcompletiondate": "msp_estcompletiondate",
            "msp_engagementhealth": "msp_engagementhealth",
            "msp_rollupestseats": "msp_rollupestseats",
            "msp_rollupestrevenue": "msp_rollupestrevenue",
            "msp_nonrecurringusersdevices": "msp_nonrecurringusersdevices",
            "msp_nonrecurringacr": "msp_nonrecurringacr",
            "msp_partneraccountid": "msp_partneraccountid",
            "msp_msservicesincluded": "msp_msservicesincluded",
            "msp_summary": "msp_summary",
            "createdon": "createdon",
            "msp_primarycompetitor": "msp_primarycompetitor",
            "msp_othercompetitor": "msp_othercompetitor",
            "msp_competethreatlevel": "msp_competethreatlevel"
          }
        },
        "paging": {
          "totalResultCount": 36,
          "firstPageNumber": 1,
          "lastPageNumber": 1,
          "pageSize": 50,
          "hasPreviousPage": false
        },
        "linking": {
          
        }
      }

    return tempRet;
}
export default GetSampleEngagements;