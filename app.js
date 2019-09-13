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
  $scope.showExportPdf = false; //button for exporting PDF
  $scope.showPDFTemplate = false; //hides the PDF template section - the roundabout way for saving a PDF


  //Randomised encouraging message for each section - work in prog
  var encouragingMessages = ["Remember, it doesn't have to be perfect.", "The important thing is to get the main idea down.", "Remember, you can always tidy it up later.", "Anything is better than staring at a blank page!", "It's fine to put whatever ideas down, and improve them later.", "First drafts can be messy. Go for it!"];

 //These need editing, data for each section
  var point = {
      "sectionHdr": "Point",
      "sectionDesc": "Your points should all support your thesis statement, and follow a logical order. Achieving a logical order can be done by ending your paragraph with a sentence that transitions into the next paragraph.",
      "modules": [{
        "moduleHdr": "Explain",
        "moduleDesc": "Explain the first (or second, etc.) point of your argument.",
        "examples": [
          "It is vitally important for students to be taught the strategies for using IT. Children also need to be fully informed about the capabilities of IT before being asked to use it.",
          "Evidence points to the fact that, in general, test anxiety lowers performance slightly. This relationship has been studied for well over 60 years. During that time, some studies have reported that test anxiety does not lead to lower results (Burns, 2004; Sansgiry, Bhosle, & Sail, 2006). However, these findings are not likely to be true of all students.",
          "Another advantage of Facebook in the tertiary setting is that it can increase student engagement with course content. Research shows that students who participate actively in their learning, and in their overall tertiary experience, are more likely to succeed (Pascarella & Terenzini, 2005)."
        ]
      }, {
        "moduleHdr": "Evidence",
        "moduleDesc": "Give the evidence you have found that reinforces your point.",
        "examples": [
          "According to Apter (1968), the danger is that the “computer dehumanizes people and inevitably leads them to act like machines themselves” (p. 58).",
          "Burns (2004) examined general anxiety rather than the more specific ‘test anxiety’, thus limiting what he can claim. Equally, Sansgiry, Bhosle, and Sail’s (2006) research findings are limited to their sample as it was made up of a very particular group of students, with 72.5% being female and 51% Asian/Pacific Islander.",
          "For example, in one study, many students were permanently signed into Facebook, so they could frequently engage with posts related to their course content, assignments and activities (Irwin, Ball, Desbrow & Leveritt, 2012)."
        ]
      }, {
        "moduleHdr": "Analyse",
        "moduleDesc": "Critically analyse this evidence and how it contributes to the point you made above.",
        "examples": [
          "Pupils should be aware that the contexts in which they use IT will change, and they need to know what the appropriate use of IT is and what is not. Whilst it is important that children learn to use IT effectively, teachers must emphasise that IT is not always suitable.",
          "More important is the fact that most other studies have found that test anxiety does lower performance. For example, Hembree (1988), after analysing 562 studies of test anxiety concluded that for all students at all levels of education including university, “test anxiety harms performance” (p. 75). More recent research involving university students has provided additional support for the earlier findings. Musch and Bröder (1999) claimed that test anxiety lowered the performance of students sitting a statistics examination at the University of Koblenz, explaining about 5% of the variance in examination results.",
          "An additional dimension of their participation is that students may use Facebook comments to critique their experience. For instance, Rambe (2012) found that students felt empowered to voice concerns about teaching methods, course materials and institutional processes. They were also relieved to find that their classmates shared their difficulties. As a result of students’ critique, lecturers were made aware of issues that affected learning and were able to address these problems."
        ]
      }, {
        "moduleHdr": "Recap / Link to thesis",
        "moduleDesc": "Recap the main point you have made in this section and link it back to your introduction/thesis.",
        "examples": [
          "Therefore, teachers must make sure they plan to use variety in their lessons. In order to successfully model appropriate uses of IT, teachers must appropriately plan how their students will use IT in their learning.",
          "Therefore, combating test anxiety should be an area that should be addressed by lecturers when aiming to foster their student’s overall academic development.",
          "These types of online interactions demonstrate how Facebook can be used to access, engage with and critique course content."
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
      "sectionDesc": "Not all essays will need a counterpoint, but they are helpful in showing the reader you have recognised the counter argument. Make sure to explain why this counterpoint is untrue or invalid.",
      "modules": [{
        "moduleHdr": "Explain",
        "moduleDesc": "Explain the counterpoint to your argument.",
        "examples": [
          "A potential issue with Facebook concerns safety and privacy. Although it is possible for Facebook users to control access to their own profiles and data, Facebook does not make this an easy process, and a large proportion of students are unclear about how to do this effectively (Jordaan & Van Heerden, 2017). Students are then vulnerable to online predators, who may have access to contact details, personal information, and photographs. Photographs and videos are a particular concern because of their potential to cause embarrassment and distress (Kolek & Saunders, 2008)."
        ]
      }, {
        "moduleHdr": "Evidence",
        "moduleDesc": "Give the evidence as to why this is a counterpoint to your argument.",
        "examples": [
          "For example, in New Zealand, photographs of young girls being sexually assaulted when drunk were posted on a Facebook page causing immense harm to the victims (Quillam, 2013). Students are also increasingly concerned about the marketing tools being deployed on Facebook and feel a loss of control over their personal data (Jordaan & Van Heerden, 2017)."
       ]
      }, {
        "moduleHdr": "Analyse",
        "moduleDesc": "Form your rebuttal against the counterpoint, i.e. why it is wrong.",
        "examples": [
          "However, many of these issues can be remedied by supporting tertiary students to learn how to protect their profiles and data, and use social networking sites safely. Collins (2018) found that after a 30-minute training workshop on how to use Facebook safely and appropriately, negative outcomes of Facebook usage, measured after 12 months, decreased by an average of 38%."
        ]
      }, {
        "moduleHdr": "Recap / Link to thesis",
        "moduleDesc": "Recap the main point you have made in this section and link it back to your introduction/thesis.",
        "examples": [
          "Therefore, although legitimate privacy and safety concerns exist with Facebook, it can be mitigated by educational interventions while preserving the positive outcomes associated with Facebook use, such as collaboration."
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
    "sectionDesc": "The introduction defines the problem or focus of the essay. It provides an outline of what is to come in the essay. Often it’s easiest to do the introduction last, after you’ve properly formulated your ideas. Remember that it gives the reader the first impression of your essay.",
    "modules": [{
      "moduleHdr": "General Statement",
      "moduleDesc": "A general statement about the subject that gives context to your essay.",
      "examples": [
        "Education means considerably more than just teaching a student to read, write, and manipulate numbers. Computers, the Internet, and advanced electronic devices are becoming essential in everyday life and have changed the way information is gathered.",
        "Typically, universities use examinations to test part or even all the knowledge of students, particularly in first-year courses. As Burns (2004) noted, examination results can determine if a student passes a course or can progress onto further study, and may even influence employment opportunities. Understandably, educators are concerned that examinations are a fair indication of a student’s knowledge.",
        "The social networking website Facebook has become increasingly popular with over 1.8 billion people using Facebook on a monthly basis (Facebook, 2017). As a result, there is discussion within the tertiary education sector about the ways in which websites like Facebook can be used in learning and teaching."
      ]
    }, {
      "moduleHdr": "Explanation Sentences",
      "moduleDesc": "A few sentences to start to explain what your essay will be about and introduce the topic.",
      "examples": [
        "How this new technology is utilized in the curriculum and managed by teachers will have an important role to play in widening the resource and knowledge base for all students. Technology affects the way teachers teach and students learn.",
        "One area of special interest is the role anxiety plays in relation to examination performance. In general, test anxiety lowers performance slightly, although this is not evident in all situations, nor with all types of students. Further, the main mechanism for this result appears to be that test anxiety leads to the development of interfering thoughts, which prevent a proper focus on examination tasks.",
        "The use of social networking sites within universities is of interest because of their potential for both positive and negative impact. Benefits of using Facebook are related to online community building, engagement and collaboration. Concerns around the use of Facebook include its potential to distract students, and problems of safety and privacy."
      ]
    }, {
      "moduleHdr": "Thesis",
      "moduleDesc": "A specific thesis statement - your 'main argument' in one sentence.",
      "examples": [
        "To make the best use of information technology (IT), schools need a workable plan to fully integrate it into all aspects of the curriculum so students are taught how, why, and when to use technology to further enhance their learning.",
        "Although many factors impact on examination performance, test anxiety is of particular interest as it appears to lead directly to unfair results.",
        "Therefore, learners and teachers need to critically evaluate the educational value of such sites."
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
    "sectionDesc": "Summarising your essay in preparation for the conclusion.",
    "modules": [{
      "moduleHdr": "Evaluation of your Argument",
      "moduleDesc": "Bring your main points and any counterpoint rebuttals together to fully form the basis of your argument and how this leads to your conclusion/thesis.",
      "examples": [
        "China has a dramatically lower poverty and malnutrition rate than during Mao’s day. Though quite poor, people once experienced better economic equality. Despite improvement in wealth, today’s widening economic gap has brought a sense of injustice for the poor. Although healthcare has improved, it is no longer provided by the government for free, so it presents great difficulties for those who cannot afford basic medicine or hospital treatment. Education is more predominant today, but the poor struggle to afford education for their children, which increases economic inequality. People have more freedom of job choice than in the Mao period, but instability is a challenge, especially for the unemployed. New forms of leisure and consumption provide pleasure for all Chinese, but a negative result is dissatisfaction, especially for urban residents who cannot afford the signs of wealth they see around them."
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
  "sectionDesc": "Conclude your argument and state the thesis or conclusion that your argument has led to.",
  "modules": [{
    "moduleHdr": "Concluding your Argument",
    "moduleDesc": "Be clear and do not include any new information here.",
    "examples": [
      "The usefulness of IT in the classroom, as with any learning tool, depends on the innovation and imagination of the teacher. It is imperative, though, that the implementation of IT into a school is carefully planned. The current information explosion makes it essential that IT be used extensively within the classroom so children know how to use IT appropriately and effectively. Teachers must, therefore, be fully informed about what kinds of IT are available and whether or not they are appropriate for classroom use. School boards and teachers must therefore ensure that all staff have a clear plan about what they want their students to achieve through IT. The appropriate incorporation of IT into the classroom will broaden the minds and skills of students, allowing them to be better prepared for further technological advances.",
      "In summary, there are various positive and negative aspects of using Facebook at a tertiary level. Research has identified how Facebook can facilitate social interaction and rich collaboration between peers. Therefore, it has the potential to complement face-to-face modes of delivery. However, if Facebook is going to be effectively and safely used in tertiary teaching and learning, then students and teachers need careful guidance. Concerns about use centre on the tendency of Facebook to distract students, as well as the need to support students to better control privacy settings, Although the use of any online tool comes with inherent challenges that need careful consideration, the benefits exemplify how the integration of technology offers new approaches to teaching and learning.",
      "The impact of anxiety on examinations has been very closely studied for a long time. There is general acceptance that debilitative anxiety negatively impacts examination performance slightly and that it does so via an interference mechanism in which task-irrelevant thoughts undermine a student’s ability to recall previously learned material. However, this essay also shows that not all examinations are impacted by anxiety. Test anxiety appears to have its greatest impact in difficult examinations and in earlier years of a degree program. As well, not all students are equally affected. Female students have higher anxiety than male students, and while their examination scores are reduced, they are not as reduced as those of their male colleagues with lower anxiety. While the question of anxiety has been studied for many years, it is still an important issue to consider as its presence does mean that a student’s knowledge is not fairly assessed during an examination."
    ]
  }],
  "sectionEncouragement": "",
  set encouragingMsg(value) {
    this.sectionEncouragement = value;
  }
};
conclusion.encouragingMsg = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];

  $scope.sections = [];

  $scope.userText = [];

  $scope.deleteSection = function ($index) {
    if (confirm("Are you sure you want to delete this section?")) {
      $scope.userText.splice($index, 1);
      $scope.sections.splice($index, 1);
      $scope.dynamicModuleList.splice($index, 1);
      if (!$scope.sections.includes(introduction)) {
        $scope.collapsebtn = true;
      };
      if (!$scope.sections.includes(evaluation)) {
        $scope.collapsebtnE = true;
      };
      if (!$scope.sections.includes(conclusion)) {
        $scope.collapsebtnC = true;
      };
    }
  }

  //section for generating PDFs (clunky, roundabout way)
  var x = $scope.userText;
  $scope.genPDF = function () {
      var y = x.join('--nextsection--');
      var pdf = new jsPDF();
      document.getElementById('pdfText').innerHTML = y;
      var pdfInfo = document.getElementById('pdfTemplate');
      pdf.fromHTML(pdfInfo,20,20,{
        'width':165
      });
      pdf.save('Essay Mate Essay');
  }

  $scope.dynamicModuleList = [0, 0, 0, 0, 0] //set the size of sections list

  $scope.changeindex = function(sectionindex, moduleindex){
    $scope.dynamicModuleList[sectionindex] = moduleindex;
  }

  $scope.dynamicExampleList = [0, 0, 0, 0]
  $scope.changeindex2 = function(moduleindex, exampleindex){
    $scope.dynamicExampleList[moduleindex] = exampleindex;
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

  function getIndexFunction (variable) {
    return variable = variable;
  }

  $scope.addIntroduction = function(){
    //Build Json object, add to ng-repeat list
    $scope.sections.splice(0, 0, introduction);
    $scope.dynamicModuleList.splice(0, 0, 0);
    $scope.collapsebtn = !$scope.collapsebtn; //hide button for adding
    $scope.hideShowProgress = true; //ensures that the progress bar is showing
    $scope.showExportPdf = true; //ensures export PDF button is showing
  }

  $scope.addPoint = function(){
    var newPoint = JSON.parse(JSON.stringify(point));
    $scope.sections.push(newPoint);
    $scope.dynamicModuleList.push(0);
    $scope.hideShowProgress = true;
    $scope.showExportPdf = true; //ensures export PDF button is showing
  }

  $scope.addCounterpoint = function(){
    var newCounterpoint = JSON.parse(JSON.stringify(counterpoint));
    $scope.sections.push(newCounterpoint);
    $scope.dynamicModuleList.push(0);
    $scope.hideShowProgress = true;
    $scope.showExportPdf = true; //ensures export PDF button is showing
  }

  $scope.addEvaluation = function(){
    if ($scope.sections.includes(conclusion)) {
      $scope.sections.splice($scope.sections.length - 1, 0, evaluation);
    } else {    
    $scope.sections.push(evaluation);
    };
    $scope.dynamicModuleList.push(0);
    $scope.collapsebtnE = !$scope.collapsebtnE; //hide button for adding
    $scope.hideShowProgress = true;
    $scope.showExportPdf = true; //ensures export PDF button is showing
  }

  $scope.addConclusion = function(){
    if($scope.sections.length === 0){
      $scope.sections.push(conclusion);
    }
    else{
      $scope.sections.splice($scope.sections.length, 0, conclusion);
    }
    $scope.dynamicModuleList.push(0);
    $scope.collapsebtnC = !$scope.collapsebtnC; //hide button for adding
    $scope.hideShowProgress = true;
    $scope.showExportPdf = true; //ensures export PDF button is showing
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


}); 