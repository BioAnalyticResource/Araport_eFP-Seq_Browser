# Agave API Swagger Specification for Araport

[![Build Status](https://travis-ci.org/Arabidopsis-Information-Portal/araport-agave-spec.svg)](https://travis-ci.org/Arabidopsis-Information-Portal/araport-agave-spec)

Customizations for the Agave API Specification for Araport.

## Testing/Validation

You can validate the spec files with the command:

```bash
$> grunt test
```

Currently, only the JSON specification file, `agaveapi.json`, is validated. The YAML file is included for ease of reading/editing. The test reports errors and/or warnings raised, but only errors will fail the test.

## Editing

If you need to edit/update the spec, the easiest thing to do is edit the YAML spec `agaveapi.yml`. Use the [Swagger Editor](http://editor.swagger.io) and load the YAML file. After your edits are complete you can download the JSON.
