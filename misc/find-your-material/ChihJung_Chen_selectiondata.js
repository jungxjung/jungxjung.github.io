var selections = {
    "choices" : [
        // First level start here. Select a textbook.
        {
            "key" : "Main",
            "option_1" : "Basic Written Chinese",
            "option_2" : "Integrated Chinese Level 1 Part 1",
            "prompt" : "Select a textbook.",
            "depth" : 'a'
        },
        // Second level for Basic Written Chinese start here. Select a Unit.
        {
            "key" : "Basic Written Chinese",
            "option_1" : "Unit A Part 1 : Numbers from 1 to 5 and the surname Wang",
            "option_2" : "Unit A Part 2 : Numbers from 6 to 10 and the surname Lin",
            "prompt" : "Select a Unit.",
            "depth" : 'b'
        },
        // Second Level for Integrated Chinese Level 1 Part 1. Select a lesson.
        {
            "key" : "Integrated Chinese Level 1 Part 1",
            "option_1" : "Lesson 1 Dialogue 1 : Exchanging Greetings",
            "option_2" : "Lesson 1 Dialogue 2 : Asking About Someone's Nationality",
            "prompt" : "Select a lesson",
            "depth" : 'b'
        },
        // Third level for BWC Unit A Part 1. 
        {
            "key" : "Unit A Part 1 : Numbers from 1 to 5 and the surname Wang",
            "option_1" : "Sentence structure",
            "option_2" : "Characters",
            "prompt" : "What are you looking for?",
            "depth" : 'c'
        },
        // Third level for BWC Unit A Part 2.
        {
            "key" : "Unit A Part 2 : Numbers from 6 to 10 and the surname Lin",
            "option_1" : "Sentence structure",
            "option_2" : "Characters",
            "prompt" : "What are you looking for?",
            "depth" : 'c'
        },
        // Third level for IC Lesson 1 Dialogue 1.
        {
            "key" : "Lesson 1 Dialogue 1 : Exchanging Greetings",
            "option_1" : "Traditionl Characters",
            "option_2" : "Simplified Characters",
            "prompt" : "What are you looking for?",
            "depth" : 'c'
        },
        // Third level for IC Lesson 1 Dialogue 2.
        {
            "key" : "Lesson 1 Dialogue 2 : Asking About Someone's Nationality",
            "option_1" : "Traditionl Characters",
            "option_2" : "Simplified Characters",
            "prompt" : "What are you looking for?",
            "depth" : 'c'
        }
    ]
}

var resultt = {
    "results" : [
        {
            "key" : 'a',
            "levelA" : "Basic Written Chinese",
            "levelB" : "Unit A Part 1 : Numbers from 1 to 5 and the surname Wang",
            "levelC" : "Sentence structure",
            "material" : "????????????(????????????)",
            "image" : "assets/image/translate.svg",
            "caption" : "??????; to translate"
        },
        {
            "key" : 'b',
            "levelA" : "Basic Written Chinese",
            "levelB" : "Unit A Part 1 : Numbers from 1 to 5 and the surname Wang",
            "levelC" : "Characters",
            "material" : "???, ???, ???, ???, ???, ???",
            "image" : "assets/image/king.png",
            "caption" : "???; king"

        },
        {
            "key" : 'c',
            "levelA" : "Basic Written Chinese",
            "levelB" : "Unit A Part 2 : Numbers from 6 to 10 and the surname Lin",
            "levelC" : "Sentence structure",
            "material" : "???????????????????(???????????????????)",
            "image" : "assets/image/write.jpeg",
            "caption" : "???; to write"
        },
        {
            "key" : 'd',
            "levelA" : "Basic Written Chinese",
            "levelB" : "Unit A Part 2 : Numbers from 6 to 10 and the surname Lin",
            "levelC" : "Characters",
            "material" : "???, ???, ???, ???, ???, ???",
            "image" : "assets/image/forest.jpeg",
            "caption" : "???; small forest"
        },
        {
            "key" : 'e',
            "levelA" : "Integrated Chinese Level 1 Part 1",
            "levelB" : "Lesson 1 Dialogue 1 : Exchanging Greetings",
            "levelC" : "Traditionl Characters",
            "material" : "???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???",
            "image" : "assets/image/mister.jpeg",
            "caption" : "??????; mister"
        },
        {
            "key" : 'f',
            "levelA" : "Integrated Chinese Level 1 Part 1",
            "levelB" : "Lesson 1 Dialogue 1 : Exchanging Greetings",
            "levelC" : "Simplified Characters",
            "material" : "???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???",
            "image" : "assets/image/mister.jpeg",
            "caption" : "??????; mister"
            
        },
        {
            "key" : 'g',
            "levelA" : "Integrated Chinese Level 1 Part 1",
            "levelB" : "Lesson 1 Dialogue 2 : Asking About Someone's Nationality",
            "levelC" : "Traditionl Characters",
            "material" : "???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???",
            "image" : "assets/image/newyork.jpeg",
            "caption" : "??????; New York"
        },
        {
            "key" : 'h',
            "levelA" : "Integrated Chinese Level 1 Part 1",
            "levelB" : "Lesson 1 Dialogue 2 : Asking About Someone's Nationality",
            "levelC" : "Simplified Characters",
            "material" : "???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???, ???",
            "image" : "assets/image/newyork.jpeg",
            "caption" : "??????; New York"
        }

    ]
}