/**
    Copyright (c) 2022. Lasantha Samarakoon. 
    All rights reserved.

    Instructions: 
    =============
        1. Modify the list with all the bundles.info file changes in the following format.
                [<jar_name>, <jar_version>, <relative_jar_path>, <action>]

          The action could be either 'add' or 'remove'.

        2. Change the value for bundlesInfoPath as per the distribution and the profile.

        3. Go to U2, edit update page and open the browser's 'Inspect' window, then the 'Console' tab.

        4. Copy the following content, paste it in the Console tab and press 'Enter' to execute.
**/

var bundlesInfoPath = 'wso2/server/configuration/org.eclipse.equinox.simpleconfigurator/bundles.info';

var list = [
    ['com.fasterxml.jackson.core.jackson-annotations', '2.9.8', '../lib/plugins/com.fasterxml.jackson.core.jackson-annotations_2.9.8.jar', 'remove'],
    ['com.fasterxml.jackson.core.jackson-annotations', '2.13.3', '../lib/plugins/com.fasterxml.jackson.core.jackson-annotations_2.13.3.jar', 'add'],
    ['com.fasterxml.jackson.core.jackson-core', '2.9.8', '../lib/plugins/com.fasterxml.jackson.core.jackson-core_2.9.8.jar', 'remove'],
    ['com.fasterxml.jackson.core.jackson-core', '2.13.3', '../lib/plugins/com.fasterxml.jackson.core.jackson-core_2.13.3.jar', 'add'],
    ['com.fasterxml.jackson.core.jackson-databind', '2.9.8', '../lib/plugins/com.fasterxml.jackson.core.jackson-databind_2.9.8.jar', 'remove'],
    ['com.fasterxml.jackson.core.jackson-databind', '2.13.3', '../lib/plugins/com.fasterxml.jackson.core.jackson-databind_2.13.3.jar', 'add'],
    ['com.fasterxml.jackson.dataformat.jackson-dataformat-yaml', '2.9.8', '../lib/plugins/com.fasterxml.jackson.dataformat.jackson-dataformat-yaml_2.9.8.jar', 'remove'],
    ['com.fasterxml.jackson.dataformat.jackson-dataformat-yaml', '2.13.3', '../lib/plugins/com.fasterxml.jackson.dataformat.jackson-dataformat-yaml_2.13.3.jar', 'add'],
    ['com.google.gson', '2.8.5', '../lib/plugins/com.google.gson_2.8.5.jar', 'remove'],
    ['com.google.gson', '2.8.2', '../lib/plugins/com.google.gson_2.8.2.jar', 'remove'],
    ['com.google.gson', '2.2.4', '../lib/plugins/com.google.gson_2.2.4.jar', 'remove'],
    ['com.google.gson', '2.9.0', '../lib/plugins/com.google.gson_2.9.0.jar', 'add'],
    ['commons-io', '2.4.0.wso2v1', '../lib/plugins/commons-io_2.4.0.wso2v1.jar', 'remove'],
    ['commons-io', '2.11.0.wso2v1', '../lib/plugins/commons-io_2.11.0.wso2v1.jar', 'add'],
    ['failureaccess', '1.0.1.wso2v1', '../lib/plugins/failureaccess-1.0.1.jar', 'add'],
    ['com.google.guava', '23.0.0', '../lib/plugins/com.google.guava_23.0.0.jar', 'remove'],
    ['com.google.guava', '20.0.0', '../lib/plugins/com.google.guava_20.0.0.jar', 'remove'],
    ['guava', '31.1', '../lib/plugins/guava-31.1-jre.jar', 'add'],
    ['msf4j-swagger', '2.7.7', '../lib/plugins/msf4j-swagger_2.7.7.jar', 'remove'],
    ['msf4j-swagger', '2.7.7.9', '../lib/plugins/msf4j-swagger_2.7.7.9.jar', 'add'],
    ['org.wso2.carbon.cluster.coordinator.rdbms', '2.1.7', '../lib/plugins/org.wso2.carbon.cluster.coordinator.rdbms_2.1.7.jar', 'remove'],
    ['org.wso2.carbon.cluster.coordinator.rdbms', '2.1.7.1', '../lib/plugins/org.wso2.carbon.cluster.coordinator.rdbms_2.1.7.1.jar', 'add'],
    ['org.yaml.snakeyaml', '1.29.0', '../lib/plugins/org.yaml.snakeyaml_1.29.0.jar', 'remove'],
    ['org.yaml.snakeyaml', '1.30.0', '../lib/plugins/org.yaml.snakeyaml_1.30.0.jar', 'add'],
    ['siddhi-core', '5.1.15.64', '../lib/plugins/siddhi-core_5.1.15.64.jar', 'remove'],
    ['siddhi-core', '5.1.15.65', '../lib/plugins/siddhi-core_5.1.15.65.jar', 'add'],
    ['io.swagger.annotations', '1.5.16', '../lib/plugins/io.swagger.annotations_1.5.16.jar', 'remove'],
    ['swagger-annotations', '1.6.6', '../lib/plugins/swagger-annotations-1.6.6.jar', 'add'],
    ['io.swagger.core', '1.5.16', '../lib/plugins/io.swagger.core_1.5.16.jar', 'remove'],
    ['swagger-core', '1.6.6', '../lib/plugins/swagger-core-1.6.6.jar', 'add'],
    ['io.swagger.jaxrs', '1.5.16', '../lib/plugins/io.swagger.jaxrs_1.5.16.jar', 'remove'],
    ['swagger-jaxrs', '1.6.6', '../lib/plugins/swagger-jaxrs-1.6.6.jar', 'add'],
    ['io.swagger.models', '1.5.16', '../lib/plugins/io.swagger.models_1.5.16.jar', 'remove'],
    ['swagger-models', '1.6.6', '../lib/plugins/swagger-models-1.6.6.jar', 'add']
];

for (var i = 0; i < list.length; i++) {
    $('#txtBundlesInfoPath').val(bundlesInfoPath);
    $('#txtJarName').val(list[i][0]);
    $('#txtJarVersion').val(list[i][1]);
    $('#txtRelativeJarPath').val(list[i][2]);
    $('#cmbChangeType').val(list[i][3]);
    $('#btnAddBundlesInfo').click();
}