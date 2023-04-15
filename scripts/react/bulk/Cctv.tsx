import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCctv = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.117 6.054c-.412.112-.798.446-.99.859-.09.192-.106.282-.106.588-.001.327.011.386.129.624.156.317.442.598.761.748l.229.107h17.72l.229-.107a1.67 1.67 0 0 0 .761-.748c.118-.238.13-.298.13-.625s-.012-.387-.13-.625a1.67 1.67 0 0 0-.761-.748l-.229-.107-8.78-.008c-6.873-.005-8.82.004-8.963.042m8.123 6.008c-1.642.351-2.839 1.552-3.176 3.186-.045.219-.064.53-.064 1.066v.757l.377.166a9.024 9.024 0 0 0 7.25-.002l.381-.167-.018-.884c-.015-.818-.025-.911-.125-1.244-.456-1.517-1.586-2.561-3.113-2.876-.379-.079-1.15-.079-1.512-.002m1.196 2.056a.988.988 0 0 1 .259 1.577.988.988 0 0 1-1.39 0 .987.987 0 0 1 0-1.389.986.986 0 0 1 1.131-.188'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCctv);
export default ForwardRef;
