# Kizuna Therapy — Live Site Copy

Extracted from https://kizunatherapy.com on 2026-06-03 for the Next.js rebuild. This is a starting draft pulled from the existing PHP site; the client will edit before it goes into components. Page filenames preserve the original `.php` extension so each section maps to a single source page.

---

## Global

### Logo / brand
- Wordmark: "Kizuna"
- Header logo image alt: "Kizuna Logo" → links to Home

### Primary nav (header)
- Home → /
- About Us → /about
- Services → /services
- Contact → /contact
- CTA button (right side, every page): "Book a Session" → /book-session

### Mobile nav
Same four links plus the "Book a Session" CTA, collapsed behind a hamburger.

### Footer

**Column 1 — About Kizuna Therapy**
At Kizuna Therapy & Wellness, we focus on fostering connections and offering culturally sensitive care to help you heal and thrive.

Social icons: Facebook, Twitter, LinkedIn, Instagram. (All links are currently `href="#"` placeholders — no real social URLs wired up.)

**Column 2 — Quick Links**
- Home
- About Us
- Services
- Meet Our Therapists
- Contact

**Column 3 — Get In Touch**
We'd love to hear from you! Reach out for any questions or to schedule a session.
- Phone: +90 505 755 07 97
- Email: support@kizunatherapy.com

