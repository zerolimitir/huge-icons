import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMedalNumberOne = (
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
            d='M17 10.101V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6.101A6.979 6.979 0 0 1 12 8c1.959 0 3.73.804 5 2.101Z'
            clipRule='evenodd'
        />
        <circle cx={12} cy={15} r={7} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22.53 9.47a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Zm-2.06 9a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06Zm-19-9a.75.75 0 0 0 0 1.06l1 1a.75.75 0 0 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 0Zm2.06 9a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06Zm8.864-7.108a.75.75 0 0 1 .356.638v5.25H13a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-4.043a.75.75 0 0 1-.585-1.378l1-.5a.75.75 0 0 1 .73.033Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMedalNumberOne);
export default ForwardRef;
