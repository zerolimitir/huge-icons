import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHitTarget = (
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
            d='M13.238 11.823 22.53 2.53a.75.75 0 0 0-1.06-1.06l-2.95 2.948A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.953 9.953 0 0 0-1.565-5.374l-2.383 2.382a6.75 6.75 0 1 1-1.84-2.282l-1.068 1.07a5.25 5.25 0 1 0 1.77 2.352L14.73 12.33a2.75 2.75 0 1 1-1.39-2.732l-1.163 1.164a1.25 1.25 0 1 0 1.06 1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHitTarget);
export default ForwardRef;
