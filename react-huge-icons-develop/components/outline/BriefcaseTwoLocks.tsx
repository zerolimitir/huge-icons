import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseTwoLocks = (
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
            d='M7.25 6a.75.75 0 0 0 1.5 0h-1.5Zm8 0a.75.75 0 0 0 1.5 0h-1.5ZM2 12.25a.75.75 0 0 0 0 1.5v-1.5Zm20 1.5a.75.75 0 0 0 0-1.5v1.5ZM8.75 11.5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm9.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM6 6.75h12v-1.5H6v1.5ZM21.25 10v8h1.5v-8h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18v-8h-1.5v8h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 6.75A3.25 3.25 0 0 1 21.25 10h1.5A4.75 4.75 0 0 0 18 5.25v1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5ZM8.75 6V5h-1.5v1h1.5ZM11 2.75h2v-1.5h-2v1.5ZM15.25 5v1h1.5V5h-1.5ZM13 2.75A2.25 2.25 0 0 1 15.25 5h1.5A3.75 3.75 0 0 0 13 1.25v1.5ZM8.75 5A2.25 2.25 0 0 1 11 2.75v-1.5A3.75 3.75 0 0 0 7.25 5h1.5ZM2 13.75h20v-1.5H2v1.5Zm5.25-2.25v3h1.5v-3h-1.5Zm8 0v3h1.5v-3h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTwoLocks);
export default ForwardRef;
