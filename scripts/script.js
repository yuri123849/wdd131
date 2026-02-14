
document.addEventListener('DOMContentLoaded', function() {

    initLazyLoading();

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }

    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      
        loadFormData();
        
     
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', saveFormData);
        });
        

        contactForm.addEventListener('submit', handleFormSubmit);
    }
});


function saveFormData() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        belt: document.getElementById('belt').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('contactFormData', JSON.stringify(formData));
}


function loadFormData() {
    const savedData = localStorage.getItem('contactFormData');
    
    if (savedData) {
        const formData = JSON.parse(savedData);
        
 
        if (formData.name) document.getElementById('name').value = formData.name;
        if (formData.email) document.getElementById('email').value = formData.email;
        if (formData.belt) document.getElementById('belt').value = formData.belt;
        if (formData.message) document.getElementById('message').value = formData.message;
    }
}


function handleFormSubmit(event) {
    event.preventDefault();
    

    const submission = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        belt: document.getElementById('belt').value,
        message: document.getElementById('message').value,
        submittedAt: new Date().toISOString()
    };
    
 
    let submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    

    submissions.push(submission);
    

    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    

    localStorage.removeItem('contactFormData');
    
   
    alert('Thank you! Your message has been submitted successfully.');
    
  
    document.getElementById('contactForm').reset();
    
   
    console.log('Form submitted and saved to localStorage');
    console.log('Total submissions:', submissions.length);
}

function getAllSubmissions() {
    const submissions = localStorage.getItem('formSubmissions');
    return submissions ? JSON.parse(submissions) : [];
}

function clearAllSubmissions() {
    localStorage.removeItem('formSubmissions');
    console.log('All submissions cleared from localStorage');
}

