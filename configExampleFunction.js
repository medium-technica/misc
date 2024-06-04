const configSampleFunction = {
    typeObject: "function",
    parameters: [
        {
            name: "dateFrom",
            typeObject: "string",
            format: "D/M/YYYY",
            lengthMin: 8,
            lengthMax: 10,
        },
        {
            name: "dateTo",
            typeObject: "string",
            lengthMin: 8,
            lengthMax: 10,
            formatExpressionRegex: "^(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[0-2])/([0-9]{4})$",
            samples: {
                valid: [

                ],
                invalid: [

                ]
            }
        },
        {
            name: "deviceId",
            typeObject: "string",
            lengthMin: 7,
            lengthMax: 7,
            formatExpressionRegEx: "^.{6}[1-6]$",
            samples: {
                valid: [

                ],
                invalid: [

                ]
            }
        },
        {
            name: "keyApi",
            typeObject: "string",
            lengthMin: 16,
            lengthMax: 16,
            formatExpressionRegEx: "^[a-zA-Z0-9]{4}(?:-[a-zA-Z0-9]{4}){3}$",
            samples: {
                valid: [

                ],
                invalid: [

                ]
            }
        }
    ]
}