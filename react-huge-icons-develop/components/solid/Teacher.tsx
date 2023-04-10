import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTeacher = (
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
            d='M7 7.249V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5.092a2 2 0 0 1-1.506-.683L7.495 8.566A2 2 0 0 1 7 7.249Zm4-.499a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Zm2.25 4.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM9 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-7 5a2 2 0 0 1 2-2h.172a2 2 0 0 1 1.414.586 2 2 0 0 0 2.828 0A2 2 0 0 1 9.828 16H10a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTeacher);
export default ForwardRef;
