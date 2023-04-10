import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDiploma = (
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
            d='M22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6.968a4.5 4.5 0 1 1 8.064 0H20a2 2 0 0 0 2-2ZM5.25 7A.75.75 0 0 1 6 6.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 7ZM6 10.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H6ZM18 15a2.99 2.99 0 0 1-1 2.236V21l-2-1-2 1v-3.764A3 3 0 1 1 18 15Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDiploma);
export default ForwardRef;
