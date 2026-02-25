import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Myno Notes",
  description: "Terms of service for Myno Notes application.",
};

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-24 px-6 min-h-screen bg-white dark:bg-background-dark">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-primary hover:text-secondary mb-8 transition-colors no-underline font-medium">
          <span className="material-icons-round text-sm mr-2">arrow_back</span>
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: February 2026</p>

        <section className="space-y-6 text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Myno Notes, you accept and agree to be bound by the terms and provision of this agreement. 
            In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Description of Service</h2>
          <p>
            Myno Notes provides users with access to a rich collection of resources, including various productivity tools, note-taking software, and content management features. You also understand and agree that the service may include advertisements and that these advertisements are necessary for Myno Notes to provide the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Your Registration Obligations</h2>
          <p>
            In consideration of your use of the Service, you represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of your applicable jurisdiction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. User Account, Password, and Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of the password and account and are fully responsible for all activities that occur under your password or account. You agree to immediately notify Myno Notes of any unauthorized use of your password or account or any other breach of security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Modifications to Service</h2>
          <p>
            Myno Notes reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.
          </p>
        </section>
      </div>
    </main>
  );
}
