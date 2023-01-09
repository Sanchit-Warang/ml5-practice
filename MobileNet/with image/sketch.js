
// // A variable to hold the image we want to classify
// let img;

// function setup() {
//   img = createImg('https://t4.ftcdn.net/jpg/03/11/22/37/360_F_311223759_2GqmuNTum7xElkCm9lyaw4ZZYqZE2Qlu.jpg');
// }

// function setup() {
//   createCanvas(400, 400);
//   classifier.classify(img, gotResult);
//   image(img, 0, 0);
// }

// // A function to run when we get any errors and the results
// function gotResult(error, results) {
//   // Display error in the console
//   if (error) {
//     console.error(error);
//   }
//   // The results are in an array ordered by confidence.
//   console.log(results);
//   createDiv('Label: ' + results[0].label);
//   createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
// }


const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
    classifier.classify(document.getElementById('image')).then(results => {
        console.log(results)
    })
}
  
