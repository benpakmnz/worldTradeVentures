const aboutItems = [
    {
        "title":"About",
        "body":"Founded in 2016, World Trade Ventures (WTV) is a unique venture capital firm focused on supporting early stage technology companies operating out of the New York area. At World Trade Ventures we like to do things differently. We are a stage agnostic fund that focuses on finding the best entrepreneurs and supporting them throughout the life cycle of their company. Our main value comes through our direct connection with the companies and their founders and a deep understanding of the immediate needs of the company. We pride ourselves on our ability to support founders and help them achieve their goals."
    },

    {
        "title":"What We Look For",
        "body":"We invest in inspired entrepreneurs who are here to make a real change by creating and deploying disruptive technologies and products across a wide array of verticals including Enterprise SW, Fintech, AI/ML, Marketing Technology and Digital Health. Our portfolio companies enjoy a unique access to capital during their early stages that supports their efforts and enables them to enter growth and create true market leaders."
    },

    {
        "title":"The WTV Way",
        "body":"WTV is an agile and active VC. We maintain connections with our portfolio teams by visiting them regularly and gaining a meaningful understanding of their business needs. This way, we can provide each portfolio company with the attention they need and deploy capital in a way that is most helpful to the founders. WTV operates its lean team out of the SilverTech Ventures’ offices. SilverTech runs a stage agnostic accelerator and a related venture fund with a large and very impressive portfolio operating in the World Trade Center in NYC. We sit with and work with out founders on a daily basis – out of the same space, providing them with not just liquidity. Our close relationships with our founders make sure that we are there for them whenever and however they need us. "
    },

]



const companies=  [
        {
            "link": "https://www.wearshade.com/",
            "logo": "shade.png",
            "name": "Shade",
            "description": "Shade has developed the first wearable UV Sensor for persons diagnosed with Lupus. Shade helps patients determine their daily threshold for UV exposure and then provides them with timely notifications so that they can make smart choices about when to go inside and when to enjoy the sunshine."
        },
        {
            "link": "https://rentigo.com/",
            "logo": "rentigo.png",
            "name": "Rentigo",
            "description": "Rentigo disrupts proprty management through a simplified, digitized processing, maintenance and reporting solution."
        },
        {
            "link": "https://www.aquant.io/",
            "logo": "aquant.png",
            "name": "Aquant",
            "slidePic": "aquant.png",
            "description": "Aquant is an enterprise AI platform that uses machine learning to learn your enterprise's unique language and use it to maximize equipment uptime."
        },
        {
            "link": "https://www.cinchwallet.com/",
            "logo": "cinch.png",
            "name": "Cinch",
            "description": "Cinch is a payment app that converts customer loyalty into cash. Its mission is to help local neighborhoods thrive through local commerce."
        },
        {
        "link":"https://www.juliusworks.com/", 
        "logo":"julius.png",
        "name": "Julius",
        "description": "Julius is revolutionizing influencer marketing by providing clients with in depth audience demographics of social influencers making influencer marketing a science."
        },
        {
        "link":"https://www.cityhive.net/", 
        "logo":"CityHive.png",
        "name": "City Hive’s",
        "description": "City Hive’s all in one e-commerce platform for wine and spirit shops that enables retailers to maintain complete control over their customer base. "
        },
        {
        "link":"https://www.semperis.com/", 
        "logo":"semperis.png",
        "name": "Semperis",
        "slidePic": "semperis.png",
        "description": "Semperis is an enterprise identity protection company that enables organizations to quickly recover from accidental or malicious changes and disasters that compromise Active Directory, on-premises and on cloud."
        },
        {
        "link":"https://firedome.io/", 
        "logo":"firedome.png",
        "name": "Firedome",
        "slidePic": "firedome.png",
        "description": "Firedome secures and supports IoT connected devices and prevent next cyber-catastrophe. Firedome offers products and services that support different needs from active cyber-protection to analytics, insights, and cyber-security fleet management."
        },
        {
        "link":"https://sqream.com/", 
        "logo":"sqream.png",
        "name": "SQream",
        "slidePic": "sqream.png",
        "description": "SQream delivers the most flexible database for huge dataset analytics. Global enterprises use SQream DB to analyze more data than ever before. "
        },
        {
        "link":"https://www.nlmatics.com/", 
        "logo":"NLMatics.png",
        "name": "NLMatics",
        "description": "NLMatics is focused on extracting insights from unstructured text data with minimum or no supervision. From informal notes to complex legal documents, from news headlines to extensive reports - NLMatics is designed to be flexible so that enterprises have a single solution for text analytics."
        },
        {
        "link":"https://visit.org/", 
        "logo":"visitdotorg.png",
        "name": "Visit.org",
        "description": "Visit.org is a SaaS platform for employee-driven corporate social responsibility (CSR). Discover & book hundreds of social impact team experiences benefitting local social ventures, and provide analytics to match these with employees' individual interests."
        },
        {
        "link":"https://www.roxfinancial.com/", 
        "logo":"rox.png",
        "name": "ROX",
        "description": "ROX is an exchange for real estate security tokens targeting the institutional market. It was founded in 2018 and is based in Tel Aviv, Israel and New York City, USA."
        },
        {
        "link":"https://www.lili.co/", 
        "logo":"lili.png",
        "name": "Lili",
        "description": "Lili empowers freelancers with financial services and tools to balance work and life in one account."
        },
        {
        "link":"https://vitrainer.com/", 
        "logo":"vi.png",
        "name": "VI",
        "description": "Vi delivers on-demand cardio audio workouts that are fun, effective, and adapt to you in real-time while anyone works out. Vi's mission is to democratize personal health & fitness through AI and voice"
        },
        {
        "link": "https://www.igentify.com/",
        "logo": "igentify.png",
        "name": "igentify",
        "description":"Founded in October 2016, Igentify’s team of globally renowned geneticists, experienced engineers, animators, and UX/UI designers are redefining the protocols of traditional medicine. In January 2019 Deloitte selected Igentify as an Israeli startup at the forefront of the Digital R&D revolution."
        },
        {
        "link": "http://www.eatwoodspoon.com/",
        "logo": "woodspoon-logo.svg",
        "name": "woodspoon",
        "description":"WoodSpoon is a community-based marketplace that facilitates the delivery of homemade food from local chefs.At WoodSpoon we empower our home chefs to share their culture and passion with others. Customers can order for immediate delivery or schedule ahead on WoodSpoon’s mobile app."
        }



    ]


