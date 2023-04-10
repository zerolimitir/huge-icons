import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowReturn = (
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
            d='m19 8 .45.6a.75.75 0 0 0 0-1.2L19 8Zm0 8.75a.75.75 0 0 0 0-1.5v1.5ZM15.45 4.4a.75.75 0 1 0-.9 1.2l.9-1.2Zm-.9 6a.75.75 0 1 0 .9 1.2l-.9-1.2ZM19 7.25H9v1.5h10v-1.5Zm-10 9.5h10v-1.5H9v1.5ZM19.45 7.4l-4-3-.9 1.2 4 3 .9-1.2Zm-.9 0-4 3 .9 1.2 4-3-.9-1.2ZM4.25 12A4.75 4.75 0 0 0 9 16.75v-1.5A3.25 3.25 0 0 1 5.75 12h-1.5ZM9 7.25A4.75 4.75 0 0 0 4.25 12h1.5A3.25 3.25 0 0 1 9 8.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowReturn);
export default ForwardRef;
