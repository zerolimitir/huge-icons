import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgListViewCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.889 5.578c-.647.157-1.323.702-1.621 1.307a2.382 2.382 0 0 0-.255 1.255c.04.657.26 1.137.744 1.624a2.38 2.38 0 0 0 1.743.728c.416 0 .681-.063 1.089-.257A2.52 2.52 0 0 0 6.87 8.781c.095-.277.11-.384.11-.781s-.015-.504-.11-.781a2.52 2.52 0 0 0-1.281-1.454 2.993 2.993 0 0 0-.541-.201c-.279-.058-.894-.05-1.159.014m5.73 8.039c-.407.244-.475.851-.132 1.171.233.218.136.212 3.513.212s3.28.006 3.513-.212c.356-.332.266-.975-.165-1.184-.171-.083-.206-.084-3.371-.084l-3.197.001-.161.096m.101 3.447a.697.697 0 0 0-.451.682.71.71 0 0 0 .383.65l.173.084h12.35l.173-.084c.431-.209.521-.852.165-1.184-.24-.224.139-.212-6.522-.21-5.386.001-6.148.008-6.271.062'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgListViewCircle);
export default ForwardRef;