**Footer bottom bar**
©2024 - All Rights Reserved by **Kizuna Therapy** | Powered by [Circles](https://circles.ae/)

### "Book Your First Session Today" banner
Appears immediately above the footer on every page.
- Heading: "Book Your First Session Today" (links to /book-session)
- Side card: "Send an Email" → support@kizunatherapy.com

### Floating WhatsApp button (every page)
- WhatsApp link: https://wa.me/+905057550797 (prefilled message: "Hi! I have a question.")
- Label under icon: "Chat with us"

### Contact info summary (consolidated)
- WhatsApp / Phone: +90 505 755 07 97 (WhatsApp only per Contact page)
- Email (general): info@kizunatherapy.com
- Email (support): support@kizunatherapy.com
- Address: Beşiktaş, İstanbul, Türkiye 34400

---

## Home (/) — `index.php`

Page title: "Home | Kizuna Therapy"

### Hero
[hero media: autoplaying looped video, `video.mp4` — appears to be lifestyle / nature footage]

**Eyebrow:** Compassionate Care
**H1:** Bridging Cultures, Building Bonds, Transforming Lives
**Subhead:** At Kizuna Therapy, we connect you with multilingual therapists from diverse backgrounds, ensuring culturally sensitive counseling tailored to your unique experiences. Our holistic approach nurtures emotional well-being, fosters deep connections, and makes therapy accessible worldwide—because understanding begins with feeling heard.
**Primary CTA:** Meet Our Therapists → jumps to #therapists
**Floating badges over the hero media:**
- "Kizuna Nature Retreats — Experience Growth Through Nature"
- "Wellness Focused" tag

(A commented-out secondary CTA "Join a Workshop" exists in the source but is not currently shown.)

### Section: About Us (three-card intro)
**Eyebrow:** ABOUT US
**H2:** Fostering Genuine Connection & Cultural Understanding Through Therapy

Three cards, each with a "Learn More" button (buttons currently have no destination):
1. **Compassionate Counseling** — Personalized care rooted in trust, empathy, and cultural understanding to help you thrive.
2. **Nature-Inspired Therapy** — Experience the healing power of nature to enhance resilience and restore balance.
3. **Creative Expression** — Tap into your creativity with art therapy to explore emotions and relieve stress.

### Section: About Kizuna (image + bullets)
[image: "Two professionals discussing consulting" — `logo-1.jpg`, with a floating badge reading "SINCE 2024 — Fostering bonds and connections for healing and growth"]

**Eyebrow:** ABOUT KIZUNA
**H2:** Empowering Individuals, Cultivating Community, and Bridging Cultures Through Therapy

At Kizuna Therapy & Wellness, we believe that every individual's journey is unique, yet deeply interconnected with the communities they engage with. Rooted in the philosophy of Kizuna—the Japanese concept of meaningful bonds—we foster a therapeutic alliance built on trust, cultural sensitivity, and accessibility.

Our approach ensures that therapy is not just about support, but about connection—to oneself, to others, and to a global network of compassionate professionals.

Bulleted checklist:
- Culturally responsive, multilingual therapy to ensure that you feel truly seen, heard, and understood.
- Personalized counseling & holistic approaches—from CBT to art, nature, and somatic therapies—to align with your individual needs.
- Workshops & community-centered programs that nurture resilience, self-growth, and shared experiences.
- Global accessibility—wherever you are, Kizuna connects you with therapists who speak your language and understand your world.

(A "Learn More" button is commented out in the source.)

### Section: Meet Our Therapists (id="therapists")
**H2:** Meet Our Therapists

Six cards (name, title, languages, top specialties, "View Profile →" link). For canonical bio data see the individual therapist pages further down — values on these cards are the short summaries:

| Name | Title (as shown here) | Languages | Top specialties |
|---|---|---|---|
| Eya Kallel | Clinical Psychologist | Eng, Ara, Fre, Kor | Anxiety & Stress Management; Depression; Emotional Regulation; Relationship Issues |
| Ghania Ali | Counseling Psychologist (Founder) | Eng, Ur | Anxiety & Stress; Depression; Family Issues |
| Merve Arslanoğlu | Counseling Psychologist | Eng, Tur | Personal Growth; Academic Development; Resilience Building |
| Yara Halawa | Clinical Psychologist | Eng, Ara | Trauma; Stress & Anxiety; Self-Development |
| Mariam Anisur Rahman | Counseling Psychologist | Eng, Ben, Hin | Stress Management; Anxiety; Depression; Self-esteem; Emotional Regulation; Communication Issues; Conflict Resolution |
| Sabrine Ben Omrane | Clinical Psychologist | Eng, Fre, Ara | Anxiety; Depression; ADHD; Emotional Regulation; Personal Growth; Trauma & Stress Management |

### Section: Therapy Services
**Eyebrow:** THERAPY SERVICES
**H2:** Explore Our Therapy Services

Six numbered cards:
1. **Individual Online Therapy** — Personalized one-on-one support from culturally attuned, multilingual therapists. (CTA fragment in source: "Start Your Journey")
2. **Family & Relationship Therapy** — Nurture your connection and work through challenges together in a safe, guided space. (CTA fragment: "Strengthen Your Bond")
3. **Kizuna's Artful Reflections** — Explore emotions and self-expression through guided creative art therapy sessions. (CTA fragment: "Join a Workshop")
4. **Kizuna Nature Retreats** — Reconnect with the healing power of nature to promote relaxation, mindfulness, and emotional well-being.
5. **Group Therapy & Community Circles** — Grow together with others through shared, supportive group sessions. (CTA fragment: "Find Your Circle")
6. **Student & Young Adult Support (25% Off!)** — Prioritize your well-being with culturally sensitive, affordable therapy tailored for students.

### Section: Scrolling marquee (decorative)
Looping band of five tags. Worth keeping as a feature list, even if it's visually decorative:
- NATURE THERAPY
- CULTURALLY EMBEDDED THERAPY
- ART THERAPY WORKSHOPS
- MEDITATION SESSIONS
- REIKI HEALING

### Section: FAQ
**Eyebrow:** FAQ
**H2:** Frequently Asked Questions
**Intro:** Have questions about our services or how therapy works? Find answers to some of the most common inquiries below.

1. **What types of therapy do you offer?**
   We offer a wide range of therapies, including online counseling, art therapy, nature therapy, mindfulness therapy, and group therapy. Each is designed to cater to individual needs and promote overall well-being.
2. **How do I know which therapist is right for me?**
   Each therapist has a detailed profile that includes their specialties, languages spoken, and therapeutic approaches. You can select a therapist whose expertise aligns with your needs.
3. **Do you offer therapy sessions in multiple languages?**
   Yes, we have a diverse team of multilingual therapists offering sessions in various languages to ensure culturally sensitive and inclusive care.
4. **What should I expect during my first therapy session?**
   Your first session focuses on understanding your concerns and goals. The therapist will guide you through the process, ensuring a safe and supportive space to share.
5. **How can I book a therapy session or workshop?**
   You can easily book a session or sign up for workshops via our online booking system. Choose your preferred date, therapist, or workshop from the calendar view.

---

## About (/about) — `about-us.php`

Page title: "About Us | Kizuna Therapy"

### Hero
[background image: `a-b.jpg` on desktop, `a-b2.jpg` on mobile — abstract wellness imagery]

**H1:** Who We Are
**Body:** At Kizuna Therapy, we believe in the power of genuine connection. "Kizuna" represents the deep bonds we create, providing culturally sensitive, accessible therapy. We help you build emotional resilience, develop self-awareness, and navigate life's challenges with practical tools. Together, we'll strengthen your connection to yourself and others.

### Section: Our Journey
**H2:** Our Journey
**Intro:** Discover how Kizuna Therapy was founded, our milestones, and our ongoing dedication to building bonds and nurturing wellness.

[image: "Our Story" — `about-us.jpg`]

**H3:** From Humble Beginnings
Our journey began with a simple but powerful realization: the need for accessible, affordable, and culturally sensitive therapy. Understanding the challenges faced in developing countries, our multicultural team of therapists is dedicated to providing professional support that resonates with you. Through online individual therapy, family and relationship counseling, and art and nature therapy workshops, we offer a space where you can feel heard, supported, and empowered. Join us on our journey to create a community of care, resilience, and meaningful connections.

### Section: Our Milestones (timeline)
**H2:** Our Milestones

1. **Launch of Kizuna Therapy** — December 2024
   We began our journey with the launch of Kizuna Therapy, driven by the vision of providing accessible, affordable, and culturally sensitive therapy to those in need.
2. **First Nature Therapy Workshop** — December 2024
   Our first nature therapy workshop was held at Belgrade Forest in Istanbul, offering a unique space for connection with nature and self-reflection.
3. **First Art Therapy Workshop** — January 2025
   In the heart of Istanbul's Balat neighborhood, we hosted our inaugural art therapy workshop, giving participants a creative outlet to express emotions and gain insight.
4. **Second Art Therapy Workshop** — February 2025
   We continued our commitment to creative expression with our second art therapy workshop in Fatih, further expanding our community and therapeutic offerings.
5. **Online Therapy Launch** — January 2025
   Our team began providing online therapy services, offering professional support and guidance to clients around the world, making therapy more accessible and flexible.

### Section: Meet Our Therapists
**H2:** Meet Our Therapists
**Intro:** Our diverse team of experienced therapists is dedicated to providing empathetic and effective care.

Six cards (name, title, link to profile). The titles shown on this page:
- Eya Kallel — Clinical Psychologist
- Ghania Ali — Counseling Psychologist (Founder)
- Merve Arslanoglu — Counseling Psychologist
- Yara Halawa — Clinical Psychologist
- Mariam Anisur Rahman — Counseling Psychologist
- Sabrine Ben Omrane — Clinical Psychologist

### Section: Our Vision & Values
**H2:** Our Vision & Values
**Intro:** At Kizuna Therapy, our vision is to make therapy accessible, compassionate, and culturally sensitive for everyone. We are committed to fostering a community where emotional well-being and personal growth are prioritized.

Three value cards:
1. **Accessibility** — We believe that therapy should be available to all, regardless of location or background. Through online sessions and inclusive workshops, we break down barriers to mental health support and create flexible options for those seeking help.
2. **Cultural Sensitivity** — Understanding and respecting diverse backgrounds is at the core of our practice. Our multicultural team is trained to provide therapy that honors your unique cultural identity, ensuring you feel heard and understood.
3. **Empowerment and Connection** — We are dedicated to empowering our clients through meaningful connections, whether in one-on-one therapy or group workshops. By building trust and resilience, we help you navigate life's challenges and cultivate lasting emotional well-being.

---

## Services (/services) — `services.php`

Page title: "Services | Kizuna Therapy"

(No separate hero on this page — the page opens straight into the intro.)

### Section: Intro
**Eyebrow:** THERAPY SERVICES
**H2:** Connecting You to the Support You Need
**Body:** At Kizuna Therapy, we provide a range of therapy services designed to meet your specific needs. From individual counseling to relationship support and creative workshops, our culturally sensitive approach ensures you receive the care, tools, and guidance to navigate life's challenges with confidence and clarity. Let us help you build the emotional resilience and connections you deserve.

### Section: Individual Therapy
**H3:** Individual Therapy
Our one-on-one sessions are tailored to your personal needs, allowing for personalized guidance, deep exploration, and effective treatment strategies.

- **Online Individual Therapy — Flexible support, wherever you are.**
  Receive personalized, confidential therapy sessions online, designed to meet your unique needs and help you navigate life's challenges.
- **Family & Relationship Counseling — Building understanding, enhancing connections.**
  Work with our therapists to improve communication, resolve conflicts, and strengthen your relationships with loved ones.

### Section: Workshops & Group Therapy
**H3:** Workshops & Group Therapy
Join supportive group settings where you can share experiences, learn new skills, and foster community connections.

- **Kizuna Artful Reflections (Art Therapy Workshops) — Express and discover through creativity.**
  Join our Artful Reflections workshops where art therapy helps you explore emotions, gain clarity, and foster self-awareness.
- **Kizuna Nature Retreats (Nature Therapy) — Reconnect with nature and refresh your mind.**
  Take part in our nature therapy retreats, designed to help you find calm, build resilience, and gain new perspectives in tranquil outdoor settings.

### Section: Specialty Programs
**H3:** Specialty Programs
Our specialty programs are designed to address specific areas of personal growth and healing.

- **Therapy Programs for Stress, Trauma, & Personal Growth — Tailored support for your unique challenges.**
  Our therapy programs offer specialized support to address stress, trauma, and personal growth, helping you build emotional resilience and navigate life transitions.
- **Comprehensive Therapy Workshops — Learn, connect, and grow in a supportive space.**
  Engage in our therapy workshops designed to foster emotional insight, build coping skills, and create a sense of community through shared experiences.

### CTA
**Button:** Book a Session → /book-session

---

## Book a Session (/book-session) — `book-session.php`

Page title: "Book a Session | Kizuna Therapy"

### Hero
[background image: `book-seesion.jpg` — note the original filename has a typo "seesion"; dark overlay]
**H1:** Book a Session

### Section: Therapist picker
**H1 (sub):** Select Your Psychologist

Grid of six therapist tiles (photo, name, title) acting as buttons. Selecting one populates the booking form below. Titles as labelled on this page:
- Eya Kallel — Clinical Psychologist
- Ghania Ali — Counseling Psychologist (Founder)
- Merve Arslanoglu — Counseling Psychologist
- Yara Halawa — Clinical Psychologist
- Mariam Anisur Rahman — Counseling Psychologist
- Sabrine Ben Omrane — Clinical Psychologist

### Section: Booking form
**H2:** Book an Appointment
**Default helper text (before a therapist is picked):** No psychologist selected

Form fields:
- Name (required)
- Email (required)
- Phone Number (optional)
- Preferred Date (required)
- Preferred Time (required)
- Reason (textarea, optional)
- Special Requests/Comments (textarea, optional)

**Submit button:** Submit

Form posts to `book-appointment.php`.

---

## Contact (/contact) — `contact.php`

Page title: "Contact Us | Kizuna Therapy"

### Hero
[background image: `contact.jpg` with dark overlay]
**H1:** Contact Us

### Section: Get in Touch
**H2:** Get in Touch with Kizuna Therapy
**Body:** Ready to start your journey toward emotional well-being? Whether you have questions or are ready to book a session, our team is here to help. Reach out today, and let's take the first step together.

- **Our Address:** Beşiktaş, İstanbul, Türkiye 34400
- **Message us anytime at:** +90 505 755 07 97 *(Whatsapp only)*
- **Send E-Mail:**
  - info@kizunatherapy.com
  - support@kizunatherapy.com

(Social icons row repeats: Facebook, Twitter, LinkedIn, Instagram — placeholder `#` links.)

### Section: Contact form
**H2:** Contact Us Now

Form fields:
- Your Name
- Email Address
- Phone No.
- Write Message (textarea)

**Submit button:** Submit Now
Form posts to `sendmail.php`.

---

## Therapist Profiles

> **Shared profile-page structure** (applies to all six pages below): each profile page repeats the global header, footer, and "Book Your First Session Today" banner, and ends with a "Book an Appointment" form (same fields as the Book a Session page, with the therapist's name pre-filled in a hidden `doctorName` input). Profile pages also include the section headings: **Professional Overview**, **Specializations**, **Therapeutic Approaches**, **Education**, **Philosophy**. Only the per-therapist content is captured below.

---

### Therapist: Eya Kallel — `eya-kallel.php`
Page title: "Eya Kallel | Kizuna Therapy" (inferred)

**Title:** Clinical Psychologist
**Languages:** English, Arabic, French, Korean
**Contact email:** kallel.eya97@gmail.com

**Professional Overview:**
Eya Kallel is a compassionate psychological counselor committed to supporting individuals of all ages in their journey toward emotional well-being. Her practice emphasizes resilience and self-discovery, helping clients manage life's challenges with confidence and clarity.

**Specializations:**
- Anxiety and Stress Management
- Depression
- Emotional Regulation
- Relationship Issues

**Therapeutic Approaches:**
- Cognitive Behavioral Therapy (CBT)
- Psychodynamic Approach
- Art Therapy
- Mindfulness Techniques

**Education:**
- Master's in Psychological Guidance and Counseling
- Master's in Child and Adolescent Clinical Psychology
- Bachelor's in Psychology

**Philosophy:**
Eya's approach is rooted in empathy and collaboration, ensuring that every client feels valued and understood. She is dedicated to helping individuals uncover their strengths and create meaningful, lasting change.

---

### Therapist: Ghania Ali — `ghania-ali.php`
Page title: "Ghania Ali | Kizuna Therapy" (inferred)

**Title:** Counseling Psychologist (Founder)
**Languages:** English, Urdu
**Contact email:** ghania.ali1999@gmail.com

**Professional Overview:**
Ghania Ali is a skilled psychological counselor focused on helping clients address and navigate their emotional and interpersonal challenges. She combines evidence-based practices with a warm, empathetic approach to support personal growth and resilience.

**Specializations:**
- Anxiety
- Stress Management
- Depression
- Emotional Regulation
- Relationship and Family Issues
- Personal Growth

**Therapeutic Approaches:**
- Cognitive Behavioral Therapy (CBT)
- Mindfulness Techniques
- Art Therapy
- Solution-Focused Brief Therapy (SFBT)

**Education:**
- Master's in Psychological Guidance and Counseling
- Bachelor's in Applied Psychology

**Philosophy:**
Ghania's therapeutic approach centers on creating a respectful and collaborative environment where clients feel safe to explore their challenges. She is committed to helping individuals uncover their inner strengths and build the resilience needed to thrive in life.

---

### Therapist: Merve Arslanoğlu — `merve-arslanoglu.php`
Page title: "Merve Arslanoğlu | Kizuna Therapy" (inferred)

**Title:** Counseling Psychologist
**Languages:** English, Turkish
**Contact email:** arslanoglumerve8@gmail.com

**Professional Overview:**
Merve Arslanoğlu is a motivated psychological counselor passionate about supporting the personal and academic development of her clients. She works collaboratively to help individuals discover practical solutions, build resilience, and achieve their goals.

**Specializations:**
- Personal Growth
- Academic Development

**Therapeutic Approaches:**
- Individual and Group Counseling
- Cognitive Behavioral Therapy (CBT)
- Educational Guidance

**Education:**
- Master's in Guidance and Psychological Counseling (in progress)
- Bachelor's in Guidance and Psychological Counseling

**Philosophy:**
Merve believes in the transformative power of a supportive therapeutic relationship. By creating a safe and encouraging space, she aims to empower her clients to overcome challenges and thrive.

---

### Therapist: Yara Halawa — `yara-halawa.php`
Page title: "Yara Halawa | Kizuna Therapy" (inferred)

**Title (on profile page):** Counseling Psychologist *(note: listed as "Clinical Psychologist" on Home, About, and Book pages — see Flags section in handoff notes)*
**Languages:** English, Arabic
**Contact email:** yarahalawa.yh@gmail.com

**Professional Overview:**
Yara Halawa is a Counseling psychotherapist dedicated to helping individuals explore and overcome their mental health challenges. With a client-centered approach, she strives to provide a supportive space where adolescents and adults can feel understood, develop coping strategies, and work towards personal growth.

**Specializations:**
- Trauma
- Stress and Anxiety Management
- Emotional Regulation
- Building Resilience
- Navigating Life Transitions / Self development

**Therapeutic Approaches:**
- Cognitive Behavioral Therapy (CBT)
- Psychoanalysis
- Art Therapy

**Education:**
- Master's in Counseling Psychology
- Bachelor's in Psychology

**Philosophy:**
Yara believes that therapy is a collaborative journey built on trust, understanding, and respect. By fostering a safe and nurturing environment, she aims to empower her clients to navigate life's challenges with resilience and self-awareness.

---

### Therapist: Mariam Anisur Rahman — `mariam-anisur-rahman.php`
Page title: "Mariam Anisur Rahman | Kizuna Therapy" (inferred)

**Title:** Counseling Psychologist
**Languages:** English, Bengali, Hindi
**Contact email:** Mariamanis.1425@gmail.com

**Professional Overview:**
Mariam Anisur Rahman is a dedicated counselor focused on empowering individuals through empathetic guidance, practical strategies, and a client-centered approach to personal and emotional well-being.

**Specializations:**
- Stress Management
- Anxiety
- Depression
- Self-esteem
- Emotional Regulation
- Communication Issues
- Conflict Resolution

**Therapeutic Approaches:**
- Cognitive Behavioral Therapy (CBT)
- Solution-Focused Brief Therapy (SFBT)
- Person-Centered Therapy
- Emotion-Focused Therapy

**Education:**
- Master's in Psychological Guidance and Counseling
- Bachelor's in Psychology (Hons)

**Philosophy:**
Mariam believes that everyone has the strength to grow and heal. Her approach is empathetic, client-centered, and tailored to individual needs, creating a safe space for meaningful change and emotional well-being.

---

### Therapist: Sabrine Ben Omrane — `sabrine-ben-omrane.php`
Page title: "Sabrine Ben Omrane | Kizuna Therapy" (inferred)

**Title (on profile page):** Counseling Psychologist *(note: listed as "Clinical Psychologist" on Home, About, and Book pages — see Flags section in handoff notes)*
**Languages:** English, French, Arabic
**Contact email:** sabrinebenomrane27@gmail.com

**Professional Overview:**
Sabrine Ben Omrane is a dedicated Counseling Psychologist with a strong foundation in providing psychological support and counseling to diverse clients. With extensive experience in clinical assessments, personalized interventions, and collaborative care, she specializes in helping clients overcome emotional, cognitive, and behavioral challenges.

**Specializations:**
- Anxiety
- Depression
- ADHD
- Emotional Regulation
- Personal Growth
- Trauma & Stress Management

**Therapeutic Approaches:**
- Integrative Approach
- Solution-Focused Therapy
- Art Therapy
- Mindfulness Techniques

**Education:**
- Master's in Psychological Counseling and Guidance
- Master's in Child & Adolescent Counseling Psychology
- Bachelor's in Psychology

**Philosophy:**
Sabrine's therapeutic philosophy centers on creating a safe, empathetic space where clients feel supported and empowered, helping them build the resilience and skills they need to thrive in all aspects of life.

---

## Handoff notes / flags for the project owner

These are things worth checking with the client before the copy goes into Next.js components — flagged here so they don't get baked into the rebuild by accident.

1. **Therapist title mismatch — Yara Halawa.** Her own profile page calls her a "Counseling Psychologist" (and the overview paragraph says "Counseling psychotherapist"), but the Home, About, and Book a Session pages all label her "Clinical Psychologist". One needs to win.
2. **Therapist title mismatch — Sabrine Ben Omrane.** Same pattern: profile page says "Counseling Psychologist", but Home / About / Book pages say "Clinical Psychologist".
3. **Broken booking forms on therapist pages.** The hidden `doctorName` input on the Ghania, Merve, and Yara profile pages is hardcoded `value="Eya Kallel"` — appointments booked from those pages will be filed under Eya. Only the Eya, Mariam, and Sabrine forms have the correct name. Will need fixing in the new build.
4. **"Book Your First Session Today" banner uses a localhost URL.** Every page's CTA banner has `onclick="window.location.href='http://localhost/kizuna/book-session.php'"`. This is a dev artifact that shipped to production — needs to be a relative `/book-session` link in the rebuild.
5. **Social-media icons are dead links.** All Facebook / Twitter / LinkedIn / Instagram icons in the footer and on the Contact page are `href="#"`. Either remove or wire to real accounts.
6. **Sloppy footer markup.** Footer "Quick Links" use anchor fragments (`#about`, `#services`, `#therapists`, `#contact`) that only work on the Home page — broken on every other page. The very first link is just `#` (Home).
7. **Card CTAs without destinations.** The three "Learn More" buttons on the Home About-Us card row, and the in-card CTA fragments ("Start Your Journey", "Strengthen Your Bond", "Join a Workshop", "Find Your Circle") in the Therapy Services grid, appear inside paragraph text with no actual links. They look like copywriter intent that was never wired up.
8. **Hero asset typo.** Book a Session uses `book-seesion.jpg` (double "ee"). Worth renaming in the new repo.
9. **Two support emails coexist.** Footer everywhere uses `support@kizunatherapy.com`. Contact page lists both `info@kizunatherapy.com` and `support@kizunatherapy.com`. Confirm whether `info@` is a real inbox.
10. **Copyright year is 2024.** Hardcoded in the footer; should auto-update or be bumped to current year.
11. **Founder credit only appears in one place.** Ghania Ali is labelled "(Founder)" everywhere her title appears, but there is no founder bio or "from the founder" section anywhere on the site. Worth asking if she'd like one for About.
12. **Therapist page titles likely all read "Kizuna Therapy".** Couldn't fully confirm — the head section uses what looks like a shared template — but if so, every therapist tab shows the same browser title. Each profile should get its own `<title>`.
13. **No testimonials anywhere.** The brief asked about testimonials; none exist on the current site.
14. **Copy that reads AI-generated / placeholder-ish.** A few sections lean on the same vocabulary stack ("resilience", "navigate life's challenges", "culturally sensitive", "meaningful connections") to the point it starts to feel templated — especially the three About card descriptions and the six therapist Philosophy paragraphs. Worth a copy pass.
