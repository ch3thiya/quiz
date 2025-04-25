
// Quiz questions and answers
const quizQuestions = [
    {
        category: "Basic Concepts & Architectures",
        question: "What does Moore's Law predict?",
        options: [
            "A) The cost of semiconductors will double every 18 months",
            "B) Transistor density will halve every 18 months",
            "C) Transistor density will double every 18 months",
            "D) Processor speed will halve every year"
        ],
        answer: "C"
    },
    {
        category: "Basic Concepts & Architectures",
        question: "Rock's Law relates to:",
        options: [
            "A) Memory size",
            "B) Cost of capital equipment",
            "C) Number of cores",
            "D) Software efficiency"
        ],
        answer: "B"
    },
    {
        category: "Basic Concepts & Architectures",
        question: "Which of the following best describes a virtual machine layer?",
        options: [
            "A) Executes low-level hardware instructions directly",
            "B) Manages the operating system directly",
            "C) Abstracts the level below it",
            "D) Sends power to hardware"
        ],
        answer: "C"
    },
    {
        category: "Basic Concepts & Architectures",
        question: "Who proposed the concept of stored-program computers?",
        options: [
            "A) Alan Turing",
            "B) John von Neumann",
            "C) Charles Babbage",
            "D) Bill Gates"
        ],
        answer: "B"
    },
    {
        category: "Basic Concepts & Architectures",
        question: "What are the three main hardware systems in the von Neumann model?",
        options: [
            "A) CPU, GPU, RAM",
            "B) CPU, I/O, Cache",
            "C) CPU, Main Memory, I/O",
            "D) CPU, Registers, ALU"
        ],
        answer: "C"
    },
    {
        category: "Basic Concepts & Architectures",
        question: "What is the von Neumann bottleneck?",
        options: [
            "A) Limited CPU registers",
            "B) Shared data path between CPU and memory",
            "C) Slow input devices",
            "D) Parallel execution of code"
        ],
        answer: "B"
    },
    {
        category: "Basic Concepts & Architectures",
        question: "Which cycle does a von Neumann machine follow?",
        options: [
            "A) Decode–Execute–Store",
            "B) Fetch–Decode–Execute",
            "C) Fetch–Store–Execute",
            "D) Decode–Fetch–Execute"
        ],
        answer: "B"
    },
    {
        category: "Basic Concepts & Architectures",
        question: "What is a characteristic of the Harvard Architecture?",
        options: [
            "A) Combines data and instructions in a single memory",
            "B) Has separate storage and signal pathways",
            "C) Is slower than von Neumann",
            "D) Is used only in gaming"
        ],
        answer: "B"
    },
    {
        category: "Basic Concepts & Architectures",
        question: "Which system was among the first to use 1 million processors?",
        options: [
            "A) IBM Deep Blue",
            "B) IBM Blue Gene",
            "C) Cray-1",
            "D) Intel Xeon"
        ],
        answer: "B"
    },
    {
        category: "Basic Concepts & Architectures",
        question: "What does DNA computing aim to solve more efficiently?",
        options: [
            "A) Encryption algorithms",
            "B) Graphical processing",
            "C) Traveling salesman problem",
            "D) Simple arithmetic"
        ],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "ISA stands for:",
        options: [
            "A) Internal System Architecture",
            "B) Instruction Set Architecture",
            "C) Integrated System Application",
            "D) Instructional Software Abstraction"
        ],
        answer: "B"
    },
    {
        category: "ISA, RISC, CISC",
        question: "Which is a CISC characteristic?",
        options: [
            "A) Simple instructions",
            "B) Multiple cycles per instruction",
            "C) Load/store architecture",
            "D) Few addressing modes"
        ],
        answer: "B"
    },
    {
        category: "ISA, RISC, CISC",
        question: "A RISC architecture usually features:",
        options: [
            "A) Complex instructions",
            "B) Variable-length instructions",
            "C) Single-cycle execution",
            "D) High instruction count"
        ],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "Which of the following is a real-world example of RISC?",
        options: [
            "A) Intel x86",
            "B) ARM",
            "C) Motorola 68000",
            "D) IBM System/360"
        ],
        answer: "B"
    },
    {
        category: "ISA, RISC, CISC",
        question: "Which element defines the interface between software and hardware?",
        options: [
            "A) ALU",
            "B) Control Unit",
            "C) ISA",
            "D) Cache"
        ],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "The instruction \"ADD R1, R2\" in RISC typically means:",
        options: [
            "A) Add contents of R2 to R1 directly in memory",
            "B) Load values from memory and then add",
            "C) Add values in registers R1 and R2",
            "D) None of the above"
        ],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "What are addressing modes used for?",
        options: [
            "A) Transferring data to GPU",
            "B) Controlling program flow",
            "C) Specifying operand locations",
            "D) Timing I/O operations"
        ],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "Immediate Addressing provides:",
        options: [
            "A) Address of memory",
            "B) Operand directly in the instruction",
            "C) Address stored in a register",
            "D) Address calculated at runtime"
        ],
        answer: "B"
    },
    {
        category: "ISA, RISC, CISC",
        question: "Which mode uses the address held in a register to find the operand?",
        options: [
            "A) Immediate",
            "B) Direct",
            "C) Register Indirect",
            "D) Indexed"
        ],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "Stack Addressing typically uses:",
        options: [
            "A) Program counter",
            "B) MAR",
            "C) Stack pointer",
            "D) ALU"
        ],
        answer: "C"
    },
    {
        category: "CPU & Registers",
        question: "What is the main function of the CPU?",
        options: [
            "A) Managing I/O",
            "B) Performing logical/arithmetic operations",
            "C) Managing network requests",
            "D) Rendering graphics"
        ],
        answer: "B"
    },
    {
        category: "CPU & Registers",
        question: "What type of memory is used inside the CPU for quick access?",
        options: [
            "A) Cache",
            "B) Main memory",
            "C) Registers",
            "D) ROM"
        ],
        answer: "C"
    },
    {
        category: "CPU & Registers",
        question: "Which register holds the address of the next instruction?",
        options: [
            "A) MAR",
            "B) PC",
            "C) IR",
            "D) SP"
        ],
        answer: "B"
    },
    {
        category: "CPU & Registers",
        question: "What does MBR stand for?",
        options: [
            "A) Main Buffer Register",
            "B) Memory Base Register",
            "C) Memory Buffer Register",
            "D) Module Base Register"
        ],
        answer: "C"
    },
    {
        category: "CPU & Registers",
        question: "Which register contains the instruction being executed?",
        options: [
            "A) IR",
            "B) PC",
            "C) MAR",
            "D) SP"
        ],
        answer: "A"
    },
    {
        category: "CPU & Registers",
        question: "Which of the following are user-visible registers?",
        options: [
            "A) MAR, MBR",
            "B) PC, IR",
            "C) General-purpose, data, address, condition code",
            "D) Control flags"
        ],
        answer: "C"
    },
    {
        category: "CPU & Registers",
        question: "What kind of values do condition codes store?",
        options: [
            "A) Memory addresses",
            "B) Arithmetic results",
            "C) Operation outcomes like overflow, zero, etc.",
            "D) Loop counters"
        ],
        answer: "C"
    },
    {
        category: "CPU & Registers",
        question: "What is the primary role of control registers?",
        options: [
            "A) Arithmetic calculations",
            "B) Manage memory addresses",
            "C) Control processor operations",
            "D) Store OS processes"
        ],
        answer: "C"
    },
    {
        category: "CPU & Registers",
        question: "What's a key advantage of pipelining in CPUs?",
        options: [
            "A) Reduced memory requirements",
            "B) Increased clock speed",
            "C) Faster instruction throughput",
            "D) Simpler architecture"
        ],
        answer: "C"
    },
    {
        category: "CPU & Registers",
        question: "One method to increase CPU performance is:",
        options: [
            "A) Add more HDD space",
            "B) Increase instruction size",
            "C) Use multicore architecture",
            "D) Use magnetic storage"
        ],
        answer: "C"
    },
    {
        category: "ALU & Arithmetic",
        question: "ALU stands for:",
        options: [
            "A) Arithmetic Logic Unit",
            "B) Automated Line Utility",
            "C) Advanced Logic Unit",
            "D) Arithmetic Linked Unit"
        ],
        answer: "A"
    },
    {
        category: "ALU & Arithmetic",
        question: "Overflow in ALU occurs when:",
        options: [
            "A) Memory overflows",
            "B) Data is too small",
            "C) Result exceeds register capacity",
            "D) Instruction decoding fails"
        ],
        answer: "C"
    },
    {
        category: "ALU & Arithmetic",
        question: "Which representation is rarely used in ALUs due to its drawbacks?",
        options: [
            "A) Twos complement",
            "B) Sign-magnitude",
            "C) Floating-point",
            "D) Binary-coded decimal"
        ],
        answer: "B"
    },
    {
        category: "ALU & Arithmetic",
        question: "In twos complement, how is a number negated?",
        options: [
            "A) Flip sign bit",
            "B) Invert all bits",
            "C) Invert all bits + add 1",
            "D) Subtract from zero"
        ],
        answer: "C"
    },
    {
        category: "ALU & Arithmetic",
        question: "What happens to carry-out in twos complement addition?",
        options: [
            "A) It is stored in memory",
            "B) It is used for overflow detection",
            "C) It's ignored",
            "D) It signals end of instruction"
        ],
        answer: "C"
    },
    {
        category: "ALU & Arithmetic",
        question: "Multiplication of binary integers involves:",
        options: [
            "A) Converting to decimal",
            "B) Partial product generation",
            "C) Floating point conversion",
            "D) Instruction pipelining"
        ],
        answer: "B"
    },
    {
        category: "ALU & Arithmetic",
        question: "Booth's Algorithm improves:",
        options: [
            "A) Cache access",
            "B) Unsigned multiplication",
            "C) Signed multiplication",
            "D) Instruction decoding"
        ],
        answer: "C"
    },
    {
        category: "ALU & Arithmetic",
        question: "Integer division in binary involves:",
        options: [
            "A) Multiplying inverses",
            "B) Repeated subtraction only",
            "C) Long division and partial remainders",
            "D) Floating-point approximation"
        ],
        answer: "C"
    },
    {
        category: "ALU & Arithmetic",
        question: "Why is fixed-point inefficient for scientific calculations?",
        options: [
            "A) Too complex",
            "B) Lacks precision",
            "C) High latency",
            "D) No decimal support"
        ],
        answer: "B"
    },
    {
        category: "ALU & Arithmetic",
        question: "What does floating-point representation allow?",
        options: [
            "A) Represent only integers",
            "B) Accurate decimal storage",
            "C) Limited size range",
            "D) More registers"
        ],
        answer: "B"
    },
    // Continuing from the existing structure...

// ISA, RISC, CISC
    {
        category: "ISA, RISC, CISC",
        question: "Which addressing mode uses a constant value as the operand?",
        options: ["A) Indirect", "B) Immediate", "C) Displacement", "D) Register"],
        answer: "B"
    },
    {
        category: "ISA, RISC, CISC",
        question: "In which addressing mode is the memory address part of the instruction itself?",
        options: ["A) Immediate", "B) Indexed", "C) Direct", "D) Stack"],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "What does the Stack Pointer (SP) hold?",
        options: ["A) Number of instructions", "B) Address of last used register", "C) Address of top of the stack", "D) Size of the stack"],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "Which addressing mode uses both a base register and an offset?",
        options: ["A) Immediate", "B) Direct", "C) Displacement", "D) Indirect"],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "Which addressing mode adds an index register to a base address?",
        options: ["A) Register", "B) Indexed", "C) Direct", "D) Stack"],
        answer: "B"
    },
    {
        category: "ISA, RISC, CISC",
        question: "What is typically used to implement function calls and returns?",
        options: ["A) Stack", "B) Heap", "C) Registers", "D) Cache"],
        answer: "A"
    },
    {
        category: "ISA, RISC, CISC",
        question: "What is a drawback of sign-magnitude representation?",
        options: ["A) Overflow is impossible", "B) Only works with positive values", "C) Two representations of 0", "D) Hard to convert to decimal"],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "In two’s complement, the most significant bit indicates:",
        options: ["A) Overflow", "B) Carry", "C) Sign", "D) Least significant digit"],
        answer: "C"
    },
    {
        category: "ISA, RISC, CISC",
        question: "What is the range of 4-bit two’s complement values?",
        options: ["A) -7 to 7", "B) -8 to +7", "C) 0 to 15", "D) -15 to +15"],
        answer: "B"
    },
    {
        category: "ISA, RISC, CISC",
        question: "What is the binary two’s complement of 5 (0101)?",
        options: ["A) 1010", "B) 1111", "C) 1011", "D) 1101"],
        answer: "D"
    },

    // ALU & Arithmetic
    {
        category: "ALU & Arithmetic",
        question: "What happens during the decode step of the fetch-decode-execute cycle?",
        options: ["A) Instruction is fetched from memory", "B) Operands are loaded", "C) Instruction is translated into signals", "D) Results are stored"],
        answer: "C"
    },
    {
        category: "ALU & Arithmetic",
        question: "What causes overflow in two’s complement addition?",
        options: ["A) Adding positive and negative numbers", "B) Carry-out is 0", "C) Result exceeds bit length", "D) Subtracting smaller from larger number"],
        answer: "C"
    },
    {
        category: "ALU & Arithmetic",
        question: "What does a control unit do?",
        options: ["A) Stores values temporarily", "B) Coordinates CPU operations", "C) Performs arithmetic", "D) Manages long-term memory"],
        answer: "B"
    },
    {
        category: "ALU & Arithmetic",
        question: "What does the MAR (Memory Address Register) contain?",
        options: ["A) The data to be written", "B) The address of memory to access", "C) The opcode", "D) The interrupt request"],
        answer: "B"
    },
    {
        category: "ALU & Arithmetic",
        question: "In Booth’s Algorithm, what is the key optimization?",
        options: ["A) Smaller multiplication tables", "B) Reduction of operations for consecutive 1s", "C) Smaller ALU", "D) Faster fetch cycles"],
        answer: "B"
    },
    {
        category: "ALU & Arithmetic",
        question: "Which value is ignored in unsigned binary addition?",
        options: ["A) Result", "B) Carry bit", "C) First operand", "D) Opcode"],
        answer: "B"
    },
    {
        category: "ALU & Arithmetic",
        question: "Floating-point numbers are ideal for:",
        options: ["A) Network communication", "B) High-speed storage", "C) Representing very small or large numbers", "D) Character encoding"],
        answer: "C"
    },
    {
        category: "ALU & Arithmetic",
        question: "What does the exponent represent in floating-point?",
        options: ["A) Sign of the number", "B) Magnitude of the mantissa", "C) Scale of the number", "D) Binary format"],
        answer: "C"
    },
    {
        category: "ALU & Arithmetic",
        question: "Which IEEE format is commonly used for floating-point?",
        options: ["A) 12-bit", "B) 32-bit", "C) 16-bit", "D) 24-bit"],
        answer: "B"
    },
    {
        category: "ALU & Arithmetic",
        question: "Which of the following is a limitation of fixed-point representation?",
        options: ["A) Cannot represent fractions", "B) Too precise", "C) Can’t be stored in memory", "D) Doesn’t work with integers"],
        answer: "A"
    },

    // Mixed Concepts
    {
        category: "Mixed Concepts",
        question: "What is the primary role of registers?",
        options: ["A) Long-term storage", "B) Temporary data handling", "C) Graphic rendering", "D) Cache memory backup"],
        answer: "B"
    },
    {
        category: "Mixed Concepts",
        question: "Which operation sets the zero flag in condition codes?",
        options: ["A) Multiplying by 1", "B) Any operation that yields zero", "C) Addition of same values", "D) Reading memory"],
        answer: "B"
    },
    {
        category: "Mixed Concepts",
        question: "How many partial products are generated when multiplying two 4-bit binary numbers?",
        options: ["A) 2", "B) 4", "C) 6", "D) 8"],
        answer: "B"
    },
    {
        category: "Mixed Concepts",
        question: "Which register helps with returning from an interrupt?",
        options: ["A) Instruction Register", "B) Memory Buffer Register", "C) Stack Pointer", "D) Program Counter"],
        answer: "C"
    },
    {
        category: "Mixed Concepts",
        question: "The fetch phase ends when:",
        options: ["A) Instruction is stored in IR", "B) Operands are decoded", "C) Program halts", "D) ALU is idle"],
        answer: "A"
    },
    {
        category: "Mixed Concepts",
        question: "Which unit performs logical AND/OR operations?",
        options: ["A) Control Unit", "B) Memory Unit", "C) ALU", "D) Register Set"],
        answer: "C"
    },
    {
        category: "Mixed Concepts",
        question: "Which type of computer architecture separates instruction and data pathways?",
        options: ["A) Von Neumann", "B) CISC", "C) RISC", "D) Harvard"],
        answer: "D"
    },
    {
        category: "Mixed Concepts",
        question: "What is the decimal equivalent of binary 1101 (two’s complement)?",
        options: ["A) -3", "B) -5", "C) -2", "D) -11"],
        answer: "B"
    },
    {
        category: "Mixed Concepts",
        question: "Which processor improvement reduces memory latency?",
        options: ["A) Adding GPU", "B) Increasing registers", "C) Caching", "D) Floating-point logic"],
        answer: "C"
    },
    {
        category: "Mixed Concepts",
        question: "Which of the following is not a processor performance technique?",
        options: ["A) Multi-core", "B) Caching", "C) Increasing wire length", "D) Increasing frequency"],
        answer: "C"
    }
];

// Quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let answeredQuestions = [];

// DOM elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressText = document.getElementById("progress-text");
const scoreText = document.getElementById("score-text");
const progressFill = document.getElementById("progress-fill");
const feedbackElement = document.getElementById("feedback");
const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
const quizContent = document.getElementById("quiz-content");
const resultsContainer = document.getElementById("results-container");
const finalScoreElement = document.getElementById("final-score");
const resultDetailsElement = document.getElementById("result-details");
const restartButton = document.getElementById("restart-btn");
const categoryScoresElement = document.getElementById("category-scores");

// Initialize the quiz
function initQuiz() {
    // Initialize arrays
    userAnswers = new Array(quizQuestions.length).fill(null);
    answeredQuestions = new Array(quizQuestions.length).fill(false);
    
    // Reset score
    score = 0;
    currentQuestionIndex = 0;
    
    // Show first question
    showQuestion(currentQuestionIndex);
    
    // Hide results, show quiz
    quizContent.style.display = "block";
    resultsContainer.style.display = "none";
    
    // Update UI
    updateProgressBar();
    updateScore();
}

// Show question
function showQuestion(index) {
    const question = quizQuestions[index];
    
    // Display question
    questionText.textContent = `${index + 1}. ${question.question}`;
    
    // Clear options
    optionsContainer.innerHTML = "";
    
    // Add options
    question.options.forEach((option, i) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        
        // If question was already answered, show feedback
        if (answeredQuestions[index]) {
            if (option.startsWith(userAnswers[index])) {
                optionElement.classList.add("selected");
                
                if (userAnswers[index] === question.answer) {
                    optionElement.classList.add("correct");
                } else {
                    optionElement.classList.add("incorrect");
                }
            } else if (option.startsWith(question.answer)) {
                optionElement.classList.add("correct");
            }
        } else {
            // Add click event if not answered yet
            optionElement.addEventListener("click", function() {
                selectOption(index, option.charAt(0));
            });
        }
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Update progress text
    progressText.textContent = `Question ${index + 1} of ${quizQuestions.length}`;
    
    // Enable/disable navigation buttons
    previousButton.disabled = index === 0;
    
    if (answeredQuestions[index]) {
        nextButton.disabled = false;
        
        // Show feedback
        if (userAnswers[index] === question.answer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.className = "feedback correct-feedback";
        } else {
            feedbackElement.textContent = `Incorrect. The correct answer is ${question.answer}.`;
            feedbackElement.className = "feedback incorrect-feedback";
        }
        feedbackElement.style.display = "block";
    } else {
        nextButton.disabled = true;
        feedbackElement.style.display = "none";
    }
}

// Select option
function selectOption(questionIndex, selectedOption) {
    // If already answered, do nothing
    if (answeredQuestions[questionIndex]) return;
    
    // Store user answer
    userAnswers[questionIndex] = selectedOption;
    answeredQuestions[questionIndex] = true;
    
    // Check if correct
    const question = quizQuestions[questionIndex];
    if (selectedOption === question.answer) {
        score++;
    }
    
    // Update UI
    updateScore();
    showQuestion(questionIndex);
    
    // Enable next button
    nextButton.disabled = false;
}

// Update score
function updateScore() {
    scoreText.textContent = `Score: ${score}/${answeredQuestions.filter(Boolean).length}`;
}

// Update progress bar
function updateProgressBar() {
    const progress = (currentQuestionIndex / quizQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateProgressBar();
    } else {
        // Show results if all questions answered
        showResults();
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateProgressBar();
    }
}

// Show quiz results
function showResults() {
    // Hide quiz, show results
    quizContent.style.display = "none";
    resultsContainer.style.display = "block";
    
    // Display final score
    finalScoreElement.textContent = `${score}/${quizQuestions.length}`;
    
    // Calculate category scores
    const categories = {};
    
    quizQuestions.forEach((question, index) => {
        const category = question.category;
        if (!categories[category]) {
            categories[category] = {
                total: 0,
                correct: 0
            };
        }
        
        categories[category].total++;
        if (userAnswers[index] === question.answer) {
            categories[category].correct++;
        }
    });
    
    // Display category scores
    categoryScoresElement.innerHTML = "<h3>Category Breakdown:</h3>";
    
    Object.keys(categories).forEach(category => {
        const categoryScore = categories[category];
        const percentage = Math.round((categoryScore.correct / categoryScore.total) * 100);
        
        const categoryElement = document.createElement("div");
        categoryElement.innerHTML = `<p><strong>${category}:</strong> ${categoryScore.correct}/${categoryScore.total} (${percentage}%)</p>`;
        categoryScoresElement.appendChild(categoryElement);
    });
    
    // Show question review
    resultDetailsElement.innerHTML = "<h3>Question Review:</h3>";
    
    // Group questions by category
    const questionsByCategory = {};
    
    quizQuestions.forEach((question, index) => {
        const category = question.category;
        if (!questionsByCategory[category]) {
            questionsByCategory[category] = [];
        }
        
        questionsByCategory[category].push({
            question: question,
            index: index,
            userAnswer: userAnswers[index]
        });
    });
    
    // Display questions by category
    Object.keys(questionsByCategory).forEach(category => {
        const categoryHeading = document.createElement("div");
        categoryHeading.className = "category-heading";
        categoryHeading.textContent = category;
        resultDetailsElement.appendChild(categoryHeading);
        
        questionsByCategory[category].forEach(item => {
            const question = item.question;
            const index = item.index;
            const userAnswer = item.userAnswer;
            
            const isCorrect = userAnswer === question.answer;
            
            const questionElement = document.createElement("div");
            questionElement.style.margin = "15px 0";
            questionElement.style.padding = "10px";
            questionElement.style.borderLeft = isCorrect ? "4px solid #4CAF50" : "4px solid #f44336";
            questionElement.style.backgroundColor = isCorrect ? "#f0f9f0" : "#fff0f0";
            
            questionElement.innerHTML = `
                <p><strong>${index + 1}. ${question.question}</strong></p>
                <p>Your answer: ${userAnswer ? userAnswer : "Not answered"}</p>
                <p>Correct answer: ${question.answer}</p>
            `;
            
            resultDetailsElement.appendChild(questionElement);
        });
    });
}

// Event listeners
nextButton.addEventListener("click", nextQuestion);
previousButton.addEventListener("click", previousQuestion);
restartButton.addEventListener("click", initQuiz);

// Initialize the quiz on page load
initQuiz();