---
title: 'Vibecoding by Design'
subtitle: 'How I decided to build this portfolio using AI, my take on vibecoding, and the process of actually doing it.'
pageNumber: 'Personal project'
date: 2026-10-29
order: 1
cover: '/immagini/Vibecoding_cover.jpg'
summary: 'How I decided to build this portfolio using AI, my take on vibecoding, and the process of actually doing it.'
accentColor: '#ae7bd1'
draft: false
---
## Looking for Magic
Walking the designer path comes (in its broadest sense) with never being able to answer the question: <strong>“Am I a tech person or an art person?”</strong>. The real magic of this field is that it brings <strong>both worlds together</strong>. And it is a huge part of why I am doing what I’m doing today.

In this article I want to share how this magic took place once again when I embarked on <strong>my first web portfolio project</strong>, the one you’re browsing right now, while experimenting with <strong>AI and vibecoding.</strong>

## AI Tools and a Lucky Vibecoding Workshop

The start of the summer is always a time of turmoil in a university, and in the PoliMi design campus in Bovisa everyone was running around tired but wired to finish up the projects on which so many hours had been spent. On the other hand it is also peak <strong>portfolio season</strong>, and this year of course most of my friends and colleagues were experimenting with the <strong>latest AI tools</strong> such as Framer, Lovable, Base44 and so on. Those who know me can attest that I do not use AI lightly and I keep an analytical, or even critical (as in critical thinking), stance towards it; and of course this also means engaging with it and staying curious. As I once more approached the daunting task of redesigning my portfolio all over again, I knew that this year it was time for a website, thus in conversation with my colleagues I browsed and experimented with the different AI website builders and tools. They left me feeling quite <strong>overwhelmed and unsatisfied.</strong>

Luck has it that right then a series of events led me to attend a <strong>workshop on AI for Social Innovation led by Paul Hekkert and Derek Lomas</strong> that changed my perspective on how to tackle this challenge.

Derek introduced us to <strong>vibecoding via Claude Code used on the terminal</strong> by very much “throwing us in the water”. He shared (and applied) a very <strong>playful approach to AI rather than technical</strong>. Just try, mess around, have fun and be prepared to be in awe. A comment on this approach: 
> isn’t this the secret of being digital native? While our parents were cautiously looking at instruction manuals we were already messing with the television settings, without worrying that we could break it or cause irreparable damage.

I’ll admit at first I was <strong>uncomfortable</strong> given the current sociopolitical climate because I felt it wasn’t the most responsible and ethical approach to AI, especially when Derek typed on my terminal:

-- dangerously-skip-permissions

😬😬😬

But as both the experience and his explanations sank in, I started seeing the value of this approach.
I strongly believe that <strong>technology should never be treated as a magical blackbox</strong> but rather as a physical artifact that <strong>we do have agency and control over</strong>, that we learn how to shape, that we can break and then fix again. <strong>I dream of a future where we all are tinkerers and makers</strong>, especially when it comes to AI adoption. And maybe <strong>a playful attitude</strong> can make approaching this technology less daunting for many people who otherwise wouldn’t have the mean to access it through a “technical” understanding. Or even better <strong>can be the doorway</strong> to then build this understanding along the way.

## The Unreachable World of Developers
Personally I have always been interested in the world of computer science, but never quite deep dived in it. I took some basic html and C++ classes in high-school, then experimented very little with Arduino, when I was studying physics I started using the terminal and some Phyton in the lab class, later on I enrolled to a Linux class I never actually attended, then I followed all starry eyed and full of good intentions the summer’s cyberdecks trends… Long story short, it’s not an inaccessible world, but one that at this time in my life I don’t really have reasons and resources to actually land on.

After this workshop I was still unsatisfied with AI web builders (I’m sure they are great tools, but personally they don’t really “vibe” with me) but I was more confident in using AI in a more “techy” fashion. <strong>So I had an idea, or rather a wish. I wanted to try and build my website from scratch, having absolutely no idea how to.</strong>

So basically<strong> I asked Claude</strong> something like: ok teach me how to make a website absolutely from scratch, how and with which tool and trace me a path that is going to help me learn new skills and knowledge along the way.

<strong>Thus I started "designing the code" of my website. </strong>

I will now try and <strong>describe the process</strong> as best as I can for anyone who might want to <strong>try and do the same</strong>, but a word of warning: this is a highly experimental approach, you will not know what you are doing most of the time, to see the final results you have to stick with <strong>uncertainty</strong> for a little bit.

