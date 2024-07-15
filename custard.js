
      
        const quotes = [
            {
                quote: '"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ (Chapter 2, Verse 47)"',
                meaning: '"You have the right to perform your action, but you are not entitled to the fruits of the action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."',
                motivation: '"This shloka emphasizes fulfilling your responsibilities without getting caught up in the outcome. It inspires you to focus on action rather than the result, leading to a more engaged and fulfilling life."'
            },
            {
                quote: '"उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैवा ह्यात्मनः सखा आत्मैव रिपुरात्मनः ॥ (Chapter 6, Verse 5)"',
                meaning: '"Lift yourself by yourself, and do not demean yourself. You yourself are your friend and you yourself are your enemy."',
                motivation:  '"This shloka highlights self-reliance and inner strength. It reminds you that your own thoughts and actions determine your happiness and success."'
            },
            {
                quote: '"योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥ (Chapter 2, Verse 48)"',
                meaning: '"Perform your duty while being established in Yoga (equanimity). Abandon attachment to success and failure. Such evenness of mind is called Yoga."',
                motivation: '"This shloka encourages action with a composed mind. It reminds you that even fulfilling your responsibilities can be a form of spiritual practice."'
            },
            {
                quote: '"श्रेयान् स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥ (Chapter 3, Verse 35)"',
                meaning: '"It is better to follow one\'s own path imperfectly than to follow another\'s perfectly. Death in (pursuit of) one\'s own duty is better; the duty of another is fraught with fear."',
                motivation: '"This shloka emphasizes the importance of pursuing your own duties and responsibilities, even if you face difficulties. It encourages you to stay true to your path."'
            },
            {
                quote: '"न कर्मणामनारंभान्नैष्कर्म्यं पुरुषोऽश्नुते। न च संन्यसनादेव सिद्धिं समधिगच्छति ॥ (Chapter 3, Verse 4)"',
                meaning: '"Not by merely abstaining from work can one achieve freedom from reaction, nor by renunciation alone can one attain perfection."',
                motivation: '"This shloka highlights the importance of action. It reminds you that both action and renunciation must be balanced to achieve true success."'
            },
            {
                quote: '"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ (Chapter 2, Verse 47)"',
                meaning: '"You have the right to perform your action, but you are not entitled to the fruits of the action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."',
                motivation: '"This shloka emphasizes fulfilling your responsibilities without getting caught up in the outcome. It inspires you to focus on action rather than the result, leading to a more engaged and fulfilling life."'
            },
            {
                quote: '"योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥ (Chapter 2, Verse 48)"',
                meaning: '"Perform your duty while being established in Yoga (equanimity). Abandon attachment to success and failure. Such evenness of mind is called Yoga."',
                motivation: '"This shloka encourages action with a composed mind. It reminds you that even fulfilling your responsibilities can be a form of spiritual practice."'
            },
            {
                quote: '"न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ॥ (Chapter 4, Verse 38)"',
                meaning: '"In this world, there is nothing as purifying as knowledge. One who has become perfect in Yoga (selfless action) finds this knowledge within himself in due course of time."',
                motivation: '"This shloka emphasizes the transformative power of knowledge and selfless action. It encourages you to pursue knowledge and act selflessly to purify your mind and soul."'
            },
            {
                quote: '"युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्। अयुक्तः कामकारेण फले सक्तो निबध्यते ॥ (Chapter 5, Verse 12)"',
                meaning: '"The steadfast person, who relinquishes the fruits of action, attains peace born of steadfastness. The unsteady person, attached to the fruits of action by desire, is bound."',
                motivation: '"This shloka emphasizes the importance of detachment from the results of your actions. It reminds you that peace comes from performing your duties without attachment."'
            },
            {
                quote: '"अधिष्ठाय मनः कृष्णे सर्वकर्माणि साधय। मयि सन्न्यस्य मत्परः सम्यग्योगे मत्परः ॥ (Chapter 9, Verse 27)"',
                meaning: '"Dedicate all your actions to Me, with your mind fixed on Me. Considering Me as the supreme goal, attain perfection in Yoga (selfless action)."',
                motivation: '"This shloka emphasizes the importance of dedicating your actions to a higher purpose. It encourages you to see your work as a form of devotion and selfless action."'
            }
        ];

        
        function generateQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            document.getElementById('quote').innerText = randomQuote.quote;
            document.getElementById('meaning').innerText = randomQuote.meaning;
            document.getElementById('motivation').innerText = randomQuote.motivation;
        }

        
        window.onload = function() {
            generateQuote();
            const audio = document.getElementById('background-audio');
            audio.muted = false;

            
            audio.play().catch(() => {
                
                document.body.addEventListener('click', () => {
                    audio.play();
                }, { once: true });
            });
        };


