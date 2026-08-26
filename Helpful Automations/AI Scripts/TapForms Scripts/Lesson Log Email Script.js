var student_email = record.getFieldValue('fld-c6618336faeb4cfd8516c7e79f2c1284');
var parent_email = record.getFieldValue('fld-25bfd1fd5b24407eb5606b91f1f46fc2');
var lessons_link = record.getFieldValue('fld-9656683eef814f02a7a2b0113b3ca789');
var last_name = record.getFieldValue('fld-4c2cce3cb493413ead2383714419d22f');
var first_name = record.getFieldValue('fld-9226de91e60e458bac573bdff7f260a0');
var gender = record.getFieldValue('fld-d0b36bedd38a42bc9d2c5aa046da2fd5');

var pronoun = gender === 'Male' ? 'He' : gender === 'Female' ? 'She' : 'They';

var recipients = [student_email, parent_email].filter(function(email) {
    return email && email.trim() !== '';
});

if (recipients.length === 0) {
    Utils.alertWithMessage('No Emails Found', 'No email addresses found for this record.');
} else {
    var body = last_name + ' Family,\n\n'
        + 'I wanted to send ' + first_name + "'s lesson log for band. "
        + "This includes notes from each assessment attempt we've had.\n\n"
        + pronoun + ' should bookmark this.\n\n'
        + 'Best,\nMatthew Ehler'
        + lessons_link + '\n\n';

    Utils.openUrl('mailto:?bcc=' + recipients.join(',') + '&body=' + encodeURIComponent(body));
}