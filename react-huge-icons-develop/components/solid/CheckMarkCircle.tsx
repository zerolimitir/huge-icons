import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCheckMarkCircle = (
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
            d='M2.75 12A9.25 9.25 0 0 1 12 2.75c1.686 0 3.265.45 4.625 1.237a.75.75 0 1 0 .75-1.298A10.704 10.704 0 0 0 12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12c0-1.322-.24-2.59-.677-3.763a.75.75 0 1 0-1.405.526A9.228 9.228 0 0 1 21.25 12a9.25 9.25 0 0 1-18.5 0Zm18.808-7.498a.75.75 0 0 0-1.115-1.004l-7.738 8.598a1.25 1.25 0 0 1-1.71.14L7.469 9.413a.75.75 0 1 0-.937 1.172l3.526 2.82a2.75 2.75 0 0 0 3.762-.307l7.738-8.597Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckMarkCircle);
export default ForwardRef;
