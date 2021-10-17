var quiz = {
    // (A) PROPERTIES
    // (A1) QUESTIONS & ANSWERS
    // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
    data: [{
        q: `You're out trick or treating with your younger sister.
    It's cold, dark and you've strayed away from the streets you know to an unfamiliar part of town.
    You walk up to the next house which is different from the other houses on the road. 
    It has a large wrought iron fence around the perimeter, overgrown trees, bushes hanging over the fence and some broken windows
    on the top floor.
    As you're about to turn around, you notice a light flickering in one of the upstairs rooms. Someone must be home.`,
        o: [
          `walk up to the house and trick or treat, as you approach the door thunder crashes and rain starts pouring down, so you quickly stand under the porch`,
          `go home, you have got enough sweets for tonight, you decide to turn around and go home when thunder crashes and rain starts to pour down. You run to the house and stand under the porch
      in order to stay dry.`,

        ],
        a: 0
      },
      {
        q: `The door is open and in the wind, it slowly creeks ajar. You walk in wearily, reassuring your sister it'll be ok.

    Inside you are greeted with a large grand staircase with old portraits up the side. All the furniture is covered in sheets, 
    the rugs are old and dusty with cobwebs draped across the banister. There is a chandelier hanging from the ceiling, swaying slowly 
    in the wind. To the left of the room is an open door leading through to a dark room.`,
        o: [
          `Call out "hello" You shout out"Hello", if someone's home they must have heard you. You hear a creek upstairs, but then silence. 
      Your sister tells you she's scared and doesn't want to go upstairs so you decide to walk through the open door to the left.
      `,
          `You decide to walk through the door to the left, better to stay downstairs than start sneaking around the whole house.`,
        ],
        a: 0
      },
      {
        q: `As you enter the room the door suddenly slams behind you, the room is pitch black you can't see you hand in front of your face. Ligthening strikes, the flash lights 
    up the room and you see a shadow in the corner. On the opposite side of the room is another door, this one shut.
    `,
        o: [
          `Open the closed door and see what's inside, The shadow in the corner turns out to be a coat hanging from the wall. "See nothing to be scared of" you tell your sister.`,
          `Inspect the shadow in the corner, You slowly walk over to the door, "best to keep moving" you tell yourself.
        `,
        ],
        a: 1
      },
      {
        q: `You walk up to the door and slowly reach for the handle. It's unlocked! As you cautiously open the door a bat frantically
            flies through the doorway at you. <!--Potential jump scare-->
            Taking a moment to compose yourself you walk through into a large dining room.
            The room is dim but you can just make out the table is set for dinner, some candles are lit flickering in the draft, 
            food half eaten and still warm, as if someone left in a rush. One of the windows is left ajar.`,
        o: [
            `Walk over to the window to check it out, You walk over to the window and decide to close it to keep the wind and rain out. The window won't move as you try to close it,
            almost like it's painted shut. As you're using all your strength to close the window ou feel a prickly feeling on the back of your neck. 
            You slowly look up and a cobweb full of spiders is directly above you making their way down and starting to crawl all over you.`,
            `Use the lit candles on the table to light the rest of the candles in the room As you walk around the room, lighting the candles, it begins to get clearer and brighter. You notice a large cobweb full of spiders
            over the window. Your sister nervously utters "I don't like spiders, let's not go there". You agree.`,
        ],
        a: 0
      },
      {
        q: `You decide it's time to leave, this is getting too creepy. As you're looking for a way out the window slams shut! 
            Frantically searching for a way out you notice a door that wasn't there before.`,
        o: [
            `Try this new door, You decide to try this new door, again it's unlocked so you slowly push it open and walk through.`,
            `Go back the way you came through the first room, You go back to the first room and over to the door. Someone has locked it! You sprint back to dining room.`,

        ],
        a: 0
      },
    {
      q: `You walk through this new door. Inside it's cold and damp, with stairs heading both up and down infront of you. A draft flows up the
          stairs with a slight howl that sounds like a woman crying out for help. You can't see beyond the 6th step on either set of stairs.
          One way must lead out, but which?
    `,
      o: [
          `The door leads out a secret bookcase at the top of the grand staircase. You breathe a sign of releif as you can see the way out.
          You smile at your sister to reassure her. Suddenly footsteps can be heard coming from down the hall.`,
          `go back through the secret bookcase and down the stairs to hide`,
      ],
      a: 0
    },
  {
    q: `You head down the stairs, they lead down to the basement. The basement is gloomy with low ceilings, there's a camp bed and wardrobe in
        the corner. It's clear someone is living here. Looking round the room there's a small broken window in the upper corner of the room, a 
        storm door clattering in the wind and creepily behind the stairs there's three cages with beds and chains inside. 
        You hear footsteps coming down the stairs, and the clunk of metal being dragged down each step. Bang. Bang. Bang.
        You have to get out of there fast!`,
    o: [
      `give you sister a leg up through the broken window, and follow her through` ,
      `run to the storm door and try and break out`,
    
    ],
    a: 0
  },
{
  q: `You manage to help your sister through the window. Yelling at her to run, you pull yourself up to squeeze through the tight gap.
      As you're halfway through someone grabs your legs and pulls you back, into the darkness...`,
  o: [
    "Scream",
    "Faint",
    
  ],
  a: 0
},
],

// (A2) HTML ELEMENTS
hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: function () {
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: function () {
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      quiz.hAns.appendChild(label);
    }
  },

  // (D) OPTION SELECTED
  select: function () {
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = this.dataset.idx == quiz.data[quiz.now].a;
    let wrong = this.dataset.idx !== quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      this.classList.add("correct");
    }
     else if (wrong) {
      window.location.assign("#hero");
    }
     else {
       this.classList.add("wrong");   
     }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(function () {
      if (quiz.now < quiz.data.length) {
        quiz.draw();
      } else {
        quiz.hQn.innerHTML = `You have Survived the Creepy House.`;
        quiz.hAns.innerHTML = "";
        window.location.assign("scare.html")
      }
    }, 1000);
  },

  // (E) RESTART QUIZ
  reset: function () {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};
window.addEventListener("load", quiz.init);