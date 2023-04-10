import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoadPin = (
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
            d='M21 5a3.001 3.001 0 0 1-2.25 2.905V12a.75.75 0 0 1-1.5 0V7.905A3.001 3.001 0 0 1 18 2a3 3 0 0 1 3 3Zm-5.25 3.898A4.497 4.497 0 0 1 13.611 4H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702l-1.795-4.787A2.25 2.25 0 0 1 15.75 12V8.898Zm-3 7.102a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM12 10.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12.75 7a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0V7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadPin);
export default ForwardRef;
