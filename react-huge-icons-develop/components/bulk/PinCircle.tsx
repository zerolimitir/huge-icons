import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPinCircle = (
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
            d='M9.75 16.095C5.868 16.427 3 17.602 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.398-2.868-2.573-6.75-2.905V18a2.25 2.25 0 0 1-4.5 0v-1.905Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.75 7.905A3.001 3.001 0 0 0 12 2a3 3 0 0 0-.75 5.905V18a.75.75 0 0 0 1.5 0V7.905Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinCircle);
export default ForwardRef;
