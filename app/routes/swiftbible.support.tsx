import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "SwiftBible Support" },
    { name: "description", content: "Support page for SwiftBible iOS app" },
  ];
};

export default function Support() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">SwiftBible Support</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            How do I download SwiftBible?
            <p className="mt-1 ml-4">
              SwiftBible can be downloaded from the Apple App Store.
            </p>
          </li>
          <li className="mb-2">
            Can I use SwiftBible offline?
            <p className="mt-1 ml-4">
              Yes, SwiftBible can be used offline for most features. However,
              the daily devotional feature requires an internet connection.
            </p>
          </li>
          <li className="mb-2">
            How do I change the Bible version?
            <p className="mt-1 ml-4">
              Currently, only the King James Version (KJV) is supported.
            </p>
          </li>
          <li className="mb-2">
            Is SwiftBible available for Android?
            <p className="mt-1 ml-4">
              No, SwiftBible is not available for Android at this time.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you need further assistance, please don&apos;t hesitate to contact
          us:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            Email: <a href="mailto:mischke@proton.me">mischke@proton.me</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">App Information</h2>
        <p className="mb-2">Version: 1.0.0</p>
        <p className="mb-2">Last Updated: September 16, 2023</p>
        <Link
          to="https://www.freeprivacypolicy.com/live/954a0e6c-c2db-4bce-aa84-9500ce83fa5e"
          className="text-blue-600 hover:underline"
        >
          Privacy Policy
        </Link>
      </section>
    </div>
  );
}
