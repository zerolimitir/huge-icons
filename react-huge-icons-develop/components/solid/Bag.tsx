import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBag = (
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
            d='M12 1.625a3.75 3.75 0 0 0-3.75 3.75v1.01a4 4 0 0 0-3.688 3.494l-1 8a4 4 0 0 0 3.97 4.496h8.937a4 4 0 0 0 3.969-4.496l-1-8a4 4 0 0 0-3.688-3.494v-1.01A3.75 3.75 0 0 0 12 1.625Zm2.25 4.75v-1a2.25 2.25 0 0 0-4.5 0v1h4.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBag);
export default ForwardRef;
