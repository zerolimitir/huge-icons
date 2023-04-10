import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBoxArrowUp = (
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
            d='M17 2h1a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h11ZM8 7.586V3.5h8v4.086c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0L9.707 8.293C9.077 8.923 8 8.477 8 7.586Zm11.705 10.6-.72-.724v3.783a.752.752 0 0 1-.75.755.752.752 0 0 1-.75-.755v-3.783l-.719.724a.747.747 0 0 1-1.06 0 .758.758 0 0 1 0-1.067l1.292-1.301a1.742 1.742 0 0 1 2.475 0l1.293 1.3a.758.758 0 0 1 0 1.068.747.747 0 0 1-1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxArrowUp);
export default ForwardRef;
