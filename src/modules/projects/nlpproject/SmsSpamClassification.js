import React from 'react'
import NLPTextBox from '../Components/NLPTextBox'

export default function SmsSpamClassification() {
    return (
        <React.Fragment>
            <NLPTextBox 
                route="spanclassifier"
                name="SMS Spam Classifier"
                description="SMS Spam Classifier using NLP. Machine Learning Algorithm used Naive Bayes, Random Forest, SVM"
                githubLink="https://github.com/isubhamsr/NLP/tree/master/Projects/SMS%20Spam%20classifier"
                link="https://www.codeingschool.com/2021/06/sms-spam-classifier-with-nlp-with-deployment-code.html"
                zero="Ham Message"
                zeroMessage="Go until jurong point, crazy.. Available only in bugis n great world la e buffet... Cine there got amore wat..."
                right=""
                one="Spam Message"
                oneMessage="Free entry in 2 a weekly comp to win FA Cup final 21st May 2005. Text FA to 87121 to receive entry question(std txt rate)T&C's apply 08452810075over18's"
                wrong=""
            />
        </React.Fragment>
    )
}
