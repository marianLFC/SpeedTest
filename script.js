function getFakeSpeed(max, min) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

document.getElementById('start-button').addEventListener('click', function() {
    const downloadElement = document.getElementById('download-speed');
    const uploadElement = document.getElementById('upload-speed');

    // Start real-time download speed update
    let downloadSpeed = 0;
    let downloadInterval = setInterval(() => {
        downloadSpeed = getFakeSpeed(100, 10);
        downloadElement.textContent = `Avg Download Speed: ${downloadSpeed} Mbps`;
    }, 1000);

    // Stop updating download speed after 15 seconds and start upload speed test
    setTimeout(() => {
        clearInterval(downloadInterval);

        // Start real-time upload speed update
        let uploadSpeed = 0;
        let uploadInterval = setInterval(() => {
            uploadSpeed = getFakeSpeed(50, 5);
            uploadElement.textContent = `Avg Upload Speed: ${uploadSpeed} Mbps`;
        }, 1000);

        // Stop updating upload speed after 10 seconds
        setTimeout(() => {
            clearInterval(uploadInterval);
        }, 10000); // Upload speed test for 10 seconds

    }, 15000); // Download speed test for 15 seconds
});
