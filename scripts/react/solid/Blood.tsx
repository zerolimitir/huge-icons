import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBlood = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.59 2.561c-.462.117-.873.444-2.203 1.757C5.541 8.111 3.692 11.772 4.041 14.9c.273 2.45 1.647 4.659 3.682 5.92 2.537 1.572 6.017 1.572 8.554 0 2.363-1.464 3.822-4.211 3.71-6.98-.114-2.79-1.8-5.88-4.987-9.135a37.64 37.64 0 0 0-1.36-1.317c-.772-.699-1.013-.831-1.551-.852a2.432 2.432 0 0 0-.499.025m5.582 11.733c.176.074.375.31.429.509.122.455-.427 1.833-1.085 2.722-.277.374-.961 1.02-1.364 1.288-.647.431-1.522.774-2.072.813-.31.023-.47-.045-.655-.277-.238-.298-.17-.809.137-1.037.055-.041.288-.129.516-.195.811-.235 1.341-.546 1.891-1.108.591-.606.907-1.183 1.17-2.139.07-.255.252-.492.44-.574a.881.881 0 0 1 .593-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBlood);
export default ForwardRef;
