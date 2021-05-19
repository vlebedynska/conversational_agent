
// const ml = require('ml-sentiment')({lang: 'de'});
// var classified_text = ml.classify(`Ich fühle mich doof.`);
// console.log(classified_text)


// const sentiment = require('sentimental');
// const s = sentiment('DE', 'Das ist kein Wunder!');
// console.log(s)
// Results in: 0.8 score


const { SentimentAnalyzer } = require('node-nlp');


const { SentimentManager } = require('node-nlp');

const sentiment = new SentimentManager();
sentiment
    .process('de', 'Mir gehts ok')
    .then(result => console.log(result));
// { score: 0.313,
//   numWords: 3,
//   numHits: 1,
//   comparative: 0.10433333333333333,
//   type: 'senticon',
//   language: 'en' }



// const sentiment = new SentimentAnalyzer({ language: 'de' });
// sentiment
//     .getSentiment('Ich finde es toll')
//     .then(result => console.log(result));
// { score: 0.313,
//   numWords: 3,
//   numHits: 1,
//   comparative: 0.10433333333333333,
//   type: 'senticon',
//   language: 'en' }

// sentiment
//     .getSentiment('cats are stupid')
//     .then(result => console.log(result));
// { score: -0.458,
//   numWords: 3,
//   numHits: 1,
//   comparative: -0.15266666666666667,
//   type: 'senticon',
//   language: 'en' }