const formsDatabase = {
    shared: {
        white: [
            {
                name: "Saju Jirugi",
                koreanName: "사주 지르기",
                steps: 18,
                belt: "white",
                beltRank: "10th Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Four Direction Punch",
                history: "Saju Jirugi is a fundamental exercise pattern that introduces the student to basic punching techniques while moving in four directions. It is not an official pattern but a training exercise to develop coordination and basic techniques.",
                
                diagram: "Plus sign (+) or cross pattern",
                videoUrl: "https://www.youtube.com/watch?v=bEBOFNsIsSI"
            },
            {
                name: "Saju Makgi",
                koreanName: "사주 막기",
                steps: 18,
                belt: "white",
                beltRank: "10th Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Four Direction Block",
                history: "Saju Makgi is a fundamental exercise pattern that introduces blocking techniques in four directions. Like Saju Jirugi, it is a training exercise rather than an official pattern.",
                
                diagram: "Plus sign (+) or cross pattern",
                videoUrl: "https://www.youtube.com/watch?v=fd_JU5l3AVE"
            }
        ],
        
        yellowTip: [
            {
                name: "Chon-Ji",
                koreanName: "천지",
                steps: 19,
                belt: "yellowTip",
                beltRank: "9th Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Heaven and Earth",
                history: "Chon-Ji means literally 'the Heaven the Earth'. It is, in the Orient, interpreted as the creation of the world or the beginning of human history, therefore, it is the initial pattern played by the beginner. This pattern consists of two similar parts; one to represent the Heaven and the other the Earth.",
                namedAfter: "The creation of the world",
                
                diagram: "Cross or plus sign - two identical sections",
                videoUrl: "https://www.youtube.com/watch?v=HmoQPtsSXbY"
            }
        ],
        
        yellow: [
            {
                name: "Dan-Gun",
                koreanName: "단군",
                steps: 21,
                belt: "yellow",
                beltRank: "8th Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Named after Dan-Gun, the legendary founder of Korea",
                history: "Dan-Gun is named after the legendary founder of Korea in the year 2333 B.C. According to Korean mythology, Dan-Gun was born from the union of a divine prince and a bear-woman, and he established the first Korean kingdom, Gojoseon.",
                namedAfter: "Dan-Gun Wanggeom (단군왕검), legendary founder of Korea",
                historicalDate: "2333 B.C.",
                
                diagram: "I-shaped pattern",
                videoUrl: "https://www.youtube.com/watch?v=hhF-JwS_NV4"
            }
        ],
        
        greenTip: [
            {
                name: "Do-San",
                koreanName: "도산",
                steps: 24,
                belt: "greenTip",
                beltRank: "7th Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the patriot Ahn Chang-Ho",
                history: "Do-San is the pseudonym of the patriot Ahn Chang-Ho (1878-1938). He devoted his entire life to furthering the education of Korea and the Korean independence movement. The 24 movements represent his entire life, which he devoted to furthering education in Korea and the Korean independence movement.",
                namedAfter: "Ahn Chang-Ho (안창호), independence activist and educator",
                historicalDate: "1878-1938",
                
                diagram: "Inverted T-shape",
                videoUrl: "https://www.youtube.com/watch?v=5jwAYSE4564"
            }
        ],
        
        green: [
            {
                name: "Won-Hyo",
                koreanName: "원효",
                steps: 28,
                belt: "green",
                beltRank: "6th Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the noted monk Won-Hyo",
                history: "Won-Hyo was the noted monk who introduced Buddhism to the Silla Dynasty in the year 686 A.D. The 28 movements refer to his title as the 28th patriarch of Buddhism in Korea. Won-Hyo was known for his efforts to reconcile various Buddhist sects and make Buddhism accessible to common people.",
                namedAfter: "Won-Hyo (원효), Buddhist monk and scholar",
                historicalDate: "617-686 A.D.",
                
                diagram: "I-shaped pattern",
                videoUrl: "https://www.youtube.com/watch?v=aQOauxHOD1A"
            }
        ],
        
        blueTip: [
            {
                name: "Yul-Gok",
                koreanName: "율곡",
                steps: 38,
                belt: "blueTip",
                beltRank: "5th Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the philosopher and scholar Yi I",
                history: "Yul-Gok is the pseudonym of the great philosopher and scholar Yi I (1536-1584), nicknamed the 'Confucius of Korea'. The 38 movements of this pattern refer to his birthplace on the 38th latitude and the diagram represents the Chinese character for 'scholar'.",
                namedAfter: "Yi I (이이), Neo-Confucian scholar",
                historicalDate: "1536-1584",
                
                diagram: "Scholar (士) Chinese character",
                videoUrl: "https://www.youtube.com/watch?v=sd2TS9APMSY"
            }
        ],
        
        blue: [
            {
                name: "Joong-Gun",
                koreanName: "중근",
                steps: 32,
                belt: "blue",
                beltRank: "4th Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the patriot Ahn Joong-Gun",
                history: "Joong-Gun is named after the patriot Ahn Joong-Gun who assassinated Hiro-Bumi Ito, the first Japanese governor-general of Korea, known as the man who played the leading part in the Korea-Japan merger. There are 32 movements in this pattern to represent Mr. Ahn's age when he was executed at Lui-Shung prison in 1910.",
                namedAfter: "Ahn Joong-Gun (안중근), independence activist",
                historicalDate: "1879-1910",
                
                diagram: "Diagram resembles Ahn Joong-Gun's handprint",
                videoUrl: "https://www.youtube.com/watch?v=Nr7NDnHENbM"
            }
        ],
        
        redTip: [
            {
                name: "Toi-Gye",
                koreanName: "퇴계",
                steps: 37,
                belt: "redTip",
                beltRank: "3rd Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the noted scholar Yi Hwang",
                history: "Toi-Gye is the pen name of the noted scholar Yi Hwang (16th century), an authority on neo-Confucianism. The 37 movements of the pattern refer to his birthplace on the 37th latitude, and the diagram represents 'scholar'.",
                namedAfter: "Yi Hwang (이황), Neo-Confucian scholar",
                historicalDate: "1501-1570",
                
                diagram: "Scholar (士) Chinese character",
                videoUrl: "https://www.youtube.com/watch?v=_AEkdW5aJzw"
            }
        ],
        
        red: [
            {
                name: "Hwa-Rang",
                koreanName: "화랑",
                steps: 29,
                belt: "red",
                beltRank: "2nd Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the Hwa-Rang youth group",
                history: "Hwa-Rang is named after the Hwa-Rang youth group which originated in the Silla Dynasty about 1,350 years ago. This group eventually became the driving force for the unification of the three kingdoms of Korea. The 29 movements refer to the 29th Infantry Division, where Taekwon-Do developed into maturity.",
                namedAfter: "Hwa-Rang (화랑), elite youth warrior group of Silla",
                historicalDate: "About 576 A.D.",
                
                diagram: "I-shaped pattern",
                videoUrl: "https://www.youtube.com/watch?v=cYD0-cvdr6k"
            }
        ],
        
        blackTip: [
            {
                name: "Choong-Moo",
                koreanName: "충무",
                steps: 30,
                belt: "blackTip",
                beltRank: "1st Gup",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the great Admiral Yi Soon-Sin",
                history: "Choong-Moo was the name given to the great Admiral Yi Soon-Sin of the Yi Dynasty. He was reputed to have invented the first armored battleship (Kobukson) in 1592, which is said to be the precursor of the present day submarine. The reason why this pattern ends with a left hand attack is to symbolize his regrettable death, having no chance to show his unrestrained potentiality checked by the forced reservation of his loyalty to the king.",
                namedAfter: "Admiral Yi Soon-Sin (이순신)",
                historicalDate: "1545-1598",
                
                diagram: "I-shaped pattern",
                videoUrl: "https://www.youtube.com/watch?v=fY6Qbdm8kmg"
            }
        ],
        
        first: [
            {
                name: "Kwang-Gae",
                koreanName: "광개",
                steps: 39,
                belt: "first",
                beltRank: "1st Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after King Gwanggaeto the Great",
                history: "Kwang-Gae is named after the famous Gwang-Gae-Toh-Wang, the 19th King of the Koguryo Dynasty, who regained all the lost territories including the greater part of Manchuria. The diagram represents the expansion and recovery of lost territory. The 39 movements refer to the first two figures of 391 A.D., the year he came to the throne.",
                namedAfter: "King Gwanggaeto the Great (광개토대왕)",
                historicalDate: "391-413 A.D.",
                
                diagram: "Expansion shape showing territorial recovery",
                videoUrl: "https://www.youtube.com/watch?v=SWARXuHuPDQ"
            },
            {
                name: "Po-Eun",
                koreanName: "포은",
                steps: 36,
                belt: "first",
                beltRank: "1st Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the loyal subject Chong Mong-Chu",
                history: "Po-Eun is the pseudonym of a loyal subject Chong Mong-Chu (1400) who was a famous poet and whose poem 'I would not serve a second master though I might be crucified a hundred times' is known to every Korean. He was also a pioneer in the field of physics. The diagram represents his unerring loyalty to the king and country towards the end of the Koryo Dynasty.",
                namedAfter: "Chong Mong-Chu (정몽주), scholar and loyal subject",
                historicalDate: "1337-1392",
                
                diagram: "Represents loyalty and devotion",
                videoUrl: "https://www.youtube.com/watch?v=j7HhD1Wa4SA&t=14s"
            },
            {
                name: "Ge-Baek",
                koreanName: "계백",
                steps: 44,
                belt: "first",
                beltRank: "1st Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after General Ge-Baek",
                history: "Ge-Baek is named after Ge-Baek, a great general in the Baek Je Dynasty (660 A.D.). The diagram represents his severe and strict military discipline. The 44 movements refer to his age when he died in battle at Hwangsanbul (Mt. Hwangsan).",
                namedAfter: "General Ge-Baek (계백), Baekje general",
                historicalDate: "Died 660 A.D.",
                
                diagram: "Military discipline pattern",
                videoUrl: "https://www.youtube.com/watch?v=GftDupABTxM"
            }
        ],
        
        second: [
            {
                name: "Eui-Am",
                koreanName: "의암",
                steps: 45,
                belt: "second",
                beltRank: "2nd Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the patriot Son Byong Hi",
                history: "Eui-Am is the pseudonym of Son Byong Hi, leader of the Korean independence movement on March 1, 1919. The 45 movements refer to his age when he changed the name of Dong Hak (Oriental Culture) to Chondo Kyo (Heavenly Way Religion) in 1905. The diagram represents his indomitable spirit, displayed while dedicating himself to the prosperity of his nation.",
                namedAfter: "Son Byong Hi (손병희), independence movement leader",
                historicalDate: "1861-1922",
                
                diagram: "Indomitable spirit pattern",
                videoUrl: "https://www.youtube.com/watch?v=inMKh0lC_KI"
            },
            {
                name: "Choong-Jang",
                koreanName: "충장",
                steps: 52,
                belt: "second",
                beltRank: "2nd Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after General Kim Duk Ryang",
                history: "Choong-Jang is the pseudonym given to General Kim Duk Ryang who lived during the Yi Dynasty, 14th century. Kim Duk Ryang was born in 1567 and was a commander in the army. In 1592 when Toyotomi Hideyoshi began the Japanese invasion of Korea, Kim Duk Ryang was promoted to General. This pattern ends with a left-hand attack to symbolize the tragedy of his death at 27 in prison before he was able to reach full maturity.",
                namedAfter: "General Kim Duk Ryang (김덕령)",
                historicalDate: "1567-1596",
                
                diagram: "Represents his military career cut short",
                videoUrl: "https://www.youtube.com/watch?v=SHcNcUaaxv8"
            },
            {
                name: "Juche",
                koreanName: "주체",
                steps: 45,
                belt: "second",
                beltRank: "2nd Dan",
                federations: ["itf"],
                
                meaning: "Philosophical idea of self-reliance",
                history: "Juche is a philosophical idea that man is the master of everything and decides everything. It is said that this idea was rooted in Baekdu Mountain which symbolizes the spirit of the Korean people. The diagram represents Baekdu Mountain. This pattern replaced Ko-Dang in 1986.",
                
                diagram: "Baekdu Mountain shape",
                videoUrl: "https://www.youtube.com/watch?v=1tOwFhxw4FE"
            },
            {
                name: "Ko-Dang",
                koreanName: "고당",
                steps: 39,
                belt: "second",
                beltRank: "2nd Dan",
                federations: ["gtf"],
                
                meaning: "Named after the patriot Cho Man-Sik",
                history: "Ko-Dang is the pseudonym of the patriot Cho Man-Sik (1883-1950) who dedicated his life to the independence movement and education of his people. The 39 movements signify his times of imprisonment and his birthplace on the 39th parallel. This pattern was replaced by Juche in ITF in 1986, but GTF and some schools still use it.",
                namedAfter: "Cho Man-Sik (조만식), nationalist activist",
                historicalDate: "1883-1950",
                
                diagram: "39th parallel reference",
                videoUrl: "https://www.youtube.com/watch?v=vQoMswObqRM"
            }
        ],
        
        third: [
            {
                name: "Sam-Il",
                koreanName: "삼일",
                steps: 33,
                belt: "third",
                beltRank: "3rd Dan",
                federations: ["itf", "gtf"],
                
                meaning: "March First Independence Movement",
                history: "Sam-Il denotes the historical date of the independence movement of Korea which began throughout the country on March 1, 1919. The 33 movements in the pattern stand for the 33 patriots who planned the movement. The movement was a pivotal moment in Korean history, representing a nationwide uprising against Japanese colonial rule.",
                namedAfter: "March 1st Movement (3·1 운동)",
                historicalDate: "March 1, 1919",
                
                diagram: "Represents nationwide uprising",
                videoUrl: "https://www.youtube.com/watch?v=xG4uBuH4NCE"
            },
            {
                name: "Yoo-Sin",
                koreanName: "유신",
                steps: 68,
                belt: "third",
                beltRank: "3rd Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after General Kim Yoo-Sin",
                history: "Yoo-Sin is named after General Kim Yoo-Sin, a commanding general during the Silla Dynasty. The 68 movements refer to the last two figures of 668 A.D., the year Korea was unified under the Silla Dynasty. The ready posture signifies a sword drawn on the right rather than left side, symbolizing Yoo-Sin's mistake of following his king's orders to fight with foreign forces against his own nation.",
                namedAfter: "General Kim Yoo-Sin (김유신)",
                historicalDate: "595-673 A.D.",
                
                diagram: "Unification of Korea pattern",
                videoUrl: "https://www.youtube.com/watch?v=8TOZVmWKJws"
            },
            {
                name: "Choi-Yong",
                koreanName: "최용",
                steps: 46,
                belt: "third",
                beltRank: "3rd Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after General Choi Yong",
                history: "Choi-Yong is named after General Choi Yong, premier and commander-in-chief of the armed forces during the 14th century Koryo Dynasty. Choi Yong was greatly respected for his loyalty, patriotism, and humility. He was executed by his subordinate commanders headed by General Yi Sung-Gae, who later became the first king of the Yi Dynasty. The pattern represents his loyalty despite betrayal.",
                namedAfter: "General Choi Yong (최영)",
                historicalDate: "1316-1388",
                
                diagram: "Loyalty and betrayal",
                videoUrl: "https://www.youtube.com/watch?v=PZXdNG3Bs4U"
            }
        ],
        
        fourth: [
            {
                name: "Yon-Gae",
                koreanName: "연개",
                steps: 49,
                belt: "fourth",
                beltRank: "4th Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after General Yon-Gae Somoon",
                history: "Yon-Gae is named after General Yon-Gae Somoon, a famous general during the Koguryo Dynasty. The 49 movements refer to the last two figures of 649 A.D., the year he forced the Tang Dynasty to quit Korea after destroying nearly 300,000 of their troops at Ansi Sung (Ansi Fortress). This was one of the greatest military victories in Korean history.",
                namedAfter: "General Yon-Gae Somoon (연개소문)",
                historicalDate: "603-666 A.D.",
                
                diagram: "Military victory pattern",
                videoUrl: "https://www.youtube.com/watch?v=8wX0JzYe8n0"
            },
            {
                name: "Ul-Ji",
                koreanName: "을지",
                steps: 42,
                belt: "fourth",
                beltRank: "4th Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after General Ul-Ji Moon-Dok",
                history: "Ul-Ji is named after General Ul-Ji Moon-Dok who successfully defended Korea against a Tang invasion force of nearly one million soldiers led by Yang Je in 612 A.D. Ul-Ji lured the Chinese force into an ambush and employed hit-and-run guerrilla tactics. The 42 movements represent the age of General Choi Hong Hi when he designed this pattern.",
                namedAfter: "General Ul-Ji Moon-Dok (을지문덕)",
                historicalDate: "Circa 612 A.D.",
                
                diagram: "Guerrilla warfare tactics",
                videoUrl: "https://www.youtube.com/watch?v=ftELWqMPfZ4"
            },
            {
                name: "Moon-Moo",
                koreanName: "문무",
                steps: 61,
                belt: "fourth",
                beltRank: "4th Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after King Moon-Moo",
                history: "Moon-Moo honors the 30th king of the Silla Dynasty. King Moon-Moo was known for unifying the Korean peninsula. His body was placed in the sea according to his will, where his soul would forever defend his land against the Japanese. The 61 movements in this pattern symbolize the last two figures of 661 A.D. when Moon-Moo came to the throne.",
                namedAfter: "King Moon-Moo (문무왕) of Silla",
                historicalDate: "661-681 A.D.",
                
                diagram: "Eternal defense pattern",
                videoUrl: "https://www.youtube.com/watch?v=vCwsyv0-Lno"
            }
        ],
        
        fifth: [
            {
                name: "So-San",
                koreanName: "소산",
                steps: 72,
                belt: "fifth",
                beltRank: "5th Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the great monk Choi Hyong-Ung",
                history: "So-San is the pseudonym of the great monk Choi Hyong-Ung (1520-1604) during the Yi Dynasty. The 72 movements refer to his age when he organized a corps of monk soldiers with the assistance of his pupil Sa Myung-Dang. The monk soldiers helped repulse the Japanese pirates who overran most of the Korean peninsula in 1592 during the Imjin War.",
                namedAfter: "Monk Choi Hyong-Ung (최형웅), also known as Seosan Daesa",
                historicalDate: "1520-1604",
                
                diagram: "Monk warrior pattern",
                videoUrl: "https://www.youtube.com/watch?v=neev_YAAgDQ"
            },
            {
                name: "Se-Jong",
                koreanName: "세종",
                steps: 24,
                belt: "fifth",
                beltRank: "5th Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Named after the greatest Korean king",
                history: "Se-Jong is named after the greatest Korean king, Se-Jong, who invented the Korean alphabet (Hangul) in 1443, and was also a noted meteorologist. The diagram represents 'scholar' or 'king'. The 24 movements refer to the 24 letters of the Korean alphabet. This pattern, though performed by high-ranking black belts, has fewer movements to symbolize the simplicity and accessibility of the Hangul alphabet.",
                namedAfter: "King Se-Jong the Great (세종대왕)",
                historicalDate: "1397-1450",
                
                diagram: "King (王) or Scholar (士) Chinese character",
                videoUrl: "https://www.youtube.com/watch?v=KbLf1KELSzo"
            }
        ],
        
        sixth: [
            {
                name: "Tong-Il",
                koreanName: "통일",
                steps: 56,
                belt: "sixth",
                beltRank: "6th Dan",
                federations: ["itf", "gtf"],
                
                meaning: "Unification",
                history: "Tong-Il denotes the resolution of the unification of Korea which has been divided since 1945. The diagram (I) symbolizes the homogenous race. This pattern represents the hope and aspiration for the peaceful reunification of North and South Korea. It is the final pattern in the ITF system, representing the ultimate goal of Korean reunification.",
                namedAfter: "The concept of Korean unification",
                historicalDate: "Division since 1945",
                
                diagram: "I-shape representing homogenous race",
                videoUrl: "https://www.youtube.com/watch?v=yNmgJFwstMM"
            }
        ]
    },
    
    // GTF-ONLY PATTERNS
    gtf: {
        green: [
            {
                name: "Jee-Sang",
                koreanName: "지상",
                steps: 24,
                belt: "green",
                beltRank: "6th Gup",
                federations: ["gtf"],
                
                meaning: "Earth Above",
                history: "Jee-Sang means 'Earth Above' or 'On the Earth'. This pattern was created by Grand Master Park Jung Tae specifically for GTF. It represents grounding, stability, and building a strong foundation in Taekwondo techniques.",
                
                diagram: "Earth symbol pattern",
                videoUrl: "https://www.youtube.com/watch?v=teSOoo1fQY0"
            }
        ],
        
        blue: [
            {
                name: "Dhan-Goon",
                koreanName: "단군",
                steps: 23,
                belt: "blue",
                beltRank: "4th Gup",
                federations: ["gtf"],
                
                meaning: "Related to the legendary founder Dan-Gun",
                history: "Dhan-Goon is another pattern created by Grand Master Park Jung Tae for GTF. It pays homage to Dan-Gun, the legendary founder of Korea, with additional techniques beyond the original Dan-Gun pattern. It emphasizes the spiritual and cultural heritage of Korea.",
                
                diagram: "Heritage pattern",
                videoUrl: "https://www.youtube.com/watch?v=CMGMvspgR5c"
            }
        ],
        
        first: [
            {
                name: "Jee-Goo",
                koreanName: "지구",
                steps: 30,
                belt: "first",
                beltRank: "1st Dan",
                federations: ["gtf"],
                
                meaning: "Earth Ball or Global Earth",
                history: "Jee-Goo is named to represent the Earth as a whole, symbolizing GTF's vision of spreading Taekwondo globally. Created by Grand Master Park Jung Tae, it represents the interconnectedness of all martial artists worldwide. The 30 movements represent the ideal of global harmony through martial arts.",
                
                diagram: "Global circular pattern",
                videoUrl: "https://www.youtube.com/watch?v=LgKpldBzD-w"
            }
        ],
        
        second: [
            {
                name: "Jook-Am",
                koreanName: "죽암",
                steps: 95,
                belt: "second",
                beltRank: "2nd Dan",
                federations: ["gtf"],
                
                meaning: "Bamboo Rock",
                history: "Jook-Am means 'Bamboo Rock' and was created by Grand Master Park Jung Tae. It represents the flexibility of bamboo combined with the strength of rock - qualities essential in advanced martial arts. This is one of the longest patterns in GTF, demonstrating comprehensive technical mastery.",
                
                diagram: "Complex combination pattern",
                videoUrl: "https://www.youtube.com/watch?v=C4-7qAsYgqE&t=88s"
            }
        ],
        
        fourth: [
            {
                name: "Pyong-Hwa",
                koreanName: "평화",
                steps: 50,
                belt: "fourth",
                beltRank: "4th Dan",
                federations: ["gtf"],
                
                meaning: "Peace",
                history: "Pyong-Hwa means 'Peace' and represents Grand Master Park Jung Tae's vision of peace through martial arts training. This pattern emphasizes that true mastery of Taekwondo leads to inner peace and the ability to promote peace in society.",
                
                diagram: "Peace symbol pattern",
                videoUrl: "https://www.youtube.com/watch?v=gR6SFvZ3yNU"
            }
        ],
        
        fifth: [
            {
                name: "Sun-Duk",
                koreanName: "선덕",
                steps: 68,
                belt: "fifth",
                beltRank: "5th Dan",
                federations: ["gtf"],
                
                meaning: "Named after Queen Seondeok of Silla",
                history: "Sun-Duk is named after Queen Seondeok of Silla (632-647 A.D.), one of the first female rulers in Korean history. She was known for her wisdom, political acumen, and patronage of Buddhism and the arts. The 68 movements represent significant achievements during her reign.",
                namedAfter: "Queen Seondeok of Silla (선덕여왕)",
                historicalDate: "632-647 A.D.",
                
                diagram: "Royal wisdom pattern",
                videoUrl: "https://www.youtube.com/watch?v=z_kEHT3IklY"
            }
        ]
    }
};

