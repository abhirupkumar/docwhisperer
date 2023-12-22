"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname()
  if (pathname.includes("dashboard") == true) return <></>;

  return (
    <footer className="z-10 border-t py-8 backdrop-blur-lg">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 pt-10">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-4 xl:col-span-2">
            <Link href="/">
              <span className="font-semibold">DocWhisperer</span>
            </Link>
            <p className="max-w-xs text-sm text-gray-100">Empowering developers with privacy-first Link/B testing to create high-converting UIs.</p>
            <div className="flex items-center">
              <Link href="http://linkedin.com/in/abhirup2003" target="_blank" rel="noreferrer" className="rounded-md transition-colors hover:bg-gray-500 active:bg-gray-400 -ml-[5px]">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-10 h-10" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" style={{
                  fill: "#FFFFFF"
                }}><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{
                  mixBlendMode: "normal"
                }}><g transform="scale(4,4)"><path d="M48,8h-32c-4.418,0 -8,3.582 -8,8v32c0,4.418 3.582,8 8,8h32c4.418,0 8,-3.582 8,-8v-32c0,-4.418 -3.582,-8 -8,-8zM24,47h-5v-20h5zM24.029,23.009c-0.647,0.66 -1.491,0.991 -2.529,0.991c-1.026,0 -1.865,-0.341 -2.519,-1.023c-0.654,-0.682 -0.981,-1.519 -0.981,-2.509c0,-1.02 0.327,-1.852 0.981,-2.498c0.654,-0.647 1.493,-0.97 2.519,-0.97c1.038,0 1.882,0.323 2.529,0.969c0.647,0.646 0.971,1.479 0.971,2.499c0,1.034 -0.324,1.881 -0.971,2.541zM47,47h-5v-11.113c0,-3.099 -1.786,-4.887 -4,-4.887c-1.067,0 -2.274,0.648 -2.965,1.469c-0.691,0.821 -1.035,1.862 -1.035,3.125v11.406h-5v-20h5v3.164h0.078c1.472,-2.435 3.613,-3.644 6.426,-3.652c3.996,-0.012 6.496,2.988 6.496,8.242z"></path></g></g>
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="font-bold text-gray-600">Product</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link className="text-sm text-gray-300 hover:text-gray-600" href="/dashboard">Dashboard</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-bold text-gray-600">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link className="text-sm text-gray-300 hover:text-gray-600" href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link className="text-sm text-gray-300 hover:text-gray-600" href="/refund">Cancellation & Refund Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-bold text-gray-600">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link className="text-sm text-gray-300 hover:text-gray-600" href="/privacy">Privacy Commitment</Link>
                  </li>
                  <li>
                    <Link className="text-sm text-gray-300 hover:text-gray-600" href="/terms">Terms & Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-500">© 2023 docwhisperer.me</p>
        </div>
      </div>
    </footer>
  )

}

export default Footer;