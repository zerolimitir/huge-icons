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
            d='M17.75 6a1.249 1.249 0 0 1-1.588-1.924A1.998 1.998 0 0 0 15.614 4H8.386a2 2 0 0 0-1.873 1.298l-4.5 12A2 2 0 0 0 3.886 20h16.228a2 2 0 0 0 1.873-2.702L17.75 6Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 15.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0-4.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0-4.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75ZM20 5a3.001 3.001 0 0 1-2.25 2.905V12a.75.75 0 0 1-1.5 0V7.905A3.001 3.001 0 0 1 17 2a3 3 0 0 1 3 3Zm-3 1.25a1.249 1.249 0 1 0 0-2.497 1.249 1.249 0 0 0 0 2.497Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadPin);
export default ForwardRef;