const articles= [
    {
        "title": "Semperis Announces $40 Million in Growth Funding After Completing Six Consecutive Profitable Quarters",
        "body": "Semperis’ Series B Funding Led by Insight Partners, to Capture Market Demand for Threat Mitigation and Rapid Response to Directory Attacks",
        "date": "13 May 2020",
        "company":"Semperis",
        "link":"https://www.insightpartners.com/about-us/news-press/semperis-announces-40-million-in-growth-funding-after-completing-six-consecutive-profitable-quarters/",
        "size": "xl",
        "background": "light"
    },

    {
        "title": "Israeli cybersecurity co Semperis raises $40m",
        "body": "The company provides identity-driven cyber resilience for enterprises.",
        "date": "13 May 2020",
        "company":"Semperis",
        "link":"https://en.globes.co.il/en/article-israeli-cybersecurity-co-semperis-raises-40m-1001328454",
        "size": "md",
        "background": "dark"
    },

    {
        "img":"images/37.png",
        "size": "md",
        "background": "dark"
    },

    {
        "title": "Semperis Extends Industry’s Most Comprehensive Active Directory Threat Detection and Response Platform",
        "body": "Enhances Directory Services Protector with Vulnerability Assessment, Security Reporting, and Auto-Remediation Capabilities",
        "date": "23 June 2020",
        "company":"Semperis",
        "link":"https://www.semperis.com/press-release/semperis-extends-industrys-most-comprehensive-active-directory-threat-detection-and-response-platform/",
        "size": "md",
        "background": "light"
    },

    {
        "title": "Semperis Named a Gold Winner of the 2020 Edison Awards",
        "body": "NEW YORK--(BUSINESS WIRE)--Semperis, the leader in identity-driven cyber resilience, today announced that Semperis Active Directory Forest Recovery (ADFR) has been named a gold winner in the Information Technology category for the 2020 Edison Awards. The Edison Awards, named after Thomas Alva Edison, recognizes and honors the world’s best innovations and innovators.",
        "date": "02 April 2020",
        "company":"Semperis",
        "link":"https://www.businesswire.com/news/home/20200402005173/en/Semperis-Named-Gold-Winner-2020-Edison-Awards",
        "size": "md",
        "background": "dark",
        "img": "images/39.png"
    },

    {
        "title": "Semperis Named Best Business Continuity/Disaster Recovery Solution at 2020 SC Awards",
        "body": 'Semperis, the leader in identity-driven cyber resilience, today announced that Semperis Active Directory Forest Recovery (ADFR) was named the Trust Award winner in the Best Business Continuity/Disaster Recovery Solution category of the 2020 SC Awards. Winners were announced on February 25, 2020 during the 24th annual SC Awards gala in San Francisco, presented by SC Media, a CyberRisk Alliance company.',
        "date": "03 March 2020",
        "company":"Semperis",
        "link":"https://www.benzinga.com/pressreleases/20/03/b15464011/semperis-named-best-business-continuitydisaster-recovery-solution-at-2020-sc-awards",
        "size": "md",
        "background": "light"
    },

    {
        "title": "SQream Technologies raises $39.4 million for GPU-accelerated databases",
        "body": "Data set analytics startup SQream Technologies today announced it has raised $39.4 million. The bulk of the new funds will go toward talent recruitment, product R&D, and enhancing the company’s customer delivery platforms, according to a spokesperson. SQream aims to lower the barrier to big data optimization with better performance, a reduced footprint, and cost savings over its competitors.",
        "date": "24 June 2020",
        "company":"SQream",
        "link":"https://www.venturebeat.com/2020/06/24/sqream-technologies-raises-39-4-million-for-gpu-accelerated-databases/",
        "size": "xl",
        "background": "light"
    },

    {
        "img":"images/38.png",
        "size": "md",
        "background": "dark"
    },

    {
        "title": "The Monthly Rundown: Startups to Watch from Shamus the Sales Guy – June",
        "body": "Was it me or did June fly by? Hope everyone ended Q2 on a strong note. We’re 50 percent through (hopefully) the craziest year of our selling lives.",
        "date": "14 July 2020",
        "company":"SQream",
        "link":"https://about.crunchbase.com/blog/monthly-startup-rundown-june-2020/?utm_content=134722823&utm_medium=social&utm_source=linkedin&hss_channel=lcp-2515598",
        "size": "xxl",
        "background": "light"
    },

    {
        "img":"images/40.png",
        "size": "md",
        "background": "dark"
    },

    {
        "title": "Firedome raises $10 million to secure IoT devices against hacking",
        "body": "Billions of devices are expected to be connected to the internet by 2030, according to Cisco, a chunk of which will be highly vulnerable to intrusion and data breach. Hewlett-Packard Enterprise reported in a recent study that as many as 70% of internet of things (IoT) devices contain well-known exploits. And from 2016 to 2017, Symantec traced a 600% increase in targeted attacks against IoT products.",
        "date": "23 October 2019",
        "company":"FireDome",
        "link":"venturebeat.com/2019/10/23/firedome-raises-10-million-to-secure-iot-devices-against-hacking/",
        "size": "xxl",
        "background": "light"
    },

    {
        "img":"images/42.png",
        "size": "md",
        "background": "dark"
    },

    {
        "title": "Firedome Wins CES 2020 Innovation Award for Cybersecurity and Personal Privacy",
        "body": "Firedome named best of CES 2020 Innovation Awards Honoree. Firedome will showcase its real-time, dynamic endpoint cybersecurity solution at CES 2020",
        "date": "3 December 2019",
        "company":"FireDome",
        "link":"https://www.prnewswire.com/news-releases/firedome-wins-ces-2020-innovation-award-for-cybersecurity-and-personal-privacy-300968094.html",
        "size": "md",
        "background": "light"
    },

    {
        "title": "Aquant raises $30 million for AI that gives customer service agents mission-critical data",
        "body": "Organizational data is often scattered across systems, hidden within text, and locked within the minds of employees. Given the disparate channels, how might this data be unified and delivered to support agents engaged in service calls? Assaf Melochna and Shahar Chen, former colleagues at workforce management and service optimization company ClickSoftware, advocate an AI- and machine learning-based solution. The two cofounded Aquant, which algorithmically mines and analyzes data from various sources to learn manufacturing, utilities, and telecom companies’ unique service languages and map customer problems to solutions.",
        "date": "30 January 2020",
        "company":"Aquant",
        "link":"venturebeat.com/2020/01/30/aquant-raises-30-million-for-ai-that-supplies-customer-service-agents-with-relevant-info/",
        "size": "xl",
        "background": "dark"
    },

    {
        "img":"images/37.png",
        "size": "md",
        "background": "dark"
    },
    
    {
        "img":"images/38.png",
        "size": "md",
        "background": "dark"
    },
    {
        "title": "Aquant Raises $30 Million in Series B Led by Insight Partners, To Close the Skills Gap in Service with AI",
        "body": "NEW YORK–(BUSINESS WIRE)–Aquant, the leading service intelligence platform, announced today the close of a $30 million Series B funding round. This latest round of funding was led by Insight Partners with participation from existing investors including Lightspeed Venture Partners, Angular Ventures, and Silvertech Ventures. This investment brings the company’s total funding to $40 million in the last 14 months. Peter Sobiloff, Managing Director at Insight Partners, will join the company’s board of directors.",
        "date": "30 January 2020",
        "company":"Aquant",
        "link":"techcrunch.com/2020/06/03/lili-seed-funding/",
        "size": "xl",
        "background": "light"
    },
    {
        "title": "Aquant Announces RATIONAL USA to Deploy Its AI Solution",
        "body": "Aquant, Inc. announced today that RATIONAL USA is implementing its Artificial Intelligence solution within the RATIONAL service organization. RATIONAL is the leading manufacturer of combi-steamer ovens for commercial kitchens.",
        "date": "30 May 2020",
        "company":"Aquant",
        "link":"https://www.insightpartners.com/about-us/news-press/aquant-raises-30-million-in-series-b-led-by-insight-partners-to-close-the-skills-gap-in-service-with-ai/",
        "size": "md",
        "background": "dark",
        "img": "images/39.png"
    },

    {
        "title": "Lili raises $10M for its freelancer banking app",
        "body": "Lili, a startup building banking products to meet the needs of freelance workers, is announcing that it has raised $10 million in seed funding.",
        "date": "3 june 2020",
        "company":"Lili",
        "link":"https://www.newswire.com/news/aquant-announces-rational-usa-to-deploy-its-ai-solution-20501913",
        "size": "md",
        "background": "light"
    },
]
