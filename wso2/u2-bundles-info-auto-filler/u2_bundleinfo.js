
var entries = {
    'repository/components/api-devportal-deprecated/configuration/org.eclipse.equinox.simpleconfigurator/bundles.info': {
        add: [
        ],
        remove: [
            ['libthrift', '0.9.2.wso2v1', '../plugins/libthrift_0.9.2.wso2v1.jar']
        ]
    },
    'repository/components/api-key-manager-deprecated/configuration/org.eclipse.equinox.simpleconfigurator/bundles.info': {
        add: [
        ],
        remove: [
            ['libthrift', '0.9.2.wso2v1', '../plugins/libthrift_0.9.2.wso2v1.jar']
        ]
    }
};

for (var [path, obj] of Object.entries(entries)) {
    var add = obj['add'];
    var remove = obj['remove'];

    for (var i = 0; i < add.length; i++) {
        $('#btnBundlesInfoModalOpen').click();
        $('#txtBundlesInfoPath').val(path);
        $('#txtJarName').val(add[i][0]);
        $('#txtJarVersion').val(add[i][1]);
        $('#txtRelativeJarPath').val(add[i][2]);
        $('#cmbChangeType').val('add');
        $('#btnAddBundlesInfo').click();
        alert('Adding an entry...');
    }

    for (var i = 0; i < remove.length; i++) {
        $('#btnBundlesInfoModalOpen').click();
        $('#txtBundlesInfoPath').val(path);
        $('#txtJarName').val(remove[i][0]);
        $('#txtJarVersion').val(remove[i][1]);
        $('#txtRelativeJarPath').val(remove[i][2]);
        $('#cmbChangeType').val('remove');
        $('#btnAddBundlesInfo').click();
    }
}