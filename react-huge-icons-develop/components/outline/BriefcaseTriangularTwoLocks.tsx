import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseTriangularTwoLocks = (
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
            d='M7.25 6a.75.75 0 0 0 1.5 0h-1.5Zm8 0a.75.75 0 0 0 1.5 0h-1.5Zm-6.5 4.677a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM6 6.75h12v-1.5H6v1.5ZM21.25 10v8h1.5v-8h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18v-8h-1.5v8h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 6.75A3.25 3.25 0 0 1 21.25 10h1.5A4.75 4.75 0 0 0 18 5.25v1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5ZM8.75 6V5h-1.5v1h1.5ZM11 2.75h2v-1.5h-2v1.5ZM15.25 5v1h1.5V5h-1.5ZM13 2.75A2.25 2.25 0 0 1 15.25 5h1.5A3.75 3.75 0 0 0 13 1.25v1.5ZM8.75 5A2.25 2.25 0 0 1 11 2.75v-1.5A3.75 3.75 0 0 0 7.25 5h1.5ZM2 10l-.452.598.002.002.004.003a1.913 1.913 0 0 1 .05.036 8.363 8.363 0 0 0 .629.392c.434.245 1.078.567 1.938.892 1.721.651 4.304 1.314 7.809 1.408l.04-1.5c-3.332-.09-5.75-.717-7.319-1.31a12.632 12.632 0 0 1-1.731-.797 6.897 6.897 0 0 1-.517-.322l-.002-.001h.001c0 .001.001.001-.452.599Zm9.98 3.33c3.526.095 6.129-.57 7.866-1.276a12.254 12.254 0 0 0 1.955-.992 7.666 7.666 0 0 0 .635-.45 2.653 2.653 0 0 0 .05-.041l.005-.004.001-.001h.001L22 10a70.028 70.028 0 0 1-.492-.566h.001-.002a6.209 6.209 0 0 1-.51.361 10.64 10.64 0 0 1-1.715.87c-1.553.63-3.95 1.255-7.262 1.166l-.04 1.5Zm-4.73-2.653v3h1.5v-3h-1.5Zm8 0v3h1.5v-3h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTriangularTwoLocks);
export default ForwardRef;
