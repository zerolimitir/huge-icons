import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClouds = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.72 3.041c-1.318.184-2.388.709-3.301 1.619-.469.467-.762.86-1.002 1.343-.081.163-.152.302-.157.309a3.704 3.704 0 0 1-.425-.074c-.584-.121-1.409-.095-1.935.06-1.101.325-1.987 1.047-2.48 2.022C6.178 8.797 6 9.502 6 9.979v.25l.306-.073c1.524-.363 3.139-.061 4.494.838.689.458 1.508 1.402 1.838 2.119.094.204.104.212.22.187 1.31-.284 2.389-.124 3.315.491l.327.217.325-.024a5.692 5.692 0 0 0 2.742-.951c.45-.299 1.166-1.003 1.462-1.438a5.896 5.896 0 0 0 .878-2.075c.101-.476.101-1.564 0-2.04-.228-1.069-.692-1.961-1.424-2.731a5.333 5.333 0 0 0-1.481-1.103 5.19 5.19 0 0 0-1.479-.529c-.444-.089-1.419-.13-1.803-.076'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClouds);
export default ForwardRef;
