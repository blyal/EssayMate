// Define the `phonecatApp` module
var phonecatApp = angular.module('ieapp', ['ngAnimate']);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('componentController', function PhoneListController($scope) {
  //Show buttons for main page and welcome page
  $scope.hideShowEssayMate = false; //home page --> keep this
  $scope.hideShowWelcome = false; //page after intro 
  
  //Button collapses for Introduction, Conclusion, Evaluation
  $scope.collapsebtn = true; //hides intro blue button
  $scope.collapsebtnC = true; //same but for conclusion
  $scope.collapsebtnE = true; //Evaluation

  
  $scope.hideShowAddButtons = true; //menu of initial buttons, get rid of this and accociated values
  $scope.hideShowContainer = true; //important main page
  $scope.hideShowProgress = false; //progress bar


  //Randomised encouraging message for each section - work in prog
  var encouragingMessages = ["Remember, it doesn't have to be perfect.", "The important thing is to get the main idea down.", "Remember, you can always tidy it up later.", "Anything is better than staring at a blank page!", "It's fine to put whatever ideas down, and improve them later.", "First drafts can be messy. Go for it!"];

 //These need editing, data for each section
  var point = {
      "sectionHdr": "Point",
      "sectionDesc": "This is how a paragraph works",
      "modules": [{
        "moduleHdr": "Explain",
        "moduleDesc": "Explain the first (or second, etc.) point of your argument.",
        "examples": [
          "here is first example",
          "Here is the second example",
          "Here is the third example"
        ]
      }, {
        "moduleHdr": "Evidence",
        "moduleDesc": "Give the evidence you have found that reinforces your point.",
        "examples": [
          "here is first example",
          "Here is the second example",
          "Here is the third example"
        ]
      }, {
        "moduleHdr": "Analyse",
        "moduleDesc": "Critically analyse this evidence and how it contributes to the point you made above.",
        "examples": [
          "here is first example",
          "Here is the second example",
          "Here is the third example"
        ]
      }, {
        "moduleHdr": "Recap / Link to thesis",
        "moduleDesc": "Recap the main point you have made in this section and link it back to your introduction/thesis.",
        "examples": [
          "here is first example",
          "Here is the second example",
          "Here is the third example"
        ]
      }],
      "sectionEncouragement": "",
      set encouragingMsg(value) {
        this.sectionEncouragement = value;
      }
    };
    point.encouragingMsg = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
  var counterpoint = {
      "sectionHdr": "Counterpoint",
      "sectionDesc": "This is how a counter-paragraph works",
      "modules": [{
        "moduleHdr": "Explain",
        "moduleDesc": "Explain the counterpoint to your argument.",
        "examples": [
          "here is first example",
          "Here is the second example",
          "Here is the third example"
        ]
      }, {
        "moduleHdr": "Evidence",
        "moduleDesc": "Give the evidence as to why this is a counterpoint to your argument.",
        "examples": [
          "here is first example",
          "Here is the second example",
          "Here is the third example"
       ]
      }, {
        "moduleHdr": "Analyse",
        "moduleDesc": "Form your rebuttal against the counterpoint, i.e. why it is wrong.",
        "examples": [
          "here is first example",
          "Here is the second example",
          "Here is the third example"
        ]
      }, {
        "moduleHdr": "Recap / Link to thesis",
        "moduleDesc": "Recap the main point you have made in this section and link it back to your introduction/thesis.",
        "examples": [
          "here is first example",
          "Here is the second example",
          "Here is the third example"
       ]
    }],
    "sectionEncouragement": "",
    set encouragingMsg(value) {
      this.sectionEncouragement = value;
    }
  };
  counterpoint.encouragingMsg = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
  var introduction = {
    "sectionHdr": "Introduction",
    "sectionDesc": "This is how an introduction works",
    "modules": [{
      "moduleHdr": "General Statement",
      "moduleDesc": "A general statement about the subject that gives context to your essay.",
      "examples": [
        "here is first example",
        "Here is the second example",
        "Here is the third example"
      ]
    }, {
      "moduleHdr": "Explanation Sentences",
      "moduleDesc": "A few sentences to start to explain what your essay will be about and introduce the topic.",
      "examples": [
        "here is first example",
        "Here is the second example",
        "Here is the third example"
      ]
    }, {
      "moduleHdr": "Thesis",
      "moduleDesc": "A specific thesis statement - your 'main argument' in one sentence.",
      "examples": [
        "here is first example",
        "Here is the second example",
        "Here is the third example"
      ]
    }],
    "sectionEncouragement": "",
    set encouragingMsg(value) {
      this.sectionEncouragement = value;
    }
  };
  introduction.encouragingMsg = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
  var evaluation = {
    "sectionHdr": "Evaluation",
    "sectionDesc": "This is what a evaluation is",
    "modules": [{
      "moduleHdr": "Evaluation of your Argument",
      "moduleDesc": "Bring your main points and counterpoint rebuttals together to fully form the basis of your argument and how this leads to your conclusion/thesis.",
      "examples": [
        "here is first example",
        "Here is the second example",
        "Here is the third example"
      ]
    }],
    "sectionEncouragement": "",
    set encouragingMsg(value) {
      this.sectionEncouragement = value;
    }
  };
  evaluation.encouragingMsg = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
 var conclusion = {
  "sectionHdr": "Conclusion",
  "sectionDesc": "This is what a conclusion is",
  "modules": [{
    "moduleHdr": "Concluding your Argument",
    "moduleDesc": "Conclude your argument and state the thesis/conclusion your argument has led to.",
    "examples": [
      "here is first example",
      "Here is the second example",
      "Here is the third example"
    ]
  }],
  "sectionEncouragement": "",
  set encouragingMsg(value) {
    this.sectionEncouragement = value;
  }
};
conclusion.encouragingMsg = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];

  $scope.sections = [];

  $scope.deleteSection = function ($index) {
    if (confirm("Are you sure you want to delete this section?")) {
      $scope.sections.splice($index, 1);
    }
  }
//template for a section. Commenting it out ruins the app?
  var template = {
    "sectionHdr": "Introduction",
    "sectionDesc": "This is essay Description",
    "modules": [{
      "moduleHdr": "Beginning Sentence",
      "moduleDesc": "This is description of beggining sentence",
      "examples": [
        "here is first example",
        "Here is the second example",
        "Here is the third example"
      ]
    }, {
      "moduleHdr": "Beginning Sentence2",
      "moduleDesc": "This is description of beggining sentence2",
      "examples": [
        "here is first example",
        "Here is the second example",
        "Here is the third example"
      ]
    }, {
      "moduleHdr": "Beginning Sentence3",
      "moduleDesc": "This is description of beggining sentence2",
      "examples": [
        "here is first example",
        "Here is the second example",
        "Here is the third example"
      ]
    }]
  };

  $scope.openWelcomePage = function () {
    $scope.hideShowEssayMate = !$scope.hideShowEssayMate;
    $scope.hideShowWelcome = !$scope.hideShowWelcome;
  }

  $scope.addIntroduction = function(){
    //Build Json object, add to ng-repeat list
    $scope.sections.splice(0, 0, introduction);
    $scope.collapsebtn = !$scope.collapsebtn; //hide button for adding
    $scope.hideShowProgress = true; //ensures that the progress bar is showing
  }

  $scope.addPoint = function(){
    var newPoint = JSON.parse(JSON.stringify(point));
    $scope.sections.push(newPoint);
    $scope.hideShowProgress = true;
  }

  $scope.addCounterpoint = function(){
    var newCounterpoint = JSON.parse(JSON.stringify(counterpoint));
    $scope.sections.push(newCounterpoint);
    $scope.hideShowProgress = true;
  }

  $scope.addEvaluation = function(){
    $scope.sections.push(evaluation);
    $scope.collapsebtnE = !$scope.collapsebtnE; //hide button for adding
    $scope.hideShowProgress = true;
  }

  $scope.addConclusion = function(){
    if($scope.sections.length === 0){
      $scope.sections.push(conclusion);
    }
    else{
      $scope.sections.splice($scope.sections.length, 0, conclusion);
    }
    $scope.collapsebtnC = !$scope.collapsebtnC; //hide button for adding
    $scope.hideShowProgress = true;
  }

  $scope.beginEssay = function(){
    $scope.hideShowWelcome = !$scope.hideShowWelcome;
    $scope.hideShowContainer = !$scope.hideShowContainer;
  }


  $scope.currentmodule = 0; //Set current module position
  $scope.currenttemplate = template;


  //Class changes
  $scope.addAnimationClass  = false;
  
  //Set position of next module 
  var isAnimating = false;
  var otherAnimating = false;
  

  $scope.next = function(){
    if(otherAnimating){return;}
    if(isAnimating){return;}
    otherAnimating = true;
    $scope.addAnimationClass  = false;
    isAnimating = true;

    pos = $scope.currentmodule;
    temp = $scope.currenttemplate;
    
    if(pos == ($scope.currenttemplate.modules.length-1)){
      //$scope.currentmodule = 0;
    }
    else {
      $scope.currentmodule +=1;
      
    }
    
    setTimeout(function() {
      isAnimating = false;
      otherAnimating = false;
  }, 1000);
  }

  
  
  //Set position of previous module
  
  $scope.prev = function(){
    if(otherAnimating){return;}
    if(isAnimating){return;}
    otherAnimating = true;
    $scope.addAnimationClass  = true;

    isAnimating = true;
    pos = $scope.currentmodule;
    temp = $scope.currenttemplate;
    if(pos==0){
      //$scope.currentmodule = $scope.currenttemplate.modules.length-1;
    }
    else {
      $scope.currentmodule -=1;
    }
  
    setTimeout(function() {
      isAnimating = false;
      otherAnimating = false;
      
  }, 1000);
  }

  $scope.dynamicModuleList = [0, 0, 0, 0, 0] //set the size of sections list

  $scope.changeindex = function(sectionindex, moduleindex){
    $scope.dynamicModuleList[sectionindex] = moduleindex;
  }


}); 