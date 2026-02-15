import Link from 'next/link';

export const metadata = {
  title: "Resume | Rod Raemon Alvero",
  description: "Professional resume and background.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/" className="text-sm font-medium hover:opacity-80">← Back to Home</Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">Rod Raemon Alvero - Resume</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Passionate and driven software engineer with a strong background in web development and cloud technologies.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Results-oriented software engineer with 5+ years of experience in designing, developing, and deploying scalable web applications. Proficient in JavaScript, TypeScript, React, Node.js, and various cloud platforms. Proven ability to lead projects, mentor junior developers, and deliver high-quality solutions.
          </p>

          <hr className="my-6 border-slate-200 dark:border-slate-800" />

          <h3 className="font-semibold">Experience</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-200">
            <li>
              **Senior Software Engineer** — Tech Solutions Inc. (2023–Present)
              <ul className="list-circle pl-5 mt-1">
                <li>Led a team of 3 engineers in developing a new customer relationship management (CRM) platform, resulting in a 20% increase in sales efficiency.</li>
                <li>Designed and implemented RESTful APIs using Node.js and Express.js, handling over 1 million requests daily.</li>
                <li>Mentored junior developers, improving team code quality and development practices.</li>
              </ul>
            </li>
            <li>
              **Software Engineer** — Innovate Corp. (2020–2023)
              <ul className="list-circle pl-5 mt-1">
                <li>Developed and maintained features for a large-scale e-commerce platform using React and Redux.</li>
                <li>Optimized application performance, reducing page load times by 15%.</li>
                <li>Collaborated with product managers and UX/UI designers to translate requirements into technical specifications.</li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-6 font-semibold">Education</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-200">
            <li>**Master of Science in Computer Science** — University of Example (2020)</li>
            <li>**Bachelor of Science in Software Engineering** — State University (2018)</li>
          </ul>

          <h3 className="mt-6 font-semibold">Skills</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
            **Languages**: JavaScript, TypeScript, Python, HTML, CSS, SQL<br/>
            **Frameworks/Libraries**: React, Next.js, Node.js, Express.js, Redux, Tailwind CSS, Jest, React Testing Library<br/>
            **Cloud Platforms**: AWS, Google Cloud Platform<br/>
            **Tools**: Git, Docker, Kubernetes, Jenkins, Figma<br/>
            **Methodologies**: Agile, Scrum, TDD, BDD
          </p>
        </div>
      </section>
    </main>
  );
}
