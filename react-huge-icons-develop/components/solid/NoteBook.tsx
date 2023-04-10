import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNoteBook = (
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
            d='M4.07 5.25A4.02 4.02 0 0 0 4 6v.75H2a.75.75 0 0 1 0-1.5h2.07Zm0 13.5A4.001 4.001 0 0 0 8 22h10a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H8a4.001 4.001 0 0 0-3.93 3.25H6a.75.75 0 0 1 0 1.5H4v4.5H2a.75.75 0 0 0 0 1.5h2v4.5H2a.75.75 0 0 0 0 1.5h2.07Zm0 0A4.021 4.021 0 0 1 4 18v-.75h2a.75.75 0 0 1 0 1.5H4.07Zm-.07-6v-1.5h2a.75.75 0 0 1 0 1.5H4ZM18.75 6a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75ZM14 10.75a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNoteBook);
export default ForwardRef;
