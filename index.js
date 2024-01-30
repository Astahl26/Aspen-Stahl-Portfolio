function downloadResume() {
    var resumePath = 'Aspen_Stahl_Resume.pdf';

    var link = document.createElement('a');

    link.download = 'Aspen_Stahl_Resume.pdf';
    link.href = resumePath;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}