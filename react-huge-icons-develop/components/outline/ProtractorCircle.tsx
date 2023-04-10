import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProtractorCircle = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M12 21v1m7.071-17.071-.707.707M5.636 18.364l-.707.707M22 12h-1m-1.929 7.071-.707-.707'
        />
        <path
            fill='currentColor'
            d='M17.659 10v.75a.75.75 0 0 0 .707-1l-.707.25ZM6.34 10l-.707-.25a.75.75 0 0 0 .707 1V10Zm0 4v-.75a.75.75 0 0 0-.707 1L6.34 14Zm11.318 0 .707.25a.75.75 0 0 0-.707-1V14ZM11.25 3a.75.75 0 0 0 1.5 0h-1.5ZM3 12.75a.75.75 0 0 0 0-1.5v1.5Zm2.106-6.584a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM5.459 4.4a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm0 4c2.285 0 4.23 1.46 4.951 3.5l1.415-.5A6.752 6.752 0 0 0 12 5.25v1.5Zm-5.659 4H17.66v-1.5H6.34v1.5Zm.708-.5A5.253 5.253 0 0 1 12 6.75v-1.5c-2.94 0-5.44 1.88-6.366 4.5l1.415.5Zm4.951 7a5.252 5.252 0 0 1-4.951-3.5l-1.415.5A6.752 6.752 0 0 0 12 18.75v-1.5Zm5.659-4H6.34v1.5h11.32v-1.5Zm-.707.5A5.253 5.253 0 0 1 12 17.25v1.5c2.94 0 5.44-1.88 6.366-4.5l-1.415-.5ZM11.25 2v1h1.5V2h-1.5ZM3 11.25H2v1.5h1v-1.5Zm3.166-6.144-.707-.707-1.06 1.06.707.707 1.06-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProtractorCircle);
export default ForwardRef;
