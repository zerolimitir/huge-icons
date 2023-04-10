import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUndoCircle = (
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
            d='M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18ZM7.66 7.5a.75.75 0 0 1 1.5 0v.602a4.75 4.75 0 1 1-1.885 5.085.75.75 0 1 1 1.451-.374A3.252 3.252 0 0 0 15.124 12a3.25 3.25 0 0 0-5.398-2.439l.833.212a.75.75 0 0 1-.37 1.454l-1.965-.5A.75.75 0 0 1 7.66 10V7.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUndoCircle);
export default ForwardRef;
