const videoEle = document.querySelector('#video')
const resultsEle = document.querySelector('#results')

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    videoEle.srcObject = stream
    videoEle.play()
  })
  
  const classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RELP8XhB1/', videoEle, modelLoaded);

  function modelLoaded() {
      console.log('Model Loaded!');
      classifier.classify(loadresults)
  }

function loadresults(err, results){
    const percent = results[0].confidence * 100
    resultsEle.innerHTML = `${results[0].label} with confidence of ${percent.toFixed(0)}%`
    classifier.classify(loadresults)
}