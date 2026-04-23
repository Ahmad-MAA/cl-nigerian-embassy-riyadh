'use client';

import { useId, useState } from 'react';

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success' }
  | { kind: 'error'; message: string };

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.';

  if (!values.message.trim()) errors.message = 'Please enter a message.';
  else if (values.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function ContactForm() {
  const idBase = useId();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = { name, email, message };
    const v = validate(values);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setStatus({ kind: 'submitting' });
    try {
      // TODO: replace with a real API call or Next.js server action.
      // Simulated network round-trip for now.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus({ kind: 'success' });
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch {
      setStatus({
        kind: 'error',
        message: 'Sorry, your message could not be sent. Please try again.',
      });
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full px-3 py-2 rounded-md border bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 ${
      hasError
        ? 'border-red-500 focus-visible:ring-red-500'
        : 'border-gray-300 dark:border-gray-700'
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-describedby={status.kind === 'error' ? `${idBase}-status` : undefined}
    >
      {/* Name */}
      <div>
        <label
          htmlFor={`${idBase}-name`}
          className="block text-sm font-semibold text-gray-900 dark:text-white mb-1"
        >
          Name <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          id={`${idBase}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${idBase}-name-err` : undefined}
          className={fieldClass(Boolean(errors.name))}
        />
        {errors.name && (
          <p id={`${idBase}-name-err`} className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor={`${idBase}-email`}
          className="block text-sm font-semibold text-gray-900 dark:text-white mb-1"
        >
          Email <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          id={`${idBase}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${idBase}-email-err` : undefined}
          className={fieldClass(Boolean(errors.email))}
        />
        {errors.email && (
          <p id={`${idBase}-email-err`} className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor={`${idBase}-msg`}
          className="block text-sm font-semibold text-gray-900 dark:text-white mb-1"
        >
          Message <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <textarea
          id={`${idBase}-msg`}
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${idBase}-msg-err` : undefined}
          className={fieldClass(Boolean(errors.message))}
        />
        {errors.message && (
          <p id={`${idBase}-msg-err`} className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status.kind === 'submitting'}
        className="inline-flex items-center justify-center px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
      >
        {status.kind === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {/* Live status region for screen readers + visible feedback */}
      <div id={`${idBase}-status`} aria-live="polite" className="min-h-[1.25rem]">
        {status.kind === 'success' && (
          <p className="text-sm font-semibold text-green-700 dark:text-green-400">
            ✓ Thank you — your message has been sent. We will get back to you shortly.
          </p>
        )}
        {status.kind === 'error' && (
          <p className="text-sm font-semibold text-red-600 dark:text-red-400">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
