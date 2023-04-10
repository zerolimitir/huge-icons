import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRedoRectangleRight = (
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
            d='M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm9.215 4.5a.75.75 0 0 0-1.5 0v.602a4.75 4.75 0 1 0 1.885 5.085.75.75 0 1 0-1.452-.374A3.252 3.252 0 0 1 8.75 12a3.25 3.25 0 0 1 5.398-2.439l-.833.212a.75.75 0 1 0 .37 1.454l1.965-.5a.75.75 0 0 0 .565-.727V7.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRedoRectangleRight);
export default ForwardRef;
