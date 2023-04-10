import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTeacherThin = (
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
            d='M8 8.779V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1.777a2 2 0 0 1-.913-.22l-8.223-4.222A2 2 0 0 1 8 8.778Zm4-2.529a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM14.25 11a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM10 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4.312.318a.75.75 0 0 1 .37.995c-.605 1.32-2.75 3.71-6.682 3.71-3.34 0-4.981 1.681-5.343 2.338a.75.75 0 0 1-1.314-.722C1.98 19.478 4.14 17.523 8 17.523c3.268 0 4.923-1.974 5.318-2.835a.75.75 0 0 1 .994-.37Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTeacherThin);
export default ForwardRef;
