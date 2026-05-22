'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface ContactFormProps {
  endpoint: string
}

export default function ContactForm({ endpoint }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const isSubmitting = status === 'submitting'
  const isConfigured = endpoint.trim().length > 0

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isConfigured) {
      setStatus('error')
      setStatusMessage('The contact form is still being configured. Please try again later.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('submitting')
    setStatusMessage('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        form.reset()
        setStatus('success')
        setStatusMessage('Thanks. Your inquiry has been sent and we will be in touch shortly.')
        return
      }

      let providerMessage = ''

      try {
        const data = (await response.json()) as { errors?: Array<{ message?: string }> }
        providerMessage = data.errors
          ?.map((error) => error.message)
          .filter(Boolean)
          .join(' ') || ''
      } catch {
        providerMessage = ''
      }

      setStatus('error')
      setStatusMessage(providerMessage || 'Sorry, the form could not be sent. Please try again.')
    } catch {
      setStatus('error')
      setStatusMessage('Sorry, the form could not be sent. Please check your connection and try again.')
    }
  }

  return (
    <form action={endpoint} method="POST" onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="_subject" value="New Praegrandis website inquiry" />
      <input type="hidden" name="source" value="praegrandis.com.au" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
            placeholder="(02) 1234 5678"
          />
        </div>

        <div>
          <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">
            Project Type
          </label>
          <select
            id="project-type"
            name="project_type"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
          >
            <option value="">Select project type</option>
            <option value="residential-construction">Residential Construction</option>
            <option value="commercial-project">Commercial Project</option>
            <option value="renovation-extension">Renovation & Extension</option>
            <option value="consultation">General Consultation</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
          placeholder="Tell us about your project, timeline, budget range, and any specific requirements..."
        />
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          value="yes"
          className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          I consent to Praegrandis Construction contacting me about my project inquiry.
          We respect your privacy and will never share your information.
        </label>
      </div>

      {statusMessage && (
        <p
          role={status === 'error' ? 'alert' : 'status'}
          className={`text-sm font-medium ${status === 'error' ? 'text-red-700' : 'text-green-700'}`}
        >
          {statusMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !isConfigured}
        className="w-full px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        style={{ backgroundColor: '#2E7D32' }}
      >
        {isSubmitting ? 'Sending...' : 'Send My Project Inquiry'}
      </button>
    </form>
  )
}