## The Process of Designing the Code - My Take on Vibecoding
First of all, the backbone of my project rests on <strong>Astro</strong>: a web framework that combines all sorts of different languages and libraries all at once in a very convenient and intuitive structure. Instead of creating my project and code from nothing, I browsed the <strong>open-source templates</strong> library available directly on Astro’s website. (Side note: the open-source movement is amazing and really makes experimenting with tech accessible.) I chose a template (<a href="https://astro.build/themes/details/self-esteem/">Self Esteem by Miro Durana</a>) and copied the project <strong>locally on my laptop</strong>, then I downloaded <strong>Visual Studio Code</strong> and started exploring the folders, the website structure and the code. Some patterns are immediately clear, you can tell right away for instance what is a title, an image, a paragraph etc...  All together was at first a little overwhelming but then <strong>the magic happened when I learned how to run the website locally.</strong>

<img src="/immagini/Vibecoding_terminale.png" />

> And just like that I can <strong>see my website in real time as I make the changes</strong> to the code on Visual Studio. Now I <strong>start playing</strong>: changing things, messing around, familiarizing myself with the structure of the pages, the components etc... <strong>Without reading a manual first but simply trying and looking at what changes.</strong>

<strong>How does vibecoding enters the pictures?</strong> Well messing around with an open source template is a good start and you can find amazing resources online, but as a designer what I really wish for is to find the same freedom that I can have on Figma, Illustrator or, even better, on a white piece of paper. So I go to Claude and describe what I would like to add or change (you can try also directly with a screen design or a sketch), it spits out a few <strong>lines of code</strong> and I just copy and paste it and try it out directly locally. <strong>I mess with it until it's the way I want it, I ask Claude again for clarification or changes if necessary.</strong>

This is the key for me; I can have <strong>full creative freedom and control while exploring and learning.</strong> I can always <strong>adjust the level of diy</strong> that I want: sometimes I ask for full detailed explanations, but other times I just want it done, most of the time it is something in the middle. And <strong>I am having a lot of fun</strong> in the process.

The next step in putting a live, viable, website out there is to create a <strong>Github account</strong>, connect it to your terminal, and then learn about git. Afterwards you link your new git project to <strong>Vercel</strong> and voila, the portfolio is online. Last detail: connecting to <strong>Cloudflare</strong> to use my personal domain instead of Vercel’s preset.

## Notes
To be noted: <strong>AI is not simplifying the overall task or making it faster at all</strong>. I'm sure I've taken longer than I would have using WordPress, but I am <strong>extending my reach</strong> to activities that otherwise I would not have been able to access at all. A few months ago I attended a talk by <strong>Roberto Verganti</strong> on how AI will change the future of Creative Work and it really struck me his idea that <strong>AI will open up many fields and activities to people that before were not included</strong> in them at all. He made a parallelism with what happened with electronic music: many producers today don't know how to play any instruments and still they are making music and bringing innovation to the field. While I was working on this project I had a glimpse of that vision. It is true that I could have learned how to code at any point now or in the future, but would I have actually done it? <strong>Or would I have continued to miss out gravitating outside of this world?</strong> This being said I am of course still an outsider. I don't claim any solid knowledge on software development and I'm sure my website has large room for improvement (hopefully nothing disastrous). But still, <strong>now I am at least peeping above the hedge.</strong> And, potentially, I’m a little closer to understanding some of it.

<strong>A few more notes for anyone who might want to try themselves.</strong>

To keep the workflow consistent, faster and organized, with better responses from Claude I created a <strong>dedicated project folder</strong> where I updated some key instructions and references.

The <strong>Developers Tools</strong> (f12) are great to test different designs directly on the local website without making any permanent changes to the actual saved code files, you can view and modify the html code. It is also useful to explore other reference website, analyze the structure and the code to take inspiration.

And that is the process of how mariazerbola.com has taken shape.

## Exchanges!
This has been an <strong>incredibly fun project</strong> that I hope to keep working on and improving as my career and my life evolve. As I said, I am sure that I have made plenty of mistakes along the way, and I am very <strong>conscious of the limit of AI:</strong> it is just a tool that we can either learn to use to truly expand our opportunities, or that can grow in us the illusion unlimited productivity.

If anyone who is reading actually knows how to develop websites and wants to give me some <strong>feedback, that would be greatly appreciated.</strong> You can check out the <a href="https://github.com/maria-zerbola/first-portfolio-web">repo on Github.</a> Likewise if you want to try and do something similar <strong>feel free to make a copy</strong> of my project on Github and start from there, also <strong>reach out</strong> to ask or discuss anything at all!

<strong>Thank you if you've made it this far, this article is AI-free original content handwritten by yours truly.</strong>