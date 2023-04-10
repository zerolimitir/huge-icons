import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterTwoLineBig = (
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
            d='M14 5h2a3 3 0 0 1 2.905 2.25H21a.75.75 0 0 1 0 1.5h-2.095A3.001 3.001 0 0 1 16 11h-2a3 3 0 1 1 0-6ZM3 7.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H3Zm13 8a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5ZM10 13H8a3.001 3.001 0 0 0-2.905 2.25H3a.75.75 0 0 0 0 1.5h2.095A3.001 3.001 0 0 0 8 19h2a3 3 0 1 0 0-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterTwoLineBig);
export default ForwardRef;
