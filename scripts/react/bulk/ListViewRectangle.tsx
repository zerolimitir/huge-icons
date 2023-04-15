import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgListViewRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.617 5.577a1.156 1.156 0 0 0-.523.523c-.093.2-.093.203-.093 1.9 0 1.697 0 1.7.093 1.9.11.236.354.468.571.545.226.08 3.444.08 3.67 0 .217-.077.461-.309.571-.545.093-.2.093-.203.093-1.9 0-1.697 0-1.7-.093-1.9a1.146 1.146 0 0 0-.532-.525c-.19-.079-3.575-.078-3.757.002m7.002 8.04c-.407.244-.475.851-.132 1.171.233.218.136.212 3.513.212s3.28.006 3.513-.212c.356-.332.266-.975-.165-1.184-.171-.083-.206-.084-3.371-.084l-3.197.001-.161.096m.101 3.447a.697.697 0 0 0-.451.682.71.71 0 0 0 .383.65l.173.084h12.35l.173-.084c.431-.209.521-.852.165-1.184-.24-.224.139-.212-6.522-.21-5.386.001-6.148.008-6.271.062'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgListViewRectangle);
export default ForwardRef;
