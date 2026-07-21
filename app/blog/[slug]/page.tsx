import { Header, Footer, CTA } from '../../components';
import { blogPosts, site } from '../../data';

const guideDetails: Record<string, { answer: string; sections: { title: string; items: string[] }[] }> = {
  'outsourced-billing-services-planning': {
    answer: 'Begin with the queue, not a broad job title. List where work arrives, who approves each action, and what the Filipino billing specialist should flag instead of deciding.',
    sections: [
      {
        title: 'Map the work as it happens now',
        items: [
          'List each inbox, portal, report, and spreadsheet used during the day.',
          'Mark the steps that repeat and include one clean example of each.',
          'Name the billing owner who handles refunds, write-offs, disputes, and policy exceptions.',
        ],
      },
      {
        title: 'Set the review plan',
        items: [
          'Choose a small sample of completed work for daily review at the start.',
          'Track blocked items separately so missing information does not disappear in the queue.',
          'Use one weekly report for aging work, errors, and decisions waiting on your team.',
        ],
      },
    ],
  },
  'outsourced-billing-services-tasks-to-outsource': {
    answer: 'The safest first tasks are repeatable, easy to check, and unlikely to change an account balance. Invoice prep, missing-document follow-up, portal checks, and account notes usually make a clearer first scope than disputes or collections decisions.',
    sections: [
      {
        title: 'Good first tasks',
        items: [
          'Prepare draft invoices or claim packets from approved records.',
          'Collect missing purchase orders, attachments, and contact details.',
          'Update account notes after an approved action and record the next step.',
        ],
      },
      {
        title: 'Keep these decisions with your team',
        items: [
          'Refunds, credits, write-offs, and changes to an account balance.',
          'Coding, pricing, collections, legal, medical, or policy exceptions.',
          'Any disputed item where the rule or evidence is unclear.',
        ],
      },
    ],
  },
  'outsourced-billing-services-provider-questions': {
    answer: 'Ask providers to explain the actual handoff. A useful answer names who screens Filipino talent, how access is limited, who reviews work, and what happens when the specialist finds an exception.',
    sections: [
      {
        title: 'Questions about the work',
        items: [
          'Which billing tasks have your Filipino specialists handled before?',
          'Who checks the first work samples, and how often does that review continue?',
          'How are blocked accounts, disputes, and missing documents reported to our owner?',
        ],
      },
      {
        title: 'Questions about access and support',
        items: [
          'Can access be limited by tool, account, client, and action type?',
          'Who handles attendance, coaching, and replacement questions?',
          'What records will we receive if we end the service or change providers?',
        ],
      },
    ],
  },
  'outsourced-billing-services-onboarding-checklist': {
    answer: 'Give the Filipino billing specialist examples, narrow access, and a named reviewer before assigning live work. The first week should prove that the handoff is clear, not test how much work one person can absorb.',
    sections: [
      {
        title: 'Before live work',
        items: [
          'Provide scrubbed examples of a clean item, a blocked item, and an escalation.',
          'Write the stop points for refunds, write-offs, disputes, coding, and sensitive data.',
          'Test each login and give only the permissions needed for the first queue.',
        ],
      },
      {
        title: 'During the first week',
        items: [
          'Review a small work sample each day and correct the process in writing.',
          'Keep a blocked list with the owner and next decision clearly named.',
          'End the week by checking queue age, errors, open questions, and access that is no longer needed.',
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return { title: post?.title || 'Billing guide', description: post?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const detail = guideDetails[post.slug] || guideDetails['outsourced-billing-services-planning'];

  return <>
    <Header />
    <main className="section">
      <article className="container" style={{ maxWidth: 880 }}>
        <p className="eyebrow">{site.brand} guide</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="card">
          <h2>The short answer</h2>
          <p>{detail.answer}</p>
          {detail.sections.map((section) => <section key={section.title}>
            <h2>{section.title}</h2>
            <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>)}
          <h2>Philippines staffing boundary</h2>
          <p>We recruit and hire Filipino talent only in the Philippines. Your company still owns billing policy, account decisions, and access approval.</p>
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
  </>;
}
