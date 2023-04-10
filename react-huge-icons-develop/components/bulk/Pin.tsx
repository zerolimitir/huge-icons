import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPin = (
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
            d='M9.53 14.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M10.909 5.042c0-1.816 2.195-2.725 3.479-1.441l6.011 6.011c1.284 1.284.375 3.479-1.441 3.479a2.04 2.04 0 0 0-1.441.597l-1.688 1.688c-.382.382-.597.9-.597 1.441 0 1.816-2.195 2.725-3.479 1.441l-6.011-6.011c-1.284-1.284-.375-3.479 1.44-3.479a2.04 2.04 0 0 0 1.442-.597l1.688-1.688c.382-.382.597-.9.597-1.441Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPin);
export default ForwardRef;