let currentFederation = 'itf';
let currentBelt = 'white';
let searchQuery = '';


function getFormsForBelt(federation, belt) {
    var forms = [];
    
    
    if (formsDatabase.shared[belt]) {
        forms = forms.concat(formsDatabase.shared[belt]);
    }
    
    if (formsDatabase[federation] && formsDatabase[federation][belt]) {
        forms = forms.concat(formsDatabase[federation][belt]);
    }
    
    return forms;
}


document.getElementById('searchInput').addEventListener('input', function(e) {
    searchQuery = e.target.value.toLowerCase();
    displayForms();
});


var fedButtons = document.querySelectorAll('.fed-btn');
for (var i = 0; i < fedButtons.length; i++) {
    fedButtons[i].addEventListener('click', function() {
        var allBtns = document.querySelectorAll('.fed-btn');
        for (var j = 0; j < allBtns.length; j++) {
            allBtns[j].classList.remove('active');
        }
        
        this.classList.add('active');
        currentFederation = this.dataset.fed;
        displayForms();
    });
}


var beltButtons = document.querySelectorAll('.belt-btn');
for (var i = 0; i < beltButtons.length; i++) {
    beltButtons[i].addEventListener('click', function() {
        var allBtns = document.querySelectorAll('.belt-btn');
        for (var j = 0; j < allBtns.length; j++) {
            allBtns[j].classList.remove('active');
        }
        
        this.classList.add('active');
        currentBelt = this.dataset.belt;
        displayForms();
    });
}


