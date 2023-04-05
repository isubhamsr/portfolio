import React from "react";
import NLPTextBox from "../Components/NLPTextBox";

export default function StockPricePrediction() {
  return (
    <React.Fragment>
      <NLPTextBox
        route="stockpriceprediction"
        name="Predict Stock Price Movement Based On News Headline (Kaggle Competition)"
        description="Predict Stock Price Movement Based On News Headline using NLP (Kaggle Competition). Machine Learning Algorithm used Naive Bayes, Random Forest, SVM"
        githubLink="https://github.com/isubhamsr/NLP/tree/master/Projects/Predict%20Stock%20Price%20Movement%20Based%20On%20News%20Headline%20(Kaggle%20Competition)"
        link="https://www.codeingschool.com"
        zero="0"
        zeroMessage="A hindrance to operations extracts from the leaked reports"
        right="(Stock Price will Goes Down)"
        one="1"
        oneMessage="Pilgrim knows how to progress"
        wrong="(Stock Price will Goes Up)"
      />
    </React.Fragment>
  );
}
