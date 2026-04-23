'use client';

import { useId, useState } from 'react';

type Errors = Partial<Record<'name' | 'message', string>>;

export default function FeedbackForm() {
  const idBase = useId();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = 'Please enter your name.';
    if (!message.trim()) e.message = 'Please enter your feedback.';
    else if (message.trim().length < 5)
      e.message = 'Feedback must be at least 5 characters.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    // TODO: send `{ name, message }` to a real endpoint.
    setSubmitted(true);
    setName('');
    setMessage('');
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-l-4 border-green-700 bg-green-50 dark:bg-gray-900 rounded-lg p-5"
      >
        <p className="font-semibold text-gray-900 dark:text-white">
          ✓ Thank you for your feedback.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
          We appreciate you taking the time to help us improve.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-3 text-sm font-semibold text-green-700 dark:text-green-400 hover:underline focus:outline-none focus-visible:underline"
        >
          Send another response
        </button>
      </div>
    );
  }

  const fieldClass = (hasError: boolean) =>
    `w-full px-3 py-2 rounded-md border bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 ${
      hasError
        ? 'border-red-500 focus-visible:ring-red-500'
        : 'border-gray-300 dark:border-gray-700'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label
          htmlFor={`${idBase}-name`}
          className="block text-sm font-semibold text-gray-900 dark:text-white mb-1"
        >
          Name <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          id={`${idBase}-name`}
          type="text"
          autoComplete="name"
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

      <div>
        <label
          htmlFor={`${idBase}-msg`}
          className="block text-sm font-semibold text-gray-900 dark:text-white mb-1"
        >
          Your feedback <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <textarea
          id={`${idBase}-msg`}
          rows={4}
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

      <button
        type="submit"
        className="inline-flex px-5 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
      >
        Submit feedback
      </button>
    </form>
  );
}