function displayForms() {
    var formsGrid = document.getElementById('formsGrid');
    var forms = [];

    if (searchQuery) {
       
        var allForms = [];
        var beltLevels = ['white', 'yellowTip', 'yellow', 'greenTip', 'green', 'blueTip', 'blue', 'redTip', 'red', 'blackTip', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
        
        for (var i = 0; i < beltLevels.length; i++) {
            var belt = beltLevels[i];
            var beltForms = getFormsForBelt(currentFederation, belt);
            
            for (var j = 0; j < beltForms.length; j++) {
                var form = beltForms[j];
                if (form.federations.includes(currentFederation)) {
                    allForms.push({ ...form, belt: belt });
                }
            }
        }

        forms = allForms.filter(function(form) {
            var searchText = (form.name + ' ' + form.koreanName + ' ' + form.meaning + ' ' + form.steps).toLowerCase();
            return searchText.includes(searchQuery);
        });
    } else {
        forms = getFormsForBelt(currentFederation, currentBelt);
        forms = forms.filter(function(form) {
            return form.federations && form.federations.includes(currentFederation);
        });
    }


    if (forms.length === 0) {
        var message = searchQuery ? 
            '<div class="no-results"><h3>No forms found</h3><p>Try a different search term</p></div>' :
            '<div class="no-results"><h3>No forms available</h3><p>Try selecting a different belt level</p></div>';
        
        formsGrid.innerHTML = message;
        return;
    }

   
    var cardHTML = '';
    for (var i = 0; i < forms.length; i++) {
        var form = forms[i];
        var fedDisplay = form.federations.length === 2 ? 'ITF & GTF' : form.federations[0].toUpperCase();
        
        cardHTML += `
        <div class="form-card">
            <div class="card-top">
                <h3>${form.name}</h3>
                <span class="fed-badge">${fedDisplay}</span>
            </div>
            
            <p class="korean">${form.koreanName || ''}</p>
            <p class="meaning">${form.meaning || ''}</p>
            
            <div class="card-stats">
                <span><strong>${form.steps}</strong> movements</span>
                <span><strong>${formatBeltName(form.belt)}</strong></span>
            </div>
            
            <button class="view-btn" onclick="toggleCard(this)">View Details</button>
            
            <div class="card-details" style="display: none;">
                <div class="detail-content">
                    <p class="history">${form.history || 'No history available.'}</p>
                    
                    ${form.namedAfter ? '<p class="info-line"><strong>Named After:</strong> ' + form.namedAfter + '</p>' : ''}
                    ${form.historicalDate ? '<p class="info-line"><strong>Period:</strong> ' + form.historicalDate + '</p>' : ''}
                    ${form.diagram ? '<p class="info-line"><strong>Diagram:</strong> ' + form.diagram + '</p>' : ''}
                    
                    <div class="video-container"></div>
                </div>
            </div>
        </div>
        `;
    }

    formsGrid.innerHTML = cardHTML;

   
    var cards = formsGrid.querySelectorAll('.form-card');
    for (var i = 0; i < cards.length; i++) {
        var videoContainer = cards[i].querySelector('.video-container');
        if (videoContainer) {
            renderVideoSection(forms[i].videoUrl, videoContainer);
        }
    }
}


function toggleCard(button) {
    var card = button.closest('.form-card');
    var details = card.querySelector('.card-details');
    
    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = 'Hide Details';
    } else {
        details.style.display = 'none';
        button.textContent = 'View Details';
    }
}

