import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPrevious = (
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
            d='M7.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0v-3.414c.066.05.137.098.212.142l6.03 3.518c1.334.777 3.008-.184 3.008-1.728V8.482c0-1.544-1.674-2.505-3.008-1.727l-6.03 3.517a2.007 2.007 0 0 0-.212.142V7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPrevious);
export default ForwardRef;
