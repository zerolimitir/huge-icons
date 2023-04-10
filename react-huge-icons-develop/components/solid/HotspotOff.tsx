import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHotspotOff = (
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
            fill='currentColor'
            fillRule='evenodd'
            d='M2.53 1.47a.75.75 0 0 0-1.06 1.06l3.413 3.413A10.725 10.725 0 0 0 1.25 14c0 2.968 1.204 5.657 3.149 7.601a.75.75 0 1 0 1.06-1.06A9.219 9.219 0 0 1 2.75 14a9.227 9.227 0 0 1 3.196-6.994L7.72 8.78A6.737 6.737 0 0 0 5.25 14a6.73 6.73 0 0 0 1.977 4.773.75.75 0 1 0 1.06-1.06A5.231 5.231 0 0 1 6.75 14a5.24 5.24 0 0 1 2.037-4.152l2.348 2.348a2 2 0 1 0 2.669 2.669l7.666 7.665a.75.75 0 1 0 1.06-1.06L9.418 8.357a.747.747 0 0 0-.023-.023L6.538 5.477a.744.744 0 0 0-.017-.017L2.53 1.47ZM12 4.75a9.231 9.231 0 0 0-3.15.55.75.75 0 0 1-.51-1.41A10.732 10.732 0 0 1 12 3.25c5.937 0 10.75 4.813 10.75 10.75 0 1.284-.226 2.517-.64 3.66a.75.75 0 1 1-1.41-.51c.356-.982.55-2.043.55-3.15A9.25 9.25 0 0 0 12 4.75ZM11.25 8a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 18.75 14a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHotspotOff);
export default ForwardRef;