function formatBeltName(belt) {
    var beltNames = {
        'white': 'White',
        'yellowTip': 'Yellow Tip',
        'yellow': 'Yellow',
        'greenTip': 'Green Tip',
        'green': 'Green',
        'blueTip': 'Blue Tip',
        'blue': 'Blue',
        'redTip': 'Red Tip',
        'red': 'Red',
        'blackTip': 'Black Tip',
        'first': '1st Dan',
        'second': '2nd Dan',
        'third': '3rd Dan',
        'fourth': '4th Dan',
        'fifth': '5th Dan',
        'sixth': '6th Dan'
    };
    return beltNames[belt] || belt;
}


function extractYouTubeVideoId(url) {
    if (!url) return null;
    var cleanUrl = url.trim();
    if (/^[A-Za-z0-9_-]{11}$/.test(cleanUrl)) return cleanUrl;
    
    var watchMatch = cleanUrl.match(/(?:youtube\.com\/watch\?v=)([A-Za-z0-9_-]{11})/);
    if (watchMatch) return watchMatch[1];
    
    var shortMatch = cleanUrl.match(/(?:youtu\.be\/)([A-Za-z0-9_-]{11})/);
    if (shortMatch) return shortMatch[1];
    
    var embedMatch = cleanUrl.match(/(?:youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/);
    if (embedMatch) return embedMatch[1];
    
    return null;
}

function isValidVideoId(videoId) {
    var invalidIds = ['example', 'placeholder', 'test', 'demo', 'sample'];
    if (!videoId) return false;
    var lowerVideoId = videoId.toLowerCase();
    for (var i = 0; i < invalidIds.length; i++) {
        if (lowerVideoId === invalidIds[i]) return false;
    }
    return true;
}

function renderVideoSection(videoUrl, targetElement) {
    var videoId = extractYouTubeVideoId(videoUrl);

    if (videoId && isValidVideoId(videoId)) {
        targetElement.innerHTML = `
            <div class="video-box">
                <br>
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="youtube-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Watch Form Video on Youtube
                </a>
            </div>
        `;
    } 
}


displayForms();

function initLazyLoading() {
    const lazyBackgrounds = document.querySelectorAll(".lazy-bg");
    if (!lazyBackgrounds.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const bgImage = element.dataset.bg;

                if (bgImage) {
                    element.style.backgroundImage = `url('${bgImage}')`;
                    element.classList.remove("lazy-bg");
                    obs.unobserve(element);
                }
            }
        });
    }, { threshold: 0.2 });

    lazyBackgrounds.forEach(bg => observer.observe(bg));
}






