import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgYoutube = (
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
            d='M5.14 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h13.72a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5.14Zm10.071 8.106-4.764-2.382A1 1 0 0 0 9 9.618v4.764a1 1 0 0 0 1.447.894l4.764-2.382a1 1 0 0 0 0-1.788Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgYoutube);
export default ForwardRef;
