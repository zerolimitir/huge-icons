import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusic = (
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
            d='M18.13 2.166a2.75 2.75 0 0 1 3.62 2.609V17a3.75 3.75 0 1 1-1.5-3V9.775a1.25 1.25 0 0 0-1.645-1.186l-6.633 2.21a3.25 3.25 0 0 0-2.222 3.084V19a3.75 3.75 0 1 1-1.5-3V8.883a4.75 4.75 0 0 1 3.248-4.506l6.632-2.211Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusic);
export default ForwardRef;
